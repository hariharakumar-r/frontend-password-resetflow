import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function Home() {
  return (
    <div className="flex flex-col items-center mt-20 space-y-8 bg-white p-10 rounded-xl shadow-lg max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-5xl mb-2">🔒</span>
        <h1 className="text-3xl font-extrabold mb-2 text-green-700 text-center">
          Welcome to Password Reset Flow Application
        </h1>
        <p className="text-lg text-green-600 mb-4 text-center">
          Easily manage your account access with secure login, registration, and password reset features.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Link
          to="/login"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-center font-semibold"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-50 border border-green-600 text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition text-center font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

function LoginWithLinks() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg max-w-md mx-auto mt-20">
      <Login />
      <div className="flex flex-col items-center mt-6 space-y-2">
        <Link to="/forgot-password" className="text-green-700 hover:underline font-medium">
          Forgot Password?
        </Link>
        <Link to="/reset-password/demo-token" className="text-green-700 hover:underline font-medium">
          Reset Password (Demo)
        </Link>
      </div>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="py-6 text-center text-green-800 font-bold text-xl tracking-wide">
        Password Reset Flow
      </header>
      <main className="flex-1 flex flex-col justify-center">{children}</main>
      <footer className="py-4 text-center text-green-600 text-sm bg-green-100 mt-8">
        &copy; {new Date().getFullYear()} Password Reset Flow. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <div className="bg-white p-10 rounded-xl shadow-lg max-w-md mx-auto">
                <Register />
              </div>
            }
          />
          <Route path="/login" element={<LoginWithLinks />} />
          <Route
            path="/forgot-password"
            element={
              <div className="bg-white p-10 rounded-xl shadow-lg max-w-md mx-auto">
                <ForgotPassword />
              </div>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <div className="bg-white p-10 rounded-xl shadow-lg max-w-md mx-auto">
                <ResetPassword />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </PageWrapper>
  );
}

export default App;