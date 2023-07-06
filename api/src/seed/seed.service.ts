import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(private prisma: PrismaService) {}
  async resetData() {
    await this.prisma.foodCategory.deleteMany();
    await this.prisma.food.deleteMany();
    await this.prisma.category.deleteMany();
    console.log('Data reset completed successfully.');
  }

  async seed() {
    await this.resetData();

    const thitCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Thịt',
        categoryType: 'Thực phẩm tươi'
      }
    });

    const haiSanCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Hải sản',
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

    const suaHatCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa hạt',
        categoryType: 'Sữa'
      }
    });

    const suaHopCategory = await this.prisma.category.create({
      data: {
        categoryName: 'Sữa hộp',
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

    const nguCoCategory = await this.prisma.category.create({
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
    [
      'Ba chỉ bò ',
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
      'Ức gà'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: thitCategory.categoryId
        }
      });
    });

    [
      'Bao tử cá basa',
      'Bào ngư đông lạnh',
      'Cua đồng',
      'Cá Thu',
      'Cá basa tươi',
      'Cá bạc má tươi',
      'Cá chim trắng biển tươi',
      'Cá chỉ',
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
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: haiSanCategory.categoryId
        }
      });
    });

    [
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
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: rauLaCategory.categoryId
        }
      });
    });

    [
      'Bí xanh',
      'Bí xanh',
      'Bí xanh ',
      'Bí đỏ tròn',
      'Chanh có hạt',
      'Chanh không hạt',
      'Cà rốt',
      'Cà rốt',
      'Cà tím tròn',
      'Củ Sả',
      'Củ cải trắng',
      'Củ dền',
      'Củ đậu',
      'Diếp cá',
      'Dưa chuột',
      'Dưa chuột',
      'Hành củ',
      'Hành củ',
      'Hành củ Hải Dương',
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
      'Đậu cove',
      'Ớt cay',
      'Ớt chuông xanh',
      'Ớt chuông đỏ',
      'Ớt sừng'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: rauLaCategory.categoryId
        }
      });
    });

    [
      'Bơ sáp',
      'Bưởi 5 roi',
      'Bưởi hồng da xanh',
      'Bưởi đường lá cam',
      'Cam',
      'Cam Sành loại nhỏ',
      'Cam sành loại 1',
      'Chanh leo',
      'Cherry đỏ',
      'Chuối',
      'Chôm chôm',
      'Dưa hấu',
      'Dưa hấu không hạt',
      'Dưa lê',
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
      'Đu đủ ruột đỏ'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: cuCategory.categoryId
        }
      });
    });

    [
      'Mì tôm Hảo hảo',
      'Mì tôm Omachi',
      'Mì tôm 3 miền',
      'Mì Lẩu Thái',
      'Mì Đệ Nhất',
      'Mì ăn liền Kokomi',
      'Mì cay Samyang Hàn Quốc',
      'Mì tôm Miliket',
      'Mì Cung Đình',
      'Mikochi - Ngon như mì tươi',
      'Mì xào Tiểu Nhị - Sốt đậm mì dai',
      'Mì ăn liền koreno',
      'Mì Spaghetti'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: miCategory.categoryId
        }
      });
    });

    [
      'Cháo đậu xanh',
      'Cháo thịt bằm',
      'Cháo rau nấm',
      'Cháo gà',
      'Cháo bò',
      'Cháo cá hồi'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: chaoCategory.categoryId
        }
      });
    });

    [
      'Phở gà',
      'Phở bò',
      'Miến phú hương',
      'Bún bò',
      'Bún giò heo',
      'Bún riêu cua'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: phoBunMienCategory.categoryId
        }
      });
    });

    [
      'Sữa tươi Vinamilk',
      'Sữa tươi TH True Milk',
      'Sữa tươi Dutch Lady'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaTuoiCategory.categoryId
        }
      });
    });
    [
      'Sữa đậu nành đậu đỏ Vinamilk',
      'Sữa đậu nành hạt óc chó Vinamilk',
      'Sữa đậu nành hạnh nhân Vinamilk',
      'Sữa lúa mạch socola Ovaltine',
      'Sữa lúa mạch Milo Nestle',
      'Sữa bắp non',
      'Sữa đậu nành canxi Fami'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaHatCategory.categoryId
        }
      });
    });
    ['Sữa đậu nành canxi Fami', 'Sữa bột NutiFood'].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaHopCategory.categoryId
        }
      });
    });
    [
      'Sữa đặc Ông Thọ',
      'Kem đặc có đường Vinamilk Ngôi Sao Phương Nam',
      'Sữa đặc Dutch Lady',
      'Creamer đặc sữa pha chế Nutimilk'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaDacCategory.categoryId
        }
      });
    });
    [
      'Sữa chua',
      'Sữa chua không đường',
      'Sữa chua ít đường',
      'Sữa uống lên men Yakult',
      'Váng sữa'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: suaChuaCategory.categoryId
        }
      });
    });
    [
      'Phô mai Con Bò Cười',
      'Bơ lạt',
      'Bơ mặn',
      'Phô Mai Lát',
      'Phô mai dây hun khói',
      'Phô mai gói',
      'Phô mai hun khói',
      'Phô mai lát',
      'Phô mai vuông'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: boSuaPhoMaiCategory.categoryId
        }
      });
    });
    ['Gạo nếp', 'Gạo tẻ', 'Gạo lứt'].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: gaoCategory.categoryId
        }
      });
    });

    ['Ngũ cốc ăn sáng', 'Ngũ cốc dinh dưỡng', 'Gạo lứt'].forEach(
      async (food) => {
        const dataFood = await this.prisma.food.create({
          data: { name: food, description: food }
        });
        await this.prisma.foodCategory.create({
          data: {
            foodId: dataFood.foodId,
            categoryId: nguCoCategory.categoryId
          }
        });
      }
    );

    [
      'Cá ngừ',
      'Bò hầm',
      'Bơ thực vật',
      'Bơ đậu phộng',
      'Cà pháo lọ 410g',
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
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: doHopCategory.categoryId
        }
      });
    });
    [
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
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: botCategory.categoryId
        }
      });
    });
    [
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
      'Sốt mè rang'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: giaViCategory.categoryId
        }
      });
    });
    [
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
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: doUongCategory.categoryId
        }
      });
    });
    [
      'Trứng gà ta',
      'Trứng gà công nghiệp',
      'Trứng vịt',
      'Trứng ngỗng',
      'Trứng cút'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: trungCategory.categoryId
        }
      });
    });
    [
      'Giò bò',
      'Giò lụa',
      'Giò thủ',
      'Chả chiên',
      'Chả bì',
      'Nem chua',
      'Nem lụi'
    ].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: chaGioCategory.categoryId
        }
      });
    });
    ['Đậu hũ', 'Rong biển lá', 'Rong biển vụn'].forEach(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food, description: food }
      });
      await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: khacCategory.categoryId
        }
      });
    });
  }
}
