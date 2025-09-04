import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black flex flex-col mx-auto h-screen items-center justify-center">
      <h1 className="text-white text-4xl font-extrabold">
        {" "}
        Welcome to Password Reset Flow App Demo Project
      </h1>
      <p className="text-white text-2xl my-5">
        {" "}
        To Access our services, please Sign In{" "}
      </p>
      <button
        onClick={() => {
          navigate("/signin");
        }}
        type="button"
        class="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign In
      </button>
    </div>
  );
};

export default HomePage;
