import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const linkClass = "menu-font px-4 py-5 text-[11px] tracking-[0.15em] uppercase font-[900] text-white hover:text-[#C75A33] transition-colors";

  // Prevent background (page) scrolling when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlTouchAction = html.style.touchAction as string;
    const prevBodyTouchAction = body.style.touchAction as string;
    if (mobileOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      // Disallow horizontal gestures on the page underneath
      html.style.touchAction = 'none';
      body.style.touchAction = 'none';
    }
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.style.touchAction = prevHtmlTouchAction || '';
      body.style.touchAction = prevBodyTouchAction || '';
    };
  }, [mobileOpen]);

  return (
    <header className="bg-brand text-white fixed top-0 left-0 right-0 z-[900]">
      <div className="h-[103px] flex flex-nowrap items-center justify-between px-2 lg:px-4 overflow-visible">
        {/* Logo */}
        <Link to="/" className="shrink-0 py-1">
          <img
            src="https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Aletheia-Integrative-white-orange-LOGO-wide-1-1693232568127.png"
            alt="Aletheia Integrative"
            className="h-[64px] lg:h-[72px] w-auto"
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
          <nav className="flex items-center whitespace-nowrap">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            
            {/* About with dropdown */}
            <div className="relative group">
              <NavLink to="/about" className={linkClass}>About</NavLink>
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg min-w-[300px] z-50">
                <Link 
                  to="/providers" 
                  className="block px-10 py-6 text-[13px] tracking-[0.2em] uppercase font-semibold text-[#C75A33] hover:bg-gray-50"
                >
                  MEET THE PROVIDER
                </Link>
              </div>
            </div>
            
            {/* Services with dropdown */}
            <div className="relative group">
              <NavLink to="/services" className={linkClass}>Services</NavLink>
              {/* Dropdown - 3 column grid */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg z-50" style={{ width: '760px' }}>
                <div className="relative grid grid-cols-3 pl-6 pr-6 gap-x-10">
                  {/* vertical separators */}
                  <div className="absolute top-4 bottom-4 left-1/3 w-px bg-gray-200" />
                  <div className="absolute top-4 bottom-4 left-2/3 w-px bg-gray-200" />
                  {servicesItems.map((item, idx) => (
                    item.label ? (
                      <Link 
                        key={idx}
                        to={item.href} 
                        className={`block py-6 text-left text-[11px] leading-6 tracking-[0.15em] uppercase font-semibold text-[#C75A33] hover:bg-gray-50 whitespace-nowrap ${idx%3===0 ? 'pl-2 pr-14' : ''} ${idx%3===1 ? 'pl-8 pr-12' : ''} ${idx%3===2 ? 'pl-8 pr-4' : ''}`}
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
          <div className="flex items-center gap-2 ml-3 flex-shrink-0 whitespace-nowrap">
            <a 
              href="tel:531-333-2037" 
              className="inline-flex items-center justify-center h-[45px] min-w-[141px] text-center px-5 text-[13px] tracking-[0.1em] uppercase font-semibold border-2 border-white text-white hover:bg-[#C75A33]"
            >
              531-333-2037
            </a>
            <Link 
              to="/book-online" 
              className="inline-flex items-center justify-center h-[45px] min-w-[141px] text-center px-5 text-[13px] tracking-[0.1em] uppercase font-semibold bg-[#111] text-white hover:bg-brand"
            >
              Book Online
            </Link>
            <a 
              href="https://aletheia.md-hq.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[45px] min-w-[141px] text-center px-5 text-[13px] tracking-[0.1em] uppercase font-semibold text-white hover:bg-brand"
              style={{ backgroundColor: '#C75A33' }}
            >
              Patient Portal
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"}`}
        style={{
          position: 'fixed',
          top: 103, // below header height
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 901,
          backgroundColor: 'rgb(38,69,123)',
          width: '100vw',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',
          overscrollBehavior: 'contain'
        }}
      >
        <nav className="py-4 px-4 pb-8">
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
            <NavLink
              to="/book-online"
              className="block py-2 text-sm uppercase tracking-wider text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book Online
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block py-2 text-sm uppercase tracking-wider text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </NavLink>
            <a
              href="https://aletheia.md-hq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm uppercase tracking-wider text-white"
            >
              Patient Portal (Login)
            </a>
          </div>
          {/* Phone as a regular last item (non-sticky) to avoid overlay issues */}
          <div className="mt-6">
            <a href="tel:531-333-2037" className="block py-2 text-sm uppercase tracking-wider text-white text-center border border-white/30">
              531-333-2037
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
