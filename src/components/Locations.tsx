"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Location {
  name: string;
  area: string;
  image: string;
  distances: { place: string; time: string }[];
  units: string;
}

const locations: Location[] = [
  {
    name: "Elysian SCBD",
    area: "Sudirman Central Business District",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=600&h=400&fit=crop&q=80",
    distances: [
      { place: "Pacific Place Mall", time: "3 min walk" },
      { place: "MRT Istora Station", time: "5 min walk" },
      { place: "Soekarno-Hatta Airport", time: "40 min drive" },
    ],
    units: "42 Units Available",
  },
  {
    name: "Elysian Menteng",
    area: "Heritage District, Central Jakarta",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&q=80",
    distances: [
      { place: "Menteng Park", time: "2 min walk" },
      { place: "Grand Indonesia", time: "10 min drive" },
      { place: "International Schools", time: "5 min drive" },
    ],
    units: "28 Units Available",
  },
  {
    name: "Elysian Kemang",
    area: "South Jakarta's Lifestyle Hub",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop&q=80",
    distances: [
      { place: "Kemang Village", time: "3 min walk" },
      { place: "Lippo Mall Kemang", time: "5 min drive" },
      { place: "TB Simatupang", time: "15 min drive" },
    ],
    units: "35 Units Available",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-white py-24">
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
            Locations
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Prime Spots,{" "}
            <span className="gradient-text">Premium Living</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Strategically located in Jakarta&apos;s most sought-after
            neighborhoods. Everything you need is steps away.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-hover group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {location.name}
                  </h3>
                  <p className="text-sm text-white/70">{location.area}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="mb-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {location.units}
                </div>
                <ul className="space-y-3">
                  {location.distances.map((d) => (
                    <li
                      key={d.place}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-text-dark">{d.place}</span>
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary">
                        {d.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 block w-full rounded-xl border-2 border-primary/20 py-3 text-center text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  Explore {location.name.split(" ")[1]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
