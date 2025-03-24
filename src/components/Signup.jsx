import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  
 
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
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
    const { fullName, phoneNumber, email, password, agency } = formData;

   
    if (!fullName || !phoneNumber || !email || !password || !agency) {
      setError("Please fill in all required fields.");
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

    
    setError("");
    navigate("/account", { state: formData });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

       
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

       
        <div className="mt-4 space-y-6">
          {[
            { label: "Full Name", name: "fullName" },
            { label: "Phone number", name: "phoneNumber" },
            { label: "Email address", name: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Company name", name: "companyName" },
          ].map((field, index) => (
            <div key={index} className="relative w-full">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold text-purple-600">
                {field.label} {field.name !== "companyName" && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-12 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          ))}
        </div>

       
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4 mt-2">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value={option}
                  checked={formData.agency === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-purple-600 transition  hover:scale-105"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full mt-3 bg-gray-300 text-gray-800 py-2 rounded-md text-lg font-semibold hover:bg-gray-400 transition  hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
