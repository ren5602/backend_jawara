import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", AuthController.login);

// POST /api/auth/register
router.post("/register", AuthController.register);

export default router;
