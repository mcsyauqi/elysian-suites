'use client';

import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: 'Suites', href: '#suites' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Reviews', href: '#reviews' },
];

const FEATURES = [
  {
    emoji: '📍',
    title: 'Premium Location',
    description: 'Situated in the heart of the city\'s most prestigious district, minutes from business centers and lifestyle hubs.',
  },
  {
    emoji: '🏠',
    title: 'Smart Living',
    description: 'IoT-enabled suites with app-controlled lighting, climate, and security for a seamless modern lifestyle.',
  },
  {
    emoji: '✨',
    title: 'All-Inclusive',
    description: 'Utilities, high-speed Wi-Fi, weekly housekeeping, and concierge service included in every package.',
  },
  {
    emoji: '📋',
    title: 'Flexible Terms',
    description: 'Choose from monthly, quarterly, or annual leases. No long-term commitment required to start living well.',
  },
];

const SUITES = [
  {
    name: 'Studio Lux',
    size: '45 m²',
    beds: 'Studio',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    price: '18',
    badge: null,
    features: ['King-size bed', 'Kitchenette', 'Smart TV 50"', 'Rain shower'],
  },
  {
    name: 'One-Bed Premium',
    size: '72 m²',
    beds: '1 Bedroom',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    price: '32',
    badge: 'MOST POPULAR',
    features: ['Separate living room', 'Full kitchen', 'Washer & dryer', 'Balcony view'],
  },
  {
    name: 'Penthouse',
    size: '150 m²',
    beds: '3 Bedrooms',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    price: '75',
    badge: 'EXCLUSIVE',
    features: ['Private terrace', 'Chef\'s kitchen', 'Home office', 'Panoramic city view'],
  },
];

const AMENITIES = [
  { emoji: '🏊', name: 'Infinity Pool', description: 'Rooftop infinity pool with city skyline views, open sunrise to sunset.' },
  { emoji: '💪', name: 'Fitness Center', description: 'State-of-the-art gym with personal trainers and yoga studio.' },
  { emoji: '👔', name: 'Co-Working Space', description: 'Dedicated work lounges with meeting rooms and high-speed internet.' },
  { emoji: '🍽️', name: 'Resident Lounge', description: 'Private dining area and social lounge for hosting and networking.' },
  { emoji: '🚗', name: 'Valet Parking', description: 'Secure underground parking with complimentary valet service.' },
  { emoji: '🛎️', name: '24/7 Concierge', description: 'Personal concierge for bookings, deliveries, and lifestyle requests.' },
];

const NEARBY_PLACES = [
  { name: 'Central Business District', time: '5 min' },
  { name: 'International Airport', time: '25 min' },
  { name: 'Premium Shopping Mall', time: '3 min' },
  { name: 'International School', time: '10 min' },
  { name: 'Hospital & Medical Center', time: '8 min' },
  { name: 'Golf & Country Club', time: '15 min' },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ============================================================ */}
      {/*  1. NAVIGATION                                                */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <a href="#" className="text-xl font-extrabold tracking-tight text-gray-900">
              ELYSIAN <span className="gradient-text">SUITES</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="gradient-btn px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Book a Viewing
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="gradient-btn px-6 py-3 rounded-full text-sm font-semibold text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Viewing
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ============================================================ */}
      {/*  2. HERO                                                      */}
      {/* ============================================================ */}
      <section className="gradient-bg pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
                Jakarta&apos;s Finest Address
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Live<br />Extraordinary
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-lg">
                Discover serviced apartments designed for those who demand more.
                Premium finishes, world-class amenities, and an unmatched location
                in the heart of the city.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#suites"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Browse Suites
                </a>
                <a
                  href="#amenities"
                  className="inline-flex items-center px-8 py-3.5 border-2 border-white text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors"
                >
                  Virtual Tour
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                  alt="Elysian Suites luxury apartment interior"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-gray-900/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">2,500+</span>
                <span className="text-sm text-gray-300">Residents</span>
              </div>
              <div className="w-px h-8 bg-gray-600 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">4.9</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-sm text-gray-300">Rating</span>
              </div>
              <div className="w-px h-8 bg-gray-600 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">98%</span>
                <span className="text-sm text-gray-300">Occupancy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. KEY FEATURES                                              */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Designed for Modern Living
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl mb-5">
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. SUITES                                                    */}
      {/* ============================================================ */}
      <section id="suites" className="bg-lavender py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">Our Suites</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Find Your Perfect Space
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SUITES.map((suite) => (
              <div
                key={suite.name}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
              >
                {/* Badge */}
                {suite.badge && (
                  <div className="absolute top-4 left-4 z-10 gradient-bg px-4 py-1.5 rounded-full">
                    <span className="text-xs font-bold text-white tracking-wide">{suite.badge}</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{suite.name}</h3>
                  <p className="text-sm text-gray-500 mb-5">
                    {suite.size} &middot; {suite.beds}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {suite.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between pt-5 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">From</p>
                      <p className="text-2xl font-extrabold text-gray-900">
                        IDR {suite.price}M
                        <span className="text-sm font-medium text-gray-400">/month</span>
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="gradient-btn px-5 py-2.5 rounded-full text-sm font-semibold"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. AMENITIES                                                 */}
      {/* ============================================================ */}
      <section id="amenities" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">Amenities</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Everything You Need, In-House
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.name}
                className="card-hover flex items-start gap-5 bg-white rounded-2xl p-7 border border-gray-200"
              >
                <span className="text-3xl flex-shrink-0">{amenity.emoji}</span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{amenity.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. LOCATION                                                  */}
      {/* ============================================================ */}
      <section id="location" className="bg-lavender py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80"
                alt="Location map area"
                className="w-full h-[350px] lg:h-[420px] object-cover"
              />
            </div>

            {/* Right: Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">Location</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                Minutes from Everything
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Strategically located in the city&apos;s golden triangle, Elysian Suites
                places you at the center of business, entertainment, and urban convenience.
              </p>

              <div className="space-y-5">
                {NEARBY_PLACES.map((place) => (
                  <div key={place.name} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-gray-700">{place.name}</span>
                    <span className="text-sm font-bold gradient-text">{place.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. SOCIAL PROOF / TESTIMONIAL                                */}
      {/* ============================================================ */}
      <section id="reviews" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-8">What Residents Say</p>

            <div className="mb-4">
              <span className="text-yellow-400 text-2xl tracking-wider">★ ★ ★ ★ ★</span>
            </div>

            <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed mb-8 italic">
              &ldquo;Moving into Elysian Suites was the best decision I&apos;ve made. The seamless
              blend of luxury, convenience, and community is unlike anything else in the city.
              The concierge team treats every request like it&apos;s the most important thing in the world.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                AS
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Amanda Santoso</p>
                <p className="text-sm text-gray-500">Resident since 2024 &middot; Penthouse</p>
              </div>
            </div>
          </div>

          {/* Featured In */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
              {['Forbes', 'Bloomberg', 'Tatler', 'DestinAsian', 'Prestige'].map((pub) => (
                <span key={pub} className="text-xl font-bold text-gray-300 tracking-wide">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. CTA SECTION                                               */}
      {/* ============================================================ */}
      <section id="contact" className="gradient-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
            Limited Units Available
          </h2>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Premium residences in our most sought-after building are going fast.
            Don&apos;t miss the opportunity to call Elysian Suites home.
          </p>

          {/* Urgency indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full pulse-dot inline-block" />
            <span className="text-white/90 font-semibold text-sm">Only 12 units remaining</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/6281222227920?text=Hi%2C%20I%20am%20interested%20in%20Elysian%20Suites"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-white text-gray-900 font-bold text-base rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              Schedule a Visit
            </a>
            <a
              href="tel:+6281222227920"
              className="inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold text-base rounded-full hover:bg-white/10 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. FOOTER                                                    */}
      {/* ============================================================ */}
      <footer className="bg-navy text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div>
              <p className="text-xl font-extrabold text-white tracking-tight mb-4">
                ELYSIAN <span className="text-indigo">SUITES</span>
              </p>
              <p className="text-sm leading-relaxed">
                Jakarta&apos;s premier serviced apartment experience.
                Luxury living redefined for the modern professional.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</p>
              <div className="space-y-3 text-sm">
                <p>Jl. Sudirman Kav. 52-53</p>
                <p>South Jakarta 12190</p>
                <p>+62 812 2222 7920</p>
                <p>hello@elysiansuites.id</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Elysian Suites. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made with ♥ by <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-indigo hover:text-white transition-colors">Creativism</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
