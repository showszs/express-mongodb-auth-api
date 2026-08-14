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

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   MONGODB_URI=
   DB_NAME=
   SECRET_KEY=
   PORT=3000
   ```

3. Run the server:

   ```bash
   npm run dev
   ```

## Docker

```bash
docker compose up --build
```

## API

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| POST   | `/registration`     | Register and start session |
| POST   | `/login`            | Log in                     |
| POST   | `/logout`           | Log out                    |
| GET    | `/me`               | Current auth status        |
| GET    | `/profiles`         | List users                 |
| DELETE | `/profiles/:userId` | Delete user by ID          |

Request bodies for `/registration` and `/login`: JSON with `login`, `password`; registration also requires `email`.

## Configuration

- **CORS** — allowed origins in `src/config/cors.mjs`
- **Session** — secret and cookie options in `src/config/session.mjs`
- **Database** — connection settings in `src/config/dbConfig.mjs`

## Scripts

| Command       | Description           |
| ------------- | --------------------- |
| `npm start`   | Start server          |
| `npm run dev` | Dev mode with nodemon |
