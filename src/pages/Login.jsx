import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      setMsg("✅ Logged in successfully! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMsg("❌ Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-20 space-y-6 bg-white p-8 rounded-xl shadow-lg border border-green-100"
    >
      <div className="flex flex-col items-center mb-2">
        <span className="text-4xl mb-2 text-green-600">🔓</span>
        <h2 className="text-2xl font-extrabold text-green-700 mb-1 text-center">
          Login
        </h2>
        <p className="text-green-600 text-center text-sm mb-2">
          Enter your credentials to access your account.
        </p>
      </div>
      <input
        type="email"
        className="border border-green-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border border-green-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="bg-green-600 text-white py-2 px-4 w-full rounded-lg font-semibold shadow hover:bg-green-700 transition">
        Login
      </button>
      {msg && (
        <p
          className={`text-center text-sm ${
            msg.startsWith("✅")
              ? "text-green-700"
              : "text-red-600"
          }`}
        >
          {msg}
        </p>
      )}
      <div className="flex flex-col items-center mt-2 space-y-1">
        <Link
          to="/forgot-password"
          className="text-green-700 hover:underline text-sm font-medium"
        >
          Forgot Password?
        </Link>
        <Link
          to="/reset-password/demo-token"
          className="text-green-700 hover:underline text-sm font-medium"
        >
          Reset Password (Demo)
        </Link>
        <span className="text-sm text-green-700 mt-2">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-700 hover:underline font-semibold"
          >
            Register
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Login;
