import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddFoodDto {
  @IsNotEmpty()
  @IsNumber()
  foodId: number;
}
