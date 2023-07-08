import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { UpdateStorageDto } from './dto/update-storage.dto';

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
}
