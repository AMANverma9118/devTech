import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
    if (name === "email" && isValidEmail(value)) {
      setError("");
    }
    if (name === "password" && value.length >= 6) {
      setError("");
    }
  };

  const handleSubmit = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(email)) {
        setError("Invalid email format.");
        return;
      }
  
      
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
  

    navigate("/account", { state: formData });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900">Sign in to your PopX account</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-4 space-y-6">
          {[
            { label: "Email address", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ].map((field, index) => (
            <div key={index} className="relative w-full">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold text-purple-600">
                {field.label} <span className="text-red-500">*</span>
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-12 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-purple-600 transition  hover:scale-105"
          >
            Login
          </button>
          <Link to="/">
            <button className="w-full mt-3 bg-gray-300 text-gray-800 py-2 rounded-md text-lg font-semibold hover:bg-gray-400 transition  hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}