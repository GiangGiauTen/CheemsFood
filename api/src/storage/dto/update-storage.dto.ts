import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateStorageDto {
  @IsArray()
  @IsNotEmpty()
  foods: any;
}
