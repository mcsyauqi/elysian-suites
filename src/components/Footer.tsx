export default function Footer() {
  const columns = [
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

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top: Logo + Columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <span className="font-heading text-xl font-bold">
                Elysian Suites
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Jakarta&apos;s premier serviced apartment brand. Live above the
              ordinary.
            </p>
            {/* Contact */}
            <div className="mt-6 space-y-2 text-sm text-white/50">
              <p>+62 812-3456-7890</p>
              <p>hello@elysiansuites.id</p>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
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
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
