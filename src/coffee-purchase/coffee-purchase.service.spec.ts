import { Test, TestingModule } from '@nestjs/testing';
import { CoffeePurchaseService } from './coffee-purchase.service';

describe('CoffeePurchaseService', () => {
  let service: CoffeePurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeePurchaseService],
    }).compile();

    service = module.get<CoffeePurchaseService>(CoffeePurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
