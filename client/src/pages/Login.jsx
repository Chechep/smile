import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 dark:text-blue-400">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md border dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md border dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
        />
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
