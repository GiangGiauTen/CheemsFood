import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { GroupModule } from './group/group.module';
import { RecipeModule } from './recipe/recipe.module';
import { FoodModule } from './food/food.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { SeedModule } from './seed/seed.module';
import { ToBuyListModule } from './to-buy-list/to-buy-list.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    FoodModule,
    RecipeModule,
    GroupModule,
    StorageModule,
    PrismaModule,
    SeedModule,
    ToBuyListModule,
    CategoryModule,
  ],
})
export class AppModule {}
