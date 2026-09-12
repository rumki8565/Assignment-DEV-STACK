import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-3 md:px-8">
        {/* Left: hamburger (mobile) + brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

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
        </div>

        {/* Center: desktop nav links */}
        <ul className="hidden md:flex justify-center gap-6 font-medium">
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="whitespace-nowrap text-sm font-medium"
          >
            Sign In
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-white bg-gradient-to-r from-brand-start via-brand-mid to-brand-end"
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
