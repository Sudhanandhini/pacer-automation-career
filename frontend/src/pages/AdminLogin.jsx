// AdminLogin.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api";


const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // axios config: adjust timeout if needed
      const axiosConfig = {
        headers: { "Content-Type": "application/json" },
        timeout: 10_000,
      };

      // POST login
      const response = await axios.post(`${API_URL}/admin/login`, formData, axiosConfig);

      // DEBUG: inspect raw response in console (remove in production)
      console.debug("Login response:", response);

      // Common backend shapes:
      // 1) { success: true, token: "jwt...", admin: { ... } }
      // 2) { token: "...", user: {...} }
      // 3) { status: "ok", data: { token: "...", admin: {...} } }
      const data = response.data || {};

      const token =
        data.token ||
        data?.data?.token ||
        (data.success && data.adminToken) ||
        (data.success && data.accessToken) ||
        null;

      const admin = data.admin || data.user || data?.data?.admin || null;

      if (token) {
        // store token and admin payload
        localStorage.setItem("adminToken", token);
        if (admin) localStorage.setItem("adminData", JSON.stringify(admin));

        // set default header for subsequent axios calls (optional)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // navigate to dashboard
        navigate("/admin/dashboard");
        return;
      }

      // If we reach here, login didn't return a token
      // Show server message if present or generic
      const serverMsg = data.message || data.error || "Invalid credentials";
      setError(serverMsg);
    } catch (err) {
      console.error("Login error:", err);

      // Prefer server-sent message when available
      const serverMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        (err?.response && `Server returned ${err.response.status}`) ||
        err.message ||
        "Login failed. Please try again.";

      setError(serverMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
          <p className="text-gray-600">Access your admin dashboard</p>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                placeholder="admin@pacerautomation.com"
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#00BFA5] text-white py-3 px-6 rounded-lg hover:bg-[#00BFA5]/90 transition-all font-semibold disabled:opacity-50">
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Default credentials for testing:</p>
          <p className="font-mono text-xs mt-1">admin@pacerautomation.com / admin123</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
