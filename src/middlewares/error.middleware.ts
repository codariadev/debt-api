import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ZodError) {
    const issues = err.issues || err.errors || [];
    return res.status(400).json({
      message: 'Erro de validação nos dados fornecidos',
      errors: issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  if (err.message === 'DEBT_NOT_FOUND') {
    return res.status(404).json({ message: 'Dívida não encontrada' });
  }

  console.error(err);
  return res.status(500).json({ message: 'Erro interno do servidor' });
}
