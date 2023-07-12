import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ToBuyListService } from './to-buy-list.service';
import { CreateToBuyListDto } from './dto/create-to-buy-list.dto';
import { UpdateToBuyListDto } from './dto/update-to-buy-list.dto';

@Controller('to-buy-list')
export class ToBuyListController {
  constructor(private readonly toBuyListService: ToBuyListService) {}

  @Post()
  create(@Body() createToBuyListDto: CreateToBuyListDto) {
    return this.toBuyListService.create(createToBuyListDto);
  }

  @Post('list')
  findAllListOfUser(@Body() body: any) {
    const { ownerId } = body;
    return this.toBuyListService.findAllListOfUser(parseInt(ownerId));
  }

  @Post('listGroup')
  findAllListOfGroup(@Body() body: any) {
    const { groupOwnerId } = body;
    return this.toBuyListService.findAllListOfGroup(+groupOwnerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toBuyListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateToBuyListDto: UpdateToBuyListDto
  ) {
    return this.toBuyListService.update(+id, updateToBuyListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBuyListService.remove(+id);
  }
}
