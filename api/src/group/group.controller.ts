import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AddUserDto } from './dto/addMember.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.groupService.findAllGroupOfAnUser(parseInt(userId, 10));
  }

  @Get(':id/detail')
  findOne(@Param('id') id: string) {
    return this.groupService.teamDetail(+id);
  }

  @Post(':id/addUser')
  addUser(@Param('id') id: string, @Body() addUserDto: AddUserDto) {
    return this.groupService.addUser(+id, addUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
