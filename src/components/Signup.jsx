import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate("/account", { state: formData }); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

       
        <div className="mt-4 space-y-6">
          {["Full Name", "Phone number", "Email address", "Password", "Company name"].map(
            (field, index) => (
              <div key={index} className="relative w-full">
                <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold text-purple-600">
                  {field} {field !== "Company name" && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field === "Password" ? "password" : "text"}
                  className="w-full border border-gray-300 rounded-md h-12 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            )
          )}
        </div>

       
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input type="radio" name="isAgency" value="Yes" onChange={handleChange} className="mr-2" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="isAgency" value="No" onChange={handleChange} className="mr-2" /> No
            </label>
          </div>
        </div>

    
        <div className="mt-6 space-y-3">
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-purple-600 transition"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-300 text-gray-800 py-2  rounded-md text-lg font-semibold hover:bg-gray-400 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
