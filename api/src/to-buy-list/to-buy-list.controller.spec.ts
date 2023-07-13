import { Test, TestingModule } from '@nestjs/testing';
import { ToBuyListController } from './to-buy-list.controller';
import { ToBuyListService } from './to-buy-list.service';

describe('ToBuyListController', () => {
  let controller: ToBuyListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToBuyListController],
      providers: [ToBuyListService],
    }).compile();

    controller = module.get<ToBuyListController>(ToBuyListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
