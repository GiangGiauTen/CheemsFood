import { Injectable } from '@nestjs/common';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StorageService {
  constructor(private prisma: PrismaService) {}
  async getUserStorage(userId: number) {
    const storage = await this.prisma.storage.findUnique({
      where: {
        userId: userId
      },
      select: {
        storageId: true,
        foods: {
          select: {
            outdate: true,
            storageDate: true,
            quantity: true,
            food: true
          }
        }
      }
    });
    return storage;
  }

  async update(userId: number, updateStorageDto: UpdateStorageDto) {
    const { foods } = updateStorageDto;
    try {
      const storage = await this.prisma.storage.findUnique({
        where: { userId: userId }
      });
      foods.forEach(async (food) => {
        const foodInStorage = await this.prisma.storageFood.findFirst({
          where: {
            foodId: food.foodId,
            storageId: storage.storageId
          }
        });
        if (!foodInStorage) {
          await this.prisma.storageFood.create({
            data: {
              foodId: food.foodId,
              storageId: storage.storageId,
              quantity: food.quantity,
              outdate: new Date(food.outdate),
              storageDate: new Date(food.storageDate)
            }
          });
        } else {
          if (food.quantity === 0) {
            await this.prisma.storageFood.delete({
              where: {
                storageFoodId: foodInStorage.storageFoodId
              }
            });
          } else {
            await this.prisma.storageFood.update({
              data: {
                quantity: food.quantity
              },
              where: {
                storageFoodId: foodInStorage.storageFoodId
              }
            });
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
    return 'Updated successfully';
  }
}
