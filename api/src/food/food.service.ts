import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import prisma from '../../lib/prisma';

@Injectable()
export class FoodService {
  constructor() {}
  async create(createFoodDto: CreateFoodDto) {
    const { name, description } = createFoodDto;
    const food = await prisma.food.create({
      data: {
        name,
        description
      }
    });
    return { message: 'Food created successfully' };
  }

  async findAll() {
    const foods = await prisma.food.findMany({
      select: {
        foodId: true,
        imageUrl: true,
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
      const food = await prisma.food.findUnique({
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
      const updateFood = await prisma.food.update({
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
      const listOfRecipe = await prisma.recipeFoodList.findMany({
        where: { foodId: id }
      });
      if (listOfRecipe.length > 0) {
        return {
          statusCode: 400,
          message: 'Thức ăn đã tồn tại trong công thức, không thể xóa'
        };
      }
      const listOfStorage = await prisma.storageFood.findMany({
        where: { foodId: id }
      });
      if (listOfStorage.length > 0) {
        return {
          statusCode: 400,
          message: 'Thức ăn đã tồn tại trong kho lưu trữ, không thể xóa'
        };
      }
      const listOfToBuyLlist = await prisma.toBuyListDetail.findMany({
        where: { foodId: id }
      });
      if (listOfToBuyLlist.length > 0) {
        return {
          statusCode: 400,
          message:
            'Thức ăn đã tồn tại trong danh sách đồ cần mua, không thể xóa'
        };
      }
      await prisma.foodCategory.deleteMany({
        where: { foodId: id }
      });
      const updateFood = await prisma.food.delete({
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
