import { Module } from '@nestjs/common';
import { ToBuyListService } from './to-buy-list.service';
import { ToBuyListController } from './to-buy-list.controller';

@Module({
  controllers: [ToBuyListController],
  providers: [ToBuyListService]
})
export class ToBuyListModule {}
