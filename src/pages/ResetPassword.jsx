import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/reset-password`,
        { token, password }
      );
      setMsg("Password reset successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 mx-auto mt-20 space-y-4 bg-white p-6 shadow rounded"
    >
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>
      <input
        type="password"
        className="border p-2 w-full"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600">
        Set New Password
      </button>
      {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
    </form>
  );
};

export default ResetPassword;
