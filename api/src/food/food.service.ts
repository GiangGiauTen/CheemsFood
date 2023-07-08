import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}
  async create(createFoodDto: CreateFoodDto) {
    const { name, description } = createFoodDto;
    const food = await this.prisma.food.create({
      data: {
        name,
        description
      }
    });
    return { message: 'Food created successfully' };
  }

  async findAll() {
    const foods = await this.prisma.food.findMany({
      select: {
        foodId: true,
        name: true,
        categories: {
          select: {
            category: true
          }
        }
      }
    });
    foods.map((e) => {
      e['category'] = e.categories[0];
      e['category'] = e['category']['category'];
      delete e.categories;
      return e;
    });
    return foods;
  }

  async findOne(id: number) {
    const foodId = id;
    try {
      const food = await this.prisma.food.findUnique({
        where: {
          foodId: foodId
        },
        select: {
          foodId: true,
          name: true,
          description: true,
          categories: {
            select: {
              category: true
            }
          }
        }
      });
      if (food) {
        food['category'] = food.categories[0].category;
        delete food.categories;
        return food;
      } else {
        return { message: 'Food not found' };
      }
    } catch (error) {
      return { message: 'Internal server error' };
    }
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const { name, description } = updateFoodDto;
    try {
      const updateFood = await this.prisma.food.update({
        where: { foodId: id },
        data: {
          name,
          description
        }
      });
      if (updateFood) return { message: 'Updated successfully' };
      else {
        throw new Error('Not found');
      }
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number) {
    try {
      const listOfRecipe = await this.prisma.recipeFoodList.findMany({
        where: { foodId: id }
      });
      if (listOfRecipe.length > 0) {
        return {
          statusCode: 400,
          message: 'Thức ăn đã tồn tại trong công thức, không thể xóa'
        };
      }
      const listOfStorage = await this.prisma.storageFood.findMany({
        where: { foodId: id }
      });
      if (listOfStorage.length > 0) {
        return {
          statusCode: 400,
          message: 'Thức ăn đã tồn tại trong kho lưu trữ, không thể xóa'
        };
      }
      const listOfToBuyLlist = await this.prisma.toBuyListDetail.findMany({
        where: { foodId: id }
      });
      if (listOfToBuyLlist.length > 0) {
        return {
          statusCode: 400,
          message:
            'Thức ăn đã tồn tại trong danh sách đồ cần mua, không thể xóa'
        };
      }
      await this.prisma.foodCategory.deleteMany({
        where: { foodId: id }
      });
      const updateFood = await this.prisma.food.delete({
        where: { foodId: id }
      });
      if (updateFood) return { message: 'Xóa thành công' };
      else {
        return {
          statusCode: 400,
          message: 'Không tìm thấy đồ ăn cần xóa'
        };
      }
    } catch (err) {
      if (err.code == 'P2025') {
        return {
          statusCode: 400,
          message: 'Không tìm thấy đồ ăn cần xóa'
        };
      }
    }
  }
}
