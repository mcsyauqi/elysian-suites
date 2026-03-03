"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~100vh)
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-text-muted">Starting from</p>
              <p className="font-heading text-lg font-bold text-text-dark">
                Rp 15M<span className="text-sm font-normal text-text-muted">/mo</span>
              </p>
            </div>
            <a
              href="#cta"
              className="btn-gradient shrink-0 rounded-full px-6 py-3 text-sm font-bold"
            >
              Book a Tour
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
