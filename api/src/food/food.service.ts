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
    const foods = await this.prisma.food.findMany();
    return foods;
  }

  async findOne(id: number) {
    const foodId = id;
    try {
      const food = await this.prisma.food.findUnique({
        where: {
          foodId: foodId
        }
      });
      if (food) {
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
      const updateFood = await this.prisma.food.delete({
        where: { foodId: id }
      });
      if (updateFood) return { message: 'Deleted successfully' };
      else {
        throw new Error('Not found');
      }
    } catch (err) {
      throw err;
    }
  }
}
