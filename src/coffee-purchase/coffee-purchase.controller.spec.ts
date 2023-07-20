import { Test, TestingModule } from '@nestjs/testing';
import { CoffeePurchaseController } from './coffee-purchase.controller';

describe('CoffeePurchaseController', () => {
  let controller: CoffeePurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeePurchaseController],
    }).compile();

    controller = module.get<CoffeePurchaseController>(CoffeePurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
