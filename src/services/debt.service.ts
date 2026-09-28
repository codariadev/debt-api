import { DebtRepository, CreateDebtInput, UpdateDebtInput } from '../repositories/debt.repository.ts';

export class DebtService {
	private DebtRepository: DebtRepository;

	constructor() {
		this.DebtRepository = new DebtRepository();
	}

	async createDebt(data: CreateDebtInput) {
		return await this.DebtRepository.create(data);
	}

	async getAllDebts() {
		return await this.DebtRepository.findAll();
	}

	async getDebtById(id: string) {
		const debt = await this.DebtRepository.findById(id);
		if (!debt) {
			throw new Error('DEBT_BOT_FOUND');
		}
		return debt;
	}

	async updateDebt(id: string, data: UpdateDebtInput) {
		await this.getDebtById(id);
		return await this.DebtRepository.update(id, data);
	}

	async deleteDebt(id: string) {
		await this.getDebtById(id);
		return await this.DebtRepository.delete(id);
	}
}