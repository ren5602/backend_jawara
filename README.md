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
│   │   └── userController.js # User controller (business logic)
│   └── routes/
│       ├── index.js          # Main router
│       └── userRoutes.js     # User routes
├── .env                      # Environment variables
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

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
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

Create a `.env` file in the root directory:

```
PORT=3000
NODE_ENV=development
```

## ES Modules Note

This project uses ES Modules (`"type": "module"` in package.json), which means:
- Use `import` instead of `require()`
- Use `export` instead of `module.exports`
- Always include `.js` extension in import paths
- `__dirname` and `__filename` are not available (use `import.meta.url` instead)

## License

ISC
