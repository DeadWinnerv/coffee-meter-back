import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoffeePurchase, CoffeePurchaseDocument } from './coffee-purchase.model';

@Injectable()
export class CoffeePurchaseService {
  constructor(@InjectModel(CoffeePurchase.name) private readonly coffeePurchaseModel: Model<CoffeePurchaseDocument>) {}

  async findAll(): Promise<CoffeePurchase[]> {
    return this.coffeePurchaseModel.find().exec();
  }

  async create(purchase: CoffeePurchase): Promise<CoffeePurchase> {
    const newPurchase = new this.coffeePurchaseModel(purchase);
    return newPurchase.save();
  }
}
