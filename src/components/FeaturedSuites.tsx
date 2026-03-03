"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Suite {
  name: string;
  size: string;
  price: string;
  badge: string;
  badgeColor: string;
  image: string;
  features: string[];
  specs: { icon: string; label: string }[];
}

const suites: Suite[] = [
  {
    name: "Studio Lux",
    size: "45 sqm",
    price: "Rp 15M",
    badge: "Most Popular",
    badgeColor: "from-primary to-primary-dark",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop&q=80",
    features: [
      "King-size bed",
      "Smart TV & high-speed WiFi",
      "Kitchenette with premium appliances",
      "Washer & dryer in-unit",
    ],
    specs: [
      { icon: "📐", label: "45 sqm" },
      { icon: "🛏️", label: "Studio" },
      { icon: "🚿", label: "1 Bath" },
      { icon: "🏙️", label: "City View" },
    ],
  },
  {
    name: "One-Bedroom Premium",
    size: "75 sqm",
    price: "Rp 25M",
    badge: "Best Value",
    badgeColor: "from-[#F6D365] to-[#FDA085]",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80",
    features: [
      "Separate bedroom & living area",
      "Full gourmet kitchen",
      "Walk-in closet",
      "Private balcony with skyline view",
    ],
    specs: [
      { icon: "📐", label: "75 sqm" },
      { icon: "🛏️", label: "1 Bed" },
      { icon: "🚿", label: "1 Bath" },
      { icon: "🌅", label: "Balcony" },
    ],
  },
  {
    name: "Penthouse Collection",
    size: "150 sqm",
    price: "Rp 65M",
    badge: "Exclusive",
    badgeColor: "from-[#0f0c29] to-[#302b63]",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80",
    features: [
      "Panoramic floor-to-ceiling windows",
      "Private terrace & jacuzzi",
      "Home theater system",
      "Dedicated concierge service",
    ],
    specs: [
      { icon: "📐", label: "150 sqm" },
      { icon: "🛏️", label: "3 Bed" },
      { icon: "🚿", label: "2 Bath" },
      { icon: "🌆", label: "Panoramic" },
    ],
  },
];

export default function FeaturedSuites() {
  return (
    <section id="suites" className="bg-white py-24">
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
            Our Suites
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Find Your Perfect{" "}
            <span className="gradient-text">Space</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            From cozy studios to expansive penthouses, every suite is
            thoughtfully designed for modern living.
          </p>
        </motion.div>

        {/* Suite cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-hover group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={suite.image}
                  alt={suite.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${suite.badgeColor} px-4 py-1.5 text-xs font-bold text-white shadow-lg`}
                >
                  {suite.badge}
                </div>
                {/* Price badge */}
                <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                  <span className="font-heading text-xl font-extrabold text-text-dark">
                    {suite.price}
                  </span>
                  <span className="text-sm text-text-muted">/mo</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-text-dark">
                  {suite.name}
                </h3>

                {/* Specs row */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {suite.specs.map((spec) => (
                    <span
                      key={spec.label}
                      className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-text-muted"
                    >
                      <span>{spec.icon}</span>
                      {spec.label}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2">
                  {suite.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#cta"
                  className="btn-gradient mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold"
                >
                  Schedule Viewing
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
