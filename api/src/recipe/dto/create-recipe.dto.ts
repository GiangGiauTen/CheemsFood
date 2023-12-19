import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string;
  foodIdList: number[];
  imgUrl: string;
  img: any;
}
