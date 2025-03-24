import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const [error, setError] = useState(""); // State for validation error

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const { fullName, phoneNumber, email, password, agency } = formData;

    // Check if required fields are filled
    if (!fullName || !phoneNumber || !email || !password || !agency) {
      setError("Please fill in all required fields.");
      return;
    }

    // Navigate to Account Settings with user data
    navigate("/account", { state: formData });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Input Fields with Floating Labels */}
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

        {/* Radio Buttons */}
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

        {/* Buttons */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-purple-600 transition"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full mt-3 bg-gray-300 text-gray-800 py-2 rounded-md text-lg font-semibold hover:bg-gray-400 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
