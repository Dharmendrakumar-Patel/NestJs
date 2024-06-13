import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { USER_MODAL } from '../user';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
    @Prop({ required: true, type: mongoose.Schema.ObjectId ,  ref: USER_MODAL })
    userId: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, enum: ["debit", "credit"] })
    paymentType: string;

    @Prop({ required: true, enum: ["online", "offline"] })
    paymentMode: string;

    @Prop({ required: true, enum: ['card', 'upi', 'netbanking', 'cash']})
    paymentWay: string;

    @Prop({ required: true })
    amount: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

export const TRANSACTION_MODAL = Transaction.name