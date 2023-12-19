import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddToFavoriteDto {
  @IsNotEmpty()
  @IsNumber()
  recipeId: number;
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  imgUrl: string;
}
