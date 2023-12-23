import { Injectable } from '@nestjs/common';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { AddFoodToStorageDto } from './dto/add-food-to-storage.dto';
import prisma from '../lib/prisma';

@Injectable()
export class StorageService {
  constructor() {}
  async getUserStorage(userId: number) {
    const storage = await prisma.storage.findUnique({
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
      const storage = await prisma.storage.findUnique({
        where: { userId: userId }
      });
      foods.forEach(async (food) => {
        const foodInStorage = await prisma.storageFood.findFirst({
          where: {
            foodId: food.foodId,
            storageId: storage.storageId
          }
        });
        if (!foodInStorage) {
          await prisma.storageFood.create({
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
            await prisma.storageFood.delete({
              where: {
                storageFoodId: foodInStorage.storageFoodId
              }
            });
          } else {
            await prisma.storageFood.update({
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

  async addFoodToStorage(userId: number, foodToAdd: AddFoodToStorageDto) {
    const { food } = foodToAdd;
    try {
      const storage = await prisma.storage.findUnique({
        where: { userId: userId }
      });
      await prisma.storageFood.create({
        data: {
          foodId: food.foodId,
          storageId: storage.storageId,
          quantity: food.quantity,
          outdate: new Date(food.outdate),
          storageDate: new Date(food.storageDate)
        }
      });
    } catch (err) {
      console.log(err);
    }
    return 'Updated successfully';
  }
}
