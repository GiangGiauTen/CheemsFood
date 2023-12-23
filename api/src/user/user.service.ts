import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import prisma from '../../lib/prisma';

@Injectable()
export class UserService {
  constructor() {}
  async findAll() {
    const users = await prisma.user.findMany({
      where: {
        role: { not: 'admin' }
      }
    });
    return users.map((e) => {
      delete e['password'];
      return e;
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
