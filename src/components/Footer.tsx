import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111] text-white mt-12 relative">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: Practice info */}
          <div className="max-w-md">
            <div className="mb-3 text-sm tracking-wide uppercase text-white/80">Aletheia Integrative</div>
            <div className="space-y-2 text-sm text-white/80">
              <div>Phone (appointments): <a href="tel:531-333-2037" className="underline hover:text-white">531-333-2037</a></div>
              <div>Address: 5445 Red Rock Ln, Suite 300, Lincoln, NE 68516</div>
            </div>
          </div>

          {/* Right block: stars + links */}
          <div className="flex-1">
            <div className="flex items-center gap-6 justify-start md:justify-center">
              {/* Vertical divider */}
              <span className="hidden md:inline-block h-12 w-px bg-white/30" />
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="h-4 w-4">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              {/* Links row */}
              <nav className="flex items-center gap-8 text-sm font-medium tracking-wide text-white/90">
                <Link to="/your-privacy" className="hover:text-white">Privacy</Link>
                <Link to="/our-terms" className="hover:text-white">Terms & Conditions</Link>
                <Link to="/accessibility-statement" className="hover:text-white">Accessibility</Link>
                <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="bg-[#0b0b0b]">
        <div className="container py-4">
          <div className="text-center text-xs text-white/60">Medical Websites Powered by TEBRA</div>
          <div className="text-center text-xs text-white/60 mt-1"> {year} Aletheia Integrative</div>
        </div>
      </div>

      {/* Floating icons (visual parity placeholders) */}
      <button aria-label="Accessibility" className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 bg-[#1f6cff] text-white shadow-lg fixed left-4 bottom-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2a2 2 0 110 4 2 2 0 010-4zm8 7h-5v13h-2V9H4V7h16v2z"/></svg>
      </button>
      <button aria-label="Chat" className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 bg-[#2563eb] text-white shadow-lg fixed right-4 bottom-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M2 3h20v14H6l-4 4V3z"/></svg>
      </button>
    </footer>
  );
}
