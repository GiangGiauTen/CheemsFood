import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { group } from 'console';
import { AddUserDto } from './dto/addMember.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}
  async create(createGroupDto: CreateGroupDto) {
    const { userId, groupName } = createGroupDto;
    const group = await this.prisma.gGroup.create({
      data: {
        name: groupName,
        users: {
          create: {
            userId: userId,
            isGroupAdmin: true
          }
        }
      }
    });
    return group;
  }

  async findAllGroupOfAnUser(userId: number) {
    const groups = await this.prisma.groupMember.findMany({
      where: {
        userId: userId
      },
      include: {
        group: true
      }
    });
    return groups.map((groupMember) => groupMember.group);
  }

  async teamDetail(groupId: number) {
    const group = await this.prisma.gGroup.findUnique({
      where: { groupId },
      include: {
        users: {
          select: {
            userId: true,
            user: { select: { username: true, role: true, name: true } }
          }
        }
      }
    });
    group.users.map((user) => {
      user['username'] = user.user.username;
      user['role'] = user.user.role;
      user['name'] = user.user.name;
      delete user.user;
      return user;
    });
    return group;
  }

  async addUser(id: number, addUserDto: AddUserDto) {
    const { userId } = addUserDto;
    try {
      const group = await this.prisma.gGroup.findUnique({
        where: { groupId: id }
      });
      if (!group) {
        throw new NotFoundException('Không tìm thấy nhóm');
      }

      const user = await this.prisma.user.findUnique({ where: { userId } });
      if (!user) {
        throw new NotFoundException('Không tìm thấy người dùng');
      }

      const groupMember = await this.prisma.groupMember.create({
        data: {
          groupId: id,
          userId: userId,
          isGroupAdmin: false
        }
      });

      return { message: 'Thêm người dùng vào nhóm thành công' };
    } catch (error) {
      if (error.code == 'P2002') {
        return {
          statusCode: 400,
          message: 'Người dùng đã có trong nhóm'
        };
      }
      throw new InternalServerErrorException('Failed to add user to group');
    }
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const { name } = updateGroupDto;
    try {
      const group = await this.prisma.gGroup.findUnique({
        where: {
          groupId: id
        }
      });
      if (!group) throw new NotFoundException('Group not found');
      else
        await this.prisma.gGroup.update({
          data: {
            name: name
          },
          where: {
            groupId: group.groupId
          }
        });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update');
    }
    return 'Updated successfully';
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
