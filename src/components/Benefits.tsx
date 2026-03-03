"use client";

import { motion } from "framer-motion";

interface Benefit {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: "🪑",
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every suite comes with premium furniture, linens, and kitchenware.",
    gradient: "from-primary/10 to-primary-dark/10",
  },
  {
    icon: "📱",
    title: "Smart Living",
    description:
      "Control lighting, temperature, and access with our integrated smart home system and mobile app.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: "✨",
    title: "Weekly Housekeeping",
    description:
      "Professional cleaning service included. Fresh linens, spotless spaces, every week — no extra charge.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: "🏊",
    title: "World-Class Amenities",
    description:
      "Infinity pool, co-working spaces, 24/7 gym, rooftop lounge, and private cinema — all at your doorstep.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: "📋",
    title: "Flexible Terms",
    description:
      "No long-term commitment required. Choose monthly, quarterly, or yearly leases that suit your lifestyle.",
    gradient: "from-[#F6D365]/10 to-[#FDA085]/10",
  },
  {
    icon: "💰",
    title: "All-Inclusive Pricing",
    description:
      "One transparent price covers WiFi, utilities, maintenance, and building amenities. Zero hidden fees.",
    gradient: "from-rose-500/10 to-orange-500/10",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Why Elysian
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Everything You Need,{" "}
            <span className="gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            We&apos;ve thought of everything so you can focus on what matters
            most — living well.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient}`}
              >
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-dark">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
