"use client";

import { useState, useEffect, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Suites", href: "#suites" },
  { label: "Benefits", href: "#benefits" },
  { label: "Locations", href: "#locations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "2,500+", label: "Happy Residents", icon: "\u{1F3E0}" },
  { value: "4.9/5", label: "Average Rating", icon: "\u2B50" },
  { value: "98%", label: "Occupancy Rate", icon: "\u{1F4CA}" },
  { value: "3", label: "Prime Locations", icon: "\u{1F4CD}" },
];

const SUITES = [
  {
    name: "Studio Lux",
    size: "45 sqm",
    price: "Rp 15M",
    badge: "Great Value",
    badgeGradient: "linear-gradient(135deg, #667EEA, #764BA2)",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    features: [
      "King-size bed",
      "Smart TV & high-speed WiFi",
      "Kitchenette with premium appliances",
      "Washer & dryer in-unit",
    ],
    specs: [
      { icon: "\u{1F4D0}", label: "45 sqm" },
      { icon: "\u{1F6CF}\uFE0F", label: "Studio" },
      { icon: "\u{1F6BF}", label: "1 Bath" },
      { icon: "\u{1F3D9}\uFE0F", label: "City View" },
    ],
  },
  {
    name: "One-Bedroom Premium",
    size: "75 sqm",
    price: "Rp 25M",
    badge: "Most Popular",
    badgeGradient: "linear-gradient(135deg, #F6D365, #FDA085)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: [
      "Separate bedroom & living area",
      "Full gourmet kitchen",
      "Walk-in closet",
      "Private balcony with skyline view",
    ],
    specs: [
      { icon: "\u{1F4D0}", label: "75 sqm" },
      { icon: "\u{1F6CF}\uFE0F", label: "1 Bed" },
      { icon: "\u{1F6BF}", label: "1 Bath" },
      { icon: "\u{1F305}", label: "Balcony" },
    ],
  },
  {
    name: "Penthouse Collection",
    size: "150 sqm",
    price: "Rp 65M",
    badge: "Exclusive",
    badgeGradient: "linear-gradient(135deg, #0f0c29, #302b63)",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: [
      "Panoramic floor-to-ceiling windows",
      "Private terrace & jacuzzi",
      "Home theater system",
      "Dedicated concierge service",
    ],
    specs: [
      { icon: "\u{1F4D0}", label: "150 sqm" },
      { icon: "\u{1F6CF}\uFE0F", label: "3 Bed" },
      { icon: "\u{1F6BF}", label: "2 Bath" },
      { icon: "\u{1F306}", label: "Panoramic" },
    ],
  },
];

const BENEFITS = [
  {
    icon: "\u{1FA91}",
    title: "Fully Furnished",
    description:
      "Move in with just your suitcase. Every suite comes with premium furniture, linens, and kitchenware.",
    gradient: "from-[#667EEA]/10 to-[#764BA2]/10",
  },
  {
    icon: "\u{1F4F1}",
    title: "Smart Living",
    description:
      "Control lighting, temperature, and access with our integrated smart home system and mobile app.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: "\u2728",
    title: "Weekly Housekeeping",
    description:
      "Professional cleaning service included. Fresh linens, spotless spaces, every week \u2014 no extra charge.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: "\u{1F3CA}",
    title: "World-Class Amenities",
    description:
      "Infinity pool, co-working spaces, 24/7 gym, rooftop lounge, and private cinema \u2014 all at your doorstep.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: "\u{1F4CB}",
    title: "Flexible Terms",
    description:
      "No long-term commitment required. Choose monthly, quarterly, or yearly leases that suit your lifestyle.",
    gradient: "from-[#F6D365]/10 to-[#FDA085]/10",
  },
  {
    icon: "\u{1F4B0}",
    title: "All-Inclusive Pricing",
    description:
      "One transparent price covers WiFi, utilities, maintenance, and building amenities. Zero hidden fees.",
    gradient: "from-rose-500/10 to-orange-500/10",
  },
];

const LOCATIONS = [
  {
    name: "Elysian SCBD",
    area: "Sudirman Central Business District",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    distances: [
      { place: "Menteng Park", time: "2 min walk" },
      { place: "Grand Indonesia", time: "10 min drive" },
      { place: "International Schools", time: "5 min drive" },
    ],
    units: "28 Units Available",
  },
  {
    name: "Elysian Kemang",
    area: "South Jakarta\u2019s Lifestyle Hub",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80",
    distances: [
      { place: "Kemang Village", time: "3 min walk" },
      { place: "Lippo Mall Kemang", time: "5 min drive" },
      { place: "TB Simatupang", time: "15 min drive" },
    ],
    units: "35 Units Available",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Moving into Elysian SCBD was the best decision I made. The all-inclusive pricing means I never worry about hidden costs, and the smart home features are incredible. It truly feels like a 5-star hotel I can call home.",
    name: "Sarah Chen",
    role: "VP of Marketing, TechCorp",
    avatar: "SC",
  },
  {
    quote:
      "As an expat, finding quality housing in Jakarta was stressful until I discovered Elysian. The flexible terms, furnished suites, and concierge service made my transition seamless. I\u2019ve been here 18 months and love every day.",
    name: "James Whitfield",
    role: "Regional Director, Deloitte",
    avatar: "JW",
  },
  {
    quote:
      "The Penthouse Collection exceeded all expectations. The panoramic views from the private terrace are breathtaking, and the weekly housekeeping is a lifesaver. Elysian has redefined what luxury living means in Jakarta.",
    name: "Dian Pratama",
    role: "Founder & CEO, Nextera Ventures",
    avatar: "DP",
  },
];

interface PricingTier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  popular: boolean;
  features: { name: string; included: boolean }[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Studio Lux",
    monthlyPrice: "Rp 15M",
    yearlyPrice: "Rp 12M",
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

const FAQS = [
  {
    question: "What\u2019s included in the monthly price?",
    answer:
      "Everything. Your monthly rate covers the fully furnished suite, high-speed WiFi, utilities (electricity, water, gas), weekly housekeeping, building maintenance, and full access to all amenities including the pool, gym, co-working space, and rooftop lounge. There are zero hidden fees or surprise charges.",
  },
  {
    question: "What is the minimum stay duration?",
    answer:
      "Our minimum stay is 1 month. We offer flexible lease terms \u2014 monthly, quarterly (5% savings), semi-annual (10% savings), and annual (20% savings). There\u2019s no long-term commitment required, and you can extend or upgrade your lease at any time.",
  },
  {
    question: "Are pets allowed in Elysian Suites?",
    answer:
      "Yes! We\u2019re a pet-friendly community. Small to medium dogs and cats are welcome in all our locations. There\u2019s a one-time pet deposit of Rp 5M (refundable) and we even have a pet grooming station and dog park at our SCBD location.",
  },
  {
    question: "How can I schedule a viewing?",
    answer:
      "You can book a viewing through our website, WhatsApp (+62 812-3456-7890), or by calling our leasing office. We offer in-person tours daily from 9 AM to 7 PM, as well as virtual 3D tours for those who can\u2019t visit in person. Most viewings can be scheduled within 24 hours.",
  },
  {
    question: "How quickly can I move in?",
    answer:
      "As fast as 24 hours! Once your application is approved and the deposit is received, you can move in the very next day. All suites come fully furnished and stocked with essentials \u2014 just bring your suitcase. Our concierge team will help with your transition.",
  },
  {
    question: "Do you offer corporate rates or bulk bookings?",
    answer:
      "Absolutely. We work with 50+ companies across Jakarta for executive housing. Corporate packages include discounted rates (up to 30% off), dedicated account management, flexible booking for multiple units, and customized billing. Contact our corporate team for a tailored proposal.",
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
      { label: "Investor Relations", href: "#" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Elysian SCBD", href: "#locations" },
      { label: "Elysian Menteng", href: "#locations" },
      { label: "Elysian Kemang", href: "#locations" },
      { label: "Coming Soon: Alam Sutera", href: "#" },
      { label: "Coming Soon: BSD City", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "TikTok", href: "#" },
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

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  /* --- State --- */
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  /* --- Scroll listener --- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setStickyVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --- Testimonial auto-rotate --- */
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
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
            {/* Logo */}
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

            {/* Desktop links */}
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
                href="#cta"
                className="btn-gradient rounded-full px-7 py-2.5 text-sm font-semibold"
              >
                Book a Tour
              </a>
            </div>

            {/* Mobile hamburger */}
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

        {/* Mobile menu */}
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
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gradient mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a2e] via-[#2a1a6b] to-[#667EEA]" />

        {/* Floating ambient shapes (CSS only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#667EEA]/30 to-[#764BA2]/20 blur-3xl" />
          <div className="animate-float-delayed absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-3xl" />
          <div className="animate-float-slow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/10 blur-3xl" />
          <div className="animate-float absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-[#F6D365]/15 to-[#FDA085]/10 blur-2xl" />

          {/* Geometric shapes with CSS spin */}
          <div className="absolute top-20 right-[20%] h-16 w-16 rounded-2xl border-2 border-white/10 animate-spin-very-slow" />
          <div className="absolute bottom-40 left-[15%] h-12 w-12 rounded-full border-2 border-white/10 animate-spin-reverse-slow" />
          <div className="absolute top-1/2 right-[10%] h-20 w-20 rounded-3xl border border-white/5 bg-white/5 animate-spin-very-slow" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:gap-16 lg:px-12">
          {/* Left: Text */}
          <div className="flex-1 pt-24 text-center lg:pt-0 lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Now Open in 3 Prime Locations
            </span>

            <h1 className="font-heading text-5xl font-extrabold leading-[1.1] text-white md:text-6xl lg:text-7xl">
              Live Above
              <br />
              <span className="bg-gradient-to-r from-[#F6D365] to-[#FDA085] bg-clip-text text-transparent">
                the Ordinary
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-xl">
              Fully furnished luxury suites in Jakarta&apos;s prime locations.
              Move in tomorrow.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
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
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 lg:justify-start">
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
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="mt-12 flex-1 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#667EEA]/30 to-[#764BA2]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80"
                  alt="Luxury apartment interior with modern furnishing"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Price badge */}
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md border border-white/10">
                  <p className="text-xs text-white/70">Starting from</p>
                  <p className="text-2xl font-bold text-white">
                    Rp 15M
                    <span className="text-sm font-normal text-white/60">/month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  SOCIAL PROOF STATS                                           */}
      {/* ============================================================ */}
      <section className="bg-[#F8F9FF] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3 px-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="gradient-text font-heading text-4xl font-extrabold md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-[#6C7A8D]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURED SUITES                                              */}
      {/* ============================================================ */}
      <section id="suites" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Our Suites
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Find Your Perfect <span className="gradient-text">Space</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              From cozy studios to expansive penthouses, every suite is
              thoughtfully designed for modern living.
            </p>
          </div>

          {/* Suite cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SUITES.map((suite) => (
              <div
                key={suite.name}
                className="card-hover group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg"
                    style={{ background: suite.badgeGradient }}
                  >
                    {suite.badge}
                  </div>
                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                    <span className="font-heading text-xl font-extrabold text-[#1A1A2E]">
                      {suite.price}
                    </span>
                    <span className="text-sm text-[#6C7A8D]">/mo</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold text-[#1A1A2E]">
                    {suite.name}
                  </h3>

                  {/* Specs row */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {suite.specs.map((spec) => (
                      <span
                        key={spec.label}
                        className="flex items-center gap-1.5 rounded-full bg-[#F8F9FF] px-3 py-1.5 text-xs font-medium text-[#6C7A8D]"
                      >
                        <span>{spec.icon}</span>
                        {spec.label}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5">
                    {suite.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#6C7A8D]">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#667EEA]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#cta"
                    className="btn-gradient mt-7 block w-full rounded-xl py-3.5 text-center text-sm font-semibold"
                  >
                    Schedule Viewing
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BENEFITS / WHY ELYSIAN                                       */}
      {/* ============================================================ */}
      <section id="benefits" className="bg-[#F8F9FF] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Why Elysian
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Everything You Need,{" "}
              <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              We&apos;ve thought of everything so you can focus on what matters
              most &mdash; living well.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card-hover rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient}`}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1A1A2E]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6C7A8D]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LOCATIONS                                                    */}
      {/* ============================================================ */}
      <section id="locations" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Locations
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Prime Spots,{" "}
              <span className="gradient-text">Premium Living</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              Strategically located in Jakarta&apos;s most sought-after
              neighborhoods. Everything you need is steps away.
            </p>
          </div>

          {/* Location cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((location) => (
              <div
                key={location.name}
                className="card-hover group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
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
                      <li key={d.place} className="flex items-center justify-between text-sm">
                        <span className="text-[#1A1A2E]">{d.place}</span>
                        <span className="rounded-full bg-[#F8F9FF] px-3 py-1 text-xs font-medium text-[#667EEA]">
                          {d.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className="mt-6 block w-full rounded-xl border-2 border-[#667EEA]/20 py-3 text-center text-sm font-semibold text-[#667EEA] transition-all duration-300 hover:border-[#667EEA] hover:bg-[#667EEA] hover:text-white hover:shadow-lg hover:shadow-[#667EEA]/20"
                  >
                    Explore {location.name.split(" ")[1]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section className="bg-[#F8F9FF] py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Testimonials
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Loved by <span className="gradient-text">Residents</span>
            </h2>
          </div>

          {/* Testimonial card (simple crossfade via key + CSS transition) */}
          <div className="relative">
            <div
              key={currentTestimonial}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:p-12 animate-fade-in"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">&#9733;</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed text-[#1A1A2E] md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
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

            {/* Dots */}
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING TABLE                                                */}
      {/* ============================================================ */}
      <section id="pricing" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              Pricing
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6C7A8D]">
              All-inclusive rates with zero hidden fees. Choose the plan that
              fits your lifestyle.
            </p>

            {/* Toggle */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold transition-colors ${!yearly ? "text-[#1A1A2E]" : "text-[#6C7A8D]"}`}>
                Monthly
              </span>
              <button
                onClick={() => setYearly(!yearly)}
                className={`relative h-8 w-16 rounded-full transition-all duration-300 ${
                  yearly
                    ? "bg-gradient-to-r from-[#667EEA] to-[#764BA2]"
                    : "bg-gray-300"
                }`}
                aria-label="Toggle yearly pricing"
              >
                <span
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    yearly ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-semibold transition-colors ${yearly ? "text-[#1A1A2E]" : "text-[#6C7A8D]"}`}>
                Yearly
              </span>
              {yearly && (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                  tier.popular
                    ? "lg:scale-105 border-[#667EEA] shadow-2xl shadow-[#667EEA]/15"
                    : "border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-200"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] px-4 py-2.5 text-center text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}

                <div className="bg-white p-8">
                  <h3 className="font-heading text-2xl font-bold text-[#1A1A2E]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#6C7A8D]">{tier.description}</p>

                  {/* Price */}
                  <div className="mt-6">
                    <span className="font-heading text-5xl font-extrabold text-[#1A1A2E]">
                      {yearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-lg text-[#6C7A8D]">/mo</span>
                    {yearly && (
                      <p className="mt-1 text-sm text-[#6C7A8D]">
                        <span className="line-through">{tier.monthlyPrice}/mo</span>{" "}
                        billed annually
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href="#cta"
                    className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                      tier.popular
                        ? "btn-gradient"
                        : "border-2 border-[#667EEA]/20 text-[#667EEA] hover:border-[#667EEA] hover:bg-[#667EEA] hover:text-white"
                    }`}
                  >
                    Get Started
                  </a>

                  {/* Feature list */}
                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                          <CheckIcon className="h-5 w-5 shrink-0 text-[#667EEA]" />
                        ) : (
                          <CrossIcon className="h-5 w-5 shrink-0 text-gray-300" />
                        )}
                        <span className={feature.included ? "text-[#1A1A2E]" : "text-gray-400"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                          */}
      {/* ============================================================ */}
      <section id="faq" className="bg-[#F8F9FF] py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#667EEA]/10 px-4 py-1.5 text-sm font-semibold text-[#667EEA]">
              FAQ
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-[#1A1A2E] md:text-5xl">
              Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#6C7A8D]">
              Everything you need to know about living at Elysian Suites.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#667EEA]/30 bg-white shadow-lg shadow-[#667EEA]/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span
                    className={`pr-4 font-heading text-lg font-semibold transition-colors ${
                      openFaq === index ? "text-[#667EEA]" : "text-[#1A1A2E]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      openFaq === index
                        ? "bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white"
                        : "bg-[#F8F9FF] text-[#6C7A8D]"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer panel (CSS transition for max-height) */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                    <p className="text-base leading-relaxed text-[#6C7A8D]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section id="cta" className="relative overflow-hidden py-28 lg:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#667EEA] via-[#6B5CE7] to-[#764BA2]" />

        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="animate-float-delayed absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5" />
          <div className="animate-float-slow absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Ready to Elevate
            <br />
            Your Living?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Join 2,500+ residents who have already discovered Jakarta&apos;s
            finest serviced apartments. Your dream home awaits.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-full bg-white px-10 py-4 text-base font-bold text-[#667EEA] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Your Tour Today
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Urgency */}
          <div className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
              </span>
              Only 12 units remaining at launch price
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="bg-[#0F1629] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          {/* Top: Logo + Columns */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#667EEA] to-[#764BA2] shadow-lg shadow-[#667EEA]/25">
                  <span className="text-lg font-bold text-white">E</span>
                </div>
                <span className="font-heading text-xl font-bold">Elysian Suites</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Jakarta&apos;s premier serviced apartment brand. Live above the
                ordinary.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/50">
                <p>+62 812-3456-7890</p>
                <p>hello@elysiansuites.id</p>
              </div>
            </div>

            {/* Link columns */}
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

          {/* Divider */}
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
            href="#cta"
            className="btn-gradient shrink-0 rounded-full px-6 py-3 text-sm font-bold"
          >
            Book a Tour
          </a>
        </div>
      </div>
    </>
  );
}
