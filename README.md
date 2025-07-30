# Todo List App - Backend API

A simple REST API backend for a Todo List application, built with **Express.js**, **TypeScript**, **Prisma ORM**, and **MySQL**. This API provides basic task management functionality with database operations and fundamental error handling.

## 🚀 Features

- **RESTful API**: Basic CRUD operations for task management.
- **Database Integration**: Connects to a MySQL database using Prisma ORM.
- **Type Safety**: Built with TypeScript for a type-safe codebase.
- **CORS Support**: Cross-origin resource sharing is enabled.

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: MySQL
- **CORS**: `cors` middleware

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- MySQL server running
- npm or yarn package manager
- Database access credentials

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-backend-repo-url>
cd todo-backend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/todo_db"

# Server
PORT=3001
```

**Important**: Replace `username`, `password`, and `todo_db` with your actual MySQL credentials and database name.

### 4. Database Setup

#### Create Database

First, create the MySQL database:

```sql
CREATE DATABASE todo_db;
```

#### Generate Prisma Client

```bash
npx prisma generate
```

#### Run Database Migrations

```bash
npx prisma migrate dev --name init
```

### 5. Start the Development Server

```bash
npm run dev
```

The API will be available at http://localhost:3001.

## 📁 Project Structure

```
├── node_modules/
├── prisma/
│   ├── migrations/               # Database migrations
│   └── schema.prisma             # Database schema
├── src/
│   ├── routes/
│   │   └── tasks.ts              # Task routes definition
│   ├── app.ts                    # Express app configuration
│   └── prisma.ts                 # Prisma client configuration
├── .env                          # Environment variables
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json                 # TypeScript configuration
```

## 🗄️ Database Schema

### Task Model

```prisma
model Task {
  id        Int      @id @default(autoincrement())
  title     String
  color     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔌 API Endpoints

### Base URL

```
http://localhost:3001
```

### Endpoints

#### Get All Tasks

`GET /tasks`

**Response:**

```json
[
  {
    "id": 1,
    "title": "Complete project",
    "color": "#3B82F6",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

#### Get Task by ID

`GET /tasks/:id`

**Response:**

```json
{
  "id": 1,
  "title": "Complete project",
  "color": "#3B82F6",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

#### Create Task

`POST /tasks`  
`Content-Type: application/json`

**Body:**

```json
{
  "title": "New task",
  "color": "#EF4444"
}
```

**Response:**

```json
{
  "id": 2,
  "title": "New task",
  "color": "#EF4444",
  "completed": false,
  "createdAt": "2024-01-15T11:00:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

#### Update Task

`PUT /tasks/:id`  
`Content-Type: application/json`

**Body:**

```json
{
  "title": "Updated task",
  "color": "#10B981",
  "completed": true
}
```

**Response:**

```json
{
  "id": 1,
  "title": "Updated task",
  "color": "#10B981",
  "completed": true,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:15:00.000Z"
}
```

#### Delete Task

`DELETE /tasks/:id`

**Response:** A `204 No Content` status code.

### Error Responses

The API returns a JSON object with a simple error message for server-side failures:

```json
{
  "error": "Error message"
}
```

**Common HTTP Status Codes:**

- `200` - OK
- `201` - Created
- `204` - No Content (for successful deletion)
- `404` - Not Found
- `500` - Internal Server Error

## 📄 License

This project is part of a take-home assessment and is for evaluation purposes.
