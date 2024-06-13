import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { TransactionModule } from './transaction/transaction.module';
import { MongoModule } from './schema/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),  
    UserModule,
    TransactionModule,
    DatabaseModule,
    MongoModule
  ], 
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
