import { Router } from 'express';
import { DebtController } from '../controllers/debt.controller.js';

const debtRoutes = Router();
const debtController = new DebtController();

/**
 * @openapi
 * /api/debts:
 *   post:
 *     summary: Cria uma nova dívida
 *     tags:
 *       - Dívidas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDebtInput'
 *     responses:
 *       201:
 *         description: Dívida criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Debt'
 *       400:
 *         description: Erro de validação nos dados enviados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *   get:
 *     summary: Lista todas as dívidas
 *     tags:
 *       - Dívidas
 *     responses:
 *       200:
 *         description: Lista de dívidas cadastradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Debt'
 */
debtRoutes.post('/', debtController.create);
debtRoutes.get('/', debtController.findAll);

/**
 * @openapi
 * /api/debts/{id}:
 *   get:
 *     summary: Busca uma dívida pelo ID
 *     tags:
 *       - Dívidas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: UUID da dívida
 *     responses:
 *       200:
 *         description: Detalhes da dívida encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Debt'
 *       404:
 *         description: Dívida não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   put:
 *     summary: Atualiza uma dívida existente
 *     tags:
 *       - Dívidas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDebtInput'
 *     responses:
 *       200:
 *         description: Dívida atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Debt'
 *       404:
 *         description: Dívida não encontrada
 *   delete:
 *     summary: Remove uma dívida
 *     tags:
 *       - Dívidas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       204:
 *         description: Dívida excluída com sucesso
 *       404:
 *         description: Dívida não encontrada
 */
debtRoutes.get('/:id', debtController.findById);
debtRoutes.put('/:id', debtController.update);
debtRoutes.delete('/:id', debtController.delete);

export { debtRoutes };
