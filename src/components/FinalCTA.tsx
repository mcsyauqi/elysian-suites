"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667EEA] via-[#6B5CE7] to-[#764BA2]" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="animate-float-delayed absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5" />
        <div className="animate-float-slow absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Ready to Elevate
            <br />
            Your Living?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Join 2,500+ residents who have already discovered Jakarta&apos;s
            finest serviced apartments. Your dream home awaits.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-full bg-white px-10 py-4 text-base font-bold text-[#667EEA] shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Your Tour Today
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
              </span>
              Only 12 units remaining at launch price
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
