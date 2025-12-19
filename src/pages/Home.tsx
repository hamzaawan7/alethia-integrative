import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import LocationLincoln from '../components/LocationLincoln';
import { services } from '../data/services';

function ReviewsCarousel() {
  const testimonials = [
    { name: 'Angela R.', quote: "With my recent stent at the hospital, I know if it weren't for the interceding s by Dr Dodge I would not have had the medical attention I needed." },
    { name: 'Chris S.', quote: 'Dr. Dodge and the Alethia family are always there to assist on my health journey.' },
    { name: 'Gina K.', quote: 'Amazing experience for my first appt. Dr Dodge & staff beyond kind & understanding. Helped me in ways many other Dr’s have not.' },
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
                      <div className="text-[rgb(38,69,123)] text-[16px] leading-relaxed">“{t.quote}”</div>
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
        {/* Slides */}
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/45" />
        {/* Text */}
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
              href: '/service/aletheia-cell-therapy',
              img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_168081720.jpeg',
            }, {
              title: 'Hormone Optimization Therapy',
              href: '/service/hormone-balance-therapy',
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

      {/* About excerpt */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2669001.jpg"
              alt="Office"
              className="w-full md:w-[550px] h-auto md:h-[505px] object-cover shadow"
            />
          </div>
          <div>
            <h2 className="text-[42px] md:text-[53px] leading-tight text-[rgb(38,69,123)]">
              About Aletheia
              <br />
              Integrative
            </h2>
            <hr className="mt-3 mb-4 h-[2px] w-full bg-[rgb(38,69,123)]/70 border-0" />
            <p className="text-slate-700">
              At Aletheia Integrative experienced family medicine and direct primary care provider Jaime Dodge, MD, and the team
              provide personalized functional medicine to individuals and families in Lincoln, Nebraska, and throughout Lancaster County.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:531-333-2037" className="px-5 py-2 text-white uppercase tracking-[0.1em] bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200">
                call us
              </a>
              <Link to="/book-online" className="px-5 py-2 text-white uppercase tracking-[0.1em] bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200">
                Set Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted partner banner (below About) */}
      <section className="min-h-[253px] bg-[rgb(29,46,76)] w-full flex items-center">
        <div className="w-full flex items-center justify-center">
          <div className="text-center max-w-[760px] m-5 px-6 py-6 md:py-8 bg-[rgba(29,46,76,0.55)]">
            <h2 className="text-white text-[34px] md:text-[50px] leading-tight">
              A trusted partner on your transformational journey
            </h2>
            <hr className="mt-4 h-[2px] w-160 bg-white/70 border-0 mx-auto" />
          </div>
        </div>
      </section>

      {/* Meet Our Provider */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-[32px] text-[rgb(38,69,123)]">Meet Our Provider</h2>
        
          <div className="mt-8">
            <div className="mx-auto max-w-[1000px] shadow-[0_10px_18px_rgba(0,0,0,0.18)]">
              <div className="grid grid-cols-1 md:grid-cols-[541px_1fr]">
                {/* Left: Image fixed 541x414 on md+ */}
                <Link to="/providers" className="block">
                  <img
                    src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg"
                    alt="Jaime Dodge, MD"
                    className="w-full md:w-[541px] md:h-[414px] object-cover object-left"
                    loading="lazy"
                  />
                </Link>
                {/* Right: Blue panel */}
                <div className="bg-[rgb(29,46,76)] flex items-center justify-center p-8 md:h-[414px]">
                  <div className="text-center">
                    <Link to="/providers" className="block">
                      <h3 className="text-white text-[20px] md:text-[22px]">Jaime K Dodge, MD</h3>
                    </Link>
                    <hr className="mt-4 mb-6 h-[2px] w-48 bg-[#C75A33]/60 border-0 mx-auto" />
                    <Link
                      to="/providers"
                      className="inline-block px-6 py-3 text-white uppercase tracking-[0.1em] bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200"
                    >
                      Learn more about Dr. Dodge →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services (full grid from Services page) */}
      <section
        className="pt-20 pb-20"
        style={{
          minHeight: 118,
          backgroundColor: '#D2D8E9',
          backgroundImage:
            "radial-gradient(1200px 600px at -200px 0px, rgba(38,69,123,0.06), rgba(255,255,255,0) 60%), url('https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Artboard%201m-1693234887334.png')",
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'left top, center',
          backgroundSize: 'auto, 700px',
          backgroundAttachment: 'scroll, fixed',
        }}
      >
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-[32px] text-[rgb(38,69,123)]">Services</h2>
          <ServicesGrid items={services} />
        </div>
      </section>

      {/* Stay Connected (below Services) */}
      <section className="py-10 bg-[rgb(29,46,76)]">
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-white tracking-[0.15em] uppercase text-[26px] md:text-[30px]">Stay Connected.</h2>
          <div className="mt-6 flex items-center justify-center gap-8">
            <a href="https://www.facebook.com/aletheiaintegrative" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:opacity-80">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white"><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0 5.37216 0 0 5.37216 0 11.9991 0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714 15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
            </a>
            <a href="https://www.instagram.com/aletheia.integrative/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:opacity-80">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCAaxmsodw6n1fJnFhNAWytQ" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-white hover:opacity-80">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Transformational Wellness Care */}
      <section className="py-0 bg-[rgb(29,46,76)]">
        <div className="container max-w-[1200px] px-0 md:px-6">
          <div className="grid md:grid-cols-2">
            {/* Left image */}
            <div className="min-h-[360px]">
              <img
                src="https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/shutterstock_2111443934.jpg"
                alt="health"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Right content */}
            <div className="flex items-center justify-center p-8 md:p-12">
              <div className="max-w-[760px] text-center">
                <h3 className="text-white text-[34px] md:text-[50px] leading-tight">TRANSFORMATIONAL WELLNESS CARE</h3>
                <div className="text-[rgb(199,90,51)] text-[22px] md:text-[28px] mt-2">Because you deserve the best</div>
                <div className="mt-6 text-white/90 space-y-4 text-[14px] md:text-[15px]">
                  <p>
                    We offer a different approach towards sustainable health and wellness by redefining the doctor and patient
                    relationship. In order to bring back the control of your health care to you and your physician, we leave out the
                    insurance middlemen. For less than the average cost of a cell phone bill, you will have unprecedented, direct
                    access to your doctor on your schedule and tailored to your needs.
                  </p>
                  <p>
                    Integrative medicine combines a variety of disciplines, including holistic, functional and complementary therapies
                    with conventional medicine to achieve optimal health and healing. As a direct primary care practice we can provide
                    longer appointments, frequent access to your doctor, both in person and virtually, and the freedom to choose the
                    best care for you.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/book-online"
                    className="inline-block px-6 py-3 text-white uppercase tracking-[0.1em] bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200"
                  >
                    get started
                  </Link>
                </div>
              </div>
            </div>
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

      {/* Lincoln location block below reviews */}
      <LocationLincoln />
    </main>
  );
}
