"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyNumeric: number;
  yearlyNumeric: number;
  description: string;
  popular: boolean;
  features: { name: string; included: boolean }[];
}

const tiers: PricingTier[] = [
  {
    name: "Studio Lux",
    monthlyPrice: "Rp 15M",
    yearlyPrice: "Rp 12M",
    monthlyNumeric: 15,
    yearlyNumeric: 12,
    description: "Perfect for professionals and singles",
    popular: false,
    features: [
      { name: "45 sqm living space", included: true },
      { name: "King-size bed", included: true },
      { name: "Kitchenette", included: true },
      { name: "Smart home system", included: true },
      { name: "Weekly housekeeping", included: true },
      { name: "Co-working access", included: true },
      { name: "Gym & pool access", included: true },
      { name: "Private balcony", included: false },
      { name: "Walk-in closet", included: false },
      { name: "Dedicated concierge", included: false },
    ],
  },
  {
    name: "One-Bed Premium",
    monthlyPrice: "Rp 25M",
    yearlyPrice: "Rp 20M",
    monthlyNumeric: 25,
    yearlyNumeric: 20,
    description: "Ideal for couples and remote workers",
    popular: true,
    features: [
      { name: "75 sqm living space", included: true },
      { name: "King-size bed", included: true },
      { name: "Full gourmet kitchen", included: true },
      { name: "Smart home system", included: true },
      { name: "Weekly housekeeping", included: true },
      { name: "Co-working access", included: true },
      { name: "Gym & pool access", included: true },
      { name: "Private balcony", included: true },
      { name: "Walk-in closet", included: true },
      { name: "Dedicated concierge", included: false },
    ],
  },
  {
    name: "Penthouse",
    monthlyPrice: "Rp 65M",
    yearlyPrice: "Rp 52M",
    monthlyNumeric: 65,
    yearlyNumeric: 52,
    description: "Ultimate luxury for discerning residents",
    popular: false,
    features: [
      { name: "150 sqm living space", included: true },
      { name: "King-size bed (3 rooms)", included: true },
      { name: "Full gourmet kitchen", included: true },
      { name: "Smart home system", included: true },
      { name: "Daily housekeeping", included: true },
      { name: "Private office space", included: true },
      { name: "Gym, pool & cinema", included: true },
      { name: "Private terrace & jacuzzi", included: true },
      { name: "Walk-in closet", included: true },
      { name: "Dedicated concierge", included: true },
    ],
  },
];

export default function PricingTable() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-white py-24">
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
            Pricing
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            All-inclusive rates with zero hidden fees. Choose the plan that fits
            your lifestyle.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${
                !yearly ? "text-text-dark" : "text-text-muted"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative h-8 w-16 rounded-full transition-colors ${
                yearly
                  ? "bg-gradient-to-r from-primary to-primary-dark"
                  : "bg-gray-300"
              }`}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  yearly ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                yearly ? "text-text-dark" : "text-text-muted"
              }`}
            >
              Yearly
            </span>
            {yearly && (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative overflow-hidden rounded-3xl border-2 ${
                tier.popular
                  ? "scale-105 border-primary shadow-2xl shadow-primary/20"
                  : "border-gray-100 shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-center text-sm font-bold text-white">
                  Most Popular
                </div>
              )}

              <div className="bg-white p-8">
                <h3 className="font-heading text-2xl font-bold text-text-dark">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <motion.div
                    key={yearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-heading text-5xl font-extrabold text-text-dark">
                      {yearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-lg text-text-muted">/mo</span>
                  </motion.div>
                  {yearly && (
                    <p className="mt-1 text-sm text-text-muted">
                      <span className="line-through">{tier.monthlyPrice}/mo</span>
                      {" "}billed annually
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#cta"
                  className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                    tier.popular
                      ? "btn-gradient"
                      : "border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Get Started
                </a>

                {/* Feature list */}
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      {feature.included ? (
                        <svg
                          className="h-5 w-5 shrink-0 text-primary"
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
                      ) : (
                        <svg
                          className="h-5 w-5 shrink-0 text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-text-dark"
                            : "text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
