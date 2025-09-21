"use client"

// components/RegisterForm.jsx
import { useState } from "react";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    password: "",
    avatar_url: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would send data to your Django API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:w-11/12 md:w-96 lg:w-96 xl:w-96 2xl:w-96 shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">Register</h2>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />

        <input
          type="url"
          name="avatar_url"
          placeholder="Avatar URL"
          value={formData.avatar_url}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-white/30 hover:bg-white/50 text-white font-bold py-3 rounded-lg transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
