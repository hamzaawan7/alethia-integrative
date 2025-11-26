import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// Services dropdown items - exactly matching real template
const servicesItems = [
  { label: "PRIMARY CARE", href: "/service/primary-care" },
  { label: "THERMOGRAPHY", href: "/service/thermography" },
  { label: "WOUND CARE", href: "/service/wound-care" },
  { label: "HORMONE BALANCE THERAPY", href: "/service/hormone-balance-therapy" },
  { label: "VASECTOMIES", href: "/service/vasectomies" },
  { label: "", href: "" }, // empty cell
  { label: "VITAMINS AND SUPPLEMENTS", href: "/service/vitamins-and-supplements" },
  { label: "WEIGHT LOSS", href: "/service/weight-loss" },
  { label: "", href: "" }, // empty cell
  { label: "HYPERBARIC OXYGEN THERAPY", href: "/service/hyperbaric-oxygen-therapy" },
  { label: "LAB SERVICES", href: "/service/lab-services" },
  { label: "", href: "" }, // empty cell
  { label: "RED LIGHT THERAPY", href: "/service/red-light-therapy" },
  { label: "AUTOIMMUNE DISEASES", href: "/service/autoimmune-diseases" },
  { label: "", href: "" }, // empty cell
  { label: "INFUSION THERAPY", href: "/service/infusion-therapy" },
  { label: "ALETHEIA CELL THERAPY", href: "/service/aletheia-cell-therapy" },
  { label: "", href: "" }, // empty cell
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkClass = "menu-font px-5 py-5 text-[11px] tracking-[0.15em] uppercase font-semibold text-white hover:text-accent transition-colors";

  return (
    <header className="bg-brand text-white fixed top-0 left-0 right-0 z-[100000]">
      <div className="flex items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="shrink-0 py-2">
          <img
            src="https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Aletheia-Integrative-white-orange-LOGO-wide-1-1693232568127.png"
            alt="Aletheia Integrative"
            className="h-10 lg:h-12 w-auto"
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 hover:bg-white/10"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <nav className="flex items-center">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            
            {/* About with dropdown */}
            <div className="relative group">
              <NavLink to="/about" className={linkClass}>About</NavLink>
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg min-w-[200px] z-50">
                <Link 
                  to="/providers" 
                  className="block px-6 py-4 text-[11px] tracking-[0.15em] uppercase font-semibold text-accent hover:bg-gray-50 border-l-2 border-transparent hover:border-accent"
                >
                  MEET THE PROVIDER
                </Link>
              </div>
            </div>
            
            {/* Services with dropdown */}
            <div className="relative group">
              <NavLink to="/services" className={linkClass}>Services</NavLink>
              {/* Dropdown - 3 column grid */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg z-50" style={{ width: '700px' }}>
                <div className="grid grid-cols-3">
                  {servicesItems.map((item, idx) => (
                    item.label ? (
                      <Link 
                        key={idx}
                        to={item.href} 
                        className="block px-6 py-4 text-[11px] tracking-[0.1em] uppercase font-semibold text-accent hover:bg-gray-50 border-l-2 border-transparent hover:border-accent whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div key={idx} className="px-6 py-4"></div>
                    )
                  ))}
                </div>
              </div>
            </div>
            
            <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <a href="https://aletheiawellness.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>Supplements</a>
            <NavLink to="/contact-us" className={linkClass}>Contact</NavLink>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 ml-4">
            <a 
              href="tel:531-333-2037" 
              className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase font-semibold border border-white text-white hover:bg-white/10"
            >
              531-333-2037
            </a>
            <Link 
              to="/book-online" 
              className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase font-semibold bg-[#111] text-white hover:bg-black"
            >
              Book Online
            </Link>
            <a 
              href="https://patientportal.kareo.com/aletheia-integrative" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[11px] tracking-[0.1em] uppercase font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: '#C75A33' }}
            >
              Patient Portal
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileOpen ? "block" : "hidden"} bg-brand border-t border-white/20`}>
        <nav className="py-4 px-4">
          <NavLink to="/" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/providers" className="block py-3 pl-4 text-xs uppercase tracking-wider text-white/80" onClick={() => setMobileOpen(false)}>Meet the Provider</NavLink>
          <NavLink to="/services" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Services</NavLink>
          {servicesItems.filter(i => i.label).map((item, idx) => (
            <NavLink key={idx} to={item.href} className="block py-2 pl-4 text-xs uppercase tracking-wider text-white/80" onClick={() => setMobileOpen(false)}>{item.label}</NavLink>
          ))}
          <NavLink to="/testimonials" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Testimonials</NavLink>
          <NavLink to="/blog" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Blog</NavLink>
          <a href="https://aletheiawellness.com/" target="_blank" rel="noopener noreferrer" className="block py-3 text-sm uppercase tracking-wider text-white">Supplements</a>
          <NavLink to="/contact-us" className="block py-3 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Contact</NavLink>
          <div className="mt-4 space-y-2">
            <a href="tel:531-333-2037" className="block py-2 text-sm uppercase tracking-wider text-white">531-333-2037</a>
            <NavLink to="/book-online" className="block py-2 text-sm uppercase tracking-wider text-white" onClick={() => setMobileOpen(false)}>Book Online</NavLink>
            <a href="https://patientportal.kareo.com/aletheia-integrative" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm uppercase tracking-wider text-white">Patient Portal</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
