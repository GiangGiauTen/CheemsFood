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
    await this.prisma.recipe.deleteMany();
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
      [
        'Ba chỉ bò',
        'https://hcm.fstorage.vn/images/2022/ba-chi-bo-my-cat-lat-kiaora-khay-500g_5e2d828e-ff74-4f4b-83f1-1afd6623dd6b-og-thumb-1.jpg'
      ],
      [
        'Bắp giò cuộn',
        'https://meatdeli.com.vn/upload/iblock/520/520347374043dccd34334a6cc208ca10.jpg'
      ],
      [
        'Chân giò heo rút xương',
        'https://cdn.tgdd.vn/Files/2021/08/14/1375214/bi-quyet-lam-mon-chan-gio-rut-xuong-bo-luoc-mem-ngon-khong-kho-202211281401092189.jpg'
      ],
      ['Cánh gà', 'https://hcm.fstorage.vn/images/2022/canh-ga-3f-thumb-1.jpg'],
      [
        'Gầu bò',
        'https://hcm.fstorage.vn/images/2022/gau-bo-my-cat-lat-acefoods-500g.jpg'
      ],
      [
        'Móng giò',
        'https://image.tienphong.vn/600x315/Uploaded/2023/rwbvhvobvvimsb/2022_01_23/1610589219-fc0fec51340f466e05d616d8169bccb9-4468.jpg'
      ],
      [
        'Thịt heo xay',
        'https://shopgiachanh.com/wp-content/uploads/2021/09/thit-heo-xay-1.jpg'
      ],
      [
        'Thịt Ba Rọi heo',
        'https://product.hstatic.net/200000356473/product/ba-roi-baf_1bfa35641557413cb431453e54087300_grande_f11a57c1d0944c828ecf247852096342_1024x1024.jpg'
      ],
      [
        'Thịt Nạc thăn heo',
        'https://caophatfood.vn/wp-content/uploads/2021/04/THIT-NAC-THAN-HEO.png'
      ],
      [
        'Thịt Nạc dăm heo',
        'https://cdn.tgdd.vn/2021/05/content/1-800x450-62.jpg'
      ],
      [
        'Thịt Nạc vai heo',
        'https://orfarm.com.vn/images/products/2020/06/17/original/img_9170jpg_1592388789.jpg'
      ],
      [
        'Thịt Nạc đùi heo',
        'https://product.hstatic.net/200000356473/product/thit_nac_dui__20626e74c0b54d9abac1df44019cfd29_grande.jpg'
      ],
      [
        'Thịt Thăn bò',
        'https://vinafood.vn/wp-content/uploads/2021/10/thit-than-bo.jpg'
      ],
      [
        'Thịt vai heo',
        'https://gourmetfood.vn/wp-content/uploads/2021/08/thit-vai-heo-hang-tuoi-trong-luong-1-kg.jpg'
      ],
      [
        'Thịt xay tươi ướp sẵn',
        'https://afamilycdn.com/150157425591193600/2023/6/6/photo2023-06-0614-25-01-16860363441331761916755.jpg'
      ],
      [
        'Thịt đùi heo',
        'https://sagrifood.com.vn/wp-content/uploads/2021/08/thit-dui-heo-600x438.jpg'
      ],
      [
        'Xương đuôi heo',
        'https://sagrifood.com.vn/wp-content/uploads/2021/08/xuong-duoi-heo-600x600.jpg'
      ],
      [
        'Xương ức gà',
        'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/146956.jpg'
      ],
      [
        'Đùi gà rút xương',
        'https://classicdeli.vn/ho-chi-minh/1859-large_default/le-traiteur-dui-ga-rut-xong-dong-lanh.jpg'
      ],
      [
        'Đùi gà tháo khớp',
        'https://classicdeli.vn/hanoi/492-full_default/frozen-chicken-whole-leg-250g-pc-4-5pcs-pack.jpg'
      ],
      [
        'Đùi tỏi gà',
        'https://product.hstatic.net/1000141988/product/11_0e620d9e4a864efeb78e83add670996d.jpg'
      ],
      [
        'Ức gà',
        'https://vinmec-prod.s3.amazonaws.com/images/20210609_132303_809304_uc-ga-co-tac-dung-g.max-1800x1800.jpg'
      ],
      [
        'Xương ống heo',
        'https://sieuthifoodmart.com/upload/product/xuong-ong-heo-1555.jpeg'
      ],
      [
        'Sườn sụn',
        'https://laz-img-sg.alicdn.com/p/61fc453e22516b459fe4a56da6ecf8e8.jpg'
      ],
      [
        'Bắp bò',
        'https://cdn.tgdd.vn/Files/2021/04/03/1340438/bap-bo-la-gi-phan-biet-bap-truoc-bap-sau-cac-mon-an-ngon-tu-bap-bo-202201151417040458.jpeg'
      ],
      [
        'Thịt ba chỉ',
        'https://khoruou-gourmet.com/wp-content/uploads/2022/01/kr2-2.jpg'
      ],
      [
        'Thịt gà',
        'https://vnn-imgs-a1.vgcloud.vn/cdn.24h.com.vn/upload/2-2020/images/2020-04-26//1587869941-1b94c14bf0ae1068acab08551fac32f9.jpg'
      ],
      [
        'Nạm bò',
        'https://thitngonnhapkhau.vn/wp-content/uploads/2022/12/nam-bo_1.jpg'
      ],
      [
        'Gân bò',
        'https://admin.nongsandungha.com/wp-content/uploads/2022/09/gan-bo-nau-gi-ngon.jpg'
      ],
      [
        'Thịt bò thăn',
        'https://thitbohuunghi.com/wp-content/uploads/2022/01/3-than-file-wagyu-my.jpg'
      ],
      [
        'Chim cút',
        'https://www.cet.edu.vn/wp-content/uploads/2019/04/chon-chim-cut-ngon.jpg'
      ]
    ];

    const thitFoodPromises = thitFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Bao tử cá basa',
        'https://cdn.tgdd.vn/Files/2022/01/22/1412455/bao-tu-ca-ba-sa-la-gi-cach-che-tu-bao-tu-ca-ba-sa-thom-ngon-202201222215342880.jpg'
      ],
      [
        'Bào ngư đông lạnh',
        'https://product.hstatic.net/1000301274/product/bao_ngu_ed06adae2c9c41c496f209b3fd6b3cb8_1024x1024.png'
      ],
      [
        'Cua đồng',
        'https://cdn.tgdd.vn/Files/2020/11/20/1308183/loi-ich-cua-cua-dong-doi-voi-suc-khoe-202201201418583640.jpg'
      ],
      ['Cá Thu', 'https://statics.vinpearl.com/ca-thu-03_1632822036.jpg'],
      [
        'Cá basa tươi',
        'https://bhfood.vn/wp-content/uploads/2023/06/ca-basa-820-1.jpg'
      ],
      [
        'Cá bạc má tươi',
        'https://thuysanxunghe.com/wp-content/uploads/2017/07/ca-bac-ma-tuoi-06.jpg'
      ],
      [
        'Cá chim trắng biển tươi',
        'https://product.hstatic.net/1000219775/product/upload_384709732dea49aba166b5e08b9652f8_grande.jpg'
      ],
      [
        'Cá chỉ',
        'https://upload.wikimedia.org/wikipedia/commons/7/76/Selaro_leptole_100812-6053_tdp.jpg'
      ],
      [
        'Cá chép',
        'https://suckhoedoisong.qltns.mediacdn.vn/zoom/480_300/324455921873985536/2023/1/14/photo-1673666183811-16736661843131313527783-0-0-315-504-crop-16736662663301731654172.png'
      ],
      [
        'Cá hồi nguyên con',
        'https://cdn.5sfood.vn/media/san-pham-5s/ca-hoi-nauy-tuoi-nguyen-con/ca-hoi-nauy-nguyen-con-sfn-1.jpg'
      ],
      [
        'Hàu sữa',
        'https://cafefcdn.com/203337114487263232/2021/9/8/photo-1-1631067578012706836313.jpg'
      ],
      ['Mực ống', 'https://thesakuji.com/wp-content/uploads/2020/11/muc.jpg'],
      [
        'Nghêu',
        'https://product.hstatic.net/1000030244/product/hai_san_song__600___600_px___2__3714aa85cd5e42a88a002ac67aae0f09.png'
      ],
      [
        'Nhộng tằm',
        'https://vinmec-prod.s3.amazonaws.com/images/20220121_015852_147728_nhong-tam.max-1800x1800.jpg'
      ],
      [
        'Nộm sứa',
        'https://media.baoquangninh.vn/dataimages/201805/original/images1065897_s1.jpg'
      ],
      [
        'Râu bạch tuộc',
        'https://thucphamhoangkim.com/wp-content/uploads/2021/08/rau-tuoc-han-quoc-2.png'
      ],
      [
        'Tôm sú',
        'https://cdn.tgdd.vn/2021/09/CookProductThumb/tomsutuoisong..-620x620.jpg'
      ],
      [
        'Đầu mực lá',
        'https://csfood.vn/wp-content/uploads/2016/12/%C4%90%E1%BA%A7u-m%E1%BB%B1c-l%C3%A1-6-10-c%C3%A1i.jpg'
      ],
      [
        'Ếch làm sạch',
        'https://media.loveitopcdn.com/22794/153607-ech-lam-sach.jpg'
      ],
      [
        'Ghẹ',
        'https://storage-vnportal.vnpt.vn/pyn-ubnd/7589/songcauphuyen/dac-san-ghe-song-cau-.jpg'
      ],
      [
        'Cá diêu hồng',
        'https://ketnoigiaothuong.vn/wp-content/uploads/2021/09/ca-dieu-hong-nau-gi-ngon.jpg'
      ],
      [
        'Tôm hùm',
        'https://product.hstatic.net/200000325181/product/1-min-min-min-1_a2b7e7ac473b46248465132a94defeb3_master.jpg'
      ]
    ];

    const haiSanFoodPromises = haiSanFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Bí nụ',
        'https://tinicart.vn/wp-content/uploads/2021/06/b%C3%AD-n%E1%BB%A5.jpg'
      ],
      [
        'Búp măng tươi',
        'https://www.thucphamchosach.com/images/cua-hang-ban-mang-cu-tuoi.jpg'
      ],
      [
        'Bắp cải',
        'https://product.hstatic.net/200000423303/product/bap-cai-huu-co_203a09f5391b4cb59bbad82f94c1cd7d.jpg'
      ],
      [
        'Bắp cải trắng',
        'https://product.hstatic.net/200000182591/product/24._bap_cai_trang_1.1_34c81b2b07264892bfa4e0b6b9375334_16da1aca33b949c1b3ad5f5ae731ec6f.jpg'
      ],
      [
        'Bắp cải tím',
        'https://product.hstatic.net/200000423303/product/bap-cai-tim-huu-co_203f203060064cf5a24b9f8e9c352214_1024x1024.jpg'
      ],
      [
        'Cải bó xôi',
        'https://product.hstatic.net/200000423303/product/cai-bo-xoi-huu-co_dcef0c0e1fc1491599583cc06a19b830_1024x1024.jpg'
      ],
      [
        'Cải ngồng',
        'https://product.hstatic.net/200000423303/product/cai_ngong_huu_co_3e072e9a34324b89a4809b56bc979e03_grande.png'
      ],
      [
        'Cải thảo',
        'https://product.hstatic.net/200000423303/product/cai-thao-huu-co_d5a332d40bf843e283c45aae5039351c_grande.jpg'
      ],
      [
        'Cải xanh',
        'https://medlatec.vn/ImagePath/images/20230109/20230109_cai-xanh-1.jpg'
      ],
      [
        'Cần tây lớn',
        'https://lzd-img-global.slatic.net/g/p/27e6155c1f22a7d78df091977d01a112.jpg_720x720q80.jpg'
      ],
      [
        'Cần tây nhỏ',
        'https://product.hstatic.net/200000189007/product/can_tay_nho_478734ffeccd49a891c486b71c77570c_grande.jpg'
      ],
      [
        'Dọc mùng',
        'https://product.hstatic.net/200000548939/product/xmen.psd__767___850_px___21__7b5bca27934647ccb91131ee3bae2b4e_master.jpg'
      ],
      [
        'Giá đỗ',
        'https://cdn.abphotos.link/photos/resized/1024x/2022/09/15/1663235867_6iOHz5QkJxS3IC8d_1663241823-phplqgorp.png'
      ],
      ['Hành lá', 'https://dalafood.vn/wp-content/uploads/2022/06/hanh-la.jpg'],
      ['Húng bạc hà', 'https://xanhviet.vn/images/products/bacha.jpg'],
      [
        'Húng láng',
        'https://product.hstatic.net/1000075554/product/8567_d52e28a6cd2b4dc0b123791f71b3b723_7b01c60da85b4cdd8e65522d35526217_3b5fd1ffed1542d5899585f7901cb957_master.jpg'
      ],
      [
        'Hẹ lá',
        'https://cdn.tgdd.vn/2021/02/CookProductThumb/c8b892f9c6df018a2a8292f984a3f461-620x620.jpg'
      ],
      [
        'Lá dứa',
        'https://thucphamdongxanh.com/wp-content/uploads/2019/09/1_K223db31c6LJa7ONAf6M8w.png'
      ],
      ['Lá mè', 'https://dalatfarm.net/wp-content/uploads/2021/07/la-nhip.jpg'],
      [
        'Mùi ta',
        'https://cuonfarm.cuonnroll.com/wp-content/uploads/2020/04/cay-mui-ta-2-1.jpg'
      ],
      [
        'Măng',
        'https://admin.nongsandungha.com/wp-content/uploads/2021/06/mang-cu-tuoi-min.jpg'
      ],
      [
        'Măng tây',
        'https://dalatfarm.net/wp-content/uploads/2021/06/mang-tay-xanh-dalat.jpg'
      ],
      [
        'Ngọn bí',
        'https://hoangdongfood.com/wp-content/uploads/2020/04/rau-b%C3%AD.jpg'
      ],
      [
        'Nấm Hương',
        'https://product.hstatic.net/200000352097/product/nam-huong-nam-dong-co-1_7dde9156f6ba4b4e835a4cb94f4b7b9c.jpg'
      ],
      [
        'Nấm hỗn hợp',
        'https://cfv.com.vn/uploads/cfv/images/nm_/nam-hon-hop-1523358257.jpg'
      ],
      [
        'Nấm kim châm',
        'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/nhung_sai_lam_khi_an_nam_kim_cham_co_the_khien_ban_bi_ngo_doc_2_4ae8c71c8b.jpg'
      ],
      [
        'Rau dền',
        'https://vinmec-prod.s3.amazonaws.com/images/20201226_005345_144787_rau_den.max-800x800.jpg'
      ],
      [
        'Rau muống',
        'https://cdn.abphotos.link/photos/resized/1024x/2022/09/15/1663236587_XRMnOSk7BKzTfHlA_1663239577-phppmyjkv.png'
      ],
      [
        'Rau mầm cải xanh',
        'https://vuahatgiong.com/wp-content/uploads/2018/02/rau-m%E1%BA%A7m-c%E1%BA%A3i-ng%E1%BB%8Dt.jpg'
      ],
      [
        'Rau mầm củ cải',
        'https://vuahatgiong.com/wp-content/uploads/2018/02/rau-m%E1%BA%A7m-c%E1%BA%A3i-ng%E1%BB%8Dt.jpg'
      ],
      [
        'Súp lơ trắng',
        'https://dalatfarm.net/wp-content/uploads/2022/03/sup-lo-trang.jpg'
      ],
      [
        'Thì là',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/8/cay-thi-la1-1649416686797615226166.jpg'
      ],
      [
        'Tía tô',
        'https://product.hstatic.net/200000352097/product/_spnt__tia_to_573f10a886154849950522882bad6cab_1024x1024_b5eb300d00874a3f9115973728a48e4f.png'
      ],
      ['Xà lách', 'https://roots.vn/wp-content/uploads/2022/09/VEG00303-5.jpg'],
      [
        'Kinh giới',
        'https://cdn.tgdd.vn/2021/03/CookProductThumb/Rau-kinh-gioi-la-gi-tac-dung-cua-rau-kinh-goi-phan-biet-tia-to-va-kinh-gioi-0b-620x620.jpg'
      ],
      [
        'Lá chanh',
        'https://cdn.tgdd.vn/Files/2017/04/23/975336/meo-dung-la-chanh-trong-nau-an-6_760x506.jpg'
      ],
      [
        'Rau thơm',
        'https://cooponline.vn/wp-content/uploads/2021/08/rau-thom-lam-sach.jpg'
      ],
      [
        'Rau răm',
        'https://csfood.vn/wp-content/uploads/2020/04/Rau-r%C4%83m-VietRAT-G%C3%B3i-100g.png'
      ],
      [
        'Hành tăm',
        'https://dunghangviet.vn/wp-content/uploads/2020/07/hanh-tam.jpg'
      ],
      [
        'Cây ngò rí',
        'https://vietrau-images-public.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/06/29160908/132146-1.jpg'
      ],
      [
        'Rau húng Láng',
        'https://yourvacation.vn/uploads/images/h%C3%BAng%20l%C3%A1ng.jpg'
      ],
      [
        'Nấm mèo',
        'https://tramanhfood.com/wp-content/uploads/2020/01/Nam-Meo-Den-Tuoi.png'
      ],
      [
        'Hoa đậu biếc khô',
        'https://cdn.tgdd.vn/2021/09/CookDish/huong-cach-bao-quan-hoa-dau-biec-kho-mot-cach-hieu-qua-nhat-avt-1200x676.jpg'
      ],
      [
        'Nấm rơm',
        'https://vinmec-prod.s3.amazonaws.com/images/20210607_141030_605615_nam-rom-co-tac-dung.max-1800x1800.jpg'
      ]
    ];

    const rauLaFoodPromises = rauLaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Bí xanh',
        'https://cdn.tgdd.vn/2022/07/CookDish/cach-chon-bi-dao-ngon-va-cach-bao-quan-bi-dao-tuoi-ngon-lau-avt-1200x676-1.jpg'
      ],
      [
        'Bí đỏ tròn',
        'https://product.hstatic.net/200000459373/product/b9edb47fb13ffa61a2f24d9de633ee32_f7dc0339ec9644ae93f7eb26644592d8.jpg'
      ],
      [
        'Chanh có hạt',
        'https://originmarket.vn/wp-content/uploads/2022/05/Chanh-Co-Hat.png'
      ],
      [
        'Chanh không hạt',
        'https://product.hstatic.net/200000423303/product/chanh-khong-hat-huu-co_05795cd8857144a1af04a42b2b19e97f.jpg'
      ],
      [
        'Cà rốt',
        'https://kenh14cdn.com/203336854389633024/2023/7/30/photo-3-16906864058292115155894.png'
      ],
      [
        'Cà tím tròn',
        'https://winmart.onl/assets/media/images/products/05907/oemctt014_0915_220954_3FYtqT.png'
      ],
      [
        'Củ Sả',
        'https://vinmec-prod.s3.amazonaws.com/images/20210602_035917_936725_cu-sa-2.max-1800x1800.jpg'
      ],
      [
        'Củ cải trắng',
        'https://product.hstatic.net/1000354044/product/85087_f362974e73044edc80bf7e6091f598ce_master.jpg'
      ],
      [
        'Củ dền',
        'https://dalatfarm.net/wp-content/uploads/2022/03/cu-den-do.jpg'
      ],
      [
        'Củ đậu',
        'https://cdn.tgdd.vn/Files/2019/12/12/1226441/xx-loi-ich-bat-ngo-den-tu-cu-dau-va-nhung-luu-y-can-biet-khi-an-cu-dau.jpg'
      ],
      [
        'Diếp cá',
        'https://suckhoedoisong.qltns.mediacdn.vn/Images/tuananh2/2021/06/25/1.jpg'
      ],
      [
        'Dưa chuột',
        'https://product.hstatic.net/200000423303/product/dua-leo-huu-co_6d5ca8015aea4e86bffbeb58e2a431fd_1024x1024.jpg'
      ],
      [
        'Hành củ',
        'https://vinmec-prod.s3.amazonaws.com/images/20210606_012933_045889_cu-hanh-tim-co-tac-.max-1800x1800.jpg'
      ],
      [
        'Hành tây',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/12/27/chua-yeu-sinh-ly-bang-hanh-tay-1640623099790731187596.jpg'
      ],
      [
        'Hạt sen',
        'https://cdn.abphotos.link/photos/resized/1024x/3057-1632983869-foodland.png'
      ],
      [
        'Khoai lang',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/3/khoai-lang-16332714337561040798892.jpg'
      ],
      [
        'Khoai lang mật',
        'https://giadinh.mediacdn.vn/296230595582509056/2022/10/5/khoai-lang-mat2-1664935950195386777259.jpg'
      ],
      [
        'Khoai môn',
        'https://admin.nongsandungha.com/wp-content/uploads/2021/06/khoai-mon-tim-1-min.jpg'
      ],
      [
        'Khoai tây',
        'https://image.tienphong.vn/w890/Uploaded/2023/rwbvhvobvvimsb/2021_09_30/5-cach-chong-lao-hoa-da-co-voi-cac-nguyen-lieu-tu-tu-nhien-skinlift-collagen-1-1-6149.jpg'
      ],
      [
        'Lá lốt',
        'https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng%205/Ng%C3%A0y%206/Thanh/la-lot-chua-dau-nhuc-khop.jpg'
      ],
      [
        'Ngô ngọt',
        'https://product.hstatic.net/200000423303/product/ngongot_efdb710405b44b06a1ea02e5db5cf3f9.jpg'
      ],
      [
        'Quả bầu',
        'https://admin.nongsandungha.com/wp-content/uploads/2021/06/qua-bau-min.jpg'
      ],
      [
        'Quất',
        'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2018/02/22/quat.jpg'
      ],
      [
        'Su su',
        'https://dalatfarm.net/wp-content/uploads/2020/12/su-su-bao-tu-2-4.jpg'
      ],
      [
        'Tiêu xanh',
        'https://kphucsinh.s3south.storage.com.vn/Contents/%E1%BA%A2nh%20b%C3%A0i%20vi%E1%BA%BFt/tieu-xanh.jpg'
      ],
      [
        'Tỏi',
        'https://product.hstatic.net/200000423303/product/toi-tep-huu-co_c4a90f7fbed847b4920ea58d82bf53f0_1024x1024.jpg'
      ],
      [
        'Đậu cove',
        'https://product.hstatic.net/200000423303/product/dau-cove-huu-co_ad40962f4583495398654ddbef3e9504_1024x1024.jpg'
      ],
      [
        'Ớt cay',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/18/cach-an-che-bien-bao-quan-ot-2-1655566236587196946971.jpg'
      ],
      [
        'Ớt chuông xanh',
        'https://media-cdn-v2.laodong.vn/storage/newsportal/2021/12/22/987477/Ot-Chuong-Xanh.jpg'
      ],
      [
        'Ớt chuông đỏ',
        'https://product.hstatic.net/1000282430/product/qua-ot-chuong-do_grande.jpg'
      ],
      [
        'Ớt sừng',
        'https://cdn.tgdd.vn/Products/Images/8820/238458/bhx/ot-sung-do-1kg-202105052303029420.jpg'
      ],
      [
        'Hành tím',
        'https://product.hstatic.net/200000423303/product/hanh_tim_huu_co_df739ce4e2dd4f09a56653b8861f8597_grande.jpg'
      ],
      [
        'Củ riềng',
        'https://suckhoedoisong.qltns.mediacdn.vn/JRGSJiLd3e5GsxdM0P2pqg65KoKccc/Image/2012/09/Cu-rieng-d69dc.jpg'
      ],
      [
        'Củ gừng',
        'https://suckhoedoisong.qltns.mediacdn.vn/Images/haiyen/2018/12/17/c_gng.jpg'
      ],
      [
        'Bắp chuối',
        'https://thucphamdongxanh.com/wp-content/uploads/2019/07/bap-chuoi-bao.jpg'
      ],
      [
        'Trái ớt hiểm',
        'https://transoceanmart.com/wp-content/uploads/2020/10/ot-hiem-do-ot-chi-thien-100gr.jpg'
      ],
      [
        'Củ nghệ',
        'https://static.tuoitre.vn/tto/i/s626/2017/05/15/hinh-3-1494836744.jpg'
      ],
      [
        'Tỏi tây',
        'https://admin.nongsandungha.com/wp-content/uploads/2021/05/hanh-baro-min.jpg'
      ],
      [
        'Khoai mì',
        'https://tieudung.kinhtedothi.vn/upload_images/images/2022/07/03/khoai-mi.jpg'
      ],
      [
        'Khoai môn cau',
        'https://rausachtrangia.com/upload/sanpham/khoai-mon-cao47590392.png'
      ],
      [
        'Ngô hạt',
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Ab_food_06.jpg'
      ]
    ];

    const cuFoodPromises = cuFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Bơ sáp',
        'https://api.traicaynguyenthung.vn/Upload/MATERIAL_EXT_4_WEBSITE/12435_Files_0/AiFruitBoxes_Bo-sap3_20230404102450077.jpg'
      ],
      [
        'Bưởi 5 roi',
        'https://cdn.tgdd.vn/Products/Images/8788/273343/bhx/buoi-nam-roi-trai-tu-900g-tro-len-202205121128329279.jpg'
      ],
      [
        'Bưởi hồng da xanh',
        'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/202432.jpg'
      ],
      [
        'Bưởi đường lá cam',
        'https://www.conngongvang.com/wp-content/uploads/2019/01/buoi_duong_la_cam_tan_trieu.jpg'
      ],
      [
        'Cam',
        'https://cdn.tgdd.vn/Products/Images/8788/202933/bhx/cam-vang-uc-09-11kg-3-5-trai-202308180954212556.jpg'
      ],
      [
        'Cam Sành loại nhỏ',
        'https://cdn.tgdd.vn/Products/Images/8788/226917/bhx/cam-sanh-loai-2-tui-1kg-202101271631264363.jpg'
      ],
      [
        'Cam sành loại 1',
        'https://i1.wp.com/thucphamtantai.com/wp-content/uploads/2019/10/canh-sanh-loai-1.png'
      ],
      [
        'Cà Chua',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/25/tac-dung-cua-ca-chua-doi-voi-suc-khoe-1-1632310636-831-width640height427-1632567723926-16325677242441321628137.jpg'
      ],
      [
        'Chanh leo',
        'https://file.hstatic.net/200000271601/file/thiet_ke_khong_ten__24__b1acf6aa2cfb4b5dab1ed417079ef087_grande.png'
      ],
      ['Cherry đỏ', 'https://ninhco.com/uploads/images/cherry-do-my.jpg'],
      [
        'Chuối',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/chuoi1-16341869574602070184903.jpg'
      ],
      [
        'Chôm chôm',
        'https://redpineinternational.vn/wp-content/uploads/2021/06/rambutan-jbq7r7dj.jpg'
      ],
      [
        'Dưa hấu',
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/19/dua-hau-giong-my-tui-2kg-2021071016125311551-16556534088771758641220.jpg'
      ],
      [
        'Dưa hấu không hạt',
        'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/35575-1.jpg'
      ],
      ['Dưa lê', 'https://cdn.tgdd.vn/2021/05/CookProduct/duale-1200x676.jpg'],
      [
        'Dưa lê trắng',
        'https://cdn.tgdd.vn/Products/Images/8788/245080/bhx/dua-le-trang-tui-1kg-3-5-trai-202302241727402848.jpg'
      ],
      [
        'Dưa lưới',
        'https://file.hstatic.net/200000240163/article/cantaloupe-sep132019-min_54231607536f419295344b34f43f160f_1024x1024.jpg'
      ],
      [
        'Dưa lưới vỏ xanh',
        'https://bhfood.vn/wp-content/uploads/2023/06/dua-luoi-854.jpg'
      ],
      [
        'Dứa/khóm',
        'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg'
      ],
      [
        'Dừa xiêm',
        'https://foody24h.vn/uploads/collections/dua-xiem-ben-tre-4022-2021-11-075.jpg'
      ],
      [
        'Hồng Xiêm',
        'https://vinmec-prod.s3.amazonaws.com/images/20210613_083444_334660_Qua-hong-xiem-mien-na.max-800x800.jpg'
      ],
      [
        'Kiwi',
        'https://photo-cms-kienthuc.epicdn.me/w730/Uploaded/2023/zagtrt/2023_08_29/qua-kiwi-8777.jpg'
      ],
      [
        'Lê Nam Phi',
        'https://product.hstatic.net/1000282430/product/le-nam-phi-.jpg'
      ],
      [
        'Mận',
        'https://citifruit.com/uploads/images/Products/60/Man-An-Phuoc-800%C3%97800.jpg'
      ],
      [
        'Nho xanh',
        'https://cdn.tgdd.vn/Products/Images/8788/296801/bhx/nho-xanh-khong-hat-tui-1kg-202211041023156860.jpg'
      ],
      [
        'Nho đen ngón tay Úc',
        'https://dt-pro.vn/upload/product/nho-den-ngon-tay-uc.jpg'
      ],
      [
        'Sầu riêng',
        'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/loi_ich_cua_sau_rieng_doi_voi_suc_khoe_la_gi_an_sau_rieng_co_nong_khong_1_5074a6a783.jpg'
      ],
      [
        'Thanh long',
        'https://hoangphatfruit.com/vnt_upload/product/10_2022/thanh_long_ruot_trang_hoang_phat_fruit.png'
      ],
      [
        'Thanh long ruột đỏ',
        'https://redpineinternational.vn/wp-content/uploads/2021/08/thanh-long-ruot-do-01.jpg'
      ],
      [
        'Táo',
        'https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100958642348_tao-do-my-red-delicious-size-36-44.jpg'
      ],
      [
        'Táo xanh',
        'https://product.hstatic.net/1000282430/product/tao_xanh_my_grande.jpg'
      ],
      [
        'Việt Quất',
        'https://product.hstatic.net/1000406611/product/vietquat2_f7e53ee3da3c498899e280a51b09709b_master.jpg'
      ],
      [
        'Vải thiều',
        'https://vaithieu.net/wp-content/uploads/2018/01/vai-thieu-tuoi-1.png'
      ],
      [
        'Xoài',
        'https://vnn-imgs-f.vgcloud.vn/2019/06/01/14/tu-vu-be-9-tuoi-suyt-chet-vi-an-xoai-chuyen-gia-canh-bao-khong-an-xoai-neu-co-dau-hieu-sau.jpg'
      ],
      [
        'Đu đủ ruột đỏ',
        'https://kingfoodmart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsc_pcm_product%2Fprod%2F2023%2F4%2F28%2F283-97549.jpg&w=3840&q=75'
      ],
      [
        'Me',
        'https://suckhoedoisong.qltns.mediacdn.vn/Images/haiyen/2017/03/20/me.jpg'
      ],
      [
        'Trái thơm',
        'https://file.hstatic.net/1000303672/file/pineapple_70e32d95d25b45ba856db5d58ff5bf5e_1024x1024.png'
      ],
      [
        'Dừa nạo',
        'https://thabico.com/wp-content/uploads/2022/06/DC-High-700x-700.jpg'
      ],
      [
        'Dừa sợi',
        'https://sanjifoods.com/cdn/shop/products/d1eda1772a0d7c0b2e7ec57d97ea8636.jpg?v=1677907562'
      ],
      [
        'Dừa non',
        'https://cdn.tgdd.vn/2021/01/content/Meo-phan-biet-va-cach-chon-dua-lam-mut-cho-ngay-tet-thom-ngon-dung-chuan-2-800x534.jpg'
      ]
    ];

    const quaFoodPromises = quaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Mì tôm Hảo hảo',
        'https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png'
      ],
      ['Mì tôm Omachi', 'https://i.imgur.com/vYmWSVy.png'],
      [
        'Mì tôm 3 miền',
        'https://cdn.tgdd.vn/Products/Images/2565/82546/bhx/mi-3-mien-gold-chua-cay-thai-goi-75g-202004291141179866.jpg'
      ],
      [
        'Mì Lẩu Thái',
        'https://cdn.tgdd.vn/Products/Images/2565/80148/bhx/mi-the-gioi-mi-lau-thai-tom-goi-80gr-2-org.jpg'
      ],
      [
        'Mì Đệ Nhất',
        'https://acecookvietnam.vn/wp-content/uploads/2017/08/3D-BB-MI-DE-NHAT-THIT-BAM-1.png'
      ],
      [
        'Mì ăn liền Kokomi',
        'https://vicomi.com.vn/wp-content/uploads/2023/06/thung-30-goi-mi-kokomi-tom-chua-cay-65g-201912101055035782.jpg'
      ],
      [
        'Mì cay Samyang Hàn Quốc',
        'https://cdn.tgdd.vn/Files/2018/08/16/1110196/cac-loai-mi-cay-samyang-han-quoc-hot-nhat-hien-nay-202202141355576299.jpg'
      ],
      [
        'Mì tôm Miliket',
        'https://cdn.tgdd.vn/Products/Images/2565/86895/bhx/mi-miliket-dac-biet-giay-vang-vi-tom-goi-65g-202004151409036827.jpg'
      ],
      [
        'Mì Cung Đình',
        'https://product.hstatic.net/200000356473/product/mi-cung-dinh-tom-chua-cay-80g_d1235b05327b48818cb03aa127877334.jpg'
      ],
      [
        'Mikochi',
        'https://acecookvietnam.vn/wp-content/uploads/2023/06/3D-BB-MIKOCHI-SUON-HEO_RENEW_DOC.png'
      ],
      [
        'Mì xào Tiểu Nhị',
        'https://uni-president.com.vn/upload/product/spaghetti-bo-sot-chua-cay-3926.png'
      ],
      [
        'Mì ăn liền koreno',
        'https://lzd-img-global.slatic.net/g/p/adcd0fe40cb5ef5b0aa386430e88a3e0.jpg_720x720q80.jpg'
      ],
      [
        'Mì Spaghetti',
        'https://www.havamall.com/wp-content/uploads/2019/05/2529c03e4be0aebef7f1.png'
      ]
    ];

    const miFoodPromises = miFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Cháo đậu xanh',
        'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/chao-dau-xanh-giai-cam-thumbnail.jpg'
      ],
      [
        'Cháo thịt bằm',
        'https://daotaobeptruong.vn/wp-content/uploads/2020/03/chao-thit-bam.jpg'
      ],
      [
        'Cháo rau nấm',
        'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/thanh-pham-18.jpg'
      ],
      ['Cháo gà', 'https://cookbeo.com/media/2020/08/chao-ga/chao-ga-4x3.jpg'],
      [
        'Cháo bò',
        'https://cdn.tgdd.vn/2021/11/CookDish/cach-nau-chao-bo-tri-ton-dac-san-an-giang-moi-la-hap-dan-don-avt-1200x676.jpg'
      ],
      [
        'Cháo cá hồi',
        'https://cdn.tgdd.vn/Files/2017/03/26/965322/cach-nau-chao-ca-hoi-cho-be-khong-bi-tanh-202203211413554439.jpg'
      ]
    ];

    const chaoFoodPromises = chaoFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Phở gà',
        'https://cdn.statically.io/img/gachaybo.com/f=auto/wp-content/uploads/2020/11/pho-ga-1.jpg'
      ],
      [
        'Phở bò',
        'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg'
      ],
      [
        'Miến phú hương',
        'https://img-global.cpcdn.com/005_steps/140bed537bdece9e/480x360cq70/photo.jpg'
      ],
      [
        'Bún bò',
        'https://cdn.tgdd.vn/Files/2018/04/01/1078873/nau-bun-bo-hue-cuc-de-tai-nha-tu-vien-gia-vi-co-san-202109161718049940.jpg'
      ],
      [
        'Bún giò heo',
        'https://cdn.tgdd.vn/2021/06/CookRecipe/GalleryStep/thanh-pham-1230.jpg'
      ],
      [
        'Bún riêu cua',
        'https://daotaobeptruong.vn/wp-content/uploads/2020/06/bun-rieu-cua.jpg'
      ],
      [
        'Bún tươi',
        'https://img-global.cpcdn.com/recipes/5787e5f4eb2020d7/680x482cq70/bun-t%C6%B0%C6%A1i-recipe-main-photo.jpg'
      ],
      [
        'Bánh phở',
        'https://thucphamnhanh.com/wp-content/uploads/2020/10/banh-pho-loai-1kg-4.jpg'
      ]
    ];

    const phoBunMienFoodPromises = phoBunMienFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Sữa tươi Vinamilk',
        'https://cooponline.vn/wp-content/uploads/2013/03/sua-tuoi-tiet-trung-vinamilk-100-khong-duong1-hop-giay-1l.jpg'
      ],
      [
        'Sữa tươi TH True Milk',
        'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/523/products/sua-tuoi-tiet-trung-co-duong-th-1-lit.png?v=1624629882230'
      ],
      [
        'Sữa tươi Dutch Lady',
        'https://www.dutchlady.com.vn/sites/default/files/2022-06/FRESH.png'
      ],
      [
        'Sữa tươi',
        'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/sua_tuoi_khong_duong_bao_nhieu_calo_uong_nhieu_co_map_khong1_e5a8148dfa.jpg'
      ]
    ];

    const suaTuoiFoodPromises = suaTuoiFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Sữa đậu nành đậu đỏ Vinamilk',
        'https://salt.tikicdn.com/cache/w1200/ts/product/c3/10/1a/eafa8be7f4e744c0018af22fdd33eea4.jpg'
      ],
      [
        'Sữa đậu nành hạt óc chó Vinamilk',
        'https://product.hstatic.net/1000074072/product/hop_super_nut_oc_cho_-_180ml_-_side_view_8092526d69fb45eb93152e681d84a47d_master.jpg'
      ],
      [
        'Sữa đậu nành hạnh nhân Vinamilk',
        'https://cdn.tgdd.vn/Products/Images/2943/203655/bhx/loc-4-hop-sua-dau-nanh-hanh-nhan-vinamilk-180ml-201906111258462315.jpg'
      ],
      [
        'Sữa lúa mạch socola Ovaltine',
        'https://batos.vn/images/products/2023/07/13/loc-4-hop-sua-lua-mach-vi-socola-ovaltine-bo-sung-canxi-110ml-202305061034486410-335.jpg'
      ],
      [
        'Sữa lúa mạch Milo Nestle',
        'https://cdn.tgdd.vn/Products/Images/2945/225160/bhx/sua-lua-mach-milo-nap-van-hop-210ml-202104140055511486.jpg'
      ],
      [
        'Sữa bắp non',
        'https://minhcaumart.vn/media/com_eshop/products/8936025771606.webp'
      ],
      [
        'Sữa đậu nành canxi Fami',
        'https://product.hstatic.net/200000078749/product/sua_dau_nanh_fami_canxi_200ml-01_copy_9fc46c66c787496ca2d2b668201fa332_1f05e82febfe432d8678159a3d2367cb.jpg'
      ]
    ];

    const suaHopFoodPromises = suaHopFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Sữa đặc Ông Thọ',
        'https://product.hstatic.net/1000074072/product/slide21_db451001b8154f5d8d6ae9f5036b56a6_master.png'
      ],
      [
        'Kem đặc có đường Vinamilk Ngôi Sao Phương Nam',
        'https://csfood.vn/wp-content/uploads/2016/10/Kem-%C4%91%E1%BA%B7c-c%C3%B3-%C4%91%C6%B0%E1%BB%9Dng-Ng%C3%B4i-Sao-Ph%C6%B0%C6%A1ng-Nam-nh%C3%A3n-xanh-Vinamilk-h%E1%BB%99p-380g.jpg'
      ],
      [
        'Sữa đặc Dutch Lady',
        'https://cdn.tgdd.vn/Products/Images/2526/83920/bhx/sua-dac-co-duong-dutch-lady-nguyen-kem-lon-380g-202305091529152634.jpg'
      ],
      [
        'Creamer đặc sữa pha chế Nutimilk',
        'https://nutifood.com.vn/files/brands/nutimilk-creamer-moi/610x610-px.png'
      ]
    ];

    const suaDacFoodPromises = suaDacFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Sữa chua',
        'https://nghebep.com/wp-content/uploads/2017/12/sua-chua-hay-con-goi-la-yaourt.jpg'
      ],
      [
        'Sữa chua không đường',
        'https://nghebep.com/wp-content/uploads/2017/12/sua-chua-hay-con-goi-la-yaourt.jpg'
      ],
      [
        'Sữa chua ít đường',
        'https://nghebep.com/wp-content/uploads/2017/12/sua-chua-hay-con-goi-la-yaourt.jpg'
      ],
      [
        'Sữa uống lên men Yakult',
        'https://tienhuynh.vn/files/upload/san-pham/sua/sua-len-men-yakult-65ml.jpg'
      ],
      [
        'Váng sữa',
        'https://cdn.tgdd.vn/2021/12/CookDish/vang-sua-la-gi-vang-sua-lam-tu-gi-cac-loai-vang-sua-va-cach-avt-1200x676.jpg'
      ]
    ];

    const suaChuaFoodPromises = suaChuaFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Phô mai Con Bò Cười',
        'https://sieuthihuyhung.com/wp-content/uploads/2020/04/unnamed-2-2.jpg'
      ],
      [
        'Bơ lạt',
        'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/bo_lat_la_gi_1_404fdf400b.jpg'
      ],
      [
        'Bơ mặn',
        'https://cdn.tgdd.vn/Files/2020/03/02/1239515/bo-lat-va-bo-man-khac-nhau-nhu-the-nao-202003020819420944.jpg'
      ],
      [
        'Phô Mai Lát',
        'https://bizweb.dktcdn.net/100/439/247/products/a4d051d2-6b03-4d1e-b717-0b6c4617c129-1669977222392.jpg?v=1669977226553'
      ],
      [
        'Phô mai dây hun khói',
        'https://thitbonhapkhau.com/Upload/Anh-Moi-2022/Pho-Mai-Xong-Khoi/Pho-mai-xong-khoi-nga-3.jpg'
      ],
      [
        'Phô mai gói',
        'https://nguyenhafood.vn/uploads/2023/06/27/dc9706901b0cc34a3b68a6a7d6f6e760.png'
      ],
      [
        'Phô mai hun khói',
        'https://product.hstatic.net/1000301274/product/phomai_tet_ad12223973ee42d39d2693b8fad88320.png'
      ],
      [
        'Phô mai lát',
        'https://sieuthiandam.com/wp-content/uploads/2019/08/ph%C3%B4-mai-l%C3%A1t.jpg'
      ],
      [
        'Phô mai vuông',
        'https://bizweb.dktcdn.net/100/435/899/products/aadccead-f4c6-4a38-b967-09c8192357e1.jpg?v=1631028032753'
      ]
    ];

    const boSuaPhoMaiFoodPromises = boSuaPhoMaiFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: boSuaPhoMaiCategory.categoryId
        }
      });
    });

    const boSuaPhoMaiFood = await Promise.all(boSuaPhoMaiFoodPromises);

    const gaoFoodArr = ['Gạo nếp', 'Gạo tẻ', 'Gạo lứt', 'Gạo'];

    const gaoFoodPromises = gaoFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: gaoCategory.categoryId
        }
      });
    });

    const gaoFood = await Promise.all(gaoFoodPromises);

    const nguCocFoodArr = [
      ['Ngũ cốc ăn sáng', 'https://huongxuashop.com/150542-6.png'],
      [
        'Ngũ cốc dinh dưỡng',
        'https://cdn.tgdd.vn/Products/Images/8286/79376/bhx/ngu-coc-dinh-duong-vinacafe-bfast-bich-500g-202004241129496588.jpg'
      ],
      [
        'Gạo lứt',
        'https://medlatec.vn/ImagePath/images/20211127/20211127_gao-lut-co-tot-khong-2.png'
      ],
      [
        'Đậu xanh',
        'https://vinmec-prod.s3.amazonaws.com/images/20210608_032022_514614_dau-xanh-co-tac-dun.max-1800x1800.jpg'
      ],
      [
        'Đậu phộng',
        'https://medlatec.vn/ImagePath/images/20221114/20221114_dau-phong-1.jpg'
      ],
      [
        'Cốm xanh',
        'https://congthuong-cdn.mastercms.vn/stores/news_dataimages/thanhhuong/072021/25/08/in_article/4235_z2631717096362869d7a80653da770ef88b317fff2c865-1626943393084.jpg?rt=20210725084235'
      ],
      [
        'Hạt sen',
        'https://vinmec-prod.s3.amazonaws.com/images/20210407_161012_134157_an-hat-sen-de-ngu.max-1800x1800.jpg'
      ]
    ];

    const nguCoFoodPromises = nguCocFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      ['Cá ngừ', 'https://cdn.tgdd.vn/2020/11/CookProduct/1-1200x676-3.jpg'],
      [
        'Bò hầm',
        'https://daotaobeptruong.vn/wp-content/uploads/2016/09/793ea701476d5db2a4fd8cf1e0bf5880.jpg'
      ],
      [
        'Bơ thực vật',
        'https://cdn.tgdd.vn/Files/2022/06/29/1443495/top-6-loai-bo-thuc-vat-min-ngon-chat-luong-tot-ban-tai-bach-hoa-xanh-202206291609504983.jpg'
      ],
      [
        'Bơ đậu phộng',
        'https://cdn.tgdd.vn/Products/Images/3465/174516/bhx/bo-dau-phong-min-golden-farm-hu-170g-201911201533371675.jpg'
      ],
      [
        'Cà pháo lọ',
        'https://csfood.vn/wp-content/uploads/2016/06/C%C3%A0-ph%C3%A1o-Ng%E1%BB%8Dc-Li%C3%AAn-l%E1%BB%8D-365g.jpg'
      ],
      [
        'Cá chỉ cháy tỏi',
        'https://hainamfoods.vn/wp-content/uploads/2020/04/ca-chi-chay-toi-hu-60g.png'
      ],
      [
        'Cá khô chỉ vàng khay',
        'https://file.hstatic.net/200000419817/file/ca-chi-vang-natufood-200g-10_e6067e3a5706409cbc3549e4ca096cf2.jpg'
      ],
      [
        'Cá ngừ đại dương ngâm dầu',
        'https://cdn.lottemart.vn/media/catalog/product/cache/0x0/8/9/8935025531029.jpg.webp'
      ],
      [
        'Heo hầm',
        'https://vissanmart.com/pub/media/catalog/product/cache/ee97423e9fa68a0b8b7aae16fe28a6ff/h/e/heo_h_m_150g.jpg'
      ],
      [
        'Khô cá chỉ vàng',
        'https://file.hstatic.net/200000419817/file/ca-chi-vang-natufood-200g-10_e6067e3a5706409cbc3549e4ca096cf2.jpg'
      ],
      [
        'Khô cá cơm',
        'https://dulichquynhon-phuyen.com/wp-content/uploads/2022/08/ca-com-kho-scaled-1.jpg'
      ],
      [
        'Mực cán ăn liền',
        'https://sanphamdiaphuong.vn/wp-content/uploads/2021/05/muc-can-tam.jpg'
      ],
      [
        'Mực rim hộp',
        'https://bizweb.dktcdn.net/100/308/217/files/muc-rim-me.jpg?v=1533263059203'
      ],
      [
        'Mực sấy gừng',
        'https://salt.tikicdn.com/ts/product/9b/31/b2/741e4474f2cc82792eb287c014a4ba01.png'
      ],
      [
        'Pate gan',
        'https://cdn.tgdd.vn/Products/Images/3238/83336/bhx/pate-gan-ha-long-170g-2-org.jpg'
      ],
      [
        'Pate thịt heo',
        'https://vissanmart.com/danang/pub/media/catalog/product/cache/ee97423e9fa68a0b8b7aae16fe28a6ff/p/a/pate_thit_heo_170g.png'
      ],
      [
        'Ruốc khô',
        'https://cdn.tgdd.vn/Products/Images/8318/200160/bhx/ruoc-kho-phong-phuong-goi-100g-202011021320110530.jpg'
      ],
      [
        'Thịt gà hộp',
        'https://cdn.tgdd.vn/Products/Images/3238/273332/bhx/thit-ga-glavproduct-hop-350g-202203250819303393.jpg'
      ],
      [
        'Thịt heo viên',
        'https://cdn.tgdd.vn/Products/Images/3238/159048/bhx/thit-heo-vien-3-phut-heo-cao-boi-masan-hop-200g-201912031624113275.jpg'
      ],
      [
        'Thịt hộp',
        'https://cdn.tgdd.vn/Products/Images/3238/83320/bhx/thit-heo-spam-classic-hormel-foods-hop-340g-201910061032078950.jpg'
      ],
      [
        'Thịt xay',
        'https://finefoodvn.com/datafiles/31836/upload/files/Th%E1%BB%8Bt%20heo/thit-xay-heo-1.jpg'
      ],
      [
        'Tôm khô hộp',
        'https://bepcuaha.com/wp-content/uploads/2019/08/TomkhoAnHoa200g-1.jpg'
      ],
      [
        'Tôm nõn hộp',
        'https://lzd-img-global.slatic.net/g/p/87626015809488565aed2882413ffda5.jpg_960x960q80.jpg_.webp'
      ],
      [
        'Mắm ruốc Huế',
        'https://csfood.vn/wp-content/uploads/2016/05/Mam-Ruoc-Hue-Ngoc-Lien-Hu-400g.jpg'
      ],
      [
        'Nước cốt dừa',
        'https://cdn.tgdd.vn/Products/Images/7086/83319/bhx/nuoc-cot-dua-wonderfarm-lon-400ml-201904121507574493.jpg'
      ],
      [
        'Kim chi Hàn Quốc',
        'https://www.huongnghiepaau.com/wp-content/uploads/2022/06/kim-chi-cai-thao-chua-vi-han-quoc.jpg'
      ],
      [
        'Thạch rau câu dừa',
        'https://cdn.tgdd.vn/Files/2017/08/18/1014229/cach-lam-rau-cau-dua-nhieu-lop-thom-mat-ngon-mieng-202110301706336992.jpg'
      ],
      [
        'Thạch rau câu giòn',
        'https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/b%E1%BA%BFp/bot-lam-rau-cau-gion.jpg'
      ],
      [
        'Bò khô',
        'https://i-giadinh.vnecdn.net/2021/03/15/1-1615818742-7067-1615818945.jpg'
      ]
    ];

    const doHopFoodPromises = doHopFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Bột bánh rán',
        'https://cdn.tgdd.vn/Products/Images//2388/134816/bhx/files/1.jpg'
      ],
      [
        'Bột bắp Meizan',
        'https://cdn.tgdd.vn/Products/Images/2388/272027/bhx/bot-bap-meizan-goi-1kg-202202260801542720.jpg'
      ],
      [
        'Bột chiên giòn',
        'https://bizweb.dktcdn.net/100/128/766/files/bot-chien-gion-vinh-thuan.jpg?v=1549945569899'
      ],
      [
        'Bột chiên gà giòn',
        'https://csfood.vn/wp-content/uploads/2015/03/Bot-Chien-Ga-Gion-Aji-Quick.jpg'
      ],
      [
        'Bột chiên xù',
        'https://bizweb.dktcdn.net/100/439/247/products/ac8169197de7551ef624f20e7926af34-1657139872336.jpg?v=1657139880697'
      ],
      [
        'Bột mì chuyên dụng cho Bánh Mì',
        'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8936055280321-1.jpg.webp'
      ],
      [
        'Bột mì chuyên bánh bông lan',
        'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8936055280345.jpg.webp'
      ],
      [
        'Bột mì đa dụng',
        'https://cdn.tgdd.vn/Products/Images/2388/83375/bhx/bot-mi-da-dung-meizan-goi-1kg-201903221403085142.jpg'
      ],
      [
        'Bột tàu hủ',
        'https://bizweb.dktcdn.net/thumb/grande/100/004/714/products/bot-tau-hu-singapore-1.png?v=1635474879263'
      ],
      [
        'Bột cà ri',
        'https://giavivietan.com/wp-content/uploads/2020/01/B%E1%BB%98T-CARY-XK-5-GR-10-GR-576x800.png'
      ],
      [
        'Bột năng',
        'https://cdn.tgdd.vn/Products/Images/2388/229781/bhx/bot-nang-tai-ky-goi-1kg-202010191620469875.jpg'
      ],
      [
        'Bột gạo',
        'https://cdn.tgdd.vn/Products/Images/2388/83414/bhx/bot-gao-taky-400gam-2-org.jpg'
      ],
      [
        'Bột rau câu dẻo',
        'https://giaohang.de/cdn/shop/products/cadeo.jpg?v=1571694781'
      ],
      ['Bột báng', 'https://cdn.tgdd.vn/2020/12/CookProduct/2-1200x676-7.jpg'],
      [
        'Bột khoai',
        'https://cachnau.vn/wp-content/uploads/2021/10/bot-khoai.jpg'
      ]
    ];

    const botFoodPromises = botFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Dầu ăn',
        'https://lanchi.vn/wp-content/uploads/2021/11/DAU-AN-SIMPLY-2L.jpg'
      ],
      [
        'Dầu olive',
        'https://static.ecosite.vn/17049/product/2021/06/12/tinh-dau-olive-nguyen-huong-1623490965.jpg'
      ],
      [
        'Nước mắm',
        'https://www.adcfoods.com/wp-content/uploads/2017/12/Nuoc-mam-ca-com-Tams-30N-cua-ADCFoods-web.png'
      ],
      [
        'Đường',
        'https://csfood.vn/wp-content/uploads/2016/05/%C4%90%C6%B0%E1%BB%9Dng-tinh-luy%E1%BB%87n-Bi%C3%AAn-H%C3%B2a-g%C3%B3i-500g.1.jpg'
      ],
      [
        'Nước tương',
        'https://vietreview.vn/wp-content/uploads/2020/06/63052_chk_591_20150520_8934804019567_1_1-350x350.jpg'
      ],
      ['Hạt nêm', 'https://assets.unileversolutions.com/v1/63248860.png'],
      [
        'Bột canh',
        'https://cholimexfood.com.vn/wp-content/uploads/2019/12/bot-canh.jpg'
      ],
      [
        'Hạt tiêu',
        'https://vcdn1-suckhoe.vnecdn.net/2022/04/22/black-pepper-jpeg-1650619589-5864-1650619709.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=xW3h5wtyQdK15hrAEd_ANg'
      ],
      [
        'Tương ớt',
        'https://vinamart.com.vn/wp-content/uploads/2022/04/tuong-ot-chinsu-250g.jpg'
      ],
      [
        'Tương cà',
        'https://sieuthihoaba.com.vn/wp-content/uploads/2020/09/tuong-ca-chinsu-250gx24-201908311403202029.jpg'
      ],
      [
        'Mật ong',
        'https://cdn.tgdd.vn/Files/2019/09/24/1201371/mat-ong-tac-dung-than-ky-cach-dung-va-luu-y-khi-dung-mat-ong-202302281355111013.jpeg'
      ],
      [
        'Mì chính',
        'https://tinnghiafood.vn/FileUpload/Images/mi-chinh-ajinomoto-1-kg.jpg'
      ],
      [
        'Ớt bột',
        'https://tongkhogiavi.com/wp-content/uploads/2022/04/ot-bot-kho-xay.jpg'
      ],
      [
        'Mayonnaise',
        'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/225312.jpg'
      ],
      [
        'Wasabi',
        'https://product.hstatic.net/200000356095/product/wasabi_7f1b903fa9f94f31a438eace88612b07.jpg'
      ],
      [
        'Giấm',
        'https://abby.vn/wp-content/uploads/2021/03/B6715-1614564095302.jpeg'
      ],
      [
        'Hương thảo',
        'https://vcdn-suckhoe.vnecdn.net/2023/03/04/c2-1959-1460347325-jpeg-167789-7202-8909-1677898827.jpg'
      ],
      [
        'Sốt mè rang',
        'https://product.hstatic.net/1000030244/product/nuoc-xot-me-rang-2_e1cdf56e877c415cbfb747050d79f55b.jpg'
      ],
      [
        'Muối',
        'https://muoibaclieu.com.vn/wp-content/uploads/2022/09/DKS07496-scaled.jpg'
      ],
      [
        'Nghệ',
        'https://honeco.com/wp-content/uploads/2023/09/tac-dung-cua-nghe.jpg'
      ],
      [
        'Mắm tôm',
        'https://csfood.vn/wp-content/uploads/2015/03/Mam-Tom-Do-Tri-Hai-Chai-210g.png'
      ],
      [
        'Sa tế',
        'https://cholimexfood.com.vn/wp-content/uploads/2020/02/SATE-TOM-XO-100.jpg'
      ],
      [
        'Dầu hào',
        'https://product.hstatic.net/200000401369/product/dau-hao-dam-dac-maggi-chai-350g-202209082118170548_61e86c5fd0b24b5cacee3cc848521b65.png'
      ],
      [
        'Muối i-ốt',
        'https://product.hstatic.net/1000141988/product/muoi_i-ot_bac_lieu_500gr_c6d49e4aa2724f2f9302bf4c83cd7d3e.jpg'
      ],
      [
        'Bột ngọt',
        'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/135806.jpg'
      ],
      [
        'Dấm trắng',
        'https://product.hstatic.net/1000296868/product/dam_trang_trungthanh_foods_47a40f5183c94a9dad60e80a2c23e56e.jpg'
      ],
      [
        'Đường phèn',
        'https://bizweb.dktcdn.net/thumb/grande/100/169/223/products/duong-phen-bien-hoa.jpg?v=1500709424393'
      ],
      [
        'Dầu màu điều',
        'https://dhfoods.com.vn/vnt_upload/product/10_2022/VN_Dau_Mau_Dieu_1.png'
      ],
      [
        'Đường cát trắng',
        'https://down-vn.img.susercontent.com/file/da2764d613b765b8bcc1d4fa429b7aee'
      ],
      [
        'Vani',
        'https://dolambanh.net/wp-content/uploads/2019/02/Vani-500ml.jpg'
      ],
      [
        'Dầu vừng',
        'https://nguquynh.com.vn/thumb/sanpham/dauvungnguyenchatnguquynh1lit_1200_1200.jpg'
      ],
      [
        'Ngũ vị hương',
        'https://giavivietan.com/wp-content/uploads/2020/08/B%E1%BB%99t-ng%C5%A9-v%E1%BB%8B-h%C6%B0%C6%A1ng-500gr-ch%C3%A9n-b%E1%BB%99t.png'
      ]
    ];

    const giaViFoodPromises = giaViFoodArr.map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: giaViCategory.categoryId
        }
      });
    });

    const giaViFood = await Promise.all(giaViFoodPromises);

    const doUongFoodArr = [
      [
        'Nước lọc',
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/2563/79249/nuoc-tinh-khiet-dasani-500ml-thumb-600x600.jpg'
      ],
      [
        'Coca cola',
        'https://product.hstatic.net/200000356473/product/cocacola-chai-390ml_7214ffae946e4e63826e8f38a45ed5fa.jpg'
      ],
      [
        'Pepsi',
        'https://product.hstatic.net/1000141988/product/nuoc_ngot_pepsi_lon_320_ml_415ef91bdb15487ab3079155c3635f66.jpg'
      ],
      [
        '7up',
        'https://product.hstatic.net/1000301274/product/_10100996__7up_320ml_sleek_lon_0366766c074a4b538595ed8d91dc6b0d.png'
      ],
      [
        'Spite',
        'https://victoryplaza.vn/media/product/4140_nuoc_ngot_sprite_lon_330ml_2_1.jpg'
      ],
      [
        'Fanta',
        'https://www.coca-cola.com/content/dam/onexp/vn/home-image/fanta/Fanta_Orange_RCG_320ml_Desktop.png'
      ],
      [
        'Trà chanh',
        'https://tokyodeliexpress.com.vn/Data/Sites/5/Product/786/tea-07.jpg'
      ],
      [
        'Trà đào',
        'https://sieuthibsmart.com/wp-content/uploads/2021/02/31.png'
      ],
      [
        'Trà sữa',
        'https://product.hstatic.net/200000421745/product/ts_tran_chau_052aed385e41470db7cec46eddfcfdbb_1024x1024.png'
      ],
      ['Matcha', 'https://saigonoicafe.com/resize-image/600x/menu/matcha1.jpg'],
      [
        'Bia',
        'https://bianhapkhau.net/wp-content/uploads/2019/04/bia-corona-chai-355ml.jpg'
      ],
      [
        'Rượu trắng',
        'https://thucphamxanh.orgs.vn/wp-content/uploads/2021/04/ruou-nep-go-cong-300x300.jpg'
      ],
      [
        'Rượu vang',
        'https://product.hstatic.net/200000311961/product/ruou-vang-do-aromo-carmenere_da6e1c4302a94f17a8eb5a873fd75eab.jpg'
      ],
      [
        'Rượu',
        'https://thucphamxanh.orgs.vn/wp-content/uploads/2021/04/ruou-nep-go-cong-300x300.jpg'
      ],
      [
        'Bia lon',
        'https://pvmarthanoi.com.vn/wp-content/uploads/2022/12/Untitled-1.png'
      ],
      [
        'Bia hơi',
        'https://dailybiahoixuanthang.com.vn/wp-content/uploads/2021/04/unnamed.jpg'
      ],
      ['Cà phê hòa tan', 'https://i.imgur.com/rAL7Asc.png'],
      [
        'Cà phê lon',
        'https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/CA_PHE_SUA_185ml_v3.jpg'
      ],
      [
        'Cà phê xay',
        'https://ongbi.vn/wp-content/uploads/2020/11/ca-phe-rang-xay.jpg'
      ]
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: doUongCategory.categoryId
        }
      });
    });

    const doUongFood = await Promise.all(doUongFoodArr);

    const trungFoodArr = [
      [
        'Trứng gà ta',
        'https://market.nhovn.com/public/upload/images/trung-ga-ta-1226.jpg'
      ],
      [
        'Trứng gà công nghiệp',
        'https://xanhmarket.vn/thumbnails/6-127bc1827775/trung.800x800.jpg'
      ],
      [
        'Trứng vịt',
        'https://shopgiachanh.com/wp-content/uploads/2021/09/trung-vit.jpg'
      ],
      [
        'Trứng ngỗng',
        'https://hcmp.edu.vn/wp-content/uploads/2022/09/duong-chat-trong-trung-ngong.jpg'
      ],
      [
        'Trứng cút',
        'https://hoangdongfood.com/wp-content/uploads/2020/04/trung-cut-ba-huan-16450227033_1000_750_1c970e53-b724-405c-8723-10e622b9eae3.jpg'
      ]
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
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
      [
        'Giò bò',
        'https://nppmanhthoan.com/wp-content/uploads/2021/12/Cha-bo-co-hue-800x750-1.jpg'
      ],
      [
        'Giò lụa',
        'https://lh3.googleusercontent.com/AFhV4u_XnQGevrGz5N-JJ_POYQnM5bThVYB-Us9UUXkTBvCvRYah0tHH33-TLWmO5P4pGJMulbzvlvSjI-ZcNF5RtSI2lP-tTw'
      ],
      [
        'Giò thủ',
        'https://giochatuyet.com/uploads/source/bai-viet-cha-lua/gio-thu.jpg'
      ],
      [
        'Chả chiên',
        'https://media.loveitopcdn.com/31293/thumb/cha-chien-1.png'
      ],
      [
        'Chả bì',
        'https://api.bapi.com.vn/file.api/files/image/Original/4688daa7-df55-4d2c-a98d-f507dcaabbc4'
      ],
      [
        'Nem chua',
        'https://dacsanlamqua.com/wp-content/uploads/2017/02/nem-chua-da-nang-1.jpg'
      ],
      [
        'Nem lụi',
        'https://dulichkhampha24.com/wp-content/uploads/2022/10/nem-lui-da-nang-2-4.jpg'
      ],
      [
        'Chả Huế',
        'https://product.hstatic.net/200000667673/product/cha-hue-cuu-long-2_d08e62d304eb4c6fadfe9957f702d44f.jpg'
      ]
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: chaGioCategory.categoryId
        }
      });
    });
    const chaGioFood = await Promise.all(chaGioFoodArr);

    const khacFoodArr = [
      [
        'Đậu hủ',
        'https://thucphamnhanh.com/wp-content/uploads/2020/10/dau-hu-trang-mieng-5.jpg'
      ],
      [
        'Rong biển lá',
        'https://product.hstatic.net/200000300020/product/la_nori_931e8aff3c154f42933faae3259fe8a6_master.png'
      ],
      [
        'Rong biển vụn',
        'https://bizweb.dktcdn.net/thumb/grande/100/456/761/products/rong-bien-soi-han-quoc-wando.png?v=1672727083333'
      ],
      ['Mẻ', 'https://cdn.tgdd.vn/2020/07/CookProductThumb/12-620x620-3.jpg'],
      [
        'Hành khô',
        'https://bizweb.dktcdn.net/thumb/grande/100/390/808/products/hanh-bac-500x500.jpg?v=1592904805923'
      ],
      [
        'Huyết heo',
        'https://thucphamnhanh.com/wp-content/uploads/2020/10/huyet-heo-loai-1kg-4.jpg'
      ],
      [
        'Vỏ bưởi',
        'https://qik.com.vn/files/image/1728-cach-nau-vo-buoi-goi-dau.jpg'
      ],
      [
        'Phèn chua',
        'https://cdn.tgdd.vn/2023/08/CookRecipe/CookTipsNote/phen-chua-phi-la-gi-tac-dung-cua-phen-chua-trong-nau-an-tipsnote-800x450.jpg'
      ],
      [
        'Mè trắng',
        'https://anphufood.com.vn/wp-content/uploads/2020/03/m%C3%A8-tr%E1%BA%AFng.jpg'
      ],
      [
        'Đậu phụ non',
        'https://cdn.tgdd.vn/Products/Images/7461/206302/bhx/dau-hu-non-vi-nguyen-hop-280g-202303141129377101.jpg'
      ]
    ].map(async (food) => {
      const dataFood = await this.prisma.food.create({
        data: { name: food[0], description: food[0], imageUrl: food[1] }
      });
      return await this.prisma.foodCategory.create({
        data: {
          foodId: dataFood.foodId,
          categoryId: khacCategory.categoryId
        }
      });
    });
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
        ).map((food) => {
          return {
            toBuyListId: listId,
            foodId: food.foodId,
            quantity: 1 + Math.floor(Math.random() * 10)
          };
        });
      })
    });

    const outDateArr = [
      '2023-07-20',
      '2023-07-25',
      '2023-07-30',
      '2023-08-01',
      '2023-08-07',
      '2023-08-12',
      '2023-08-20',
      '2023-08-25',
      '2023-11-15',
      '2023-11-24',
      '2023-11-25',
      '2023-12-14',
      '2023-12-15',
      '2023-12-30',
      '2024-01-15',
      '2023-01-15',
      '2024-02-30'
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
        haiSanFood[2], // Cua đồng: 1 kg
        thitFood[23], // Sườn sụn: 600 gr
        thitFood[24], // Bắp bò: 800 gr
        phoBunMienFood[6], // Bún tươi: 1 kg
        khacFood[0], // Đậu hũ: 10 miếng
        quaFood[7], // Cà chua: 5 – 7 quả
        khacFood[3], // 1 chút mẻ (ngoài ra bạn có thể thay thế bằng sấu, me hay quả dọc), gừng
        giaViFood[20], // 1 ít mắm tôm
        khacFood[4], // Hành khô: 2 củ
        rauLaFood[13], // Hành lá, rau mùi
        rauLaFood[29],
        rauLaFood[34], // Rau sống: rau muống chẻ, xà lách, mùi tàu, hành lá, tía tô, kinh giới, giá đỗ, chanh, ớt.
        rauLaFood[19],
        rauLaFood[33],
        rauLaFood[35],
        rauLaFood[12],
        cuFood[2],
        cuFood[27],
        giaViFood[0],
        giaViFood[15],
        giaViFood[2],
        giaViFood[6],
        giaViFood[5],
        giaViFood[21]
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
        thitFood[25], // 500g thịt ba chỉ
        cuFood[6], // 3 cây sả
        cuFood[31], // 1 củ hành tím
        cuFood[27], // 1 quả ớt tươi
        rauLaFood[13], // 50g hành lá
        giaViFood[2],
        giaViFood[3],
        giaViFood[11],
        giaViFood[18],
        giaViFood[9]
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
        haiSanFood[8], // 1 con cá chép
        thitFood[25], // 100g thịt ba chỉ
        cuFood[32], // Củ riềng tươi
        cuFood[6],
        cuFood[33], // Sả, gừng
        khacFood[4],
        cuFood[27], // Hành khô, ớt
        giaViFood[2],
        giaViFood[4],
        giaViFood[5],
        giaViFood[22],
        giaViFood[3], // Nước mắm, nước tương, hạt nêm, dầu hào, đường
        rauLaFood[23] // Nấm hương khô
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
        trungFood[2], // Trứng vịt hoặc trứng gà công nghiệp: 3 – 4 quả
        haiSanFood[10], // Hàu sữa tươi: 1kg
        rauLaFood[13], // Hành lá: 50gr
        cuFood[12], // Hành củ: 3 – 4 củ
        suaTuoiFood[3], // Sữa tươi: 2 thìa cà phê (không bắt buộc)
        cuFood[13], // Hành tây: 1 củ vừa
        giaViFood[0], // Dầu ăn: 5 thìa cà phê
        giaViFood[3], // Nước mắm: 3 thìa cà phê
        giaViFood[5], // Hạt nêm: 1 thìa cà phê
        giaViFood[23], // Muối i-ốt: 1/2 thìa cà phê
        giaViFood[6], // Bột canh: 1/2 thìa cà phê
        giaViFood[7], // Tiêu xay: 1 thìa cà phê
        giaViFood[24] // Bột ngọt: 1 thìa cà phê
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
        thitFood[26], // Thịt gà: 500g
        khacFood[5], // Bột năng: 100g
        botFood[10], // Nếp: 80g
        nguCocFood[3], // Đậu xanh cà vỏ: 40g
        giaViFood[18], // Muối hạt: 30g
        cuFood[24], // Tiêu hạt: 10g
        giaViFood[7], // Tiêu xay: ½ muỗng cafe
        giaViFood[5], // Hạt nêm: 1 muỗng cafe
        giaViFood[24], // Bột ngọt: ½ muỗng cafe
        giaViFood[2], // Nước mắm: 2 muỗng cafe
        trungFood[0], // Lòng đỏ trứng gà: 1 cái
        cuFood[6], // Sả: 5 cây
        rauLaFood[36], // Lá chanh: 10 lá
        cuFood[33], // Gừng: 1 củ
        cuFood[25], // Tỏi: 1 củ
        giaViFood[0] // Dầu ăn: 150ml
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
        thitFood[24], // Bắp bò: 600 gr
        thitFood[27], // Nạm bò: 600 gr
        thitFood[28], // Gân bò: 400 gr
        thitFood[2], // Giò heo (chọn giò trước): 1 cái khoảng 800 gr
        thitFood[22], // Xương ông: 1 kg
        doHopFood[23], // Mắm ruốc Huế: khoảng 3 muỗng canh
        cuFood[6], // Sả: 6 cây
        cuFood[33], // Gừng: 50 gr
        cuFood[31], // Hành tím, tỏi
        cuFood[25], // Bún tươi cọng to
        cuFood[34],
        rauLaFood[12],
        rauLaFood[37],
        rauLaFood[38],
        rauLaFood[13],
        cuFood[13],
        cuFood[30],
        // Rau sống (bắp chuối, giá sống, rau thơm, rau răm, hành lá, củ hành tây)
        chaGioFood[7], // Chả Huế (tùy thích)
        giaViFood[21],
        giaViFood[7],
        giaViFood[18],
        giaViFood[2],
        giaViFood[0],
        giaViFood[25],
        // Ớt, sa tế, tiêu, muối, nước mắm, dầu ăn, dấm trắng
        // Huyết heo (nếu không thích ăn huyết bạn có thể bỏ qua)
        khacFood[5]
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
        doHopFood[0], // 1kg cá ngừ
        quaFood[36], // ½ trái thơm
        quaFood[7], // 5 trái cà chua
        cuFood[31], // 40g hành tím
        cuFood[25], // 30g tỏi
        cuFood[35], // 3 trái ớt hiểm
        rauLaFood[39], // 40g củ nén (hành tăm)
        cuFood[36], // 5g củ nghệ
        cuFood[6], // 2 cây sả
        rauLaFood[13], // 4 đầu hành
        rauLaFood[40], // 4 cây ngò rí có luôn phần gốc
        cuFood[2], // 1 muỗng cà phê nước cốt chanh
        phoBunMienFood[6], // Bún tươi
        rauLaFood[34], // Rau ăn kèm: xà lách, bắp cải
        giaViFood[17],
        giaViFood[26],
        giaViFood[3],
        giaViFood[5],
        giaViFood[2],
        giaViFood[24],
        giaViFood[27],
        giaViFood[7]
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
        khacFood[6], // Vỏ của 2 quả bưởi
        giaViFood[28], // Đường cát trắng: 140gr
        giaViFood[18], // Muối
        khacFood[7], // Phèn chua
        giaViFood[29] // Vani
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
        quaFood[10], // Chuối chín: 1 kg (cách chọn chuối như trên)
        giaViFood[28], // Đường cát trắng: 500 gr
        cuFood[2] // Chanh tươi: 1 quả
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
        phoBunMienFood[7], // 500g bánh phở (chưa cắt sợi)
        thitFood[29], // 200g thịt bò thăn
        cuFood[25],
        rauLaFood[34], // 1 củ tỏi, rau xà lách
        rauLaFood[41], // Rau húng Láng (có thể thay thế bằng rau quế, rau thơm)
        rauLaFood[40], // Rau mùi ta (ngò rí)
        giaViFood[2],
        giaViFood[5],
        giaViFood[24],
        giaViFood[7]

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
        botFood[11], // 250g bột gạo
        botFood[10], // 40g bột năng
        giaViFood[18], // 1/2 muỗng cà phê muối
        doHopFood[24], // 300ml nước cốt dừa
        doUongFood[0], // 400ml nước
        doHopFood[20], // 150g thịt xay nhuyễn
        doHopFood[21], // 100g tôm khô
        rauLaFood[42], // 50g nấm mèo
        cuFood[31], // 1 củ hành tím
        cuFood[25], // 1 củ tỏi
        giaViFood[5],
        giaViFood[3],
        cuFood[2],
        cuFood[27]
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
        rauLaFood[43], // 10 hoa đậu biếc khô
        gaoFood[0], // 400g gạo nếp
        quaFood[37], // Dừa nạo
        giaViFood[3],
        giaViFood[18], // Đường, muối
        nguCocFood[4], // Đậu phộng
        khacFood[8] // Mè trắng
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
        nguCocFood[5], // 500g cốm xanh
        nguCocFood[3], // 180g đậu xanh không vỏ
        nguCocFood[6], // 150g hạt sen
        quaFood[38], // 120g dừa sợi
        khacFood[8], // Mè trắng rang
        giaViFood[28], // 100g đường trắng
        giaViFood[30] // 100ml dầu vừng
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
        doHopFood[25], // Kim chi Hàn Quốc: 200gr
        rauLaFood[25], // Nấm kim châm: 200gr
        cuFood[37], // Tỏi tây (Hành boaro)
        thitFood[30], // Thịt bò ngon: 200gr
        khacFood[9], // Đậu phụ non: 2 miếng
        giaViFood[2],
        giaViFood[5],
        giaViFood[24],
        giaViFood[7]
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
        rauLaFood[27], // 1 mớ rau muống
        haiSanFood[19], // 3 con ghẹ hoặc số lượng tùy thích
        khacFood[4], // 1 củ hành khô
        giaViFood[2],
        giaViFood[5],
        giaViFood[24],
        giaViFood[7]
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
        haiSanFood[10], // 50gr hàu sữa
        nguCocFood[6], // 20gr hạt sen
        rauLaFood[44], // 30gr nấm rơm
        gaoFood[3], // 30g gạo
        giaViFood[0], // 10gr dầu ăn
        giaViFood[2],
        giaViFood[28],
        giaViFood[3]
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
        gaoFood[1], // 30gr gạo tẻ
        thitFood[21], // 1 miếng ức gà
        cuFood[15], // 1/2 củ khoai lang
        cuFood[7] // 1/3 củ củ cải
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
        giaViFood[2], // Nước mắm (loại ngon): 2 muỗng canh
        cuFood[33],
        cuFood[25],
        cuFood[29],
        // Gừng, tỏi băm, chanh (1 trái), ớt tươi
        giaViFood[28] // Đường cát trắng
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
        thitFood[31], // 4 con chim cút
        giaViFood[31], // Ngũ vị hương
        giaViFood[10], // Mật ong
        giaViFood[22],
        giaViFood[4],
        giaViFood[24],
        giaViFood[3],
        giaViFood[5],
        // Dầu hào, nước tương, bột ngọt, đường, hạt nêm
        cuFood[25],
        // Tỏi
        rauLaFood[34],
        quaFood[7],
        rauLaFood[41]
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
        doHopFood[26], // Phần thạch rau câu dừa
        quaFood[39], // 1 trái dừa non
        doHopFood[27], // 3 gr thạch rau câu giòn
        botFood[12], // 1 gói bột rau câu dẻo
        giaViFood[3] // 70g đường
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
        cuFood[15], // 350gr khoai lang ruột vàng
        cuFood[38], // 200gr khoai mì
        cuFood[39], // 200gr khoai môn cau
        nguCocFood[3], // 100gr đậu xanh không vỏ
        nguCocFood[4], // 150gr đậu phộng
        khacFood[1], // 80gr rong biển
        botFood[13], // 80gr bột báng
        botFood[14], // 80gr bột khoai
        quaFood[37], // 500gr cơm dừa nạo
        giaViFood[3], // 400gr đường trắng
        rauLaFood[17], // 2 lá dứa
        giaViFood[18] // 1/2 muỗng cà phê muối
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
        haiSanFood[20], // 1 kg cá diêu hồng
        cuFood[13], // 1 củ hành tây
        cuFood[33], // 1 củ gừng
        cuFood[31], // 1 củ hành tím
        cuFood[25], // 1 củ tỏi
        rauLaFood[13], // 30g hành lá
        rauLaFood[40], // 30g rau ngò
        cuFood[27], // 1 quả ớt
        giaViFood[4], // Xì dầu (nước tương), dầu hào
        giaViFood[3],
        giaViFood[5],
        giaViFood[7],
        giaViFood[18]
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
        haiSanFood[21], // 3 – 4 con tôm hùm
        doUongFood[12], // 150ml rượu vang trắng
        giaViFood[18],
        giaViFood[5],
        giaViFood[0],
        cuFood[33],
        // Gia vị: hạt nêm, muối
        // Dầu ăn hoặc dầu Olive
        // 1 nhánh gừng
        rauLaFood[40], // Ngò và hành lá
        rauLaFood[13]
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
        haiSanFood[14], // 200g sứa
        quaFood[33], // 1 quả xoài xanh
        cuFood[4], // 1 củ cà rốt
        nguCocFood[4], // ½ bát đậu phộng rang
        giaViFood[2],
        cuFood[2],
        giaViFood[3],
        cuFood[27],
        cuFood[25],
        // Gia vị: nước mắm, chanh, đường, ớt, tỏi
        doHopFood[28], // Bò khô
        rauLaFood[37] // Rau thơm, rau mùi
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
        thitFood[21], // Ức gà: 2 cái
        cuFood[40], // Ngô hạt: 120 gram
        rauLaFood[23], // Nấm hương khô: 5 – 6 cái
        botFood[10], // Bột năng: 30 gram
        rauLaFood[13],
        rauLaFood[40], // Rau nêm: hành, ngò
        // Gia vị thông dụng
        giaViFood[18],
        giaViFood[5],
        giaViFood[0]
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
        thitFood[21], // Ức gà: 2 cái
        cuFood[40], // Ngô hạt: 120 gram
        rauLaFood[23], // Nấm hương khô: 5 – 6 cái
        botFood[10], // Bột năng: 30 gram
        rauLaFood[13],
        rauLaFood[40], // Rau nêm: hành, ngò
        giaViFood[18],
        giaViFood[5],
        giaViFood[0]
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
        rauLaFood[44], // Nấm rơm: 100 gram
        rauLaFood[23], // Nấm hương: 50 gram
        cuFood[4], // Cà rốt: 150 gram
        nguCocFood[6], // Hạt sen: 150 gram
        cuFood[40], // Bắp hạt: 150 gram
        rauLaFood[13],
        rauLaFood[40], // Rau nêm: hành, ngò
        botFood[1], // Bột bắp: 3 muỗng canh
        // Gia vị thông dụng
        giaViFood[18],
        giaViFood[5],
        giaViFood[0]
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
