import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddFoodDto } from './dto/add-food-dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name, type } = createCategoryDto;
    const newCategory = await this.prisma.category.create({
      data: {
        categoryName: name,
        categoryType: type
      }
    });
    return newCategory;
  }

  async findAll() {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { name, type } = updateCategoryDto;
    try {
      await this.prisma.category.update({
        where: {
          categoryId: id
        },
        data: {
          categoryName: name,
          categoryType: type
        }
      });
    } catch (err) {
      return {
        errorCode: 400,
        message: 'Có lỗi xảy ra, vui lòng thử lại sau'
      };
    }
    return `Updated successfully`;
  }

  async addFoodCategory(id: number, addFoodDto: AddFoodDto) {
    const { foodId } = addFoodDto;
    try {
      await this.prisma.foodCategory.create({
        data: {
          foodId: foodId,
          categoryId: id
        }
      });
      return {
        message: 'Thêm category thành công'
      };
    } catch (err) {
      if (err.code == 'P2002') {
        return {
          errorCode: 400,
          message: 'Thức ăn này đã được thêm category này trước đó'
        };
      }
      return {
        errorCode: 400,
        message: 'Có lỗi xảy ra, vui lòng thử lại sau'
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
