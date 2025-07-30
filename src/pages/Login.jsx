import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        { email, password }
      );
      // Optionally save token to localStorage or state
      localStorage.setItem("token", res.data.token);
      setMsg("Logged in successfully!");
    } catch (err) {
      setMsg("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 mx-auto mt-20 space-y-4 bg-white p-6 shadow rounded"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <input
        type="email"
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border p-2 w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600">
        Login
      </button>
      {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
    </form>
  );
};

export default Login;
