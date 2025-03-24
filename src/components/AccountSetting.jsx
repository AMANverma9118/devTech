import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function AccountSettings() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const user = location.state || {}; 

 
  const [profileImage, setProfileImage] = useState(
    "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
  );

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl w-96"
      >
       
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Account Settings</h2>

        <div className="relative flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md object-cover"
          />
          <motion.label
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0.8, 1, 0.8], transition: { repeat: Infinity, duration: 1.5 } }} 
            className="absolute bottom-2 right-2 p-2 rounded-full shadow-md cursor-pointer flex items-center justify-center
              bg-white hover:bg-gray-200 transition duration-200"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(6px)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(128, 0, 128, 0.5)", 
            }}
          >
            <CameraIcon className="w-6 h-6 text-purple-600" />
            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </motion.label>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">{user.fullName || "John Doe"}</h3>
          <p className="text-gray-600">{user.email || "johndoe@example.com"}</p>
        </div>

        <p className="text-gray-700 mt-4 text-sm text-center leading-relaxed">
          Welcome to your account settings! You can update your profile picture, change your details, 
          and manage your preferences here.
        </p>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => navigate("/")} 
            className="bg-gray-500 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md 
            hover:bg-gray-600 transition"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
