"use client";

import { useState, useEffect, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Suites", href: "#suites" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const SELLING_POINTS = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Premium Security",
    description: "24/7 security with biometric access, CCTV monitoring, and dedicated concierge service for your complete peace of mind.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Smart Living",
    description: "Control lighting, temperature, and access through our integrated smart home system and mobile app.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "All-Inclusive",
    description: "One transparent price covers WiFi, utilities, weekly housekeeping, maintenance, and all building amenities.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Flexible Terms",
    description: "No long-term commitment. Choose monthly, quarterly, or yearly leases. Move in as fast as 24 hours.",
  },
];

const SUITES = [
  {
    name: "Studio Lux",
    size: "45 sqm",
    beds: "Studio",
    baths: "1 Bath",
    price: "Rp 15M",
    period: "/month",
    badge: "Great Value",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    features: ["King-size bed", "Smart TV & high-speed WiFi", "Kitchenette with premium appliances", "Washer & dryer in-unit"],
  },
  {
    name: "One-Bedroom Premium",
    size: "75 sqm",
    beds: "1 Bedroom",
    baths: "1 Bath",
    price: "Rp 25M",
    period: "/month",
    badge: "Most Popular",
    popular: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: ["Separate bedroom & living area", "Full gourmet kitchen", "Walk-in closet", "Private balcony with skyline view"],
  },
  {
    name: "Penthouse Collection",
    size: "150 sqm",
    beds: "3 Bedrooms",
    baths: "2 Bath",
    price: "Rp 65M",
    period: "/month",
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: ["Panoramic floor-to-ceiling windows", "Private terrace & jacuzzi", "Home theater system", "Dedicated concierge service"],
  },
];

const AMENITIES = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Infinity Pool",
    description: "Rooftop infinity pool with panoramic city views",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers available",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Co-Working Space",
    description: "Dedicated workspace with meeting rooms and high-speed internet",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    title: "Private Cinema",
    description: "Exclusive screening room with Dolby Atmos sound system",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Spa & Wellness",
    description: "Full-service spa with sauna, steam room, and treatment suites",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Rooftop Lounge",
    description: "Sky bar and lounge area perfect for entertaining guests",
  },
];

const NEIGHBORHOODS = [
  { icon: "🏢", label: "Pacific Place Mall", distance: "3 min walk" },
  { icon: "🚇", label: "MRT Istora Station", distance: "5 min walk" },
  { icon: "🏥", label: "Siloam Hospital", distance: "8 min drive" },
  { icon: "🎓", label: "International Schools", distance: "10 min drive" },
  { icon: "✈️", label: "Soekarno-Hatta Airport", distance: "40 min drive" },
  { icon: "🌳", label: "Senayan Park", distance: "7 min walk" },
];

const TESTIMONIALS = [
  {
    quote: "Moving into Elysian SCBD was the best decision I made. The all-inclusive pricing means I never worry about hidden costs, and the smart home features are incredible. It truly feels like a 5-star hotel I can call home.",
    name: "Sarah Chen",
    role: "VP of Marketing, TechCorp",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "As an expat, finding quality housing in Jakarta was stressful until I discovered Elysian. The flexible terms, furnished suites, and concierge service made my transition seamless. I\u2019ve been here 18 months and love every day.",
    name: "James Whitfield",
    role: "Regional Director, Deloitte",
    avatar: "JW",
    rating: 5,
  },
  {
    quote: "The Penthouse Collection exceeded all expectations. The panoramic views from the private terrace are breathtaking, and the weekly housekeeping is a lifesaver. Elysian has redefined what luxury living means in Jakarta.",
    name: "Dian Pratama",
    role: "Founder & CEO, Nextera Ventures",
    avatar: "DP",
    rating: 5,
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Elysian SCBD", href: "#location" },
      { label: "Elysian Menteng", href: "#location" },
      { label: "Elysian Kemang", href: "#location" },
      { label: "Coming Soon: BSD", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  ICONS (SVG inline)                                                 */
/* ------------------------------------------------------------------ */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setStickyVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const t = TESTIMONIALS[currentTestimonial];

  return (
    <>
      {/* ============================================================ */}
      {/*  NAVBAR                                                       */}
      {/* ============================================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-[0_1px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#667EEA] to-[#764BA2] shadow-lg shadow-[#667EEA]/25 transition-shadow duration-300 group-hover:shadow-[#667EEA]/40">
                <span className="text-lg font-bold text-white tracking-tight">E</span>
              </div>
              <span
                className={`font-heading text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1A1A2E]" : "text-white"
                }`}
              >
                Elysian Suites
              </span>
            </a>

            <div className="hidden items-center gap-10 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#667EEA] after:to-[#764BA2] after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-[#1A1A2E]/80 hover:text-[#667EEA]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="btn-gradient rounded-full px-7 py-2.5 text-sm font-semibold"
              >
                Book a Viewing
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-[#1A1A2E]" : "bg-white"
                } ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-[#1A1A2E]" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-[#1A1A2E]" : "bg-white"
                } ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden bg-white shadow-2xl transition-all duration-400 md:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1A1A2E] transition-colors hover:text-[#667EEA]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gradient mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold"
            >
              Book a Viewing
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667EEA] via-[#6B5CE7] to-[#764BA2]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="animate-float-delayed absolute top-1/4 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="animate-float-slow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute top-20 right-[20%] h-16 w-16 rounded-2xl border-2 border-white/10 animate-spin-very-slow" />
          <div className="absolute bottom-40 left-[15%] h-12 w-12 rounded-full border-2 border-white/10 animate-spin-reverse-slow" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:gap-16 lg:px-12">
          <div className="flex-1 pt-24 text-center lg:pt-0 lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Limited Units Available &mdash; Now Leasing
            </span>

            <h1 className="font-heading text-5xl font-extrabold leading-[1.08] text-white md:text-6xl lg:text-7xl">
              Live Above
              <br />
              <span className="bg-gradient-to-r from-[#F6D365] to-[#FDA085] bg-clip-text text-transparent">
                the Ordinary
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0 lg:text-xl">
              Fully furnished luxury suites in Jakarta&apos;s most prestigious addresses. Premium amenities, smart living, zero hassle. Move in tomorrow.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#suites"
                className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#667EEA] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Browse Suites
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Book a Viewing
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 lg:justify-start">
              <span className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">2,500+</span> Residents
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">4.9</span>
                <span className="text-yellow-400">&#9733;</span> Rating
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">98%</span> Occupancy
              </span>
            </div>
          </div>

          <div className="mt-12 flex-1 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                  alt="Luxury apartment interior with floor-to-ceiling windows and modern furnishing"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md border border-white/15">
                  <p className="text-xs text-white/70">Starting from</p>
                  <p className="text-2xl font-bold text-white">
                    Rp 15M<span className="text-sm font-normal text-white/60">/month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  KEY SELLING POINTS                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Why Elysian
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Everything You Need,{" "}
              <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              We&apos;ve eliminated the hassle of traditional renting so you can focus on what matters &mdash; living well.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SELLING_POINTS.map((point) => (
              <div
                key={point.title}
                className="card-hover group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#667EEA]/10 to-[#764BA2]/10 text-[#667EEA] transition-all duration-300 group-hover:from-[#667EEA] group-hover:to-[#764BA2] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#667EEA]/25">
                  {point.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1A1A2E]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6C7A8D]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SUITE TYPES SHOWCASE                                         */}
      {/* ============================================================ */}
      <section id="suites" className="bg-[#F5F3FF] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Our Collection
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Find Your Perfect <span className="gradient-text">Suite</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              From cozy studios to expansive penthouses, every suite is thoughtfully designed for modern luxury living.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SUITES.map((suite) => (
              <div
                key={suite.name}
                className={`card-hover group relative overflow-hidden rounded-3xl bg-white shadow-lg ${
                  suite.popular
                    ? "border-2 border-[#667EEA] ring-4 ring-[#667EEA]/10"
                    : "border border-gray-100"
                }`}
              >
                {suite.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#667EEA] to-[#764BA2] py-2 text-center text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <div className={`relative overflow-hidden ${suite.popular ? "mt-8" : ""}`} style={{ height: "240px" }}>
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {!suite.popular && (
                    <div className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-[#667EEA] to-[#764BA2] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      {suite.badge}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-heading text-2xl font-bold text-white drop-shadow-lg">
                      {suite.name}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#F5F3FF] px-3 py-1.5 text-xs font-medium text-[#6C7A8D]">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                      {suite.size}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#F5F3FF] px-3 py-1.5 text-xs font-medium text-[#6C7A8D]">
                      {suite.beds}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#F5F3FF] px-3 py-1.5 text-xs font-medium text-[#6C7A8D]">
                      {suite.baths}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {suite.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#6C7A8D]">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#667EEA]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-6">
                    <div>
                      <p className="text-xs text-[#6C7A8D]">Starting from</p>
                      <p className="font-heading text-2xl font-extrabold text-[#1A1A2E]">
                        {suite.price}
                        <span className="text-sm font-normal text-[#6C7A8D]">{suite.period}</span>
                      </p>
                    </div>
                    <a
                      href="#pricing"
                      className="btn-gradient rounded-full px-6 py-2.5 text-sm font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AMENITIES GRID                                               */}
      {/* ============================================================ */}
      <section id="amenities" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Amenities
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              World-Class <span className="gradient-text">Amenities</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              Every amenity is designed to elevate your daily life. All included in your monthly rate.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="card-hover group flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#667EEA]/10 to-[#764BA2]/10 text-[#667EEA] transition-all duration-300 group-hover:from-[#667EEA] group-hover:to-[#764BA2] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#667EEA]/20">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1A1A2E]">
                    {amenity.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6C7A8D]">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LOCATION / NEIGHBORHOOD                                      */}
      {/* ============================================================ */}
      <section id="location" className="bg-[#F5F3FF] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
                Prime Location
              </span>
              <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
                In the Heart of{" "}
                <span className="gradient-text">Jakarta&apos;s Best</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#6C7A8D]">
                Strategically located in SCBD &mdash; Jakarta&apos;s most prestigious business and lifestyle district. Everything you need is steps away.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {NEIGHBORHOODS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A2E]">{item.label}</p>
                      <p className="text-xs text-[#667EEA] font-medium">{item.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#667EEA]/15 to-[#764BA2]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80"
                  alt="SCBD Jakarta skyline at dusk with modern skyscrapers"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#667EEA]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm">
                    <p className="font-heading text-lg font-bold text-[#1A1A2E]">Elysian SCBD</p>
                    <p className="text-sm text-[#6C7A8D]">Sudirman Central Business District</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-semibold text-emerald-600">42 Units Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section id="testimonials" className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Testimonials
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Loved by <span className="gradient-text">Residents</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#6C7A8D]">
              Don&apos;t just take our word for it. Here&apos;s what our residents have to say.
            </p>
          </div>

          <div className="relative">
            <div
              key={currentTestimonial}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12 animate-fade-in"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">&#9733;</span>
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-[#1A1A2E] md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-lg font-bold text-white shadow-lg shadow-[#667EEA]/20">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-[#1A1A2E]">{t.name}</p>
                  <p className="text-sm text-[#6C7A8D]">{t.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-8 bg-gradient-to-r from-[#667EEA] to-[#764BA2]"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Social proof logos */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[#6C7A8D]">
              As featured in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
              <span className="font-heading text-2xl font-extrabold text-[#1A1A2E]">Forbes</span>
              <span className="font-heading text-2xl font-extrabold text-[#1A1A2E]">Bloomberg</span>
              <span className="font-heading text-2xl font-extrabold text-[#1A1A2E]">Tatler</span>
              <span className="font-heading text-2xl font-extrabold text-[#1A1A2E]">DestinAsian</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING / AVAILABILITY CTA                                   */}
      {/* ============================================================ */}
      <section id="pricing" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667EEA] via-[#6B5CE7] to-[#764BA2]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="animate-float-delayed absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5" />
          <div className="animate-float-slow absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              Ready to Elevate
              <br />
              Your Living?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
              Join 2,500+ residents who chose Jakarta&apos;s finest serviced apartments. Book a private viewing today and experience Elysian firsthand.
            </p>
          </div>

          {/* Pricing summary cards */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm border border-white/15">
              <p className="text-sm font-medium text-white/70">Studio Lux</p>
              <p className="mt-2 font-heading text-3xl font-extrabold text-white">Rp 15M</p>
              <p className="text-sm text-white/60">/month &middot; 45 sqm</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-6 text-center backdrop-blur-sm border-2 border-white/30 shadow-lg shadow-white/10 sm:scale-105">
              <div className="mb-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white">
                Best Value
              </div>
              <p className="text-sm font-medium text-white/70">One-Bedroom</p>
              <p className="mt-2 font-heading text-3xl font-extrabold text-white">Rp 25M</p>
              <p className="text-sm text-white/60">/month &middot; 75 sqm</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm border border-white/15">
              <p className="text-sm font-medium text-white/70">Penthouse</p>
              <p className="mt-2 font-heading text-3xl font-extrabold text-white">Rp 65M</p>
              <p className="text-sm text-white/60">/month &middot; 150 sqm</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-[#667EEA] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Your Viewing Today
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Urgency element */}
          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-sm border border-white/15">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
              </span>
              Only 12 units remaining at launch pricing &mdash; Limited time offer
            </span>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-emerald-400" />
              No deposit required
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-emerald-400" />
              Move in within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-emerald-400" />
              Flexible lease terms
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-emerald-400" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="bg-[#0F1629] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#667EEA] to-[#764BA2] shadow-lg shadow-[#667EEA]/25">
                  <span className="text-lg font-bold text-white">E</span>
                </div>
                <span className="font-heading text-xl font-bold">Elysian Suites</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                Jakarta&apos;s premier serviced apartment brand. Fully furnished luxury suites in the city&apos;s most prestigious addresses. Live above the ordinary.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/50">
                <p>+62 812-3456-7890</p>
                <p>hello@elysiansuites.id</p>
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/40">
                &copy; 2026 Elysian Suites. All rights reserved.
              </p>
              <p className="text-sm text-white/40">
                Made with{" "}
                <span className="text-red-400">&hearts;</span>{" "}
                by{" "}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60"
                >
                  Creativism
                </a>
              </p>
              <div className="flex gap-6 text-sm text-white/40">
                <a href="#" className="transition-colors hover:text-white">Terms</a>
                <a href="#" className="transition-colors hover:text-white">Privacy</a>
                <a href="#" className="transition-colors hover:text-white">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/*  STICKY MOBILE CTA                                            */}
      {/* ============================================================ */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 md:hidden ${
          stickyVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#6C7A8D]">Starting from</p>
            <p className="font-heading text-lg font-bold text-[#1A1A2E]">
              Rp 15M<span className="text-sm font-normal text-[#6C7A8D]">/mo</span>
            </p>
          </div>
          <a
            href="#pricing"
            className="btn-gradient shrink-0 rounded-full px-6 py-3 text-sm font-bold"
          >
            Book a Viewing
          </a>
        </div>
      </div>
    </>
  );
}
