import { IsNumber, IsOptional } from 'class-validator';

export class CreateToBuyListDto {
  @IsOptional()
  @IsNumber()
  ownerId: number;
  @IsOptional()
  @IsNumber()
  groupOwnerId: number;
  date: Date;
  toBuyListDetail: any;
}
