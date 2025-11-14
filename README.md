# Express.js with ES Modules

Express.js project template using ES Modules (type: "module").

## Features

- ✅ ES Modules (import/export syntax)
- ✅ Express.js web framework
- ✅ Environment variables with dotenv
- ✅ CORS enabled
- ✅ RESTful API structure
- ✅ Controllers and Routes pattern

## Project Structure

```
expressjs-module/
├── src/
│   ├── index.js              # Entry point
│   ├── models/
│   │   └── userModel.js      # User model (data layer)
│   ├── controllers/
│   │   ├── userController.js # User controller (business logic)
│   │   └── authController.js # Auth controller (login/register)
│   └── routes/
│       ├── index.js          # Main router
│       ├── userRoutes.js     # User routes
│       └── authRoutes.js     # Auth routes (login/register)
├── .env                      # Environment variables
├── .env.example              # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Architecture Pattern

This project follows the **MVC (Model-View-Controller)** pattern:

- **Models** (`src/models/`) - Data layer, handles data operations
- **Controllers** (`src/controllers/`) - Business logic, processes requests
- **Routes** (`src/routes/`) - API endpoints, handles HTTP routing

## Installation

```bash
npm install
```

## Usage

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

### General
- `GET /` - Welcome message
- `GET /api/health` - Health check

### Authentication
- `POST /api/auth/login` - User login
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- `POST /api/auth/register` - User registration
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- `PUT /api/users/:id` - Update user
  ```json
  {
    "name": "John Updated",
    "email": "john.updated@example.com"
  }
  ```
- `DELETE /api/users/:id` - Delete user

## Environment Variables

Create a `.env` file in the root directory (or copy from `.env.example`):

```
PORT=3000
NODE_ENV=development
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup (Supabase)

1. Create a Supabase project at https://supabase.com
2. Create a `users` table with the following columns:
   - `id` (UUID, Primary Key)
   - `name` (Text)
   - `email` (Text, Unique)
   - `password` (Text)
   - `created_at` (Timestamp with timezone)
3. Copy your Supabase URL and Anon Key to `.env` file

## ES Modules Note

This project uses ES Modules (`"type": "module"` in package.json), which means:
- Use `import` instead of `require()`
- Use `export` instead of `module.exports`
- Always include `.js` extension in import paths
- `__dirname` and `__filename` are not available (use `import.meta.url` instead)

## License

ISC
