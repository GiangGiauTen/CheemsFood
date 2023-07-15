import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
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
        message: 'Update Failed'
      };
    }
    return `Updated successfully`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
