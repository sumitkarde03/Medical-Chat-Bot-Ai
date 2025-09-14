import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white/50 backdrop-blur-lg sticky top-0 z-50 shadow-[0_6px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center text-green-600 font-extrabold text-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
          <span className="text-3xl mr-2">+</span>
          MediAssist <span className="text-gray-800 ml-1">AI</span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Pricing", path: "/pricing" },
              { name: "FAQ", path: "/faq" },
            ].map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-2xl transition-all duration-300 
                    shadow-[0_4px_8px_rgba(0,0,0,0.06)] 
                    hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)]
                    ${
                      isActive
                        ? "bg-green-100/80 text-green-700 font-semibold"
                        : "bg-white/60 text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* CTA Button */}
            <li>
              <Link
                to="/login"
                className="ml-2 px-5 py-2 rounded-full font-semibold text-gray-800 
                bg-gradient-to-br from-green-200/80 to-green-100/70
                shadow-[0_6px_12px_rgba(0,0,0,0.08)]
                hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]
                hover:scale-105 transition-all duration-300"
              >
                Sign In / Sign Up
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 focus:outline-none 
              bg-white/70 p-2 rounded-2xl 
              shadow-[0_4px_8px_rgba(0,0,0,0.06)]
              hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)]
              hover:scale-105 transition-transform"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
