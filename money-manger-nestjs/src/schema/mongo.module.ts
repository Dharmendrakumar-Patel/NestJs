import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { USER_MODAL, UserSchema } from './user';
import { TRANSACTION_MODAL, TransactionSchema } from './transaction';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: USER_MODAL , schema: UserSchema }]),
        MongooseModule.forFeature([{ name: TRANSACTION_MODAL , schema: TransactionSchema }]),
    ],
    exports: [MongooseModule]
})

export class MongoModule {}
