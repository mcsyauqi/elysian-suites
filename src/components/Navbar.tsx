"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Suites", href: "#suites" },
  { label: "Benefits", href: "#benefits" },
  { label: "Locations", href: "#locations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span
              className={`font-heading text-xl font-bold transition-colors ${
                scrolled ? "text-text-dark" : "text-white"
              }`}
            >
              Elysian Suites
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-text-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-gradient rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Book a Tour
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-dark hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="btn-gradient mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold"
              >
                Book a Tour
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
