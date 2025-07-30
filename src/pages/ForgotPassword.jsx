import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://<your-backend>.onrender.com/api/auth/forgot-password",
        { email }
      );
      setMsg("Check your email for reset link.");
    } catch {
      setMsg("Error sending reset email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-80 mx-auto mt-20 space-y-4">
      <h2 className="text-2xl">Forgot Password</h2>
      <input
        className="border p-2 w-full"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button className="bg-blue-500 text-white py-2 px-4 w-full">
        Send Reset Link
      </button>
      <p>{msg}</p>
    </form>
  );
};
export default ForgotPassword;
