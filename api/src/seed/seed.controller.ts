import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async seedData() {
    await this.seedService.seed();
    return 'Data seeding completed successfully.';
  }
}
