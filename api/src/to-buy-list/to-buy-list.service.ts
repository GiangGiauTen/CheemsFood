import { Injectable } from '@nestjs/common';
import { CreateToBuyListDto } from './dto/create-to-buy-list.dto';
import { UpdateToBuyListDto } from './dto/update-to-buy-list.dto';
import prisma from '../lib/prisma';

@Injectable()
export class ToBuyListService {
  constructor() {}
  async create(createToBuyListDto: CreateToBuyListDto) {
    const { ownerId, groupOwnerId, date, toBuyListDetail } = createToBuyListDto;
    if (ownerId == null && groupOwnerId == null) {
      return {
        statusCode: 400,
        message: 'Hãy cung cấp Id của chủ sở hữu to-buy-list mới'
      };
    }
    if (ownerId != null && groupOwnerId != null) {
      return {
        statusCode: 400,
        message: 'Hãy cung cấp Id của chỉ 1 trong 2 chủ sở hữu'
      };
    }
    let newToBuyList = null;
    if (ownerId) {
      newToBuyList = await prisma.toBuyList.create({
        data: {
          date: date ? date : new Date(),
          ownerId: ownerId,
          groupOwnerId: null
        }
      });
    } else if (groupOwnerId) {
      newToBuyList = await prisma.toBuyList.create({
        data: {
          date: date ? date : new Date(),
          groupOwnerId: groupOwnerId,
          ownerId: null
        }
      });
    }
    await prisma.toBuyListDetail.createMany({
      data: toBuyListDetail.map((detail) => {
        return {
          toBuyListId: newToBuyList.toBuyListId,
          foodId: detail.foodId,
          quantity: detail.quantity
        };
      })
    });
    return {
      newToBuyList,
      statusCode: 200,
      message: 'Tạo danh sách đồ cần mua mới thành công'
    };
  }

  async findAllListOfUser(ownerId: number) {
    if (!ownerId) {
      return {
        statusCode: 400,
        message: 'Hãy cung cấp Id của chủ sở hữu to-buy-list'
      };
    }
    const result = await prisma.toBuyList.findMany({
      where: { ownerId: ownerId }
    });
    return result;
  }

  async findAllListOfGroup(groupOwnerId: number) {
    const result = await prisma.toBuyList.findMany({
      where: { groupOwnerId: groupOwnerId }
    });
    return result;
  }

  async findOne(id: number) {
    const result = await prisma.toBuyList.findUnique({
      where: { toBuyListId: id },
      select: {
        toBuyListId: true,
        date: true,
        toBuyListDetails: {
          select: {
            food: true,
            quantity: true
          }
        }
      }
    });
    return result;
  }

  async update(id: number, updateToBuyListDto: UpdateToBuyListDto) {
    const { date, toBuyListDetail } = updateToBuyListDto;
    const existingToBuyList = await prisma.toBuyList.findUnique({
      where: { toBuyListId: id }
    });
    if (!existingToBuyList) {
      return {
        statusCode: 404,
        message: `Không tìm thấy danh sách đồ cần mua với id: ${id}`
      };
    }
    const updatedToBuyList = await prisma.toBuyList.update({
      where: { toBuyListId: id },
      data: {
        date: date || existingToBuyList.date
      }
    });
    if (toBuyListDetail) {
      await prisma.toBuyListDetail.deleteMany({
        where: { toBuyListId: id }
      });
      await prisma.toBuyListDetail.createMany({
        data: toBuyListDetail.map((detail) => ({
          toBuyListId: id,
          foodId: detail.foodId,
          quantity: detail.quantity
        }))
      });
    }
    return {
      updatedToBuyList,
      statusCode: 200,
      message: 'Cập nhật danh sách đồ cần mua thành công'
    };
  }

  async remove(id: number) {
    const existingToBuyList = await prisma.toBuyList.findUnique({
      where: { toBuyListId: id }
    });
    if (!existingToBuyList) {
      return {
        statusCode: 404,
        message: `Không tìm thấy danh sách đồ cần mua với id: ${id}`
      };
    }
    await prisma.toBuyListDetail.deleteMany({
      where: { toBuyListId: id }
    });
    await prisma.toBuyList.delete({
      where: { toBuyListId: id }
    });
    return {
      statusCode: 200,
      message: 'Xóa danh sách đồ cần mua thành công'
    };
  }
}
