import React from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 relative">
      
      {/* Tombol Kembali */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-5 left-5 text-gray-700 text-2xl font-bold hover:text-red-500 transition"
      >
        ✕
      </button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md relative"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Masuk ke Akunmu
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ingat akun saya
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Masuk
          </button>
        </form>

        <div className="my-5 text-center text-gray-500">atau</div>

        <button
          className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <FaGoogle className="text-red-500" />
          <span>Masuk dengan Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Daftar Sekarang
          </a>
        </p>
      </motion.div>
    </div>
  );
}
