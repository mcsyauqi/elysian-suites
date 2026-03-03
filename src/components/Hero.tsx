"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1145] via-[#3a2580] to-[#667EEA]" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/20 blur-3xl" />
        <div className="animate-float-delayed absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-3xl" />
        <div className="animate-float-slow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/10 blur-3xl" />
        <div className="animate-float absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-warm-start/15 to-warm-end/10 blur-2xl" />

        {/* Geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[20%] h-16 w-16 rounded-2xl border-2 border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-[15%] h-12 w-12 rounded-full border-2 border-white/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-[10%] h-20 w-20 rounded-3xl border border-white/5 bg-white/5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Text */}
        <div className="flex-1 pt-24 text-center lg:pt-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Now Open in 3 Prime Locations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Live Above
            <br />
            <span className="bg-gradient-to-r from-[#F6D365] to-[#FDA085] bg-clip-text text-transparent">
              the Ordinary
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/70 lg:mx-0 lg:text-xl"
          >
            Fully furnished luxury suites in Jakarta&apos;s prime locations.
            Move in tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#suites"
              className="btn-gradient animate-pulse-glow rounded-full px-8 py-4 text-base font-semibold"
            >
              Browse Suites
            </a>
            <a
              href="#cta"
              className="btn-outline-gradient rounded-full px-8 py-4 text-base font-semibold"
            >
              Book a Tour
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">2,500+</span>
              Residents
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">4.9</span>
              <span className="text-yellow-400">&#9733;</span>
              Rating
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">Forbes</span>
              Featured
            </span>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex-1 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-primary-dark/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80"
                alt="Luxury apartment interior with modern furnishing"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Price badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-xs text-white/70">Starting from</p>
                <p className="text-2xl font-bold text-white">
                  Rp 15M
                  <span className="text-sm font-normal text-white/60">
                    /month
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
