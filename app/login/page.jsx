"use client"

import { AuthAPI } from "../components/services/api";
import { useRouter } from "next/navigation";
// components/RegisterForm.jsx
import { useState } from "react";

export default function Login ({onLogin}) {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
   const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);
    try {
      const response = await AuthAPI.login(credentials);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.setItem(
        "is_superuser",
        JSON.stringify(response.data.user.is_superuser)
      );
      setSuccess(response.data.message);
      setTimeout(() => setSuccess(""), 3000);
        router.push("/");
      console.log(response.data)
      window.dispatchEvent(new Event("authChange"));
      onLogin(response.data.user);
    } catch (error) {
      setError(
        error.response?.data?.email?.[0] ||
          error.response?.data?.password?.[0]     );
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl px-2 flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md border 
        border-white/20 rounded-2xl p-8 
        sm:w-11/12 md:w-150 xl:w-180 
        shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>
          {success && (
              <div className="text-green-600 text-center">{success}</div>
            )}
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          className="input-text p-3 rounded-lg 
          bg-white/20 placeholder-white 
          text-white focus:outline-none text
          focus:ring-2 focus:ring-white/50 "
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="input-text text p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />

        <button
          type="submit"
          className="input-text text bg-white/30 hover:bg-white/50 text-white font-bold py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
