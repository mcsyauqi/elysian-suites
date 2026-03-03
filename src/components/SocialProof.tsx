"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  decimal?: boolean;
  label: string;
  icon: string;
}

function Counter({ end, suffix = "", decimal = false, label, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = end / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, end);
      setCount(current);

      if (step >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  const displayValue = decimal ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-2 px-4"
    >
      <span className="text-3xl">{icon}</span>
      <span className="gradient-text font-heading text-4xl font-extrabold md:text-5xl">
        {displayValue}{suffix}
      </span>
      <span className="text-sm font-medium text-text-muted">{label}</span>
    </motion.div>
  );
}

const stats = [
  { end: 2500, suffix: "+", label: "Happy Residents", icon: "🏠" },
  { end: 4.9, suffix: "/5", decimal: true, label: "Average Rating", icon: "⭐" },
  { end: 98, suffix: "%", label: "Occupancy Rate", icon: "📊" },
  { end: 3, suffix: "", label: "Prime Locations", icon: "📍" },
];

export default function SocialProof() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
