import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoffeeRatingDocument = CoffeeRating & Document;

@Schema()
export class CoffeeRating {
  @Prop({ type: String, ref: 'User' })
  user: string;

  @Prop()
  coffee: string;

  @Prop()
  rating: number;
}

export const CoffeeRatingSchema = SchemaFactory.createForClass(CoffeeRating);
