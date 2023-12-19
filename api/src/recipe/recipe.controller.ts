import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { AddToFavoriteDto } from './dto/add-to-favorite.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('img')) // 'img' should match the field name in FormData
  createRecipe(@UploadedFile() imgFile, @Body() recipeData: any) {
    // Handle the uploaded image (imgFile) and other recipe data (recipeData)
    return this.recipeService.createRecipe(imgFile, recipeData);
  }

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @Get('/favorite/:uid')
  getAllFavoriteRecipe(@Param('uid') uid: string) {
    return this.recipeService.getAllFavoriteRecipe(+uid);
  }

  @Post('/favorite')
  addOrRemoveFavoriteRecipe(@Body() addToFavoriteDto: AddToFavoriteDto) {
    return this.recipeService.addOrRemoveFavoriteRecipe(addToFavoriteDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }
}
