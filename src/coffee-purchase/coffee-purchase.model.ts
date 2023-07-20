import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoffeePurchaseDocument = CoffeePurchase & Document;

@Schema()
export class CoffeePurchase {
  @Prop({ type: String, ref: 'User' })
  user: string;

  @Prop()
  weightKg: number;

  @Prop()
  purchaseDate: Date;
}

export const CoffeePurchaseSchema = SchemaFactory.createForClass(CoffeePurchase);
