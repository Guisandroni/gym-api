# 🏋️‍♂️ GYM API

A comprehensive API for gym management, built with Node.js, handling users, check-ins, and gym locations.

## 💻 Technologies

- Node.js
- Fastify
- Prisma
- PostgreSQL
- Docker
- Vitest
- JWT Authentication
- Zod Validation

## 🚀 Features

- User registration and authentication
- Gym management (create, search, and nearby gyms)
- Check-in system with validation
- User metrics and history
- Role-based access control (Admin/User)
- Location-based gym search

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- Docker and Docker Compose
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Guisandroni/gym-api.git
cd gym-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up the environment variables:
```bash
cp .env.example .env
```

4. Start the PostgreSQL database using Docker:
```bash
docker compose up -d
```

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

## 🔑 API Routes

### Authentication
- `POST /users`: Register a new user
- `POST /sessions`: User login
- `PATCH /token/refresh`: Refresh access token

### Users
- `GET /me`: Get authenticated user profile
- `GET /users/metrics`: Get user metrics

### Gyms
- `POST /gyms`: Create a new gym (Admin only)
- `GET /gyms/search`: Search gyms by name
- `GET /gyms/nearby`: Find nearby gyms

### Check-ins
- `POST /gyms/:gymId/check-ins`: Create a new check-in
- `PATCH /check-ins/:checkInId/validate`: Validate check-in (Admin only)
- `GET /check-ins/history`: Get user check-in history
- `GET /check-ins/metrics`: Get check-in metrics

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 📝 Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=development
DATABASE_URL="postgresql://docker:docker@localhost:5432/apisolid?schema=public"
JWT_SECRET="your-secret-key"
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected routes:

1. Register a user or login to get an access token
2. Include the token in the Authorization header:
```
Authorization: Bearer your-access-token
```

## 📦 Database Schema

The project uses Prisma as ORM with the following main entities:
- Users
- Gyms
- CheckIns

View the complete schema in `prisma/schema.prisma`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
