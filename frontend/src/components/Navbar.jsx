import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "about me", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Skills", href: "#speaking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [altTheme, setAltTheme] = useState(false);

  const toggleTheme = () => {
    setAltTheme((prev) => !prev);
    document.documentElement.classList.toggle("theme-alt");
  };

  return (
    <>
      {/* ─── Desktop Capsule Navbar ─── */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-6 lg:gap-8 w-[92%] sm:w-auto bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-slate-800 shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Brand */}
        <a
          href="/"
          className="text-xl font-black tracking-wide text-white shrink-0 hover:text-emerald-400 hover:scale-105 transition-all duration-300 ease-in-out origin-left"
        >
          Espoir K<span className="text-emerald-400">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="list-none">
              <a
                href={href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
        >
          {altTheme ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-slate-100 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] active:scale-95"
        >
          Let's chat
        </a>
      </motion.nav>

      {/* ─── Mobile Navbar ─── */}
      <motion.nav
        className="fixed top-3 left-3 right-3 z-50 md:hidden bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a
            href="/"
            className="text-xl font-black tracking-wide text-white shrink-0 hover:text-emerald-400 hover:scale-105 transition-all duration-300 ease-in-out origin-left"
          >
            Espoir K<span className="text-emerald-400">.</span>
          </a>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {altTheme ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="p-2 rounded-md text-slate-300 hover:bg-slate-800 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="border-t border-slate-800 px-4 pb-4">
            <ul className="list-none m-0 p-0 space-y-1 pt-3">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="list-none">
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 text-center bg-white text-slate-900 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-all"
            >
              Let's chat
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
}
