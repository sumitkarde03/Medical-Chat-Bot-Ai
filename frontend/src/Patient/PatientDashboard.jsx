import React from "react";
import { Link } from "react-router-dom";
import Assistant_Interface from "../Images/Assistant.png";

const PatientDashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-gray-50 py-24 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 lg:pr-12 text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Your <span className="text-green-600">24/7 AI</span> Medical Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Get instant medical guidance, check symptoms, and connect with real doctors whenever you need help.
            </p>
            <Link
              to="/signup"
              className="inline-block rounded-full font-semibold py-3 px-8
              bg-gradient-to-br from-green-200 to-green-100 text-gray-800
              shadow-[8px_8px_16px_#cfd9cf,-8px_-8px_16px_#ffffff]
              hover:shadow-[12px_12px_20px_#cfd9cf,-12px_-12px_20px_#ffffff]
              transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
            <img
              src={Assistant_Interface}
              alt="Assistant Interface"
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl 
              shadow-[10px_10px_20px_#d1d1d1,-10px_-10px_20px_#ffffff]
              transition-transform duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </section>

      
    </div>
  );
};

// Features
const features = [
  { icon: "🩺", title: "Instant Medical Guidance", description: "Get medically accurate information and personalized recommendations based on your symptoms, medical history, and concerns." },
  { icon: "🔍", title: "Symptom Checker Tool", description: "Our AI-powered symptom analyzer helps identify possible conditions and guides you on appropriate next steps for your health." },
  { icon: "👨‍⚕️", title: "Connect with Real Doctors", description: "When AI guidance isn't enough, seamlessly connect with qualified medical professionals for virtual consultations." },
  { icon: "🔒", title: "Data Security & Privacy", description: "Your health information is protected with medical-grade encryption and strict privacy protocols that exceed industry standards." },
];

// Steps
const steps = [
  { number: 1, title: "Describe Your Symptoms", description: "Tell our AI about your symptoms, concerns, or health questions in simple, everyday language." },
  { number: 2, title: "Get AI Assessment", description: "Receive instant analysis, possible conditions, and recommended next steps based on medical guidelines." },
  { number: 3, title: "Take Action", description: "Follow self-care advice, book a virtual doctor appointment, or seek emergency care if recommended." },
];

export default PatientDashboard;
