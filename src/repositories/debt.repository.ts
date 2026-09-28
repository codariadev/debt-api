import { prisma } from '../database/prisma.ts';
import { DebtStatus, Prisma } from '@prisma/client';

export interface CreateDebtInput {
	description: string;
	amount: number;
	dueDate: Date;
	status?: DebtStatus;
}

export interface UpdateDebtInput {
	description?: string;
	amount?: number;
	dueDate?: Date;
	status?: DebtStatus;
}

export class DebtRepository {
	async create(data: CreateDebtInput) {
		return await prisma.debt.create({
			data: {
				description: data.description,
				amount: new Prisma.Decimal(data.amount),
				dueDate: data.dueDate,
				status: data.status || DebtStatus.PENDING,
			},
		});
	}

	async findAll() {
		return await prisma.debt.findMany({
	      orderBy: { createdAt: 'desc' },
	    });
	}

	async findById(id: string) {
	    return await prisma.debt.findUnique({
	      where: { id },
	    });
	  }

	async update(id: string, data: UpdateDebtInput) {
	    return await prisma.debt.update({
	      where: { id },
	      data: {
	        ...data,
	        amount: data.amount ? new Prisma.Decimal(data.amount) : undefined,
	      },
	    });
	  }


	async delete(id:string) {
		return await prisma.debt.delete({
			where: { id },
		});
	}
}
