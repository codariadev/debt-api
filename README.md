# 💸 Debt Management API

API RESTful profissional para gerenciamento e controle de dívidas, construída com **Node.js**, **TypeScript**, **Express**, **Prisma ORM** e **PostgreSQL**, utilizando **Docker** para containerização.

![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=flat-square&logo=nodedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Express](https://img.shields.io/badge/Express-5.x-black?style=flat-square&logo=express)
![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?style=flat-square&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI%203.0-85EA2D?style=flat-square&logo=swagger)

---

## 📋 Sobre o Projeto

O **Debt Management API** é uma API RESTful desenvolvida para demonstrar uma arquitetura backend organizada, escalável e de fácil manutenção.

O projeto utiliza uma arquitetura em camadas:

`Router` → `Controller` → `Service` → `Repository` → `Prisma` → `PostgreSQL`

### A aplicação também conta com:

- **TypeScript** para tipagem estática e segurança em tempo de compilação
- **Express** para construção e gerenciamento das rotas REST
- **Prisma ORM** para acesso tipado e migrations no banco de dados
- **PostgreSQL** como banco de dados relacional
- **Zod** para validação rigorosa de schemas e DTOs
- **Docker & Docker Compose** para ambiente containerizado e reprodutível
- **Swagger/OpenAPI** para documentação interativa
- **Tratamento centralizado de erros** via middleware dedicado

---

## 🏗️ Arquitetura

A aplicação utiliza separação de responsabilidades, mantendo cada camada responsável por uma parte específica do fluxo.

```text
┌──────────────────────┐
│     HTTP Request     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│        Router        │
│  Rotas da aplicação  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Controller      │
│   HTTP + validação   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Service        │
│  Regras de negócio   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Repository      │
│   Acesso aos dados   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│        Prisma        │
│         ORM          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      PostgreSQL      │
│   Banco relacional   │
└──────────────────────┘
```

### Responsabilidade das camadas

| Camada         | Responsabilidade                                               |
| -------------- | -------------------------------------------------------------- |
| **Router**     | Define os endpoints e direciona as requisições                 |
| **Controller** | Recebe requisições, valida entradas e retorna respostas HTTP   |
| **Service**    | Implementa regras e validações de negócio                      |
| **Repository** | Abstrai o acesso e a persistência dos dados                    |
| **Prisma**     | Atua como ORM e fornece acesso tipado ao banco                 |
| **PostgreSQL** | Armazena os dados da aplicação                                 |

---

## 🛠️ Tecnologias

| Tecnologia         | Utilização                              |
| ------------------ | --------------------------------------- |
| **Node.js**        | Runtime JavaScript                      |
| **TypeScript**     | Tipagem estática                        |
| **Express**        | Framework HTTP                          |
| **PostgreSQL 16**  | Banco de dados relacional               |
| **Prisma ORM**     | ORM e acesso ao banco                   |
| **Zod**            | Validação de schemas                    |
| **Docker**         | Containerização                         |
| **Docker Compose** | Orquestração do PostgreSQL              |
| **Swagger UI**     | Documentação interativa                 |
| **swagger-jsdoc**  | Geração da especificação OpenAPI        |
| **tsx**            | Execução da aplicação em desenvolvimento |

---

## 📁 Estrutura do Projeto

```text
debt-api/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── # Configuração do Swagger/OpenAPI
│   │
│   ├── controllers/
│   │   └── # Controladores HTTP
│   │
│   ├── database/
│   │   └── # Instância do Prisma Client
│   │
│   ├── middlewares/
│   │   └── # Middlewares e tratamento de erros
│   │
│   ├── repositories/
│   │   └── # Acesso e persistência dos dados
│   │
│   ├── routes/
│   │   └── # Definição das rotas
│   │
│   ├── schemas/
│   │   └── # Schemas de validação com Zod
│   │
│   ├── services/
│   │   └── # Regras de negócio
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- Node.js 20 ou superior
- Docker
- Docker Compose
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/codariadev/debt-api.git
```

Entre no diretório:

```bash
cd debt-api
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
DATABASE_URL="postgresql://postgres:postgrespassword@localhost:5432/debt_db?schema=public"
```

Também é recomendado manter um `.env.example` para documentar as variáveis necessárias sem expor informações sensíveis.

Exemplo:

```env
PORT=3000
DATABASE_URL="postgresql://postgres:postgrespassword@localhost:5432/debt_db?schema=public"
```

> ⚠️ **Importante:** o arquivo `.env` não deve ser versionado no Git. Utilize o `.gitignore` para protegê-lo.

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o PostgreSQL

Suba o container do PostgreSQL utilizando Docker Compose:

```bash
docker compose up -d
```

Para verificar os containers em execução:

```bash
docker compose ps
```

### 5. Execute as migrations

Crie e aplique a migration inicial:

```bash
npx prisma migrate dev --name init
```

O Prisma também poderá gerar o Prisma Client conforme a configuração do projeto.

### 6. Inicie a aplicação

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

---

## 📖 Documentação da API

A API possui documentação interativa utilizando **Swagger UI** e **OpenAPI**.

Com a aplicação em execução, acesse:

```text
http://localhost:3000/api-docs
```

No Swagger é possível:

- Visualizar todos os endpoints;
- Consultar parâmetros;
- Visualizar schemas;
- Testar requisições;
- Ver respostas HTTP;
- Explorar a documentação da API.

---

## 📌 Endpoints

| Método   | Endpoint         | Descrição                         | Respostas                    |
| -------- | ---------------- | --------------------------------- | ---------------------------- |
| `GET`    | `/health`        | Verifica se a API está disponível | `200 OK`                     |
| `POST`   | `/api/debts`     | Cria uma nova dívida              | `201 Created`, `400 Bad Request` |
| `GET`    | `/api/debts`     | Lista todas as dívidas            | `200 OK`                     |
| `GET`    | `/api/debts/:id` | Busca uma dívida por UUID         | `200 OK`, `404 Not Found`    |
| `PUT`    | `/api/debts/:id` | Atualiza uma dívida               | `200 OK`, `400`, `404`       |
| `DELETE` | `/api/debts/:id` | Remove uma dívida                 | `204 No Content`, `404`      |

---

## 🧾 Exemplo de Requisição

### Criar uma dívida

**Endpoint**

```http
POST /api/debts
Content-Type: application/json
```

**Request Body**

```json
{
  "description": "Cartão de Crédito - Nubank",
  "amount": 1250.50,
  "dueDate": "2026-10-15",
  "status": "PENDING"
}
```

**Exemplo com cURL**

```bash
curl -X POST http://localhost:3000/api/debts \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Cartão de Crédito - Nubank",
    "amount": 1250.50,
    "dueDate": "2026-10-15",
    "status": "PENDING"
  }'
```

---

## 🔎 Consultar Dívidas

### Listar todas

```http
GET /api/debts
```

### Consultar uma dívida específica

```http
GET /api/debts/:id
```

Exemplo:

```http
GET /api/debts/550e8400-e29b-41d4-a716-446655440000
```

---

## ✏️ Atualizar uma Dívida

```http
PUT /api/debts/:id
Content-Type: application/json
```

Exemplo:

```json
{
  "description": "Cartão de Crédito - Nubank",
  "amount": 1350.50,
  "dueDate": "2026-10-20",
  "status": "PAID"
}
```

---

## 🗑️ Excluir uma Dívida

```http
DELETE /api/debts/:id
```

Em caso de sucesso, a API retorna:

```text
204 No Content
```

---

## ❤️ Health Check

O endpoint `/health` permite verificar rapidamente se a aplicação está funcionando.

```http
GET /health
```

Resposta esperada:

```json
{
  "status": "ok"
}
```

---

## 🔐 Validação e Tratamento de Erros

As entradas da API são validadas utilizando **Zod**, garantindo que os dados recebidos estejam de acordo com os schemas definidos.

O projeto também utiliza um middleware centralizado para tratamento de erros, evitando que cada Controller precise implementar individualmente o mesmo fluxo de tratamento.

**Fluxo simplificado:**

```text
Request
   ↓
Zod Validation
   ↓
Controller
   ↓
Service
   ```

## **Codariadev**
***Lucas Eduardo Alves***


Projeto desenvolvido para estudo e demonstração de conhecimentos em desenvolvimento backend, APIs REST, arquitetura de software e tecnologias modernas do ecossistema Node.js.
