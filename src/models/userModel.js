import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

class UserModel {
  // Get all users
  static async findAll() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
  }

  // Find user by ID
  static async findById(id) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  }

  // Find user by email
  static async findByEmail(email) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();
    if (error) return null;
    return data;
  }

  // User login
  static async login(email, password) {
    try {
      const user = await this.findByEmail(email);

      if (!user) {
        return { success: false, message: "User tidak ditemukan" };
      }

      if (user.password !== password) {
        return { success: false, message: "Password salah" };
      }

      return {
        success: true,
        message: "Login berhasil",
        user: { id: user.id, name: user.name, email: user.email },
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // Create new user
  static async create(userData) {
    const { data, error } = await supabase
      .from("users")
      .insert([userData])
      .select();
    if (error) throw error;
    return data[0];
  }

  // Update user
  static async update(id, userData) {
    const { data, error } = await supabase
      .from("users")
      .update(userData)
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0];
  }

  // Delete user
  static async delete(id) {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);
    if (error) throw error;
    return true;
  }

  // Get total count
  static async count() {
    const { count, error } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true });
    if (error) throw error;
    return count;
  }
}

export default UserModel;
