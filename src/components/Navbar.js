import React from "react";
import { Link } from "react-router-dom";
import XIcon from "@heroicons/react/24/outline/XMarkIcon";
import MenuIcon from "@heroicons/react/24/solid/Bars3Icon";
import Logo from "@heroicons/react/24/solid/BoltIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-red-400 hover:text-red-300 duration-300"
              >
                <Logo className="h-4 w-4" />
                <span className="font-bold">SmartB</span>
              </a>
            </div>
          </div>

          {/* Menu items */}
          <ul className="hidden md:flex items-center space-x-1">
            <li className="py-5 px-3 text-gray-300 hover:text-red-400 duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="py-5 px-3 text-gray-300 hover:text-red-400 duration-300">
              <Link to="/About">About</Link>
            </li>
            <li className="py-5 px-3 text-gray-300 hover:text-red-400 duration-300">
              <Link to="/Articles-List">Articles</Link>
            </li>
          </ul>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6 text-red-400" />
              ) : (
                <MenuIcon className="h-6 w-6 text-red-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <ul className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <li className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-300">
          <Link to="/">Home</Link>
        </li>
        <li className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-300">
          <Link to="/About">About</Link>
        </li>
        <li className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-300">
          <Link to="/Articles-List">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};
