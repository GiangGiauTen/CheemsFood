import { IsArray, IsNotEmpty } from 'class-validator';

export class UpdateStorageDto {
  @IsArray()
  @IsNotEmpty()
  foods: any;
}
