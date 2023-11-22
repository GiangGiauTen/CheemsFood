import { Controller, Get, Body, Patch, Post, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { AddFoodToStorageDto } from './dto/add-food-to-storage.dto';
@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get('/user/:userId')
  findOne(@Param('userId') id: string) {
    return this.storageService.getUserStorage(+id);
  }

  @Patch('/user/:userId')
  update(
    @Param('userId') userId: string,
    @Body() updateStorageDto: UpdateStorageDto
  ) {
    return this.storageService.update(+userId, updateStorageDto);
  }

  @Post('/user/:userId')
  addFood(
    @Param('userId') userId: string,
    @Body() foodToAdd: AddFoodToStorageDto
  ) {
    return this.storageService.addFoodToStorage(+userId, foodToAdd);
  }
}
