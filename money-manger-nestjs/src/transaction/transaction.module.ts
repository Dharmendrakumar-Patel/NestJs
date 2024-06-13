import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongoModule } from 'src/schema/mongo.module';

@Module({
    imports: [MongoModule],
    controllers: [TransactionController],
    providers: [TransactionService]
})
export class TransactionModule {}
