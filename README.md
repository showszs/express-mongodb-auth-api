# Express MongoDB Auth API

A REST API built with Express and MongoDB. It provides user registration, session-based authentication with Passport, and basic user profile management.

## Features

- User registration with automatic login after sign-up
- Session-based authentication (Passport Local Strategy)
- Password hashing with bcrypt
- User profile listing and deletion
- CORS configured for a frontend client
- Security headers via Helmet
- Request logging with Morgan
- Docker support for local development

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 5
- **Database:** MongoDB with Mongoose
- **Auth:** Passport, express-session, bcrypt
- **Other:** cors, helmet, morgan, cookie-parser, dotenv

## Project Structure

```
src/
├── app.mjs              # Application entry point
├── db.mjs               # MongoDB connection
├── env.mjs              # Environment variable loader
├── config/              # Passport, CORS, session, DB config
├── controllers/         # Route handlers
├── middleware/          # Error handling
├── models/              # Mongoose schemas
└── routes/              # API routes
```

## Prerequisites

- Node.js 18+
- MongoDB instance (local or remote, e.g. MongoDB Atlas)
- npm


## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The server runs on `3000 Port`.

## Docker

Run the app in a container:

```bash
docker compose up --build
```

The API will be available at `3000 Port`. 

## API Endpoints

All routes are prefixed with the server base URL.

### Authentication

| Method | Endpoint         | Description                              | Auth required |
| ------ | ---------------- | ---------------------------------------- | ------------- |
| POST   | `/registration`  | Register a new user and start a session  | No            |
| POST   | `/login`         | Log in with credentials                  | No            |
| POST   | `/logout`        | Destroy the current session              | No            |
| GET    | `/me`            | Check whether the user is authenticated  | No            |

### Profiles

| Method | Endpoint              | Description                    | Auth required |
| ------ | --------------------- | ------------------------------ | ------------- |
| GET    | `/profiles`           | Get a list of users            | No            |
| DELETE | `/profiles/:userId`   | Delete a user by MongoDB `_id` | No            |

### Request Examples

**Register**

```http
POST /registration
Content-Type: application/json

{
  "login": "johndoe",
  "password": "securepassword",
  "email": "john@example.com"
}
```

**Login**

```http
POST /login
Content-Type: application/json

{
  "login": "johndoe",
  "password": "securepassword"
}
```

**Get current session status**

```http
GET /me
```

**Get all profiles**

```http
GET /profiles
```

**Delete a user**

```http
DELETE /profiles/507f1f77bcf86cd799439011
```

### Response Examples

```json
// POST /registration — 201
{ "message": "User registered successfully" }

// POST /login — 200
{ "message": "Login successful" }

// GET /me — 200 (authenticated)
{ "message": "User is authenticated" }

// GET /me — 401 (not authenticated)
{ "message": "Not authenticated" }

// GET /profiles — 200
[
  { "_id": "...", "login": "johndoe", "email": "john@example.com" }
]
```

## CORS

The API accepts requests from `http://localhost:5173` with credentials enabled. Update `src/config/cors.mjs` if your frontend runs on a different origin.

## Scripts

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `npm start`   | Start the server                     |
| `npm run dev` | Start with nodemon (auto-reload)     |

## License

ISC
