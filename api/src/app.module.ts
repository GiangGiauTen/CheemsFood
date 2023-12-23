import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { GroupModule } from './group/group.module';
import { RecipeModule } from './recipe/recipe.module';
import { FoodModule } from './food/food.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { ToBuyListModule } from './to-buy-list/to-buy-list.module';
import { CategoryModule } from './category/category.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    AuthModule,
    UserModule,
    FoodModule,
    RecipeModule,
    GroupModule,
    StorageModule,
    SeedModule,
    ToBuyListModule,
    CategoryModule,
    MulterModule.register({
      dest: './uploads'
    })
  ]
})
export class AppModule {}
