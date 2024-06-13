import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { USER_MODAL, UserDocument } from 'src/schema/user';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(USER_MODAL) private userModel: Model<UserDocument>) {}

    async findAll() {
        return await this.userModel.find() 
    }

    async find(id: ObjectId){
        return await this.userModel.findOne({_id: id})
    }

    async create(createUserDTO: CreateUserDTO) {
        const {username, name, email, password, gender} = createUserDTO
        const saltOrRounds = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, saltOrRounds)
        const boyPicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlPicture = `https://avatar.iran.liara.run/public/girl?username=${username}`

        console.log(password, encryptedPassword)

        const user = await this.userModel.create({
            username,
            name,
            email,
            password: encryptedPassword,
            gender,
            profilePicture: gender !== "male" ? girlPicture : boyPicture
        })

        return user
    }

    async update(id: ObjectId, updateUserDTo: Partial<CreateUserDTO>) {
        const exitingUser = await this.userModel.findOne({_id: id})

        if(!exitingUser) throw Error("User Not Exits")

        const user = await this.userModel.findByIdAndUpdate({_id: id}, updateUserDTo, {new: true})

        return user
    }

    async delete(id: ObjectId) {
        const exitingUser = await this.userModel.findOne({_id: id})

        if(!exitingUser) throw Error("User Not Exits")

        await this.userModel.findByIdAndDelete({_id: id})

        return { message: id }
    }
}
