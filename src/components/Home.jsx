import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate function

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 animate-gradient">
      <div
        className={`bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Buttons with Navigation */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => navigate("/signup")} // ✅ Navigate to Signup page
            className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold transform transition duration-300 hover:bg-purple-600 hover:scale-105"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")} // ✅ Navigate to Login page (optional)
            className="w-full bg-pink-400 text-white py-2 rounded-md text-lg font-semibold transform transition duration-300 hover:bg-pink-500 hover:scale-105"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

