import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoffeeRating, CoffeeRatingDocument } from './coffee-rating.model';

@Injectable()
export class CoffeeRatingService {
  constructor(@InjectModel(CoffeeRating.name) private readonly coffeeRatingModel: Model<CoffeeRatingDocument>) {}

  async findAll(): Promise<CoffeeRating[]> {
    return this.coffeeRatingModel.find().exec();
  }

  async create(rating: CoffeeRating): Promise<CoffeeRating> {
    const newRating = new this.coffeeRatingModel(rating);
    return newRating.save();
  }
}
