import { IsArray, IsNotEmpty } from 'class-validator';

export class AddFoodToStorageDto {
  @IsNotEmpty()
  food: any;
}
