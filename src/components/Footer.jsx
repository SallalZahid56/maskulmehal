import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* --- Company Info --- */}
        <div>
          <img
            src={logo}
            alt="MTJ Logo"
            className="h-16 mb-4"
          />
          <p className="font-medium">Vital Collections Pvt Ltd</p>
          <p className="mt-2 text-sm">Call Us: +92 (21)-36-111-685 (MTJ)</p>
          <p className="text-sm mt-1">Email: cs@mtj.com.pk</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* --- Information --- */}
        <div>
          <h3 className="font-bold text-lg mb-3">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shipping & Information</a></li>
            <li><a href="#" className="hover:underline">Store Locator</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Wholesale</a></li>
          </ul>
        </div>

        {/* --- Customer Support --- */}
        <div>
          <h3 className="font-bold text-lg mb-3">CUSTOMER SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Return & Exchange</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* --- Newsletter Signup --- */}
        <div>
          <h3 className="font-bold text-lg mb-3">NEWSLETTER SIGNUP</h3>
          <p className="text-sm mb-3">Receive our latest updates</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-2 rounded-md hover:bg-yellow-700 transition"
            >
              SIGNUP
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Vital Collections Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
