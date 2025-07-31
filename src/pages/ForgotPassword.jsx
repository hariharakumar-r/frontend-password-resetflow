import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/auth/forgot-password`,
        { email }
      );
      setMsg("✅ Check your email for a reset link.");
      setTimeout(() => {
        navigate("/resetpassword");
      }, 1500); // Show message briefly before navigating
    } catch {
      setMsg("❌ Error sending reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
          />
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-full rounded transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          {msg && (
            <div
              className={`text-center text-sm ${
                msg.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {msg}
            </div>
          )}
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
          <Link to="/" className="text-gray-500 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
