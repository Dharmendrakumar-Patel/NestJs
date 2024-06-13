import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;
    
    @Prop({ required: true })
    profilePicture: string;

    @Prop({ required: false, enum: ["male", "female"], default: "male"})
    gender?: string
}

export const UserSchema = SchemaFactory.createForClass(User);

export const USER_MODAL = User.name