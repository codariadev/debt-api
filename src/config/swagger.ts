import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Debt Management API',
      version: '1.0.0',
      description: 'API RESTful em Node.js + TypeScript para gerenciamento de dívidas.',
      contact: {
        name: 'Suporte da API',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local de Desenvolvimento',
      },
    ],
    components: {
      schemas: {
        Debt: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: 'c8b73f8a-1234-4567-89ab-cdef12345678',
            },
            description: {
              type: 'string',
              example: 'Cartão de Crédito - Nubank',
            },
            amount: {
              type: 'number',
              example: 1250.5,
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
              example: '2026-10-15T00:00:00.000Z',
            },
            status: {
              type: 'string',
              enum: ['PENDING', 'PAID', 'OVERDUE'],
              example: 'PENDING',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        CreateDebtInput: {
          type: 'object',
          required: ['description', 'amount', 'dueDate'],
          properties: {
            description: {
              type: 'string',
              example: 'Cartão de Crédito - Nubank',
            },
            amount: {
              type: 'number',
              example: 1250.5,
            },
            dueDate: {
              type: 'string',
              format: 'date',
              example: '2026-10-15',
            },
            status: {
              type: 'string',
              enum: ['PENDING', 'PAID', 'OVERDUE'],
              default: 'PENDING',
            },
          },
        },
        UpdateDebtInput: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
            },
            amount: {
              type: 'number',
            },
            dueDate: {
              type: 'string',
              format: 'date',
            },
            status: {
              type: 'string',
              enum: ['PENDING', 'PAID', 'OVERDUE'],
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Dívida não encontrada',
            },
          },
        },
        ValidationErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Erro de validação nos dados fornecidos',
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string', example: 'amount' },
                  message: { type: 'string', example: 'O valor deve ser maior que zero' },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
