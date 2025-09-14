import React, { useState } from "react";
import { motion } from "framer-motion";
import Assistant_Interface from "../Images/Assistant.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="relative flex w-full max-w-4xl bg-green-50 rounded-3xl shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff] overflow-hidden">
        
        {/* Left: Sign In Section */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isSignUp ? "-100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center w-1/2 p-10 text-center"
        >
          {!isSignUp && (
            <motion.img
              src={Assistant_Interface}
              alt="Sign In Image"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 w-28 h-28 object-cover rounded-full shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff]"
            />
          )}

          <h2 className="text-3xl font-bold text-green-700 mb-3">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Sign in to access your account.</p>

          <form className="space-y-4 w-full">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-2xl bg-green-100 border-none shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 rounded-2xl bg-green-100 border-none shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-green-400 outline-none"
            />
            <button className="w-full p-3 rounded-2xl bg-green-500 text-white font-semibold shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:bg-green-600 transition">
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <button 
              onClick={() => setIsSignUp(true)} 
              className="text-green-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </motion.div>

        {/* Right: Sign Up Section */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isSignUp ? "0%" : "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center w-1/2 p-10 text-center"
        >
          {isSignUp && (
            <motion.img
              src={Assistant_Interface}
              alt="Sign Up Image"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 w-28 h-28 object-cover rounded-full shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff]"
            />
          )}

          <h2 className="text-3xl font-bold text-green-700 mb-3">Create Account</h2>
          <p className="text-gray-600 mb-6">Join us today by creating a free account.</p>

          <form className="space-y-4 w-full">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-3 rounded-2xl bg-green-100 border-none shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-2xl bg-green-100 border-none shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 rounded-2xl bg-green-100 border-none shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-green-400 outline-none"
            />
            <button className="w-full p-3 rounded-2xl bg-green-500 text-white font-semibold shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:bg-green-600 transition">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button 
              onClick={() => setIsSignUp(false)} 
              className="text-green-600 font-semibold hover:underline"
            >
              Sign In
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
