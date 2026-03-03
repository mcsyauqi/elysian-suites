"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Moving into Elysian SCBD was the best decision I made. The all-inclusive pricing means I never worry about hidden costs, and the smart home features are incredible. It truly feels like a 5-star hotel I can call home.",
    name: "Sarah Chen",
    role: "VP of Marketing, TechCorp",
    rating: 5,
    avatar: "SC",
  },
  {
    quote:
      "As an expat, finding quality housing in Jakarta was stressful until I discovered Elysian. The flexible terms, furnished suites, and concierge service made my transition seamless. I've been here 18 months and love every day.",
    name: "James Whitfield",
    role: "Regional Director, Deloitte",
    rating: 5,
    avatar: "JW",
  },
  {
    quote:
      "The Penthouse Collection exceeded all expectations. The panoramic views from the private terrace are breathtaking, and the weekly housekeeping is a lifesaver. Elysian has redefined what luxury living means in Jakarta.",
    name: "Dian Pratama",
    role: "Founder & CEO, Nextera Ventures",
    rating: 5,
    avatar: "DP",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Loved by{" "}
            <span className="gradient-text">Residents</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:p-12"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">
                      &#9733;
                    </span>
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed text-text-dark md:text-xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-lg font-bold text-white">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-text-dark">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-gradient-to-r from-primary to-primary-dark"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
