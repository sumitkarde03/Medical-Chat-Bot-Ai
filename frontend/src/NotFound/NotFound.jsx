// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      {/* Big 404 title */}
      <h1 className="text-8xl font-extrabold text-green-600 
        drop-shadow-[6px_6px_14px_rgba(0,0,0,0.1)]">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Back to Home button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-2xl font-semibold text-gray-800 
        bg-gradient-to-br from-green-200/90 to-green-100/80
        shadow-[0_6px_12px_rgba(0,0,0,0.08)]
        hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]
        hover:scale-105 transition-all duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
