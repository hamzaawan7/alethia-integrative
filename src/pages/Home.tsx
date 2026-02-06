import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import LocationLincoln from '../components/LocationLincoln';
import FooterCTA from '../components/FooterCTA';
import { services } from '../data/services';

function ReviewsCarousel() {
  const testimonials = [
    { name: 'Angela R.', quote: "With my recent stent at the hospital, I know if it weren't for the interceding s by Dr Dodge I would not have had the medical attention I needed." },
    { name: 'Chris S.', quote: 'Dr. Dodge and the Alethia family are always there to assist on my health journey.' },
    { name: 'Gina K.', quote: 'Amazing experience for my first appt. Dr Dodge & staff beyond kind & understanding. Helped me in ways many other Dr\'s have not.' },
    { name: 'Rebecca R.', quote: 'I highly recommend this practice if you are looking to improve your health, increase your quality of life, and fire on all cylinders.' },
    { name: 'Isaac M.', quote: 'I have found Dr. Hodge to be a very knowledgeable and professional doctor. He patiently explained issue I was experiencing, answered my questions...' },
    { name: 'Jenn P.', quote: 'Dr Dodge genuinely cares about our family. He takes the time to listen to our beliefs, opinions and needs, and is open to discuss both medical and alternative treatments' },
    { name: 'Kelsey E.', quote: 'They truly listen to what you are going through and how you are feeling, and work TOGETHER with you to find a solution that you are comfortable with.' },
  ];
  const stars = (
    <div className="flex gap-1 text-[#F7C948] my-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const pages = Math.max(1, Math.ceil(testimonials.length / perView));
  const trackTranslate = `translateX(-${page * 100}%)`;
  const canPrev = page > 0;
  const canNext = page < pages - 1;

  return (
    <div className="mt-8 relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ width: `${pages * 100}%`, transform: trackTranslate }}>
          {Array.from({ length: pages }).map((_, p) => (
            <div key={p} className="flex w-full shrink-0" style={{ width: `${100 / pages}%` }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] w-full">
                {Array.from({ length: perView }).map((__, i) => {
                  const idx = p * perView + i;
                  const t = testimonials[idx];
                  return t ? (
                    <article key={`${p}-${i}`} className="bg-[rgba(246,248,252,1)] p-6 min-h-[240px] border-2 border-[rgba(38,69,123,0.35)]">
                      <div className="text-[rgb(38,69,123)] text-[16px] leading-relaxed">"{t.quote}"</div>
                      {stars}
                      <hr className="h-[2px] w-full bg-[rgba(199,90,51,0.46)] border-0" />
                      <div className="mt-3 text-slate-700 text-sm">{t.name}</div>
                    </article>
                  ) : (
                    <div key={`${p}-${i}`} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-black shadow flex items-center justify-center rounded ${
          canPrev ? 'opacity-100' : 'opacity-60'
        }`}
        onClick={() => setPage((p) => (p - 1 + pages) % pages)}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <button
        className={`absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-black shadow flex items-center justify-center rounded ${
          canNext ? 'opacity-100' : 'opacity-60'
        }`}
        onClick={() => setPage((p) => (p + 1) % pages)}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
      </button>
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === page ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const slides = [
    'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_185411450.jpeg',
    'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_168081720.jpeg',
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <main className="home">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-white/45" />
        <div className="relative w-full max-w-[1200px] px-5 md:px-8 py-24 mx-auto">
          <div className="max-w-[760px] bg-white/45 p-8 mt-24 ml-[-26px]">
            <h1 className="text-[72px] leading-[1.05] font-semibold text-[rgb(38,69,123)] tracking-tight">
              Aletheia
              <br /> Integrative
            </h1>
            <p className="mt-4 text-[rgb(38,69,123)] uppercase tracking-[0.2em]">
              Family Practice & Direct Primary Care in Lincoln, NE
            </p>
            <hr className="mt-6 h-[2px] w-150 bg-[rgb(38,69,123)]/45 border-0" />
            <Link
              to="/book-online"
              className="mt-6 inline-block px-5 py-3 text-white text-sm font-semibold uppercase tracking-wider"
              style={{ backgroundColor: 'rgb(199,90,51)' }}
            >
              get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Three circular feature tiles */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[{
              title: 'Integrative Medicine',
              href: '/service/primary-care',
              img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/shutterstock_1250158696%20(1).jpg',
            }, {
              title: 'Regenerative Medicine',
              href: '/service/regenerative-restoration',
              img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_168081720.jpeg',
            }, {
              title: 'Hormone Optimization Therapy',
              href: '/service/hormone-balance-vitality',
              img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/shutterstock_2111443934.jpg',
            }].map((item, idx) => (
              <Link key={idx} to={item.href} className="group">
                <div className="mx-auto w-60 h-60 rounded-full overflow-hidden bg-white shadow">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="mt-4">
                  <span className="inline-block px-6 py-3 uppercase tracking-[0.2em] text-[12px] text-[rgb(38,69,123)] transition-colors duration-200 group-hover:bg-[#C75A33] group-hover:text-white">
                    {item.title} <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="py-14 bg-white">
        <div className="container max-w-[1000px] px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2669001.jpg"
              alt="Office"
              className="w-full md:w-[550px] h-auto md:h-[505px] object-cover shadow"
            />
          </div>
          <div>
            <h2 className="text-[32px] md:text-[40px] leading-tight text-[rgb(38,69,123)] font-semibold">
              When your body holds you back, everything suffers.
            </h2>
            <p className="mt-4 text-[20px] text-[#C75A33] font-semibold">
              We break the barriers between you and the life you're meant to live.
            </p>
            <hr className="mt-4 mb-4 h-[2px] w-full bg-[rgb(38,69,123)]/30 border-0" />
            <p className="text-slate-700 text-[16px] leading-relaxed">
              Aletheia Integrative Medical is an integrative medical practice for people who are done settling for 'normal' and ready for real answers.
            </p>
            <p className="mt-4 text-slate-700 text-[15px] leading-relaxed">
              We're an integrative medical practice in Lincoln, Nebraska offering Direct Primary Care, functional and integrative medicine intensives, hormone optimization, regenerative medicine, IV therapy, and advanced options for high-performing adults who expect more from healthcare.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:531-333-2037" className="px-5 py-2 text-white uppercase tracking-[0.1em] bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200">
                call us
              </a>
              <Link to="/book-online" className="px-5 py-2 text-white uppercase tracking-[0.1em] bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200">
                Set Appointment
              </Link>
            </div>
            <p className="mt-4 text-slate-500 text-[14px]">
              Request a quick call with one of our dedicated team members.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Problem</p>
          </div>
          <h2 className="text-[36px] md:text-[48px] text-[rgb(38,69,123)] leading-[1.1] font-bold">
            You've done everything right.<br className="hidden md:block" /> And you're still stuck.
          </h2>
          <div className="mt-10 space-y-6 text-gray-700 text-[17px] leading-[1.8] max-w-[850px]">
            <p>You're not someone who ignores problems. You've seen the doctors. Done the research. Tried the protocols.</p>
            <p className="text-[rgb(38,69,123)] font-medium text-[19px]">And yet, something's still off.</p>
            <p>Your energy doesn't match your ambition. Your mind feels foggy when you need it sharp. Your recovery doesn't match your output. You're managing symptoms instead of performing at your best. And every provider you've seen either shrugs, hands you a prescription, or tells you your labs are "normal."</p>
            <p className="text-[rgb(38,69,123)] font-medium text-[19px]">You're stuck in the valley. And you know there's higher ground.</p>
            <p>You also know there's a better way. Medicine that looks at the whole person. Care that supports your body's ability to heal from within rather than just masking symptoms. The freedom to make your own healthcare decisions without insurance companies dictating what's covered or allowed.</p>
          </div>
          <div className="mt-10">
            <Link to="/your-journey" className="inline-flex items-center gap-2 px-8 py-4 text-white text-[13px] uppercase tracking-[0.15em] font-bold bg-[#C75A33] hover:bg-[#B3502E] rounded-lg transition-all duration-300 hover:translate-x-1 shadow-lg shadow-[#C75A33]/20">
              Click here to Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1100px] px-6">
          <div className="text-center">
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What Makes Us Different</p>
            <h2 className="mt-4 text-[36px] md:text-[48px] text-[rgb(38,69,123)] leading-[1.1] font-bold">
              Medicine that finally makes sense.
            </h2>
            <p className="mt-6 text-gray-700 text-[17px] leading-[1.8] max-w-[900px] mx-auto">
              You hold yourself to a high bar. You expect the same from your healthcare. At Aletheia Integrative Medical, we believe your body has an innate ability to heal. Our job isn't to override that intelligence with endless prescriptions. It's to remove the obstacles, provide the right support, and let your body do what it's designed to do.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'clock', title: 'Time that respects yours', description: "Your visits aren't rushed. We take the time to actually understand what's happening, because that's where the answers hide." },
              { icon: 'lightbulb', title: 'Answers that make sense', description: "We don't just run labs and hope something shows up. We interpret them in context, explain what's actually happening in your body, and give you a clear path forward." },
              { icon: 'heart', title: 'Care that supports healing from within', description: "We're not here to manage your symptoms forever. We're here to help your body restore balance and function so you can thrive on your own." },
              { icon: 'shield', title: 'Freedom to choose', description: "You decide what goes into your body. We educate, recommend, and partner with you, but you're in control of your own healthcare decisions." },
            ].map((card, idx) => (
              <div key={idx} className="group p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-[rgb(38,69,123)]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[rgb(38,69,123)]/10 flex items-center justify-center mb-5 group-hover:bg-[rgb(38,69,123)] transition-colors duration-300">
                  {card.icon === 'clock' && (
                    <svg className="w-6 h-6 text-[rgb(38,69,123)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )}
                  {card.icon === 'lightbulb' && (
                    <svg className="w-6 h-6 text-[rgb(38,69,123)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  )}
                  {card.icon === 'heart' && (
                    <svg className="w-6 h-6 text-[rgb(38,69,123)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  )}
                  {card.icon === 'shield' && (
                    <svg className="w-6 h-6 text-[rgb(38,69,123)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  )}
                </div>
                <h3 className="text-[18px] font-bold text-[rgb(38,69,123)]">{card.title}</h3>
                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Base Camp Section */}
      <section className="py-20 bg-[rgb(38,69,123)] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
        <div className="container max-w-[1000px] px-6 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">Base Camp - Direct Primary Care</p>
          </div>
          <h2 className="text-[36px] md:text-[48px] text-white leading-[1.1] font-bold">
            Base Camp: A higher standard<br className="hidden md:block" /> of primary care.
          </h2>
          <div className="mt-10 space-y-6 text-white/90 text-[17px] leading-[1.8] max-w-[850px]">
            <p>Most people never make it out of the valley. They're stuck with 10-minute appointments, providers who don't know their name, and a system designed for volume, not outcomes.</p>
            <p className="text-white font-medium">Direct Primary Care gets you to base camp.</p>
            <p>Direct Primary Care (DPC) is membership-based primary care that removes insurance barriers and restores the doctor–patient relationship.</p>
            <p>As a DPC member, you have a physician who actually knows you. You're seen twice a year for comprehensive wellness visits focused on prevention and optimization. When acute issues come up, we're here. You have direct access and a medical home you can rely on.</p>
          </div>
          <div className="mt-10">
            <Link to="/service/primary-care" className="inline-flex items-center gap-2 px-8 py-4 text-white text-[13px] uppercase tracking-[0.15em] font-bold bg-[#C75A33] hover:bg-[#B3502E] rounded-lg transition-all duration-300 hover:translate-x-1 shadow-lg">
              Learn more about DPC membership
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Summit Paths Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Summit Paths</p>
          </div>
          <h2 className="text-[36px] md:text-[48px] text-[rgb(38,69,123)] leading-[1.1] font-bold">
            For those ready to climb higher.
          </h2>
          <div className="mt-10 space-y-6 text-gray-700 text-[17px] leading-[1.8] max-w-[850px]">
            <p>Some people get to base camp and realize they want more. Maybe you've been stuck at the same altitude for too long, managing symptoms that never fully resolve. Maybe you're facing a challenge that requires focused effort. Maybe you want to see how high you can go.</p>
            <p className="text-[rgb(38,69,123)] font-medium text-[19px]">That's when we gear up for an Integrative Medicine Intensive (IMI)—a focused program designed to restore function, resolve what's been stuck, and optimize performance.</p>
            <p>You'll work closely with Dr. Dodge and our provider team. Nutritional consultations are provided by Sara Miller, M.Ed., INHC. Therapies and supplements including IV infusions, hyperbaric oxygen, and regenerative treatments are woven in based on what your body needs to restore balance and heal from within.</p>
          </div>
          <div className="mt-10">
            <Link to="/service/integrative-medicine-intensive" className="inline-flex items-center gap-2 px-8 py-4 text-white text-[13px] uppercase tracking-[0.15em] font-bold bg-[rgb(38,69,123)] hover:bg-[#1F3761] rounded-lg transition-all duration-300 hover:translate-x-1 shadow-lg shadow-[rgb(38,69,123)]/20">
              Learn more about our Integrative Medicine Intensives
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1000px] px-6">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold">Who This Is For</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-semibold">
            You already know if this is you.
          </h2>
          <p className="mt-6 text-slate-700 text-[16px]">Aletheia Integrative Medical works best with people who:</p>
          <div className="mt-8 space-y-6">
            {[
              { title: 'Take ownership.', description: "You're not looking for someone to rescue you. You want a partner who brings expertise and takes this as seriously as you do." },
              { title: 'Refuse to settle.', description: "You've felt what peak performance feels like. You're not willing to accept the slow slide away from that." },
              { title: 'Think long-term.', description: "You understand that real change takes commitment. Whether that's the steady climb of DPC or the focused push of an IMI, you're willing to do the work." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(38,69,123)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">{item.title}</h3>
                  <p className="mt-1 text-slate-700 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600 text-[15px] italic">
            We're probably not the right fit if you prefer insurance-based care, want to be passive, or are looking for a magic pill.
          </p>
          <div className="mt-8">
            <Link to="/lets-talk" className="inline-block px-6 py-3 text-white text-[13px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200">
              See if we're the right fit →
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Dodge Section */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold text-center">About Dr. Dodge</p>
          <h2 className="mt-3 text-center text-[32px] text-[rgb(38,69,123)]">A physician who gets it.</h2>
          <div className="mt-8">
            <div className="mx-auto max-w-[1000px] shadow-[0_10px_18px_rgba(0,0,0,0.18)]">
              <div className="grid grid-cols-1 md:grid-cols-[541px_1fr]">
                <Link to="/providers" className="block">
                  <img src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg" alt="Jaime Dodge, MD" className="w-full md:w-[541px] md:h-[414px] object-cover object-left" loading="lazy" />
                </Link>
                <div className="bg-[rgb(29,46,76)] flex items-center justify-center p-8 md:h-[414px]">
                  <div className="text-center">
                    <Link to="/providers" className="block">
                      <h3 className="text-white text-[20px] md:text-[22px]">Jaime K Dodge, MD</h3>
                    </Link>
                    <p className="mt-4 text-white/80 text-[14px] leading-relaxed max-w-[300px] mx-auto">
                      Dr. Jaime Dodge spent 20+ years inside the conventional system. Family practice, hospital medicine, emergency rooms. He's held clinical professorships at three universities. He's deployed with the Army National Guard to Iraq and Afghanistan.
                    </p>
                    <hr className="mt-4 mb-4 h-[2px] w-48 bg-[#C75A33]/60 border-0 mx-auto" />
                    <Link to="/providers" className="inline-block px-6 py-3 text-white uppercase tracking-[0.1em] bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200">
                      Learn more about our team →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-[800px] mx-auto text-center">
            <blockquote className="text-[20px] md:text-[24px] text-[rgb(38,69,123)] italic leading-relaxed">
              "My patients aren't broken. They're stuck in a broken system. Aletheia exists to give them something better."
            </blockquote>
            <p className="mt-4 text-slate-600">— Dr. Jaime Dodge</p>
          </div>
        </div>
      </section>

      {/* Patients Reviews carousel */}
      <section className="py-12 bg-[rgb(29,46,76)]">
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-white text-[30px] md:text-[34px]">Patients Reviews</h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Services */}
      <section className="pt-20 pb-20" style={{ minHeight: 118, backgroundColor: '#D2D8E9', backgroundImage: "radial-gradient(1200px 600px at -200px 0px, rgba(38,69,123,0.06), rgba(255,255,255,0) 60%), url('https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Artboard%201m-1693234887334.png')", backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'left top, center', backgroundSize: 'auto, 700px', backgroundAttachment: 'scroll, fixed' }}>
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-[32px] text-[rgb(38,69,123)]">Services</h2>
          <ServicesGrid items={services} />
        </div>
      </section>

      {/* Telemedicine note */}
      <section className="py-10 bg-white">
        <div className="container max-w-[1100px] px-6 text-center">
          <p className="text-slate-700 text-[16px] leading-relaxed max-w-[700px] mx-auto">
            We work in person with patients from Lincoln, Omaha, and throughout Eastern Nebraska and surrounding states, as well as via telemedicine in 12 additional states.
          </p>
          <div className="mt-6">
            <Link to="/lets-talk" className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200">
              LET'S TALK
            </Link>
          </div>
        </div>
      </section>

      <LocationLincoln />
      <FooterCTA />
    </main>
  );
}
