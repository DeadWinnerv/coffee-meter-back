import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRatingService } from './coffee-rating/coffee-rating.service';
import { CoffeePurchaseService } from './coffee-purchase/coffee-purchase.service';
import { UserService } from './user/user.service';
import { CoffeeRatingController } from './coffee-rating/coffee-rating.controller';
import { CoffeePurchaseController } from './coffee-purchase/coffee-purchase.controller';
import { UserController } from './user/user.controller';
import { CoffeeRating, CoffeeRatingSchema } from './coffee-rating/coffee-rating.model';
import { CoffeePurchase, CoffeePurchaseSchema } from './coffee-purchase/coffee-purchase.model';
import { User, UserSchema } from './user/user.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.qt0apxd.mongodb.net/'),
    MongooseModule.forFeature([
      { name: CoffeeRating.name, schema: CoffeeRatingSchema },
      { name: CoffeePurchase.name, schema: CoffeePurchaseSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [CoffeeRatingController, CoffeePurchaseController, UserController],
  providers: [CoffeeRatingService, CoffeePurchaseService, UserService],
})
export class AppModule {}
