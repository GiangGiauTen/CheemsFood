import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
import * as argon from 'argon2';

const rawUserData = fs.readFileSync('./src/seed/users_data.json', 'utf8');

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

@Injectable()
export class SeedService {
  constructor(private prisma: PrismaService) {}
  async resetData() {
    await this.prisma.toBuyListDetail.deleteMany();
    await this.prisma.toBuyList.deleteMany();
    await this.prisma.groupMember.deleteMany();
    await this.prisma.foodCategory.deleteMany();
    await this.prisma.recipeFoodList.deleteMany();
    await this.prisma.favoriteRecipe.deleteMany();
    await this.prisma.storageFood.deleteMany();
    await this.prisma.storage.deleteMany();
    await this.prisma.food.deleteMany();
    await this.prisma.category.deleteMany();
    await this.prisma.gGroup.deleteMany();
    await this.prisma.storage.deleteMany();
    await this.prisma.user.deleteMany();
  }

  async seed() {
    await this.resetData();
    const dataArr = await JSON.parse(rawUserData);
    const userArr = dataArr.filter((e) => e.role == 'user');
    const adminArr = dataArr.filter((e) => e.role == 'admin');
    const admins = adminArr.map(async (admin) => {
      const hashpsw = await argon.hash(admin.password);
      const new_user = await this.prisma.user.create({
        data: {
          username: admin.username,
          password: hashpsw,
          name: admin.name,
          role: admin.role,
          storage: { create: {} }
        }
      });
      return new_user;
    });
    const users = userArr.map(async (user) => {
      const hashpsw = await argon.hash(user.password);
      const new_user = await this.prisma.user.create({
        data: {
          username: user.username,
          password: hashpsw,
          name: user.name,
          role: user.role,
          storage: { create: {} }
        }
      });
      return new_user;
    });
    const adminUsers = await Promise.all(admins);
    const regularUsers = await Promise.all(users);

    const gr1 = await this.prisma.gGroup.create({ data: { name: 'Cheems' } });
    await this.prisma.groupMember.createMany({
      data: [
        {
          groupId: gr1.groupId,
          userId: regularUsers[0].userId,
          isGroupAdmin: true
        },
        {
          groupId: gr1.groupId,
          userId: regularUsers[1].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr1.groupId,
          userId: regularUsers[2].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr1.groupId,
          userId: regularUsers[3].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr1.groupId,
          userId: regularUsers[4].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr1.groupId,
          userId: regularUsers[5].userId,
          isGroupAdmin: false
        }
      ]
    });

    const gr2 = await this.prisma.gGroup.create({ data: { name: 'Monke' } });
    await this.prisma.groupMember.createMany({
      data: [
        {
          groupId: gr2.groupId,
          userId: regularUsers[0].userId,
          isGroupAdmin: true
        },
        {
          groupId: gr2.groupId,
          userId: regularUsers[1].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr2.groupId,
          userId: regularUsers[2].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr2.groupId,
          userId: regularUsers[3].userId,
          isGroupAdmin: false
        }
      ]
    });

    const gr3 = await this.prisma.gGroup.create({
      data: { name: 'Cô bé bán Simp' }
    });
    await this.prisma.groupMember.createMany({
      data: [
        {
          groupId: gr3.groupId,
          userId: regularUsers[0].userId,
          isGroupAdmin: true
        },
        {
          groupId: gr3.groupId,
          userId: regularUsers[2].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr3.groupId,
          userId: regularUsers[4].userId,
          isGroupAdmin: false
        }
      ]
    });

    const gr4 = await this.prisma.gGroup.create({
      data: { name: 'Wjbu, Vozer, fan MU' }
    });
    await this.prisma.groupMember.createMany({
      data: [
        {
          groupId: gr4.groupId,
          userId: regularUsers[1].userId,
          isGroupAdmin: true
        },
        {
          groupId: gr4.groupId,
          userId: regularUsers[3].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr4.groupId,
          userId: regularUsers[5].userId,
          isGroupAdmin: false
        }
      ]
    });

    const gr5 = await this.prisma.gGroup.create({
      data: { name: 'Cá mặn một nắng' }
    });
    await this.prisma.groupMember.createMany({
      data: [
        {
          groupId: gr5.groupId,
          userId: regularUsers[1].userId,
          isGroupAdmin: true
        },
        {
          groupId: gr5.groupId,
          userId: regularUsers[2].userId,
          isGroupAdmin: false
        },
        {
          groupId: gr5.groupId,
          userId: regularUsers[4].userId,
          isGroupAdmin: false
        }
      ]
    });
    const groupArr = await Promise.all([gr1, gr2, gr3, gr4, gr5]);
    const thitCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Thịt',
        categoryType: 'Thực phẩm tươi'
      }
    });

    const haiSanCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Thủy - hải sản',
        categoryType: 'Thực phẩm tươi'
      }
    });

    const rauLaCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Rau lá',
        categoryType: 'Rau-Củ-Quả'
      }
    });

    const cuCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Củ',
        categoryType: 'Rau-Củ-Quả'
      }
    });

    const traiCayCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Trái cây',
        categoryType: 'Rau-Củ-Quả'
      }
    });

    const miCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Mì',
        categoryType: 'Thực phẩm ăn liền'
      }
    });

    const chaoCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Cháo',
        categoryType: 'Thực phẩm ăn liền'
      }
    });

    const phoBunMienCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Phở, bún, miến',
        categoryType: 'Thực phẩm ăn liền'
      }
    });

    const suaTuoiCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa tươi',
        categoryType: 'Sữa'
      }
    });

    const suaHopCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa hộp',
        categoryType: 'Sữa'
      }
    });

    const suaBotCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa bột',
        categoryType: 'Sữa'
      }
    });

    const suaDacCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa đặc',
        categoryType: 'Sữa'
      }
    });

    const suaChuaCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa chua',
        categoryType: 'Sữa'
      }
    });

    const boSuaPhoMaiCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Bơ sữa, phô mai',
        categoryType: 'Sữa'
      }
    });

    const giaViCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Gia vị',
        categoryType: 'Gia vị'
      }
    });

    const gaoCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Gạo',
        categoryType: 'Thực phẩm khô'
      }
    });

    const nguCocCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Ngũ cốc, Yến mạch',
        categoryType: 'Thực phẩm khô'
      }
    });

    const doHopCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Đồ hộp',
        categoryType: 'Đồ hộp'
      }
    });

    const botCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Bột',
        categoryType: 'Bột'
      }
    });

    const doUongCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Đồ uống',
        categoryType: 'Đồ uống'
      }
    });

    const trungCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Trứng',
        categoryType: 'Trứng'
      }
    });

    const chaGioCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Chả giò',
        categoryType: 'Chả giò'
      }
    });

    const khacCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Khác',
        categoryType: 'Khác'
      }
    });

    const thitFoodArr = [
      'Ba chỉ bò',
      'Bắp giò cuộn',
      'Chân giò heo rút xương',
      'Cánh gà',
      'Gầu bò',
      'Móng giò',
      'Thịt heo xay',
      'Thịt Ba Rọi heo',
      'Thịt Nạc thăn heo',
      'Thịt Nạc dăm heo',
      'Thịt Nạc vai heo',
      'Thịt Nạc đùi heo',
      'Thịt Thăn bò',
      'Thịt vai heo',
      'Thịt xay tươi ướp sẵn',
      'Thịt đùi heo',
      'Xương đuôi heo',
      'Xương ức gà',
      'Đùi gà rút xương',
      'Đùi gà tháo khớp',
      'Đùi tỏi gà',
      'Ức gà',
      'Xương ống heo'
    ];

    const thitFoodPromises = thitFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: thitCategory.categoryId
        }
      });
    });

    const thitFood = await Promise.all(thitFoodPromises);

    const haiSanFoodArr = [
      'Bao tử cá basa',
      'Bào ngư đông lạnh',
      'Cua đồng',
      'Cá Thu',
      'Cá basa tươi',
      'Cá bạc má tươi',
      'Cá chim trắng biển tươi',
      'Cá chỉ',
      'Cá chép',
      'Cá hồi nguyên con',
      'Hàu sữa',
      'Mực ống',
      'Nghêu',
      'Nhộng tằm',
      'Nộm sứa',
      'Râu bạch tuộc',
      'Tôm sú',
      'Đầu mực lá',
      'Ếch làm sạch'
    ];

    const haiSanFoodPromises = haiSanFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: haiSanCategory.categoryId
        }
      });
    });

    const haiSanFood = await Promise.all(haiSanFoodPromises);

    const rauLaFoodArr = [
      'Bí nụ',
      'Búp măng tươi',
      'Bắp cải',
      'Bắp cải trắng',
      'Bắp cải tím',
      'Cải bó xôi',
      'Cải ngồng',
      'Cải thảo',
      'Cải xanh',
      'Cần tây lớn',
      'Cần tây nhỏ ',
      'Dọc mùng',
      'Giá đỗ',
      'Hành lá',
      'Húng bạc hà',
      'Húng láng',
      'Hẹ lá',
      'Lá dứa',
      'Lá mè',
      'Mùi ta',
      'Măng',
      'Măng tây',
      'Ngọn bí',
      'Nấm Hương',
      'Nấm hỗn hợp',
      'Nấm kim châm',
      'Rau dền ',
      'Rau muống',
      'Rau mầm cải xanh ',
      'Rau mầm củ cải',
      'Răm ',
      'Súp lơ trắng',
      'Thì là',
      'Tía tô',
      'Xà lách'
    ];

    const rauLaFoodPromises = rauLaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: rauLaCategory.categoryId
        }
      });
    });

    const rauLaFood = await Promise.all(rauLaFoodPromises);

    const cuFoodArr = [
      'Bí xanh',
      'Bí đỏ tròn',
      'Chanh có hạt',
      'Chanh không hạt',
      'Cà rốt',
      'Cà tím tròn',
      'Củ Sả',
      'Củ cải trắng',
      'Củ dền',
      'Củ đậu',
      'Diếp cá',
      'Dưa chuột',
      'Hành củ',
      'Hành tây',
      'Hạt sen',
      'Khoai lang',
      'Khoai lang mật',
      'Khoai môn',
      'Khoai tây',
      'Lá lốt',
      'Ngô ngọt',
      'Quả bầu',
      'Quất',
      'Su su',
      'Tiêu xanh',
      'Tỏi',
      'Đậu cove',
      'Ớt cay',
      'Ớt chuông xanh',
      'Ớt chuông đỏ',
      'Ớt sừng'
    ];

    const cuFoodPromises = cuFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: traiCayCategory.categoryId
        }
      });
    });

    const cuFood = await Promise.all(cuFoodPromises);

    const quaFoodArr = [
      'Bơ sáp',
      'Bưởi 5 roi',
      'Bưởi hồng da xanh',
      'Bưởi đường lá cam',
      'Cam',
      'Cam Sành loại nhỏ',
      'Cam sành loại 1',
      'Cà Chua',
      'Chanh leo',
      'Cherry đỏ',
      'Chuối',
      'Chôm chôm',
      'Dưa hấu',
      'Dưa hấu không hạt',
      'Dưa lê',
      'Dưa lê trắng',
      'Dưa lưới',
      'Dưa lưới vỏ xanh',
      'Dứa/khóm',
      'Dừa xiêm',
      'Hồng Xiêm',
      'Kiwi',
      'Lê Nam Phi',
      'Mận',
      'Nho xanh',
      'Nho đen ngón tay Úc',
      'Sầu riêng',
      'Thanh long',
      'Thanh long ruột đỏ',
      'Táo',
      'Táo xanh',
      'Việt Quất',
      'Vải thiều',
      'Xoài',
      'Đu đủ ruột đỏ',
      'Me'
    ];

    const quaFoodPromises = quaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: cuCategory.categoryId
        }
      });
    });

    const quaFood = await Promise.all(quaFoodPromises);

    const miFoodArr = [
      'Mì tôm Hảo hảo',
      'Mì tôm Omachi',
      'Mì tôm 3 miền',
      'Mì Lẩu Thái',
      'Mì Đệ Nhất',
      'Mì ăn liền Kokomi',
      'Mì cay Samyang Hàn Quốc',
      'Mì tôm Miliket',
      'Mì Cung Đình',
      'Mikochi',
      'Mì xào Tiểu Nhị',
      'Mì ăn liền koreno',
      'Mì Spaghetti'
    ];

    const miFoodPromises = miFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: miCategory.categoryId
        }
      });
    });

    const miFood = await Promise.all(miFoodPromises);

    const chaoFoodArr = [
      'Cháo đậu xanh',
      'Cháo thịt bằm',
      'Cháo rau nấm',
      'Cháo gà',
      'Cháo bò',
      'Cháo cá hồi'
    ];

    const chaoFoodPromises = chaoFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: chaoCategory.categoryId
        }
      });
    });

    const chaoFood = await Promise.all(chaoFoodPromises);

    const phoBunMienFoodArr = [
      'Phở gà',
      'Phở bò',
      'Miến phú hương',
      'Bún bò',
      'Bún giò heo',
      'Bún riêu cua'
    ];

    const phoBunMienFoodPromises = phoBunMienFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: phoBunMienCategory.categoryId
        }
      });
    });

    const phoBunMienFood = await Promise.all(phoBunMienFoodPromises);

    const suaTuoiFoodArr = [
      'Sữa tươi Vinamilk',
      'Sữa tươi TH True Milk',
      'Sữa tươi Dutch Lady'
    ];

    const suaTuoiFoodPromises = suaTuoiFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaTuoiCategory.categoryId
        }
      });
    });

    const suaTuoiFood = await Promise.all(suaTuoiFoodPromises);

    const suaHopFoodArr = [
      'Sữa đậu nành đậu đỏ Vinamilk',
      'Sữa đậu nành hạt óc chó Vinamilk',
      'Sữa đậu nành hạnh nhân Vinamilk',
      'Sữa lúa mạch socola Ovaltine',
      'Sữa lúa mạch Milo Nestle',
      'Sữa bắp non',
      'Sữa đậu nành canxi Fami'
    ];

    const suaHopFoodPromises = suaHopFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaHopCategory.categoryId
        }
      });
    });

    const suaHopFood = await Promise.all(suaHopFoodPromises);

    const suaBotFoodArr = ['Sữa đậu nành canxi Fami', 'Sữa bột NutiFood'];

    const suaBotFoodPromises = suaBotFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaBotCategory.categoryId
        }
      });
    });

    const suaBotFood = await Promise.all(suaBotFoodPromises);

    const suaDacFoodArr = [
      'Sữa đặc Ông Thọ',
      'Kem đặc có đường Vinamilk Ngôi Sao Phương Nam',
      'Sữa đặc Dutch Lady',
      'Creamer đặc sữa pha chế Nutimilk'
    ];

    const suaDacFoodPromises = suaDacFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaDacCategory.categoryId
        }
      });
    });

    const suaDacFood = await Promise.all(suaDacFoodPromises);

    const suaChuaFoodArr = [
      'Sữa chua',
      'Sữa chua không đường',
      'Sữa chua ít đường',
      'Sữa uống lên men Yakult',
      'Váng sữa'
    ];

    const suaChuaFoodPromises = suaChuaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaChuaCategory.categoryId
        }
      });
    });

    const suaChuaFood = await Promise.all(suaChuaFoodPromises);

    const boSuaPhoMaiFoodArr = [
      'Phô mai Con Bò Cười',
      'Bơ lạt',
      'Bơ mặn',
      'Phô Mai Lát',
      'Phô mai dây hun khói',
      'Phô mai gói',
      'Phô mai hun khói',
      'Phô mai lát',
      'Phô mai vuông'
    ];

    const boSuaPhoMaiFoodPromises = boSuaPhoMaiFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: boSuaPhoMaiCategory.categoryId
        }
      });
    });

    const boSuaPhoMaiFood = await Promise.all(boSuaPhoMaiFoodPromises);

    const gaoFoodArr = ['Gạo nếp', 'Gạo tẻ', 'Gạo lứt'];

    const gaoFoodPromises = gaoFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: gaoCategory.categoryId
        }
      });
    });

    const gaoFood = await Promise.all(gaoFoodPromises);

    const nguCocFoodArr = ['Ngũ cốc ăn sáng', 'Ngũ cốc dinh dưỡng', 'Gạo lứt'];

    const nguCoFoodPromises = nguCocFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: nguCocCategory.categoryId
        }
      });
    });

    const nguCocFood = await Promise.all(nguCoFoodPromises);

    const doHopFoodArr = [
      'Cá ngừ',
      'Bò hầm',
      'Bơ thực vật',
      'Bơ đậu phộng',
      'Cà pháo lọ',
      'Cá chỉ cháy tỏi',
      'Cá khô chỉ vàng khay',
      'Cá ngừ đại dương ngâm dầu',
      'Heo hầm',
      'Khô cá chỉ vàng',
      'Khô cá cơm',
      'Mực cán ăn liền',
      'Mực rim hộp',
      'Mực sấy gừng',
      'Pate gan',
      'Pate thịt heo',
      'Ruốc khô',
      'Thịt gà hộp',
      'Thịt heo viên',
      'Thịt hộp',
      'Thịt xay',
      'Tôm khô hộp',
      'Tôm nõn hộp'
    ];

    const doHopFoodPromises = doHopFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: doHopCategory.categoryId
        }
      });
    });

    const doHopFood = await Promise.all(doHopFoodPromises);

    const botFoodArr = [
      'Bột bánh rán',
      'Bột bắp Meizan',
      'Bột chiên giòn',
      'Bột chiên gà giòn',
      'Bột chiên xù',
      'Bột mì chuyên dụng cho Bánh Mì',
      'Bột mì chuyên bánh bông lan',
      'Bột mì đa dụng',
      'Bột tàu hủ',
      'Bột cà ri'
    ];

    const botFoodPromises = botFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: botCategory.categoryId
        }
      });
    });

    const botFood = await Promise.all(botFoodPromises);

    const giaViFoodArr = [
      'Dầu ăn',
      'Dầu olive',
      'Nước mắm',
      'Đường',
      'Nước tương',
      'Hạt nêm',
      'Bột canh',
      'Hạt tiêu',
      'Tương ớt',
      'Tương cà',
      'Mật ong',
      'Mì chính',
      'Ớt bột',
      'Mayonnaise',
      'Wasabi',
      'Giấm',
      'Hương thảo',
      'Sốt mè rang',
      'Muối',
      'Nghệ'
    ];

    const giaViFoodPromises = giaViFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: giaViCategory.categoryId
        }
      });
    });

    const giaViFood = await Promise.all(giaViFoodPromises);

    const doUongFoodPromises = [
      'Nước lọc',
      'Coca cola',
      'Pessi',
      '7up',
      'Spite',
      'Fanta',
      'Trà chanh',
      'Trà đào',
      'Trà sữa',
      'Matcha',
      'Bia',
      'Rượu trắng',
      'Rượu vang',
      'Rượu',
      'Bia lon',
      'Bia hơi',
      'Cà phê hòa tan',
      'Cà phê lon',
      'Cà phê xay'
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: doUongCategory.categoryId
        }
      });
    });

    const doUongFood = await Promise.all(doUongFoodPromises);

    const trungFoodArr = [
      'Trứng gà ta',
      'Trứng gà công nghiệp',
      'Trứng vịt',
      'Trứng ngỗng',
      'Trứng cút'
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: trungCategory.categoryId
        }
      });
    });
    const trungFood = await Promise.all(trungFoodArr);
    const chaGioFoodArr = [
      'Giò bò',
      'Giò lụa',
      'Giò thủ',
      'Chả chiên',
      'Chả bì',
      'Nem chua',
      'Nem lụi'
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: chaGioCategory.categoryId
        }
      });
    });
    const chaGioFood = await Promise.all(chaGioFoodArr);

    const khacFoodArr = ['Đậu hũ', 'Rong biển lá', 'Rong biển vụn'].map(
      async (food) => {
        const dataFood = await this.prisma.food.create({
          data: { name: food, description: food }
        });
        return await this.prisma.foodCategory.create({
          data: {
            foodId: dataFood.foodId,
            categoryId: khacCategory.categoryId
          }
        });
      }
    );
    const khacFood = await Promise.all(khacFoodArr);

    const dateArray = [
      '2023-07-06',
      '2023-07-07',
      '2023-07-08',
      '2023-07-09',
      '2023-07-10',
      '2023-07-11',
      '2023-07-12',
      '2023-07-13'
    ];
    await this.prisma.toBuyList.createMany({
      data: regularUsers.flatMap((user) => {
        return dateArray.map((date) => {
          return {
            ownerId: user.userId,
            date: new Date(date)
          };
        });
      })
    });
    await this.prisma.toBuyList.createMany({
      data: groupArr.flatMap((group) => {
        return dateArray.map((date) => {
          return {
            groupOwnerId: group.groupId,
            date: new Date(date)
          };
        });
      })
    });

    const allFoods = [
      thitFood,
      haiSanFood,
      rauLaFood,
      cuFood,
      quaFood,
      miFood,
      chaoFood,
      phoBunMienFood,
      suaTuoiFood,
      suaHopFood,
      suaBotFood,
      suaDacFood,
      suaChuaFood,
      boSuaPhoMaiFood,
      gaoFood,
      nguCocFood,
      doHopFood,
      botFood,
      giaViFood,
      doUongFood,
      trungFood,
      chaGioFood,
      khacFood
    ].flat();

    const allToBuyList = [await this.prisma.toBuyList.findMany({})][0].map(
      (e) => e.toBuyListId
    );

    await this.prisma.toBuyListDetail.createMany({
      data: allToBuyList.flatMap((listId) => {
        return getMultipleRandom(
          allFoods,
          1 + Math.floor(Math.random() * 10)
        ).map((foodId) => {
          return {
            toBuyListId: listId,
            foodId: foodId.foodId,
            quantity: 1 + Math.floor(Math.random() * 10)
          };
        });
      })
    });

    const outDateArr = [
      '2023-07-15',
      '2023-07-20',
      '2023-07-25',
      '2023-07-30',
      '2023-08-01',
      '2023-08-07',
      '2023-08-12',
      '2023-08-20',
      '2023-08-25',
      '2023-09-15',
      '2023-09-30',
      '2023-10-15',
      '2023-10-30',
      '2023-11-15',
      '2023-11-30',
      '2023-12-15',
      '2023-12-30'
    ];

    const allStorageId = [await this.prisma.storage.findMany({})][0].map(
      (e) => e.storageId
    );

    await this.prisma.storageFood.createMany({
      data: allStorageId.flatMap((storageId) => {
        return dateArray.flatMap((storageDate) => {
          return outDateArr.map((outdate) => {
            return {
              storageDate: new Date(storageDate),
              outdate: new Date(outdate),
              storageId: storageId,
              foodId:
                allFoods[Math.floor(Math.random() * allFoods.length)].foodId,
              quantity: 1 + Math.floor(Math.random() * 5)
            };
          });
        });
      })
    });

    const thitBoXaoHanhTayRecipe = await this.prisma.recipe.create({
      data: {
        name: 'Thịt bò xào hành tây',
        description: `Bước 1: Sơ chế nguyên liệu
        Bạn mua thịt bò loại mềm để xào, rửa sạch, thái lát mỏng theo thớ vừa ăn.
        Hành tây lột vỏ bên ngoài, rửa sơ qua nước lạnh, rồi cắt hai đầu, bổ làm đôi theo chiều dọc, rùi úp nửa củ hành xuống thái theo chiều ngang.
        Gừng, tỏi bỏ vỏ, đập dập.
        Hành lá nhặt bỏ lá úa, rửa sạch, cắt khúc để phần lá xanh và thân trắng riêng. Phần lá thái dài và phần thân thái nhỏ.
        Bước 2: Ướp thịt bò
        Thịt bò sau khi thái lát thì đem trộn với gia vị: ½ thìa nhỏ muối, chút ít hạt tiêu, 1 thìa nhỏ dầu ăn, trộn đều để trong 20-30 phút để thịt bò ngấm gia vị.
        Bước 3: Chế biến
        Đầu tiên, đặt chảo lên bếp, phi thơm tỏi, gừng, phần thân trắng của hành lá và hành tây trên chảo dầu nóng, đảo đều trong chừng 1 phút. Bạn lưu ý là chỉ cần khoảng 2 thìa dầu ăn và xào hành thì phải nhanh, liên tục, không để hành tây chín nhừ vì như vậy hành tây sẽ mất ngọt.
        Trút thịt bò vào xào, thêm chút rượu trắng, nêm nếm lại với ½ thìa nước mắm, 1 thìa hạt nêm rồi đảo đều. Bạn nhớ xào nhanh tay và để lửa lớn để thịt bò mềm nhé.
        Sau khi thịt và hành cùng chín tới thì hành lá cắt khúc thả vào, đảo sơ qua một lần nữa, rắc chút hạt tiêu rồi bắc ra.
        `
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        thitFood[12], // Thịt bò
        rauLaFood[13], // Hành lá
        giaViFood[18], // Muối
        giaViFood[2], // Nước mắm
        cuFood[25], // Tỏi
        giaViFood[5], // Hạt nêm
        giaViFood[7], // Tiêu
        giaViFood[0], // Dầu ăn
        doUongFood[11], // Rượu trắng
        cuFood[13] // Hành tây
      ].map((food) => {
        return {
          recipeId: thitBoXaoHanhTayRecipe.recipeId,
          foodId: food.foodId
        };
      })
    });

    const khoaiTayXaoCaChua = await this.prisma.recipe.create({
      data: {
        name: 'Khoai tây xào cà chua',
        description: `Bước 1: Sơ chế nguyên liệu
        Gọt vỏ khoai tây, rửa sạch rồi chuẩn bị một chậu nước, thái khoai thành miếng, cho vào chậu ngay để khoai không bị thâm. Ngâm khoai tây khoảng 10 phút, vớt ra, để ráo.
        Cà chua, hành lá cũng rửa sạch. Sau đó thái miếng cà chua còn hành lá thì thái nhỏ.
        Bóc vỏ 2 tép tỏi, thái thành từng lát mỏng.
        Bước 2: Cách xào khoai tây với cà chua
        Bắc chảo lên bếp, phi tỏi với dầu thật vàng thơm rồi cho khoai tây vào chảo đảo đều 2 phút. Thêm cà chua vào xào cùng, nêm nếm gia vị cho vừa với khẩu vị của bạn.
        Đợi khoai chín, thêm một chút hành lá và rau thơm để món ăn thêm thơm ngon, tắt bếp, múc ra đĩa và thưởng thức.
        `
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        cuFood[18], //Khoai tây
        quaFood[7], // cà chua
        cuFood[25], // tỏi
        rauLaFood[13], //hành lá
        giaViFood[7], // Tiêu
        giaViFood[18], // Muối
        giaViFood[5] // Hạt nêm
      ].map((food) => {
        return {
          recipeId: khoaiTayXaoCaChua.recipeId,
          foodId: food.foodId
        };
      })
    });

    const lauCaChep = await this.prisma.recipe.create({
      data: {
        name: 'Lẩu cá chép giòn',
        description: `Xương heo rửa sạch, luộc sơ qua với nước sôi rồi cho vào nồi để lọc sạch bẩn trong xương heo. Đổ nước vào nồi, đun sôi xương ống heo tiếp tục cho ngọt nước. Sau đó, vớt bỏ bọt cho nước dùng xương trong đẹp.
        Cá chép giòn rửa sạch, sau đó cạo sạch vảy, cắt khoanh vừa ăn, đem ướp cùng với gừng.
        Ớt hành, rau răm thái nhỏ.
        Thịt bò thái mỏng ướp vài lát gừng thái chỉ.
        Lòng non, dạ dày làm sạch thái miếng vừa ăn.
        Nghêu rửa sạch bày lên đĩa.
        Rau các loại rửa sạch để ráo, đậu hũ thái miếng, cà chua bổ múi cau.
        Đặt một chiếc chảo lên bếp, đun dầu nóng già, phi thơm hành với cà chua. Sau đó, cho cà chua vào nồi nước dùng xương vừa nấu là xong.
        Để có nồi nước dùng ngọt nước và có vị chua cay hợp với món lẩu cá, bạn nên hầm xương heo với xương cá, sau đó cho thêm me chua cùng vài cái nấm hương, cà chua xào sơ với gia vị cho vừa miệng. Khi nồi nước dùng chín, đổ vài nồi lẩu, bày lên mâm cũng các món nhúng kèm là bạn đã có ngay món lẩu các chép giòn thơm ngon rồi.
        `
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        haiSanFood[8], //Cá chép
        thitFood[22], // Xương ống heo
        thitFood[0], // Thịt bò
        quaFood[7], // cà chua
        quaFood[35], // Me
        giaViFood[19], // Nghệ
        khacFood[0], // Đậu phụ
        rauLaFood[13], //hành lá
        giaViFood[7], // Tiêu
        giaViFood[18], // Muối
        giaViFood[5], // Hạt nêm
        giaViFood[11] // Mì chính
      ].map((food) => {
        return {
          recipeId: lauCaChep.recipeId,
          foodId: food.foodId
        };
      })
    });
    const lauRieuCuaBapBoSuonSun = await this.prisma.recipe.create({
      data: {
        name: 'Lẩu riêu cua bắp bò sườn sụn',
        description: `Bước 1: Sơ chế nguyên liệu
        Hành khô: bóc vỏ, đập dập, băm nhỏ. Gừng: cạo vỏ, rửa sạch, thái sợi mỏng. Hành lá, rau mùi: nhặt rồi rửa sạch, thái nhỏ.
        Cà chua: rửa sạch, cắt cuống và bổ múi cau.
        Rau sống: nhặt bỏ phần bị hư, rửa sạch, ngâm qua với nước muối loãng rồi vớt ra để ráo. Lưu ý, với hoa chuối thì bạn thái nhỏ và ngâm trong nước pha giấm để hoa chuối không bị thâm, sau đó vớt ra rửa sạch rồi để ráo.
        Sườn sụn: sau khi mua về bạn rửa sạch, có thể rửa qua với nước muối để khử mùi hôi của thịt. Tiếp theo bạn trụng sơ phần sườn sụn trong nước sôi, bước này sẽ giúp nước lẩu của bạn trong hơn. Sau đó ướp phần sườn sụn này với chút gia vị rồi xào sơ qua với ½ muỗng hành khô rồi hầm trong khoảng 2 giờ đồng hồ. (Nếu nhà bạn có nồi áp suất thì chỉ cần hầm trong 10 phút là được).
        Cua đồng: Làm sạch, bóc phần mai, lấy gạch cua ra để riêng trong 1 bát nhỏ. Phần còn lại đem giã hoặc xay nhuyễn, lọc lấy nước. Lấy phần nước ấy cho vào nồi và đun trên bếp, nêm với 1 thìa gia vị + 1 ít mắm tôm, khuấy đều và đun với lửa to, đợi đến gạch cua nổi lên thì chuyển lại nhỏ lửa. Lưu ý: lúc này bạn không nên khuấy nữa vì sẽ dễ làm nát phần gạch cua hoặc bạn có thể gạt chúng vào phần cạnh nồi hoặc khi gạch cua chín hẳn thì bạn vớt chúng ra để riêng.
        Với chén gạch cua: bạn bắc chảo lên bếp, cho vào chút dầu ăn, khi dầu sôi thì cho một chút hành khô vào phi lên cho thơm. Cho phần gạch cua chừa lại vào xào với một ít nước mắm cho chín rồi vớt ra.
        Bạn có thể dùng tiếp phần chảo ấy để xào qua cà chua cho chín vừa tới. Công đoạn này sẽ giúp nước lẩu của bạn có màu đẹp mắt.
        Phần bắp bò: rửa sạch, bạn cũng rửa qua với nước muối để khử mùi tanh, sau đó xả thật sạch, thái miếng mỏng vừa ăn và ướp với gừng và một chút xíu dầu ăn.
        Đậu hũ: mỗi miếng thái làm 4, chiên sơ qua cho đến khi có màu vàng thì vớt ra.
        Mẻ lọc lấy nước, để ra chén riêng.
        Bước 2: Chế biến
        Cho nước cua và nước ninh phần sườn sụn, thịt sườn, cà chua vào. Tiếp theo cho phần nước mẻ, nêm nếm lại gia vị, rồi cho phần riêu cua vào, rưới gạch cua lên + 1 nhúm hoa chuối + dầu hành + rau mùi + đậu hũ đã chiên + 1 chút sa tế (nếu bạn thích ăn cay).
        Bước 3: Trình bày
        Dọn kèm cùng với bún tươi, rau sống và thịt bò, thưởng thức đến đâu thì cho nguyên liệu vào đến đấy. Vậy là bạn hoàn tất món lẩu.
        `
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Cua đồng: 1 kg
        // Sườn sụn: 600 gr
        // Bắp bò: 800 gr
        // Bún tươi: 1 kg
        // Đậu hũ: 10 miếng
        // Cà chua: 5 – 7 quả
        // 1 chút mẻ (ngoài ra bạn có thể thay thế bằng sấu, me hay quả dọc), gừng
        // 1 ít mắm tôm
        // Hành khô: 2 củ
        // Hành lá, rau mùi
        // Rau sống: rau muống chẻ, hoa chuối, thân chuối non, xà lách, mùi tàu, hành lá, tía tô, kinh giới, giá đỗ, chanh, ớt.
        // Gia vị: Dầu ăn, giấm, nước mắm, bột canh, hạt nêm, sa tế."
      ].map((food) => {
        return {
          recipeId: lauRieuCuaBapBoSuonSun.recipeId,
          foodId: food.foodId
        };
      })
    });

    const thitKhoChayCanh = await this.prisma.recipe.create({
      data: {
        name: 'Thịt kho cháy cạnh',
        description: `"Bước 1: Sơ chế nguyên liệu
        Thịt ba chỉ mua về đem rửa sạch với nước muối loãng trước, sau đó rửa lại với nước rồi để ráo. Tiếp tục thái thịt thành những miếng vừa ăn, nên thái miếng hình chữ nhật và thái hơi mỏng để thịt dễ ngấm vị và khi rang cháy sẽ tiết bớt mỡ ra, giúp thịt dai ngon, ít ngán.
        Sau khi thái thịt xong, bạn cho vào nước sôi chần khoảng 30 giây rồi vớt ra giúp cho mặt thịt se lại, khi rang thịt sẽ thơm ngon hơn và không bị vẩy bọt. Bạn cũng có thể chần nguyên miếng thịt rồi thái nhỏ. Tuy nhiên, thái nhỏ rồi chần sẽ giúp miếng thịt se mặt lại, khi rang nhanh cháy cạnh và không bị mất chất ngọt bên trong.
        Hành tím bóc vỏ, đập dập, băm nhỏ.
        Sả bóc lớp vỏ già, cắt gốc, rửa sạch, cắt khúc rồi chẻ thành các sợi dài, nhỏ.
        Ớt tươi rửa sạch, thái lát nhỏ, có thể bỏ hạt hoặc không.
        Hành lá nhặt rửa sạch, cắt khúc.
        Bước 2: Ướp thịt
        Sau khi chần thịt và để ráo, bạn cho thịt vào tô hoặc nồi, nêm thêm: 1 thìa canh nước mắm ngon, 1 thìa cà phê bột ngọt, 1 thìa cà phê nước hàng. Trộn đều thịt với gia vị rồi ướp khoảng 20 – 30 phút.Bước 3: Rang thịt
        Bạn bắc chảo lòng sâu lên bếp, cho thịt vào chảo rồi bật lửa vừa, đảo thịt đều tay cho đến khi thịt tiết ra mỡ và xém vàng 2 mặt thì bạn cho sả vào đảo cùng để thịt thấm mùi thơm của sả. Đảo thêm vài phút cho đến khi sả dậy mùi thơm và hơi vàng. Nếu thịt tiết ra nhiều mỡ, bạn có thể nghiêng chảo lại rồi dùng muỗng múc bớt ra ngoài, để lại một chút cho thịt không bị khô.
        Tiếp tục cho hành tím băm vào đảo cùng thịt cho thơm rồi nêm nếm nước mắm, thêm chút đường rồi đảo đều để thịt thấm gia vị. Hạ lửa nhỏ, đảo thêm vài phút để thịt không bị cháy và cho ớt thái nhỏ, hành lá vào đảo đều rồi tắt bếp.
        
        Vậy là với 3 bước đơn giản, bạn đã vừa hoàn thành món thịt kho cháy cạnh cực thơm ngon và đậm đà rồi. GIờ thì chỉ cần dọn ra để cả nhà cùng thưởng thức với cơm nóng sẽ rất ngon miệng. Chúc bạn thực hiện thành công!"`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 500g thịt ba chỉ
        // 3 cây sả
        // 1 củ hành tím
        // 1 quả ớt tươi
        // 50g hành lá
        // Gia vị: 2 thìa canh nước mắm ngon, 1 thìa canh đường, 1 thài cà phê bột ngọt, 1 thìa canh nước hàng, muối, tiêu..
      ].map((food) => {
        return {
          recipeId: thitKhoChayCanh.recipeId,
          foodId: food.foodId
        };
      })
    });

    const caChepKhoRiengMienBac = await this.prisma.recipe.create({
      data: {
        name: 'Cá chép kho riềng miền Bắc',
        description: `Bước 1: Sơ chế các nguyên liệu
        Cá chép khi mua về, bạn đem làm sạch, loại bỏ ruột, mang rồi rửa sạch bằng nước muối loãng để khử bớt mùi tanh. Sau đó, rửa cá thêm lần nữa qua nước ấm khoảng 4  5 lần để thịt cá săn chắc hơn. Rồi bạn cắt cá thành từng khúc dày khoảng 2,5cm, để ráo nước.
        Thịt ba chỉ khi mua bạn không nên chọn quá nhiều thịt nạc hay quá nhiều mỡ. Khi mua về, bạn rửa sạch, để ráo nước, cắt miếng vừa ăn rồi đem ướp với: Nước mắm, muối, đường, nước hàng rồi trộn đều cho thịt ngấm đều gia vị trong khoảng 15 – 20 phút.
        Riềng bạn đem cạo vỏ, rửa sạch và cắt thành từng lát mỏng, đập dập. Hoặc bạn có thể xay nhỏ hoặc giã nát riềng để dùng ướp với cá để hương vị đậm đà hơn.
        Sả đem rửa sạch, băm nhuyễn.
        Gừng bóc vỏ, giã nhuyễn.
        Bước 2: Ướp cá kho
        Cá chép bạn đem ướp với các loại gia vị bao gồm: 1 muỗng cà phê nước mắm, 1 muỗng cà phê hạt nêm, 1 muỗng cà phê đường, 1 muỗng cà phê bột ngọt, 1 muỗng cà phê dầu hào, gừng, sả băm nhuyễn cùng 2 quả ớt. Rồi dùng đũa trộn đều lên, ướp cá trong khoảng 15  20 phút.
        
        Bước 3: Kho cá
        Bạn chuẩn bị nồi đất hoặc nồi có đáy dày rồi xếp lần lượt theo thứ tự: Riềng, gừng, cá, thịt. Cuối cùng, bạn xếp nấm hương lên trên cùng. Tiếp theo, bạn cho thêm nước sôi để nguội vào nồi cá rồi cho lên bếp đun nhỏ lửa từ 10  15 phút để cá ngấm, chín kỹ và không bị cháy. Sau đó, khi cá sôi, bạn cho thêm ít nước trà xanh vào nồi kho cùng.
        
        Bước 4: Hoàn thành
        Bạn kho cá thêm khoảng 40 phút, đến khi nồi cá chỉ còn ít nước thì bạn tắt bếp. Trong quá trình kho cá, bạn không nên dùng đũa đảo cá để cá không bị vỡ. Cuối cùng, bạn cho cá ra đĩa và thưởng thức nóng cùng cơm trắng.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 1 con cá chép
        // 100g thịt ba chỉ
        // Củ riềng tươi
        // Sả, gừng
        // Hành khô, ớt
        // Nước mắm, nước tương, hạt nêm, dầu hào, đường
        // Nấm hương khô
      ].map((food) => {
        return {
          recipeId: caChepKhoRiengMienBac.recipeId,
          foodId: food.foodId
        };
      })
    });

    const hauChienTrung = await this.prisma.recipe.create({
      data: {
        name: 'Hàu chiên trứng',
        description: `Bước 1: Sơ chế hàu và nguyên liệu
        Hành lá cắt bỏ gốc, rửa cho thật sạch nhất là phần củ hay bám nhiều đất. Sau đó cắt thành khúc ngắn khoảng 1-2 cm.
        Hành tím lột vỏ, rửa sạch rồi băm nhỏ.
        Hàu sữa tươi mua về bạn lấy miếng rửa bát hoặc bàn chải để cạo sạch vỏ. Sau đó tách vỏ bỏ đi, lấy phần thịt hàu bên trong. Cho hàu vào rổ rửa thật sạch dưới vòi nước lạnh. Để ráo nước.
        Bước 2: Ướp gia vị cho hàu và trứng
        Sau khi hàu ráo nước, bạn cho hàu vào tô ướp với chút muối, hạt nêm và tiêu xay trong vòng 15 phút.
        Trứng gà đập ra bát, đánh tan trứng với 2 thìa nước mắm, 1/2 thìa hạt nêm, 1/4 thìa muối, 1 thìa đường kính trắng, 1 thìa tiêu xay, 1 thìa bột ngọt và toàn bộ hành lá.
        Đổ hàu vào cùng rồi dùng đũa khuấy đều, đánh cho tan để cho trứng, hàu và gia vị hòa quyện với nhau.
        Bước 3: Tiến hành chiên hàu với trứng
        Đặt 1 cái chảo sâu lòng hoặc 1 cái nồi nhỏ lên bếp, đun nóng với 4 thìa canh dầu ăn. Dầu vừa nóng thì bạn cho hành tím vào phi cho vàng và thật thơm lên. Sau đó đổ tô trứng và hàu vào chiên.
        Lưu ý: Vặn lửa thật nhỏ và đậy nắp vung lại để trứng không bị cháy vì hàu lâu chín hơn trứng. Khi thấy mặt dưới trứng đã chín thì bạn khéo léo dùng thìa hoặc vá lật ngược mặt còn lại lại chiên cho vàng. Nhớ cẩn thận nhẹ tay để trứng không bị rách. Trứng chín vàng đều cả 2 mặt thì bạn tắt bếp.
        Bước 4: Trình bày và thưởng thức món hàu chiên trứng
        Cho hàu chiên trứng ra dĩa. Dùng kéo hoặc thìa sắn thành những miếng nhỏ vừa ăn để cho dễ gắp. Có thể pha thêm chén nước tương tỏi dùng kèm để tăng hương vị.
        Chỉ với vài bước nhỏ thì chúng ta đã chế biến hoàn tất cách làm hàu chiên trứng rồi phải không nào? Chỉ với vài bước chế biến đơn giản là có ngay một món ăn cực bổ dưỡng với hương vị tinh túy từ loại hải sản giàu dưỡng chất nhất biển cả. Chúc bạn thành công với cách làm hàu chiên trứng này nhé.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Trứng vịt hoặc trứng gà công nghiệp: 3 – 4 quả
        // Hàu sữa tươi: 1kg
        // Hành lá: 50gr
        // Hành củ: 3 – 4 củ
        // Sữa tươi: 2 thìa cà phê (không bắt buộc)
        // Hành tây: 1 củ vừa
        // Dầu ăn: 5 thìa cà phê
        // Nước mắm: 3 thìa cà phê
        // Hạt nêm: 1 thìa cà phê
        // Muối i-ốt: 1/2 thìa cà phê
        // Bột canh: 1/2 thìa cà phê
        // Đường trắng: 1 thìa cà phê
        // Tiêu xay: 1 thìa cà phê
        // Bột ngọt: 1 thìa cà phê
      ].map((food) => {
        return {
          recipeId: hauChienTrung.recipeId,
          foodId: food.foodId
        };
      })
    });

    const gaRangMuoi = await this.prisma.recipe.create({
      data: {
        name: 'Gà Rang Muối ',
        description: `Bước 1: Sơ chế các nguyên liệu
        Thịt gà mua rửa với muối và chanh (giấm) để khử mùi tanh rồi rửa sạch với nước để ráo. Bạn cắt thịt gà thành từng miếng vuông, có kích thước khoảng 2cm. Sau đó, bạn ướp gà với các gia vị hạt nêm, bột ngọt, tiêu xay, nước mắm, tỏi băm nhuyễn và lòng đỏ trứng gà. Dùng đũa trộn đều và để khoảng 25-30 phút để thịt gà thấm đều vị.
        Bạn vo nếp và đậu xanh qua 2 lần với nước sạch, sau đó ngâm khoảng 20 phút rồi vớt ra để ráo.
        Sả rửa sạch, cắt khúc dài, đập dập rồi xé thành từng sợi nhỏ. Gừng gọt vỏ, cắt sợi dài. Còn lá chanh sau khi rửa sạch thì cắt sợi nhuyễn.
        Bước 2: Rang muối
        Đặt chảo lên bếp với lửa vừa, cho nếp và đậu xanh vào rang, đảo đều tay đến khi vàng thơm thì tắt bếp và để riêng vào 1 chén nhỏ. Tiếp tục sử dụng chảo đó để rang phần muối hạt, rang tầm 3 phút thì bạn tắt bếp. Cho đậu xanh, nếp, muối hạt và tiêu vào cối để xay nhuyễn.
        Bước 3: Làm gà rang muối
        Bắc chảo lên bếp và cho vào khoảng 1 chén dầu ăn, sau đó đun sôi. Khi dầu ăn sôi, bạn cho gừng và lá chanh vào chiên cho thơm. Dùng rây vớt ra rồi cho lên dĩa đã lót sẵn giấy ăn hoặc giấy thấm dầu.
        Tiếp tục cho sả xé sợi vào chiên, dùng đũa đảo nhẹ tay để tránh văng dầu. Chiên trong khoảng 3 – 4 phút cho sả chuyển sang màu vàng rơm là được.Đun sôi chảo dầu, lăn từng miếng gà qua phần bột năng khô rồi cho lần lượt từng miếng gà vào chảo chiên cho chín vàng.
        
        Khi gà đã chín vàng thì vớt gà ra và cho vào 1 cái tô nhỏ, cho hỗn hợp muối đã xay nhuyễn vào tô, đậy nắp và lắc đều. Bạn nên cho muối vào khi gà vừa vớt ra và còn nóng, làm như vậy thì các gia vị mới thấm vào thịt gà.
        
        Bước 4: Thành phẩm
        Bạn lót một lớp sả chiên lên dĩa rồi đặt gà lên trên, rắc thêm muối và gừng, lá chanh là có thể thưởng thức. Da gà giòn thơm nhưng thịt vẫn giữ được vị mềm ngọt đặc trưng. Vị mặn của muối và vị béo bùi của đậu xanh và nếp cùng với lá chanh và sả chiên giòn khiến cho món ăn này hấp dẫn hơn bao giờ hết. Bạn có thể ăn kèm với 1 chén muối ớt chanh hay các loại nước chấm yêu thích khác đều rất tuyệt vời.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Thịt gà: 500g
        // Bột năng: 100g
        // Nếp: 80g
        // Đậu xanh cà vỏ: 40g
        // Muối hạt: 30g
        // Tiêu hạt: 10g
        // Tiêu xay: ½ muỗng cafe
        // Hạt nêm: 1 muỗng cafe
        // Bột ngọt: ½ muỗng cafe
        // Nước mắm: 2 muỗng cafe
        // Lòng đỏ trứng gà: 1 cái
        // Sả: 5 cây
        // Lá chanh: 10 lá
        // Gừng: 1 củ
        // Tỏi: 1 củ
        // Dầu ăn: 150ml
      ].map((food) => {
        return {
          recipeId: gaRangMuoi.recipeId,
          foodId: food.foodId
        };
      })
    });

    const bunBoHue = await this.prisma.recipe.create({
      data: {
        name: 'Bún bò Huế',
        description: `Sơ chế nguyên liệu
        Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
        Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
        Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
        Ớt tươi: cắt nhỏ, cho vào nước mắm.
        Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
        Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
        Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
        Cách Nấu Bún Bò Huế
        Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nấp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
        Trình bày món ăn
        Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Bắp bò: 600 gr
        // Nạm bò: 600 gr
        // Gân bò: 400 gr
        // Giò heo (chọn giò trước): 1 cái khoảng 800 gr
        // Xương ông: 1 kg
        // Mắm ruốc Huế: khoảng 3 muỗng canh
        // Sả: 6 cây
        // Gừng: 50 gr
        // Hành tím, tỏi
        // Bún tươi cọng to
        // Rau sống (bắp chuối, giá sống, rau thơm, rau răm, hành lá, củ hành tây)
        // Chả Huế (tùy thích)
        // Ớt, sa tế, tiêu, muối, nước mắm, dầu ăn, dấm trắng
        // Huyết heo (nếu không thích ăn huyết bạn có thể bỏ qua)
      ].map((food) => {
        return {
          recipeId: bunBoHue.recipeId,
          foodId: food.foodId
        };
      })
    });

    const bunCaNgu = await this.prisma.recipe.create({
      data: {
        name: 'Bún cá ngừ',
        description: `Sơ chế cá
        Cá ngừ sau khi mua về bỏ mang, ruột, cắt bỏ vây, cắt thành lát dày khoảng 2cm, rửa sạch.
        Cho vào thau 2 lít nước cùng với 2 muỗng canh muối, khuấy đều cho muối tan ra. Thả cá vào ngâm 20 phút.
        Sau khi ngâm đủ 20 phút, rửa lại 2 lần nước, để thật ráo.
        Sơ chế các nguyên liệu khác
        Thơm rửa sạch, cắt thành lát nhỏ dày khoảng 1cm.
        Cà chua rửa sạch, cắt múi cau.
        Sả rửa sạch, đập dập, cắt khúc dài khoảng 5cm.
        Tỏi, hành tím, bỏ vỏ, băm nhỏ.
        Củ nén, nghệ đập dập, băm nhỏ.
        Hành lá, ngò rửa sạch, cắt nhỏ. Để riêng phần gốc ngò.
        Bún tươi trụng qua nước sôi.
        Xà lách, bắp cải rửa sạch, để ráo, cắt sợi.
        Ướp cá
        Ướp cá với 1 muỗng canh muối, ½ số hành tím băm, ½ số tỏi, ½ số củ nén, ½ số nghệ băm, 2 muỗng canh nước mắm, 1/3 muỗng cà phê bột ngọt, ½ muỗng cà phê tiêu. Thoa đều hỗn hợp gia vị lên từng miếng cá cho thấm, để ướp trong thời gian 20 phút.
        Xào cà chua, thơm
        Bắc chảo lên bếp, cho vào 2 muỗng canh dầu ăn. Khi dầu nóng, cho số hành tím băm, tỏi băm còn lại vào phi thơm. Tiếp theo, bạn cho 1 muỗng canh dầu màu điều cùng với sả. Tiếp đến cho cà chua, thơm vào xào khoảng 2 phút, tắt bếp.
        Xào cà chua và thơm cho săn lại, không cần nêm gia vị trong bước này. Ảnh: Internet
        Áp chảo cá
        Bắc chảo lên bếp, cho vào 4 muỗng canh dầu ăn. Khi dầu nóng, bạn cho số củ nén, tỏi và nghệ còn lại vào phi thơm. Tiếp theo, bạn cho cá vào áp chảo khoảng 1 phút mỗi mặt.
        Nấu nước dùng
        Đun sôi khoảng 4.5 lít nước. Tiếp theo cho hỗn hợp cà chua, dứa, cá, gốc ngò cùng với 2 muỗng canh nước mắm, 2 muỗng canh muối, 2 muỗng canh hạt nêm, 2 muỗng canh đường phèn, ½ muỗng cà phê bột ngọt vào nồi, đun trên mức lửa nhỏ trong khoảng 30 phút. Bạn cũng cho vào nồi 1 vài củ nén đập dập để nước dùng thơm. Trong quá trình đun, bạn nhớ thường xuyên vớt bọt để nước dùng trong hơn.
        Sau khi đun 30 phút, bạn nêm nếm lại theo khẩu vị của mình rồi tiếp tục đun thêm khoảng 10 phút nữa thì tắt bếp.
        Làm nước chấm ăn kèm
        Giã nhuyễn 3 trái ớt hiểm cùng với 2 tép tỏi, 1 muỗng cà phê đường. Sau đó, bạn đổ vào 3 muỗng canh nước mắm và 1 muỗng cà phê nước cốt chanh, khuấy đều lên.
        Trình bày và thưởng thức
        Cho bún vào tô lượng vừa đủ ăn, chan nước dùng, cá, thơm, cà chua, hành lá, ngò, rắc lên một ít tiêu xay, ăn kèm với nước mắm đã làm ở trên cùng xà lách và bắp cải.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 1kg cá ngừ
        // ½ trái thơm
        // 5 trái cà chua
        // 40g hành tím
        // 30g tỏi
        // 3 trái ớt hiểm
        // 40g củ nén (hành tăm)
        // 5g củ nghệ
        // 2 cây sả
        // 4 đầu hành
        // 4 cây ngò rí có luôn phần gốc
        // 1 muỗng cà phê nước cốt chanh
        // Bún tươi
        // Rau ăn kèm: xà lách, bắp cải
        // Gia vị: muối, đường phèn, đường cát, hạt nêm, nước mắm, bột ngọt, dầu màu điều, tiêu
      ].map((food) => {
        return {
          recipeId: bunCaNgu.recipeId,
          foodId: food.foodId
        };
      })
    });

    const mutVoBuoi = await this.prisma.recipe.create({
      data: {
        name: 'Mứt vỏ bưởi',
        description: `Bước 1: Với vỏ bưởi, bạn bỏ phần cùi bưởi, chỉ lấy phần vỏ, bào sợi.
        Bước 2: Cho nước muối vào ngâm vỏ bưởi trong 5 tiếng. Sau đó nhồi bóp phần vỏ bưởi dưới nước sạch nhiều lần để bớt mặn và the.
        Bước 3: Bắc nồi nấu nước cho sôi rồi cho phèn chua vào, luộc vỏ bưởi trong 5 phút. Vớt ra rồi rửa sạch đi phần phèn chua, để cho ráo nước.
        Bước 4: Cho đường vào vỏ bưởi, trộn đều tay, để cho đường ngấm, tan hết (khoảng từ 5 – 7 tiếng) thì bắt đầu sên với lửa vừa. Đến khi đường sệt lại thì hạ lửa nhỏ, khi đường kết tinh thì cho vào vài giọt vani đảo đều, tắt bếp.
        Bước 5: Đợi cho mứt vỏ bưởi thì bạn có thể cho vào hũ và sử dụng dần.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Vỏ của 2 quả bưởi
        // Đường cát trắng: 140gr
        // Muối
        // Phèn chua
        // Vani
      ].map((food) => {
        return {
          recipeId: mutVoBuoi.recipeId,
          foodId: food.foodId
        };
      })
    });

    const mutChuoiSayKho = await this.prisma.recipe.create({
      data: {
        name: 'Mứt chuối sấy khô',
        description: `Bước 1: Chuối sau khi mua về lột vỏ, cắt bỏ các phần bị dập, đen và cắt khoanh tròn hoặc dài tuỳ theo sở thích (độ dày khoảng 1cm).

        Bước 2: Vắt chanh lấy nước cốt, cho thêm vào chút nước nguội và cho chuối vào ngâm trong 10 phút.
        
        Bước 3: Bật lò nướng 120 độ, lót giấy bạc trên khay nướng và xếp chuối lên khay. Bạn sấy chuối trong vòng 20 phút. Khi chuối chuyển sang màu vàng nâu thì có thể lật mặt và sấy đến khi chuối có độ giòn.
        
        Bước 4: Lăn chuối khi còn nóng qua lớp đường, để nguội rồi cho vào hũ dùng trong 1  2 tuần.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Chuối chín: 1 kg (cách chọn chuối như trên)
        // Đường cát trắng: 500 gr
        // Chanh tươi: 1 quả
      ].map((food) => {
        return {
          recipeId: mutChuoiSayKho.recipeId,
          foodId: food.foodId
        };
      })
    });

    const phoCuonThitBo = await this.prisma.recipe.create({
      data: {
        name: 'phoCuonThitBo',
        description: `Tỏi bóc bỏ, giã nát, vắt lấy nước để riêng, xác tỏi để riêng. Thịt bò rửa sạch, để ráo, cắt lát mỏng, ngang thớ, to bản. Sau đó, ướp vào thịt bò 1 muỗng cà phê hạt nêm, 1 muỗng cà phê tiêu, 1 muỗng cà phê bột ngọt, 2 muỗng cà phê nước mắm, đảo đều lên. Tiếp tục cho nước tỏi, 1 muỗng canh dầu ăn vào, trộn đều lên cho thịt thấm gia vị. Ướp thịt bò với dầu ăn để miếng thịt bóng đẹp hơn.

        Bắc chảo lên bếp, cho vào 4 muỗng canh dầu ăn. Khi dầu nóng, cho xác tỏi vào phi thơm, vàng. Sau đó đổ thịt bò vào xào trên lửa lớn cho vừa chín tới. Không xào thịt quá chín vì sẽ rất dai.
        
        Cắt bánh phở thành những miếng có kích thước 25x12cm. Các loại rau xà lách, rau thơm, ngò rí rửa sạch, để ráo. Đặt 1 lá xà lách, 1 chút rau thơm, 1 ít rau mùi, tiếp đó là thịt bò lên miếng bánh phở và cuốn chặt lại. Lưu ý, bạn nên sắp đều các nguyên liệu để 2 đầu cuốn không bị tóp nhỏ lại. Cứ thế làm cho hết nguyên liệu.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 500g bánh phở (chưa cắt sợi)
        // 200g thịt bò thăn
        // 1 củ tỏi, rau xà lách
        // Rau húng Láng (có thể thay thế bằng rau quế, rau thơm)
        // Rau mùi ta (ngò rí)
        // Gia vị: nước mắm, hạt nêm, bột ngọt, tiêu.
      ].map((food) => {
        return {
          recipeId: phoCuonThitBo.recipeId,
          foodId: food.foodId
        };
      })
    });

    const banhDucMan = await this.prisma.recipe.create({
      data: {
        name: 'Bánh đúc mặn',
        description: `Bước 1: Làm phần vỏ bánh
        Cho 250g bột gạo + 40g bột năng + 300ml nước cốt dừa + 400ml nước vào tô khuấy đều cho hỗn hợp hòa tan. Có thể lược hỗn hợp bột này qua rây để bột mịn hơn. Để bột nghỉ trong phòng mát khoảng 20 phút.
        
        Bước 2: Hấp bánh
        Chuẩn bị khay để hấp bánh, trên khay bánh thoa đều một lớp dầu để chúng ta dễ dàng lấy bánh ra khi bánh chín. Sau đó cho vào khay một lớp bột với độ dày khoảng 1cm, cho khay vào nồi hấp khoảng 7-8 phút thì mở ra xem bánh đặc lại chưa, cho tiếp thêm một lớp bột nữa vào khoảng 1cm rồi hấp tiếp cho đến khi bánh chín. Lấy bánh ra để nguội khoảng 3 phút, cắt thành miếng nhỏ vừa ăn.
        
        Bước 3: Làm nhân bánh
        Tôm khô cho vào nước ấm ngâm khoảng 30 phút cho tôm mềm ra, sau đó rửa sạch, để ráo.
        
        Thịt xay nhuyễn bạn đem ướp theo khẩu vị, sau đó để thịt khoảng 15 phút cho ngấm.
        
        Bước 4: Xào nhân thịt bánh đúc
        Hành tím và tỏi băm nhuyễn, nấm mèo thái sợi, sau đó bắc chảo lên bếp đun nóng, khi dầu già bạn cho tỏi và hành tím vào phi thơm, rồi tiếp tục cho thịt vào xào đến khi gần chín thì đổ tôm khô và nấm mèo vào đảo đều tay, nêm nếm lại gia vị và tắt bếp.
        
        Bước 5: Làm nước mắm chấm bánh đúc
        Pha 1 muỗng canh nước + 1 muỗng cà phê dấm + 3 muỗng cà phê đường + 4 muỗng cà phê nước mắm khuấy đều trong chén. Tiếp theo cho ớt, tỏi băm nhuyễn và cà rốt xắt sợi vào khuấy đều. Nêm nếm lại nước chấm cho vừa ăn.
        
        Bước 6: Trình bày và thưởng thức
        Cắt bánh đúc ra thành miếng vừa ăn, sau đó cho một ít nhân bánh để lên trên, chan nước mắm vào và dùng ngay khi bánh còn nóng hổi.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 250g bột gạo
        // 40g bột năng
        // 1/2 muỗng cà phê muối
        // 300ml nước cốt dừa
        // 400ml nước
        // 150g thịt xay nhuyễn
        // 100g tôm khô
        // 50g nấm mèo
        // 1 củ hành tím
        // 1 củ tỏi
        // Đường, hạt nêm, nước mắm, chanh
        // 1 trái ớt
      ].map((food) => {
        return {
          recipeId: banhDucMan.recipeId,
          foodId: food.foodId
        };
      })
    });

    const xoiHoaDauBiec = await this.prisma.recipe.create({
      data: {
        name: 'Xôi hoa đậu biếc',
        description: `Bước 1: Sơ chế nguyên liệu
        Hoa đậu biếc khô bạn đem ngâm cùng nước sôi, trong khoảng 5 – 7 phút cho hoa ra hết màu. Sau đó, bạn vớt hoa ra và lấy phần nước màu xanh tím.
        Gạo nếp bạn đem vo sạch để ráo. Tiếp theo, bạn cho gạo nếp vào ngâm ngập trong nước hoa đậu biếc ít nhất từ 6 7 tiếng hoặc tốt nhất bạn nên ngâm qua đêm. Sau khi ngâm xong, bạn vớt gạo ra, cho ít muối vào rồi trộn đều lên, để gạo nghỉ 5 phút.
        Mè trắng bạn đem rang vàng rồi cho ra chén.
        Đậu phộng bạn đem rửa với nước, rồi để ráo. Sau đó, cho vào chảo rang vàng. Khi rang xong, bạn cho đậu ra , chà xát cho sạch vỏ rồi giã nhỏ đậu phộng cho vào chén.
        Dừa nào bạn cho ra thau, cho nước ấm vào nhào rồi vắt lấy nước cốt.
        Bước 2: Nấu xôi
        Bạn cho nước vào nồi hấp rồi cho gạo đã ngấm vào xửng hấp, đặt nồi hấp lên bếp đun sôi nước. Bạn cho đường cùng một nửa nước cốt dừa vào xôi khi nước trong nồi hấp sôi lên khoảng 5 phút, đảo đều tay cho xôi ngấm.
        Hấp thêm khoảng 10 phút nữa thì bạn cho tiếp một nửa phần nước dừa vào, trộn đều. Tiếp theo, bạn đậy kín nắp nồi cho xôi chín. Khi xôi mềm dẻo không còn lõi ở giữa là đã chín rồi đấy!
        Bước 3: Hoàn thành
        Khi xôi chín, bạn cho xôi ra đĩa. Rắc ít mè rang lên trên. Đậu phộng và vừng bạn đem giã nhỏ rồi làm muối vừng để ăn kèm với xôi hoa đậu biếc. Hoặc bạn cũng có thể ăn kèm xôi hoa đậu biếc với ruốc, chả đều được.
        
        Món xôi hoa đậu biếc khi hoàn thành có màu xanh đẹp mắt, thơm lừng hương nếp và có vị beo béo của nước cốt dừa. Cách làm món xôi này cũng đơn giản đúng không nào. Vậy còn chần chừ gì mà không bắt tay vào chế biến ngay để chiêu đãi cho cả gia đình thân yêu nào! Chúc bạn thành công.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 10 hoa đậu biếc khô
        // 400g gạo nếp
        // Dừa nạo
        // Đường, muối
        // Đậu phộng
        // Mè trắng
      ].map((food) => {
        return {
          recipeId: xoiHoaDauBiec.recipeId,
          foodId: food.foodId
        };
      })
    });

    const xoiComDua = await this.prisma.recipe.create({
      data: {
        name: 'Xôi cốm dừa',
        description: `Bước 1: Sơ chế nguyên liệu
        Thịt bò mua về, bạn đem rửa sạch rồi để ráo nước, sau đó cắt thành những lát mỏng vừa ăn. Lưu ý, phải cắt ngang thớ để thịt mềm, dễ ăn nhé!
        Kim chi Hàn Quốc, bạn chia nước và cải ra thành hai phần. Phần cải bạn tiến hành vắt ráo nước rồi cắt thành những miếng vừa ăn. Còn nước kim chi bạn nếm xem vị cay đã vừa miệng chưa, nếu chưa có thể cho thêm một ít ớt bột Hàn Quốc. Cách làm này vừa tạo màu đẹp vừa tạo độ cay chuẩn vị cho cách nấu canh kim chi đậu phụ và thịt bò kiểu Hàn Quốc này.
        Tỏi tây rửa sạch, để ráo nước rồi đập dập, băm nhỏ.
        Nấm kim châm bạn cắt bỏ phần chân, rồi ngâm với nước muối loãng khoảng 15 phút, sau đó đem rửa lại bằng nước sạch một lần nữa rồi để ráo nước, cắt khúc ngắn khoảng 4-5cm.
        Đậu phụ non rửa sạch rồi cắt thành những khối vuông vừa ăn. Lưu ý nên chọn đậu phụ có màu trắng ngà không nên chọn những miếng đậu phụ ngả sang màu vàng, cầm thấy nặng tay và cứng vì đó là đậu phụ chứa nhiều thạch cao, gây ảnh hưởng đến sức khỏe.
        Bước 2: Ướp thịt bò
        Cho thịt bò đã được cắt lát mỏng vào bát rồi ướp với gia vị gồm: hạt tiêu xay, 1/2 thìa cà phê muối, 1 thìa canh dầu ăn, rồi trộn đều lên, ướp khoảng 15 phút cho thịt bò ngấm gia vị đậm đà.
        Bước 3: Xào thịt bò
        Đặt nồi lên bếp, cho dầu ăn vào, dầu nóng thì bạn cho tỏi tây băm nhỏ vào phi thơm. Tiếp đó, cho thịt bò vào xào chung với tỏi tây.
        Khi cho thịt bò vào xào, bạn nhớ chỉnh lửa to, đảo nhanh tay cho thịt bò săn lại, thịt vừa chín tới thì trút ra bát để riêng. Bạn lưu ý, thịt bò cần xào nhanh tay để thịt không bị dai và khi chín thì trút ra bát ngay lập tức là cách giữ độ chín vừa tới cho thịt bò.
        Bước 4: Nấu canh
        Tiếp đến, bạn cho thêm dầu ăn vào nồi vừa dùng rồi thả nấm kim châm vào đảo qua khoảng 3 phút thì cho nước vào đun sôi với lượng vừa đủ.
        Khi nước sôi thì cho thịt bò, kim chi, nước kim chi vào đun sôi một lần nữa là được. Cuối cùng là thêm đậu phụ non vào. Sau khi đã thêm đậu phụ non thì bạn nên khuấy nhẹ tay tránh làm vỡ đậu.
        Sau đó, tiến hành nêm nếm gia vị: muối, nước mắm, hạt nêm, bột ngọt vào cho món canh được ngon, ngọt, hấp dẫn hơn rồi tắt bếp.
        Thêm ít hành lá nếu muốn món canh có màu sắc đẹp mắt.
        Bước 5: Hoàn thành
        Canh kim chi Hàn Quốc đã hoàn thành thì bạn cho ra tô rồi dùng kèm với cơm sẽ rất ngon. Với hương vị chua cay mới lạ giúp kích thích vị giác rất tốt. Ngoài ra, đây còn là một lựa chọn tuyệt vời để chăm sóc cả nhà, giúp gia đình có một bữa cơm thật ấm lòng và ngon miệng trong những ngày thời tiết se lạnh.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 500g cốm xanh
        // 180g đậu xanh không vỏ
        // 150g hạt sen
        // 120g dừa sợi
        // Mè trắng rang
        // 100g đường trắng
        // 100ml dầu vừng
      ].map((food) => {
        return {
          recipeId: xoiComDua.recipeId,
          foodId: food.foodId
        };
      })
    });

    const cachNauCanhKimChiHanQuoc = await this.prisma.recipe.create({
      data: {
        name: 'Cách nấu canh kim chi Hàn Quốc',
        description: `"Bước 1: Sơ chế nguyên liệu
        Thịt bò mua về, bạn đem rửa sạch rồi để ráo nước, sau đó cắt thành những lát mỏng vừa ăn. Lưu ý, phải cắt ngang thớ để thịt mềm, dễ ăn nhé!
        Kim chi Hàn Quốc, bạn chia nước và cải ra thành hai phần. Phần cải bạn tiến hành vắt ráo nước rồi cắt thành những miếng vừa ăn. Còn nước kim chi bạn nếm xem vị cay đã vừa miệng chưa, nếu chưa có thể cho thêm một ít ớt bột Hàn Quốc. Cách làm này vừa tạo màu đẹp vừa tạo độ cay chuẩn vị cho cách nấu canh kim chi đậu phụ và thịt bò kiểu Hàn Quốc này.
        Tỏi tây rửa sạch, để ráo nước rồi đập dập, băm nhỏ.
        Nấm kim châm bạn cắt bỏ phần chân, rồi ngâm với nước muối loãng khoảng 15 phút, sau đó đem rửa lại bằng nước sạch một lần nữa rồi để ráo nước, cắt khúc ngắn khoảng 4-5cm.
        Đậu phụ non rửa sạch rồi cắt thành những khối vuông vừa ăn. Lưu ý nên chọn đậu phụ có màu trắng ngà không nên chọn những miếng đậu phụ ngả sang màu vàng, cầm thấy nặng tay và cứng vì đó là đậu phụ chứa nhiều thạch cao, gây ảnh hưởng đến sức khỏe.
        Bước 2: Ướp thịt bò
        Cho thịt bò đã được cắt lát mỏng vào bát rồi ướp với gia vị gồm: hạt tiêu xay, 1/2 thìa cà phê muối, 1 thìa canh dầu ăn, rồi trộn đều lên, ướp khoảng 15 phút cho thịt bò ngấm gia vị đậm đà.
        Bước 3: Xào thịt bò
        Đặt nồi lên bếp, cho dầu ăn vào, dầu nóng thì bạn cho tỏi tây băm nhỏ vào phi thơm. Tiếp đó, cho thịt bò vào xào chung với tỏi tây.
        Khi cho thịt bò vào xào, bạn nhớ chỉnh lửa to, đảo nhanh tay cho thịt bò săn lại, thịt vừa chín tới thì trút ra bát để riêng. Bạn lưu ý, thịt bò cần xào nhanh tay để thịt không bị dai và khi chín thì trút ra bát ngay lập tức là cách giữ độ chín vừa tới cho thịt bò.
        Bước 4: Nấu canh
        Tiếp đến, bạn cho thêm dầu ăn vào nồi vừa dùng rồi thả nấm kim châm vào đảo qua khoảng 3 phút thì cho nước vào đun sôi với lượng vừa đủ.
        Khi nước sôi thì cho thịt bò, kim chi, nước kim chi vào đun sôi một lần nữa là được. Cuối cùng là thêm đậu phụ non vào. Sau khi đã thêm đậu phụ non thì bạn nên khuấy nhẹ tay tránh làm vỡ đậu.
        Sau đó, tiến hành nêm nếm gia vị: muối, nước mắm, hạt nêm, bột ngọt vào cho món canh được ngon, ngọt, hấp dẫn hơn rồi tắt bếp.
        Thêm ít hành lá nếu muốn món canh có màu sắc đẹp mắt.
        Bước 5: Hoàn thành
        Canh kim chi Hàn Quốc đã hoàn thành thì bạn cho ra tô rồi dùng kèm với cơm sẽ rất ngon. Với hương vị chua cay mới lạ giúp kích thích vị giác rất tốt. Ngoài ra, đây còn là một lựa chọn tuyệt vời để chăm sóc cả nhà, giúp gia đình có một bữa cơm thật ấm lòng và ngon miệng trong những ngày thời tiết se lạnh."`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Kim chi Hàn Quốc: 200gr
        // Nấm kim châm: 200gr
        // Tỏi tây (Hành boaro)
        // Thịt bò ngon: 200gr
        // Đậu phụ non: 2 miếng
        // Gia vị: Muối, hạt nêm, dầu ăn, bột ngọt, tiêu xay
      ].map((food) => {
        return {
          recipeId: cachNauCanhKimChiHanQuoc.recipeId,
          foodId: food.foodId
        };
      })
    });

    const canhGheRauMuong = await this.prisma.recipe.create({
      data: {
        name: 'Canh ghẹ rau muống',
        description: `Bước 1: Sơ chế nguyên liệu
        Ghẹ mua về bạn dùng bàn chải chà và rửa sạch. Nếu muốn bạn có thể gỡ bỏ mai ghẹ rồi dùng kéo cắt ghẹ làm đôi hoặc để nguyên con nấu đều được nhé.
        Rau muống nhặt lấy phần ngọn non, bỏ những lá úa và già rồi rửa sạch, ngắt thành từng khúc ngắn vừa ăn.
        Hành tím lột vỏ, rửa sạch, thái nhỏ.
        Bước 2: Chế biến
        Đặt một nồi lên trên bếp, thêm dầu ăn vào rồi cho hành băm vào phi thơm vàng, nhanh tay cho ghẹ vào đảo đến khi ghẹ chuyển sang màu đỏ. Lúc này, bạn mới đổ vào một lượng nước vừa đủ vào nấu canh.
        Nêm nếm gia vị: bột canh, bột nêm sao cho vừa miệng, đun sôi lên.
        Khi thấy ghẹ chín tới thì nhanh tay thả rau muống vào, đợi canh sôi trở lại và thấy rau chín là bạn đã hoàn thành cách nấu canh ghẹ rau muống cực kỳ thơm ngon và bổ dưỡng rồi đấy.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 1 mớ rau muống
        // 3 con ghẹ hoặc số lượng tùy thích
        // 1 củ hành khô
        // Gia vị gồm hạt nêm, bột canh
      ].map((food) => {
        return {
          recipeId: canhGheRauMuong.recipeId,
          foodId: food.foodId
        };
      })
    });

    const chaoHauHatSen = await this.prisma.recipe.create({
      data: {
        name: 'Cháo hàu hạt sen',
        description: `Bước 1: Sơ chế
        Đầu tiên, gạo vo sạch, cho vào 2 chén nước. Hạt sen bỏ tim sen, tách đôi.
        Sơ chế hàu: Dùng bàn chải chà sạch theo truyền thống. Sau đó, đem hàu ngâm với nước sạch khoảng 2 tiếng cho lớp bùn bên ngoài hàu được mềm ra sẽ dễ dàng rửa sạch hàu.
        Sau khi ngâm xong bạn lấy hàu ra, tiếp tục dùng bàn chải lớn chà từ phần cuống nắp hàu cho tới phần miệng nắp hàu theo đường vân cong trên lớp vỏ để làm sạch. Vừa chà vừa rửa dưới vòi nước để lớp bùn bên ngoài trôi hết. Đây cũng là cách phổ biến của những hộ gia đình mua hàu về chế biến.
        Bước 2: Bây giờ, bạn đem nấu gạo với hạt sen thành cháo.
        Bước 3: Nấm rơm bỏ gốc, ngâm vào bột năng cho trắng và ngon, xắt hạt lựu, hàu bằm nhỏ.
        Bước 4: Lấy 10gr dầu ăn, đầu hành lá đem đi phi thơm, cho hàu vào xào, rồi thả nấm vào.
        Bước 5: Cuối cùng nêm nếm gia vị cho vừa ăn, trút phần xào cho vào cháo đang sôi, đậy nấp trong 8 phút là múc ra tô cho bé ăn nóng nhé.
        `
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 50gr hàu sữa
        // 20gr hạt sen
        // 30gr nấm rơm
        // 30g gạo
        // 10gr dầu ăn
        // Gia vị: muối, đường, nước mắm
      ].map((food) => {
        return {
          recipeId: chaoHauHatSen.recipeId,
          foodId: food.foodId
        };
      })
    });

    const chaoKhoaiLangThitGa = await this.prisma.recipe.create({
      data: {
        name: 'Cháo khoai lang thịt gà',
        description: `Bước 1: Sơ chế nguyên liệu
        Khoai lang, củ cải đem gọt vỏ, rửa sạch, cho vào nồi hấp chín. Sau đó, lấy ra ngoài cho vào tô, dùng muỗng nghiền nát mịn.
        Thịt gà rửa sạch, sau đó cho vào nồi luộc cùng với 1 chút muối. Khi gà chín vớt ra, để nguội, xé nhỏ rồi đem xay nhuyễn.
        Bước 2: Nấu cháo khoai lang thịt gà
        Gạo vo sạch cho vào nồi nấu thành cháo chín nhừ. Dùng muỗng tán nhuyễn cháo chín ra sao cho thật mềm mịn. Tiếp theo, cho hết thịt gà xay nhuyễn và hỗn hợp rau củ ở trên vào nấu cùng cháo. Có thể cho thêm nước nếu thấy cháo bị đặc, khuấy đều đến khi cháo sôi và sánh mịn thì tắt bếp.
        
        Bước 3: Hoàn thành
        Cho cháo ra chén hoặc tô, để bớt nóng và cho bé thưởng thức ngay.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 30gr gạo tẻ
        // 1 miếng ức gà
        // 1/2 củ khoai lang
        // 1/3 củ củ cải
      ].map((food) => {
        return {
          recipeId: chaoKhoaiLangThitGa.recipeId,
          foodId: food.foodId
        };
      })
    });

    const nuocChamAnVoiVitLuoc = await this.prisma.recipe.create({
      data: {
        name: 'Nước chấm ăn với vịt luộc',
        description: `Bạn cho nước mắm hòa tan với ½ muỗng café đường, khuấy đều cho đường tan hết.
        Gọt vỏ gừng, thái nhỏ và cho vào bát nước mắm cùng với tỏi băm.
        Vắt nước cốt chanh cho vào nước mắm, khuấy đều. Lúc này bạn có thể nêm nếm và điều chỉnh lại cho vị cân bằng.
        Thái ớt nhỏ, bỏ cuống và cho vào, khuấy đều.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Nước mắm (loại ngon): 2 muỗng canh
        // Gừng, tỏi băm, chanh (1 trái), ớt tươi
        // Đường cát trắng
      ].map((food) => {
        return {
          recipeId: nuocChamAnVoiVitLuoc.recipeId,
          foodId: food.foodId
        };
      })
    });

    const chimCutNuongMatOng = await this.prisma.recipe.create({
      data: {
        name: 'Chim cút nướng mật ong',
        description: `Bước 1: Chim cút khi mua về bạn đem làm sạch, dùng muối chà xát vào thân chim cút rồi xả lại với nước sạch. Sau đó, nếu chim cút lớn, bạn có thể chặt làm đôi.

        Bước 2: Bạn cho chim cút vào tô, rồi cho vào 1 muỗng ngũ vị hương, 2 muỗng mật ong, 1 muỗng dầu hào, 1 muỗng hạt nêm, 1 muỗng đường, hạt tiêu, 1 muỗng nước tương, 1 muỗng rượu trắng, tỏi băm nhuyễn cùng ít muối. Tiếp theo, bạn dùng đũa trộn đều lên và dùng màng bọc thực phẩm bọc kín lại cho vào tủ lạnh ướp ít nhất là 3 tiếng hoặc tốt nhất là qua đêm để chim cút ngấm đều gia vị.
        
        Bước 3: Để món chim cút nướng mật ong ngon hết sẩy, bạn nên nướng bằng bếp than hoa. Xếp chim cút lên trên vỉ nướng rồi nướng với lửa vừa cho chim cút chín vàng 2 mặt. Khi nướng, bạn dùng cọ phết nướp ướp lên người chim cút để chim không bị khô và đậm vị hơn.
        
        Bước 4: Trong lúc nướng, bạn cho vào chén 1 muỗng mật ong và 1 muỗng màu dầu điều, rồi trộn đều lên. Khi chim cút chín vàng, bạn dùng cọ quét đều lên khắp mặt chim cút nướng thêm vài phút để món ăn có màu đẹp hơn.
        
        Vậy là hoàn thành món chim cút nướng mật ong. Bạn cho chim cút ra đĩa, xếp thêm rau xà lách, húng lủi cùng cà chua thái lát là thưởng thức được rồi đấy. Đừng quên chuẩn bị thêm chén muối tiêu chanh ăn kèm nhé!`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 4 con chim cút
        // Ngũ vị hương
        // Mật ong
        // Dầu hào, nước tương, bột ngọt, đường, hạt nêm
        // Tỏi
        // Rau ăn kèm: Xà lách, cà chua, rau húng
      ].map((food) => {
        return {
          recipeId: chimCutNuongMatOng.recipeId,
          foodId: food.foodId
        };
      })
    });

    const cheDuaDam = await this.prisma.recipe.create({
      data: {
        name: 'Chè dừa dầm',
        description: `Bước 1: Làm thạch rau câu dừa
        Dừa non bạn đem chặt lấy nước, giữ lại phần cơm dừa. Sau đó, ½ cơm bạn đem bào thành từng sợi mỏng, rải dừa sợi vào khay rau câu. Phần còn lại bạn cắt sợi dày để chén riêng.
        
        Bạn cho bột rau câu ra đĩa, trộn đều với đường. Sau đó cho nước lọc cùng với nước dừa tươi vào nào, vặn lửa vừa nấu sôi. Khi nước sôi, bạn cho hỗn hợp rau câu vào, vừa cho vừa khuấy đều tay.
        
        Khi bột rau câu tan hẳn thì bạn tắt bếp và đổ rau câu ra khay đã có dừa, bạn có thể cho vào khay có hình hoa, trái tim hoặc khay vuông rồi dùng dao cắt hạt lựu. Để khay rau câu nguội hẳn thì bạn cho chúng vào ngăn mát tủ lạnh.
        
        Bưóc 2: Làm trân châu dừa
        Cho 600g bột năng vào tô ráo nước, bạn có thể đổ qua rây để bột năng được mịn hơn. Tiếp đến, cho nước ấm vào rồi trộn bột đều lên, nhào cho bột thật nhuyễn, mịn. Nhào đến khi bột dẻo không dính tay là được. Bạn dùng màng bọc thực phẩm bao bột lại, để bột nghỉ 30 phút.
        
        Tiếp theo, linh hồn của trân châu dừa chính là cùi dừa. Do đó, bạn cần chọn được loại không quá non, không quá già. Sau đó, bạn gọt sạch lớp vỏ nâu bên ngoài, rửa sạch với nước. Rồi cắt dừa thành từng hạt nhỏ, bằng đầu đũa để làm nhân trân châu.
        
        Đến công đoạn nặn trân châu. Đầu tiên, bạn chia bột thành từng cục bột nhỏ rồi ấn dẹt bột, sao cho đặt vừa viên dừa vừa thái. Vo trò bột kín nhân dừa để nhân không lộ ra ngoài, không méo mó. Thực hiện đến khi hết cùi dừa là được.
        
        Tiếp đến, bạn chuẩn bị nấu nồi nước sôi. Khi nước sôi bùng lên, bạn thả trân châu dừa vào, luộc đến khi trân châu nổi lên mặt nước thì bạn vớt chúng ra và cho ngay vào thau nước lạnh. Như vậy, trân châu dừa sẽ giòn, không bị dính và dẻo hơn.
        Bước 3: Nấu sữa dừa
        Bạn bào dừa thành sợi mỏng rồi cho nước ấm vào nhào, vắt lấy nước cốt. Sau đó, cho hết phần nước cốt dừa vào nồi cùng ít muối, đường rồi cho lên bếp nấu với lửa nhỏ.
        
        Khi nước cốt dừa sôi lăn tăn thì bạn cho bột bắp đã khuấy với ít nước vào để tạo độ sánh. Tắt bếp và cho sữa đặc vào khuấy đều tay, để nguội để phần sữa dừa cho vị béo ngậy.
        
        Bước 4: Hoàn thành
        Bạn cho rau câu dừa và trân châu dừa vào ly, rồi cho đá lên, tiếp đến chan sữa dừa vào. Rắc sợi dừa lên trên mặt là hoàn thành cách nấu chè dừa dầm rồi đấy. Bạn cũng có thể cho thêm mè rang hoặc đậu phộng rang giã nhỏ vào để tạo vị beo béo nữa đấy!
        
        Vậy là cách nấu chè dừa dầm đã hoàn thành. Bạn đã có được thành phẩm thanh mát, béo ngọt và thơm dịu nhẹ giúp xua tan cơn nóng bức. Cet.edu.vn hy vọng rằng với cách làm trên, bạn sẽ trổ tài chiêu đãi cả gia đình thân yêu của mình món ăn ngon vào dịp cuối tuần nhé! Chúc bạn thành công.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Phần thạch rau câu dừa
        // 1 trái dừa non
        // 3 gr thạch rau câu giòn
        // 1 gói bột rau câu dẻo
        // 70g đường
        // Phần sữa dừa
        // 200g dừa nạo
        // 80g đường
        // Sữa đặc, muối
        // Đá
        // Bột bắp
        // Phần trân châu dừa
        // 300g cùi dừa tươi
        // 600g bột năng
        // Nước sôi
      ].map((food) => {
        return {
          recipeId: cheDuaDam.recipeId,
          foodId: food.foodId
        };
      })
    });

    const cheBaBa = await this.prisma.recipe.create({
      data: {
        name: 'Chè bà ba',
        description: `Bước 1: Sơ chế nguyên liệu
        Đậu xanh bạn chọn loại đã bóc vỏ rồi mang đi ngâm nước qua đêm cho đậu mềm. Tương tự, rong biển bạn cũng làm như thế, nhưng trước hết phải rửa sạch đã nhé!
        Bột báng và bột khoai ngâm mỗi thứ trong một âu riêng trước khi nấu chè khoảng 3 giờ đồng hồ.
        Đậu phộng thì luộc chín.
        Với cơm dừa nạo, bạn cho vào khoảng 300ml nước nóng vào, khuấy đều rồi vắt lấy nước cốt dừa để riêng. Tiếp tục đổ thêm 2 lít nước nóng vào phần cơm dừa rồi vắt lấy nước cốt dảo.
        Khoai mì, khoai lang, khoai môn rửa sạch, gọt vỏ, cắt thành từng khối vuông vừa ăn. Lưu ý, với khoai môn, bạn nên đeo bao tay lúc gọt vỏ và cắt khoai để tránh bị ngứa.
        Bước 2: Nấu chè bà ba Nam Bộ
        Đầu tiên, bạn cho 2 lít nước dừa dảo đã chuẩn bị ở bước 1 vào nồi. Sau đó, cho đậu xanh vào nấu cho sôi. Khi sôi tiếp tục cho khoai mì, khoai lang vàng, khoai môn vào nấu cho đến khi các loại khoai mềm thì thêm đậu phộng, bột báng, bột khoai và lá dứa vào nấu cùng.
        Khi bột báng và bột khoai nở mềm, bạn cho thêm rong biển, đường và 1/2 muỗng cà phê muối vào để món chè được đậm đà hơn. Lúc này, bạn nhớ chỉnh lửa liu riu để đường được ngấm vào các loại nguyên liệu. Đây là bí quyết giúp cho món chè bà ba ngon đậm vị như bạn thưởng thức ngoài hàng.
        Cuối cùng, bạn nếm thử độ ngọt của chè đã vừa miệng chưa. Nếu chưa thì có thể cho thêm đường vào nhé. Sau đó, bạn cho nước cốt dừa vào, khuấy đều rồi để khoảng 5 giây thì tắt bếp.
        Bước 3: Thành phẩm chè bà ba Nam Bộ
        Món chè bà ba Nam Bộ ngon nhất là khi dùng nóng. Bạn chỉ cần múc chè ra chén và thưởng thức cùng với gia đình và người thân. Một buổi chiều cuối tuần, vừa nhâm nhi chén chè thơm béo, ngọt thanh vừa cùng người thân trò chuyện thì thật tuyệt vời, phải không nào.
        
        Chỉ với cách nấu chè bà ba Nam Bộ đơn giản như vậy là bạn đã hoàn thành một món ăn vặt đúng điệu theo kiểu người dân Nam Bộ rồi. Vào bếp thực hiện và thưởng thức ngay, bạn nhé! Chúc các bạn thành công!`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 350gr khoai lang ruột vàng
        // 200gr khoai mì
        // 200gr khoai môn cau
        // 100gr đậu xanh không vỏ
        // 150gr đậu phộng
        // 80gr rong biển
        // 80gr bột báng
        // 80gr bột khoai
        // 500gr cơm dừa nạo
        // 400gr đường trắng
        // 2 lá dứa
        // 1/2 muỗng cà phê muối
      ].map((food) => {
        return {
          recipeId: cheBaBa.recipeId,
          foodId: food.foodId
        };
      })
    });

    const monCaHapXiDau = await this.prisma.recipe.create({
      data: {
        name: 'Món cá hấp xì dầu',
        description: `Bước 1: Sơ chế các nguyên liệu
        Cá diêu hồng bạn nên chọn mua những con còn tươi sống. Sau đó cắt bỏ mang, cạo sạch vảy, bỏ nội tạng cá, tránh làm vỡ mật để cá không bị đắng rồi rửa thật sạch với nước muối pha loãng cho hết nhớt, rồi rửa lại với nước, để ráo. Để nguyên con cá, dùng dao khứa lên thân cá 2 3 đường chéo để cá ngấm gia vị khi ướp.
        
        Hành tím, tỏi bóc vỏ, rửa sạch, đập dập và băm nhỏ.
        
        Gừng cạo sạch vỏ, rửa sạch, thái sợi nhỏ.
        
        Hành tây bóc vỏ, rửa sạch, thái sợi.
        
        Hành lá, ngò nhặt rửa sạch, để ráo rồi cắt khúc vừa phải.
        
        Bước 2: Ướp cá trước khi hấp
        Cho cá vào thố hoặc đĩa lớn, sau đó nêm: 1 thìa cà phê hạt nêm, 1 thìa cà phê đường, 1 thìa canh xì dầu, 1 1 thìa cà phê hành tím băm nhỏ, trộn đều rồi để ướp trong khoảng 1 giờ để cho cá ngấm gia vị.
        Bước 3: Hấp cá
        Bạn lấy một cái đĩa nhôm sâu lòng rồi đặt cá vào, rưới đều nước ướp cá lên bề mặt, sau đó cho thêm 1 thìa canh dầu hào phủ đều khắp thân cá. Sau đó, xếp hành tây, hành lá và gừng rải đều lên trên bề mặt cá rồi đặt vào nồi hoặc xửng hấp, để hấp khoảng 25 – 30 phút là được.
        
        Để kiểm tra xem cá chín kỹ chưa, bạn dùng tăm đâm xiên lên mình cá, nếu thấy thịt cá không bị dính và nước cá không còn màu đỏ là cá đã chín.
        
        Bước 4: Làm xốt và trình bày
        Bắc chảo lên bếp làm nóng, cho 2 thìa canh dầu ăn vào tráng đều đun sôi thì cho tỏi và hành tím băm vào phi thơm. Nêm thêm nửa thìa cà phê hạt nêm và nửa thìa cà phê muối, đảo đều và tắt bếp.
        Lấy đĩa cá hấp ra, rưới đều phần dầu và hành tỏi đã phi thơm lên mình cá, giúp cá có màu bóng, đẹp, thơm nức mũi và kích thích khướu giác lẫn vị giác.Cuối cùng, bạn rắc thêm 1 chút tiêu xay nữa là xong.
        
        Để cảm nhận được trọn vẹn hương thơm và vị tươi ngon của món cá hấp xì dầu, bạn nên thưởng thức khi cá còn nóng cùng cơm, bún hoặc bánh tráng đều được.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 1 kg cá diêu hồng
        // 1 củ hành tây
        // 1 củ gừng
        // 1 củ hành tím
        // 1 củ tỏi
        // 30g hành lá
        // 30g rau ngò
        // 1 quả ớt
        // Xì dầu (nước tương), dầu hào
        // Gia vị: tiêu, hạt nêm, muối, đường
      ].map((food) => {
        return {
          recipeId: monCaHapXiDau.recipeId,
          foodId: food.foodId
        };
      })
    });

    const tomHumHapBia = await this.prisma.recipe.create({
      data: {
        name: 'Tôm hùm hấp bia',
        description: `Tôm cắt bớt râu, rút chỉ, rửa sạch, để ráo. Gừng cạo vỏ, rửa sạch, đập dập, băm nhỏ. Hành lá và ngò rửa sạch, xắt nhỏ
        Bắc chảo lên bếp đun nóng lên, cho 1 thìa canh dầu vào đun sôi thì cho gừng vào xào sơ. Cho tiếp rượu vang trắng và 100ml nước vào, nêm thêm hạt nêm và muối.
        Cho tôm hùm vào nồi hấp, đậy nắp kín, đun trên lửa nhỏ đến khi tôm hùm chín trong khoảng 20 25 phút. Nếu thiếu nước thì bạn châm thêm vào.
        Tôm chín thì trình bày ra đĩa, trang trí với hành và ngò cho đẹp mắt
        Dùng nóng, thưởng thức cùng rượu vang trắng`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 3 – 4 con tôm hùm
        // 150ml rượu vang trắng
        // Gia vị: hạt nêm, muối
        // Dầu ăn hoặc dầu Olive
        // 1 nhánh gừng
        // Ngò và hành lá
      ].map((food) => {
        return {
          recipeId: tomHumHapBia.recipeId,
          foodId: food.foodId
        };
      })
    });

    const goiSuaXoaiXanh = await this.prisma.recipe.create({
      data: {
        name: 'Gỏi sứa xoài xanh',
        description: `Bước 1: Sơ chế nguyên liệu
        Để đảm bảo an toàn vệ sinh, nên chọn loại sứa đã đóng gói tẩm gia vị sẵn trong các siêu thị. Sứa mua về đem rửa sạch, trụng qua nước sôi trong 5 – 10 phút. Sau khi trụng vớt sứa cho vào một tô nước đá để thịt sứa giữ trọn độ giòn dai, tươi ngon.
        Xoài xanh, cà rốt gọt vỏ rồi dùng dụng cụ bào thành sợi mỏng. Đem xoài xanh, cà rốt đã bào xong bóp với một ít muối rồi vắt nhẹ. Điều này sẽ giúp giảm bớt vị chua của xoài và mùi hăng của cà rốt. Tỏi bóc vỏ, rửa sạch, băm nhuyễn. Ớt bỏ hạt, băm nhuyễn. Rau thơm rửa sạch, để ráo nước và thái mỏng. Đậu phộng rang đập dập vừa phải.
        
        Bước 2: Pha nước trộn gỏi sứa
        Để pha nước trộn gỏi sứa, bạn pha theo công thức sau: hòa tan 2 muỗng đường trong nước để đường tan hết, tiếp đến cho vào 2 muỗng nước mắm, ½ muỗng muối, 2 muỗng nước cốt chanh. Sau đó đánh đều hỗn hợp với tỏi, ớt đã băm nhuyễn.
        
        Bước 3: Trộn gỏi sứa xoài xanh
        Sau khi sơ chế xong các nguyên liệu, cho sứa, cà rốt, xoài xanh và rau thơm vào tô sạch, rưới nước trộn gỏi vào và trộn đều. Để khoảng 10 phút cho gia vị ngấm đều vào thịt sứa. Sau cùng cho gỏi sứa ra đĩa và trang trí món ăn với đậu phộng rang.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // 200g sứa
        // 1 quả xoài xanh
        // 1 củ cà rốt
        // ½ bát đậu phộng rang
        // Gia vị: nước mắm, chanh, đường, ớt, tỏi
        // Bò khô
        // Rau thơm, rau mùi
      ].map((food) => {
        return {
          recipeId: goiSuaXoaiXanh.recipeId,
          foodId: food.foodId
        };
      })
    });
    const goiGaBapCai = await this.prisma.recipe.create({
      data: {
        name: 'Gỏi gà bắp cải',
        description: `Bước 1: Sơ chế đùi gà
        Đùi gà bạn mua loại đã làm sẵn ngoài chợ hoặc siêu thị. Nêm mua gà ta sẽ giúp món gỏi gà bắp cải dai ngon và thơm hơn. Sau khi mua về bạn đem rửa sạch cùng với hỗn hợp nước muối pha loãng cùng một ít rượu trắng cho sạch mùi rồi rửa lại nước lọc lần nữa cho sạch hẳn.
        Tiếp tục cho đùi gà vào nồi, đổ nước ngập đùi gà, cho thêm nhánh gừng đập dập vào rồi bắc lên bếp luộc. Luộc với lửa lớn cho sôi thì hạ nhỏ lửa, đến khi gà vừa chín tái thì tắt bếp, vẫn đậy nắm vung cho thịt gà chín hẳn thì vớt ra để nguội. Mang bao tay nilon rồi xé nhỏ đùi gà để riêng ra tô hoặc đĩa.
        Tiếp tục ướp thịt gà xé với: 1/4 thìa cà phê muối, 1/4 thìa cà phê tiêu, trộn đều và để khoảng 15 20 phút.
        Bước 2: Sơ chế bắp cải và các nguyên liệu khác
        Để cho món gỏi ngon thì bạn cần sơ chế bắp cải và hành tây sao cho giảm bớt độ hăng của chúng.
        Hành tây bạn bổ đôi rồi thái múi cau mỏng. Tiếp theo cho hành tây vao tô, trộn thêm 2 thìa canh đường và 1 thìa canh giấm, trộn đều và để khoảng 15-20 phút cho hành tây bớt hăng.
        Bắp cải bạn đem thái sợi nhỏ, rửa sạch rồi giũ cho ráo nước. Tiếp đó, cho bắp cải vào thố, thêm vào 1 thìa cà phê muối rồi mang bao tay nilon bóp đều, sau đó để khoảng 10 phút thì chắt bỏ hết nước.
        Cà rốt gọt vỏ, rửa sạch, bào sợi.
        Rau răm hoặc húng quế nhặt rửa sạch, thái nhỏ.
        Ớt rửa sạch, tách bỏ hạt rồi thái khoanh mỏng.
        Bước 3: Pha nước xốt và trộn gỏi
        Tỏi bóc vỏ, đập dập rồi bằm nhuyễn, cho vào chén. Thêm ớt, 2 thìa canh nước mắm, 1 thìa canh đường, 1 thìa canh nước cốt chanh và 2 thìa canh nước lọc vào, khuấy tan để thu được hỗn hợp nước xốt ngon, có vị chua cay mặn ngọt.
        Sau khi hoàn thành nước xốt, bạn cho bắp cải và thịt gà xé, cà rốt, hành tây vào thố, đổ đều nước xốt lên rồi trộn đều tất cả. Tiếp theo cho rau thơm các loại đã thái nhỏ vào và trộn đều lên.
        
        Bước 4: Trình bày và thưởng thức
        Bạn bày gỏi gà bắp cải ra đĩa rồi trang trí thêm cho đẹp mắt trước khi thưởng thức. Khi ăn, nếu muốn đậm đà hơn bạn có thể dùng thêm muối tiêu chanh hoặc nước xốt.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Ức gà: 2 cái
        // Ngô hạt: 120 gram
        // Nấm hương khô: 5 – 6 cái
        // Bột năng: 30 gram
        // Rau nêm: hành, ngò
        // Gia vị thông dụng
      ].map((food) => {
        return {
          recipeId: goiGaBapCai.recipeId,
          foodId: food.foodId
        };
      })
    });
    const nauSupGaNgoNam = await this.prisma.recipe.create({
      data: {
        name: 'Nấu súp gà ngô nấm',
        description: `Sơ chế nguyên liệu
        Ức gà làm sạch, chà xát muối và chanh để khử mùi rồi rửa lại một lần nữa, để ráo nước. Luộc gà cùng với vài củ hành tím, một thìa cà phê muối, một thìa cà phê hạt nêm. Khi nước sôi, bạn hớt bỏ bọt, hạ lửa vừa và luộc trong thêm 10 phút cho gà ngậm nước sẽ ngọt thịt hơn. Sau đó, bạn vớt gà ra, xé sợi rồi lọc lấy nước dùng để nấu súp.
        Ngâm nấm đông cô trong nước muối loãng vài phút rồi rửa sạch, thái lát nhỏ.
        
        Ngô ngọt tách lấy hạt, rửa sạch, bỏ mày (vảy).
        
        Rau nêm rửa sạch, thái nhuyễn.
        
        Thực hiện nấu súp
        Bạn cho ngô vào nồi nước luộc gà để nấu chín, thêm nấm đông cô và nêm nếm gia vị cho vừa miệng. Tiếp đến, cho thịt gà đã xé vào nồi để nấu cùng.
        
        Hoà tan bột năng với nước lạnh, khuấy đều cho tan hết rồi cho từ từ bột năng vào nồi súp. Hãy đổ theo chiều kim đồng hồ để tạo độ sánh đặc. Bạn cũng có thể điều chỉnh độ loãng, đặc của súp bằng cách tăng lượng bột năng.
        
        Khi nồi súp gà sóng sánh, chuyển màu trắng trong như ý muốn thì ngưng không khuấy nữa. Bạn hạ nhỏ lửa từ 10 – 15 phút cho bột năng chín. Nêm nếm lại gia vị cho vừa ăn nếu cần, sau đó tắt bếp.
        
        Múc súp ra bát, rắc rau nêm lên trên, bạn có thể thêm dầu mè và thưởng thức lúc còn nóng ấm là ngon nhất.
        
        Súp gà ngô nấm thành phẩm có màu sắc bắt mắt, phần nước sóng sánh hấp dẫn, thịt gà mềm, không bị bở, ngô ngọt xen kẽ nấm hương ngọt thanh, đậm đà. Một yếu tố không kém phần quan trọng quyết định sự thành công của món súp chính là để lâu vẫn không bị tách nước, để làm được điều đó, bạn hãy tham khảo một số lưu ý bên dưới nhé!`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Ức gà: 2 cái
        // Ngô hạt: 120 gram
        // Nấm hương khô: 5 – 6 cái
        // Bột năng: 30 gram
        // Rau nêm: hành, ngò
        // Gia vị thông dụng
      ].map((food) => {
        return {
          recipeId: nauSupGaNgoNam.recipeId,
          foodId: food.foodId
        };
      })
    });
    const nauSupChay = await this.prisma.recipe.create({
      data: {
        name: 'Nấu súp chay',
        description: `Sơ chế nguyên liệu
        Đầu tiên, bạn luộc 150g hạt sen với 1 lít nước trong 20 phút. Sao đó, bạn vớt hạt sen ra ngâm trong nước lạnh để hạt sen không bị thâm, còn nước luộc giữ lại để nấu súp.
        Nấm rơm, gọt bỏ phần chân nấm rồi ngâm với nước muối loãng. Tiếp theo, rửa nấm lại với nước, cắt nhỏ.
        Nấm hương ngâm nước cho nở, rửa sạch rồi thái lát. Bạn cắt bỏ phần chân nấm kim châm, rửa sạch, để ráo nước, có thể giữ nguyên độ dài hoặc cắt khúc 2 – 3 cm.
        Bắp bỏ vỏ, rửa sạch, tách lấy hạt, cùi bắp để riêng dùng nấu nước súp.
        Cà rốt, sơ chế, rửa sạch rồi thái hạt lựu. Rau nêm nhặt bỏ phần hư và gốc, rửa rồi để ráo nước, thái nhuyễn.
        Nấu súp
        Bật bếp, nấu 1,5 lít nước sôi cùng với cùi bắp. Sau đó cho lần lượt hạt sen, cà rốt nấu trong 20 phút, rồi vớt cùi bắp ra. Tiếp theo cho nấm rơm, nấm hương, nấm kim châm và bắp hạt vào nồi nấu khoảng 10 phút, nêm nếm gia vị vừa miệng.
        Bạn làm sệt súp bằng cách hòa tan bột bắp với 50ml nước lọc, cho từ từ vào nồi súp và khuấy đều, nấu thêm 5 phút thì tắt bếp.
        Sau khi đã hoàn thành món súp chay, bạn múc ra từng bát, cho thêm rau nêm và tiêu là có thể thưởng thức.`
      }
    });
    await this.prisma.recipeFoodList.createMany({
      data: [
        // Nấm rơm: 100 gram
        // Nấm hương: 50 gram
        // Cà rốt: 150 gram
        // Hạt sen: 150 gram
        // Bắp hạt: 150 gram
        // Rau nêm: hành, ngò
        // Bột bắp: 3 muỗng canh
        // Gia vị thông dụng
      ].map((food) => {
        return {
          recipeId: nauSupChay.recipeId,
          foodId: food.foodId
        };
      })
    });
    console.log('Data reset completed successfully.');
  }
}
