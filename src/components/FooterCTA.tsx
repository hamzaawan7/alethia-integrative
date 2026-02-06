import { Link } from 'react-router-dom';

export default function FooterCTA() {
  return (
    <section className="py-16 bg-[rgb(29,46,76)]">
      <div className="container max-w-[900px] px-6 text-center">
        <h2 className="text-white text-[34px] md:text-[42px] leading-tight font-semibold">
          You've been looking for this.
        </h2>
        <p className="mt-6 text-white/90 text-[16px] md:text-[17px] leading-relaxed max-w-[700px] mx-auto">
          If you're reading this far, something resonated. Let's talk. Schedule a quick call with our team, or pick up the phone whenever you're ready.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200"
          >
            Let's Talk
          </Link>
          <a
            href="tel:531-333-2037"
            className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold border-2 border-white hover:bg-white/10 transition-colors duration-200"
          >
            Call: 531-333-2037
          </a>
        </div>
        <p className="mt-6 text-white/70 text-[14px]">
          We're here Monday through Thursday 8:30am to 4:30pm and Friday 9am to 12pm.
        </p>
        <p className="mt-3 text-white/60 text-[13px] italic">
          This is a real conversation, not a sales pitch. If we're not the right fit, we'll tell you.
        </p>
      </div>
    </section>
  );
}
