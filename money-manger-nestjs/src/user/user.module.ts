import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_MODAL, UserSchema } from 'src/schema/user';

@Module({
  imports: [MongooseModule.forFeature([{ name: USER_MODAL , schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [MongooseModule]
})
export class UserModule {}
