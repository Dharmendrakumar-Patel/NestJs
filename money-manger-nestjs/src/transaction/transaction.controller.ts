import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ObjectId } from 'mongoose';
import { CreateTransactionDTO } from './transaction.dto';

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.transactionService.findAll(query)
    }

    @Get(':id') 
    find(@Param('id') id: ObjectId) {
        return this.transactionService.find(id)
    }

    @Post()
    create(@Body() createTransactionDTO: CreateTransactionDTO) {
        return this.transactionService.create(createTransactionDTO)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() updateTransactionDTO: Partial<CreateTransactionDTO>) {
        return this.transactionService.update(id, updateTransactionDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.transactionService.delete(id)
    }
}
