import { Request, Response, NextFunction } from 'express';
import { DebtService } from '../services/debt.service.js';
import { createDebtSchema, updateDebtSchema, debtIdParamSchema } from '../schemas/debt.schema.js';

export class DebtController {
  private debtService: DebtService;

  constructor() {
    this.debtService = new DebtService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = createDebtSchema.parse(req.body);
      const debt = await this.debtService.createDebt(data);
      return res.status(201).json(debt);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const debts = await this.debtService.getAllDebts();
      return res.status(200).json(debts);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = debtIdParamSchema.parse(req.params);
      const debt = await this.debtService.getDebtById(id);
      return res.status(200).json(debt);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = debtIdParamSchema.parse(req.params);
      const data = updateDebtSchema.parse(req.body);
      const updatedDebt = await this.debtService.updateDebt(id, data);
      return res.status(200).json(updatedDebt);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = debtIdParamSchema.parse(req.params);
      await this.debtService.deleteDebt(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
