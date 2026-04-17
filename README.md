# Finance Backend API

## Features
- JWT Authentication
- Role-based Access Control
- Financial Records CRUD
- Dashboard Summary APIs

## Roles
- Viewer → View only
- Analyst → View + Dashboard
- Admin → Full access

## Setup
npm install
npm run dev

## API Endpoints

### Auth
POST /api/auth/register
POST /api/auth/login

### Records
GET /api/records
POST /api/records (Admin)
PUT /api/records/:id (Admin)
DELETE /api/records/:id (Admin)

### Dashboard
GET /api/dashboard (Analyst/Admin)

## Assumptions
- JWT used for auth
- MongoDB local instance