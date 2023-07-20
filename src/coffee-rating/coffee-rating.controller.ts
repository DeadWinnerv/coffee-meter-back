import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeeRating } from './coffee-rating.model';

@Controller('coffee-ratings')
export class CoffeeRatingController {
  constructor(private readonly coffeeRatingService: CoffeeRatingService) {}

  @Get()
  async findAll(): Promise<CoffeeRating[]> {
    return this.coffeeRatingService.findAll();
  }

  @Post()
  async create(@Body() rating: CoffeeRating): Promise<CoffeeRating> {
    return this.coffeeRatingService.create(rating);
  }
}
