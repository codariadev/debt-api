import express from 'express';
import swaggerUi from 'swagger-ui-express';
import {swaggerSpec} from './config/swagger.ts';
import {debtRoutes} from './routes/debt.routes.ts';
import {errorHandler} from './middlewares/error.middleware.ts';

const app = express();

app.use(express.json());

app.get('health', (req, res) => {
	return res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/debts', debtRoutes);

app.use(errorHandler);

export {app};