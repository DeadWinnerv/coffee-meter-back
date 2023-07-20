import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoffeePurchaseService } from './coffee-purchase.service';
import { CoffeePurchase } from './coffee-purchase.model';

@Controller('coffee-purchases')
export class CoffeePurchaseController {
  constructor(private readonly coffeePurchaseService: CoffeePurchaseService) {}

  @Get()
  async findAll(): Promise<CoffeePurchase[]> {
    return this.coffeePurchaseService.findAll();
  }

  @Post()
  async create(@Body() purchase: CoffeePurchase): Promise<CoffeePurchase> {
    return this.coffeePurchaseService.create(purchase);
  }
}
