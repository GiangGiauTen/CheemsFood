import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @IsString()
  @IsNotEmpty()
  groupName: string;
}
