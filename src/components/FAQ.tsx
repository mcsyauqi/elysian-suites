"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's included in the monthly price?",
    answer:
      "Everything. Your monthly rate covers the fully furnished suite, high-speed WiFi, utilities (electricity, water, gas), weekly housekeeping, building maintenance, and full access to all amenities including the pool, gym, co-working space, and rooftop lounge. There are zero hidden fees or surprise charges.",
  },
  {
    question: "What is the minimum stay duration?",
    answer:
      "Our minimum stay is 1 month. We offer flexible lease terms — monthly, quarterly (5% savings), semi-annual (10% savings), and annual (20% savings). There's no long-term commitment required, and you can extend or upgrade your lease at any time.",
  },
  {
    question: "Are pets allowed in Elysian Suites?",
    answer:
      "Yes! We're a pet-friendly community. Small to medium dogs and cats are welcome in all our locations. There's a one-time pet deposit of Rp 5M (refundable) and we even have a pet grooming station and dog park at our SCBD location.",
  },
  {
    question: "How can I schedule a viewing?",
    answer:
      "You can book a viewing through our website, WhatsApp (+62 812-3456-7890), or by calling our leasing office. We offer in-person tours daily from 9 AM to 7 PM, as well as virtual 3D tours for those who can't visit in person. Most viewings can be scheduled within 24 hours.",
  },
  {
    question: "How quickly can I move in?",
    answer:
      "As fast as 24 hours! Once your application is approved and the deposit is received, you can move in the very next day. All suites come fully furnished and stocked with essentials — just bring your suitcase. Our concierge team will help with your transition.",
  },
  {
    question: "Do you offer corporate rates or bulk bookings?",
    answer:
      "Absolutely. We work with 50+ companies across Jakarta for executive housing. Corporate packages include discounted rates (up to 30% off), dedicated account management, flexible booking for multiple units, and customized billing. Contact our corporate team for a tailored proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Got{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Everything you need to know about living at Elysian Suites.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                openIndex === index
                  ? "border-primary/30 bg-white shadow-lg shadow-primary/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span
                  className={`pr-4 font-heading text-lg font-semibold ${
                    openIndex === index ? "text-primary" : "text-text-dark"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-gradient-to-br from-primary to-primary-dark text-white"
                      : "bg-surface text-text-muted"
                  }`}
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="text-base leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
