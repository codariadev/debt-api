import { z } from 'zod';

export const createDebtSchema = z.object({
  description: z.string().min(1, 'A descrição é obrigatória'),
  amount: z.number().positive('O valor deve ser maior que zero'),
  dueDate: z.coerce.date({ invalid_type_error: 'Data de vencimento inválida' }),
  status: z.enum(['PENDING', 'PAID', 'OVERDUE']).optional(),
});

export const updateDebtSchema = createDebtSchema.partial();

export const debtIdParamSchema = z.object({
  id: z.string().uuid('ID inválido. Deve ser um UUID'),
});

export type CreateDebtDTO = z.infer<typeof createDebtSchema>;
export type UpdateDebtDTO = z.infer<typeof updateDebtSchema>;
