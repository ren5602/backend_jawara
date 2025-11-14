import UserModel from "../models/userModel.js";

class AuthController {
  // Login handler
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validasi input
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email dan password harus diisi",
        });
      }

      // Call model login
      const result = await UserModel.login(email, password);

      if (!result.success) {
        return res.status(401).json(result);
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Register handler
  static async register(req, res) {
    try {
      const { name, email, password } = req.body;

      // Validasi input
      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "Nama, email, dan password harus diisi",
        });
      }

      // Check if user already exists
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email sudah terdaftar",
        });
      }

      // Create new user
      const newUser = await UserModel.create({
        name,
        email,
        password,
      });

      return res.status(201).json({
        success: true,
        message: "Registrasi berhasil",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default AuthController;
