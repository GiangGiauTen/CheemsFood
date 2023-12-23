import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';
import { createWriteStream } from 'fs';
import prisma from '../../lib/prisma';

@Injectable()
export class RecipeService {
  constructor() {}
  async createRecipe(imgFile: any, createRecipeDto: CreateRecipeDto) {
    const { name, description, foodIdList, imgUrl } = createRecipeDto;
    const recipe = await prisma.recipe.create({
      data: {
        name,
        description,
        imgUrl
      }
    });
    if (imgUrl.trim().length === 0) {
      const { originalname, buffer } = imgFile;
      const filename = `${Date.now()}-${originalname}`;
      const filePath = `./uploads/${filename}`;
      const writeStream = createWriteStream(filePath);
      writeStream.write(buffer);
      writeStream.end();
      const updatedRecipe = await prisma.recipe.update({
        where: { recipeId: recipe.recipeId },
        data: { imgUrl: filePath }
      });
      return filePath;
    }
    const recipeId = recipe.recipeId;
    await prisma.recipeFoodList.createMany({
      data: foodIdList.map((e) => {
        return { recipeId, foodId: e };
      })
    });
    return recipe;
  }

  async findAll() {
    const recipes = await prisma.recipe.findMany();
    return recipes;
  }

  async findOne(id: number) {
    const recipe = await prisma.recipe.findFirst({
      where: {
        recipeId: id
      },
      include: {
        foods: {
          include: { food: true }
        }
      }
    });
    const foodNames = recipe.foods.map((recipeFood) => {
      return {
        foodId: recipeFood.foodId,
        foodNames: recipeFood.food.name
      };
    });
    return {
      recipeId: recipe.recipeId,
      name: recipe.name,
      description: recipe.description,
      foods: foodNames
    };
  }

  async getAllFavoriteRecipe(id: number) {
    try {
      const favoriteRecipe = await prisma.favoriteRecipe.findMany({
        where: { userId: id },
        select: {
          recipeId: true
        }
      });
      return favoriteRecipe.map((e) => e.recipeId);
    } catch (err) {
      console.log(err);
    }
  }

  async addOrRemoveFavoriteRecipe(addToFavorite: AddToFavoriteDto) {
    const { userId, recipeId } = addToFavorite;
    try {
      const favoriteRecipe = await prisma.favoriteRecipe.findFirst({
        where: {
          recipeId: recipeId,
          userId: userId
        }
      });
      if (favoriteRecipe) {
        await prisma.favoriteRecipe.delete({
          where: {
            userId_recipeId: {
              userId: userId,
              recipeId: recipeId
            }
          }
        });
        return 'Xóa công thức yêu thích thành công!';
      } else {
        await prisma.favoriteRecipe.create({
          data: {
            userId: userId,
            recipeId: recipeId
          }
        });
        return 'Thêm công thức yêu thích thành công!';
      }
    } catch (err) {
      console.log(err);
    }
  }
  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const { name, description, foodIdList } = updateRecipeDto;
    try {
      await prisma.recipe.update({
        where: {
          recipeId: id
        },
        data: {
          name: name,
          description: description
        }
      });

      const oldFoodIdList = await prisma.recipeFoodList.findMany({
        where: { recipeId: id }
      });

      const oldFoodIds = oldFoodIdList.map((recipeFood) => recipeFood.foodId);
      const foodIdsToDelete = oldFoodIds.filter(
        (oldFoodId) => !foodIdList.includes(oldFoodId)
      );
      const newIdsToAdd = foodIdList.filter(
        (foodId) => !oldFoodIds.includes(foodId)
      );
      await prisma.recipeFoodList.deleteMany({
        where: {
          recipeId: id,
          foodId: { in: foodIdsToDelete }
        }
      });

      await prisma.recipeFoodList.createMany({
        data: newIdsToAdd.map((newId) => {
          return {
            foodId: newId,
            recipeId: id
          };
        })
      });
    } catch (err) {
      console.log(err);
    }
    return 'Updated successfully';
  }

  async remove(id: number) {
    try {
      await prisma.recipeFoodList.deleteMany({
        where: {
          recipeId: id
        }
      });
      await prisma.recipe.delete({
        where: {
          recipeId: id
        }
      });
      return 'Delete successfully';
    } catch (err) {
      console.log(err);
    }
  }
}
