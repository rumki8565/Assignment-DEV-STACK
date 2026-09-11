import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Brand: logo mark + name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-start via-brand-mid to-brand-end flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <div className="text-xl font-bold">
            Dev{" "}
            <span className="bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
              Stack
            </span>
          </div>
        </div>

        {/* Desktop center links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={link}
              className={index === 0 ? "text-brand-mid" : "text-gray-700"}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Right: auth buttons (always visible) */}
        <div className="flex items-center gap-3">
          <button type="button" className="hidden sm:inline font-medium">
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full px-4 py-2 text-white bg-gradient-to-r from-brand-start via-brand-mid to-brand-end"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu - only renders when isOpen is true */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={link}
              className={index === 0 ? "text-brand-mid" : "text-gray-700"}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
