import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg"; // adjust path based on Navbar.jsx location



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-white shadow">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                {/* Left Links (Desktop Only) */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="font-medium hover:underline">Home</Link>
                    <div className="relative group">
                        <a href="#" className="font-medium flex items-center">
                            Shop <span className="ml-1">▼</span>
                        </a>
                        {/* Dropdown */}
                        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg p-3">
                            <a href="#" className="block px-3 py-1 hover:bg-gray-100">Perfumes</a>
                            <a href="#" className="block px-3 py-1 hover:bg-gray-100">Attars</a>
                        </div>
                    </div>
                    <Link to="/contact-us" className="font-medium hover:underline">Contact Us</Link>
                    <Link to="/about-us" className="font-medium hover:underline">About Us</Link>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="h-16" />
                </div>

                {/* Right Icons + Hamburger */}
                <div className="flex items-center gap-6">
                    <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    <User className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    {/* Cart Icon → Link to Product Page */}
                    <Link to="/product/1">
                        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    </Link>
                    {/* Hamburger (Mobile Only) */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg p-4 space-y-3">
                    <a href="#" className="block font-medium hover:underline">Home</a>
                    <div>
                        <button className="font-medium flex items-center">
                            Shop <span className="ml-1">▼</span>
                        </button>
                        <div className="ml-4 mt-2 space-y-2">
                            <a href="#" className="block px-3 py-1 hover:bg-gray-100">Perfumes</a>
                            <a href="#" className="block px-3 py-1 hover:bg-gray-100">Attars</a>
                        </div>
                    </div>
                    <a href="#" className="block font-medium hover:underline">Contact Us</a>
                    <a href="#" className="block font-medium hover:underline">About Us</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
