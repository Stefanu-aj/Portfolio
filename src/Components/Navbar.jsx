import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[poppins] w-full py-6 px-10 md:px-36 flex justify-between items-center bg-white shadow relative">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Stephen <span className="text-cyan-600">Ajao</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600 transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600 transition"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600 transition"
          to="/contact"
        >
          Contact Me
        </Link>
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu size={28} />
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <FiX
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-6 mt-8 px-6">
          <Link
            className="text-lg font-medium hover:text-cyan-600 transition"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:text-cyan-600 transition"
            to="/portfolio"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            className="text-lg font-medium hover:text-cyan-600 transition"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Optional overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
