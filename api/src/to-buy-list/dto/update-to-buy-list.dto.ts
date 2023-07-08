import { PartialType } from '@nestjs/mapped-types';
import { CreateToBuyListDto } from './create-to-buy-list.dto';

export class UpdateToBuyListDto extends PartialType(CreateToBuyListDto) {}
