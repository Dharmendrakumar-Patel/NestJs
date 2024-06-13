import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTransactionDTO } from './transaction.dto';
import { TRANSACTION_MODAL, TransactionDocument } from 'src/schema/transaction';
import { USER_MODAL, UserDocument } from 'src/schema/user';

@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(TRANSACTION_MODAL) private transactionModal: Model<TransactionDocument>,
        @InjectModel(USER_MODAL) private userModal: Model<UserDocument>
    ) {}

    async findAll(query: Record<string,any>) {
        return await  this.transactionModal.find(query)
    }

    async find(id: ObjectId) {
        return await this.transactionModal.findById(id)
    }

    async create(createTransactionDTO: CreateTransactionDTO) {
        const { userId } = createTransactionDTO

        const user = await this.userModal.findById(userId)

        if(!user) throw Error("Provide Valid User")

        const transaction = await this.transactionModal.create(createTransactionDTO)

        return transaction
    }

    async update(id: ObjectId, updateTransactionDTO: Partial<CreateTransactionDTO>) {
        const exitingTransaction = await this.transactionModal.findById(id)

        if(!exitingTransaction) throw Error("Provide Valid Transaction")

        const transaction = await this.transactionModal.findByIdAndUpdate({_id: id}, updateTransactionDTO)

        return transaction
    }

    async delete(id: ObjectId) {
        const exitingTransaction = await this.transactionModal.findById(id)

        if(!exitingTransaction) throw Error("Provide Valid Transaction")

        await this.transactionModal.findByIdAndDelete(id)

        return { message: id }
    }
}


