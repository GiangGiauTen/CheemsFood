import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsNotEmpty()
  @IsNumber()
  foodId: number;
}
