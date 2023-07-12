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
      'Răm',
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
    console.log('Data reset completed successfully.');
  }
}
