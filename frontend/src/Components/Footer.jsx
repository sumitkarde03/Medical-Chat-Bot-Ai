import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-white text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16">
        
        {/* Column 1 */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white shadow-[8px_8px_16px_#c8e6c9,-8px_-8px_16px_#ffffff]">
          <h3 className="text-lg font-semibold mb-4 text-green-800">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            We are dedicated to providing the best services with a playful and approachable design philosophy.
          </p>
        </div>

        {/* Column 2 */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white shadow-[8px_8px_16px_#c8e6c9,-8px_-8px_16px_#ffffff]">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About</Link></li>
            <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white shadow-[8px_8px_16px_#c8e6c9,-8px_-8px_16px_#ffffff]">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Contact</h3>
          <p className="text-sm leading-relaxed text-gray-600">Email: info@example.com</p>
          <p className="text-sm leading-relaxed text-gray-600">Phone: +123 456 7890</p>
          <p className="text-sm leading-relaxed text-gray-600">Address: Pune, India</p>
        </div>

        {/* Column 4 */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white shadow-[8px_8px_16px_#c8e6c9,-8px_-8px_16px_#ffffff]">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white 
                shadow-[4px_4px_8px_#a5d6a7,-4px_-4px_8px_#ffffff] 
                hover:shadow-[6px_6px_12px_#a5d6a7,-6px_-6px_12px_#ffffff]
                hover:scale-110 transition"
              >
                <Icon className="text-green-600" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-6 bg-green-50/70 backdrop-blur-md">
        <p className="text-gray-600">© 2025 MediAssist AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
