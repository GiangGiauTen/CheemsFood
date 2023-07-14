import { Test, TestingModule } from '@nestjs/testing';
import { ToBuyListService } from './to-buy-list.service';

describe('ToBuyListService', () => {
  let service: ToBuyListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToBuyListService],
    }).compile();

    service = module.get<ToBuyListService>(ToBuyListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
