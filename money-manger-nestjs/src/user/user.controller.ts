import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ObjectId } from 'mongoose';
import { CreateUserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService) {}

    @Get()
    findAll() {
        return this.userservice.findAll()
    }

    @Get(':id')
    find(@Param('id') id: ObjectId) {
        return this.userservice.find(id)
    }

    @Post()
    create(@Body() createUserDTO: CreateUserDTO ) {
        return this.userservice.create(createUserDTO)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() updateUserDTO: Partial<CreateUserDTO>) {
        return this.userservice.update(id, updateUserDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.userservice.delete(id)
    }
}
