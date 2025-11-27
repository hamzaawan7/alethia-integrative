import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SectionDivider() {
  return <hr className="w-20 h-[2px] bg-[rgb(199,90,51)] border-0" />;
}

export default function Home() {
  const slides = [
    'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_185411450.jpeg',
    'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/AdobeStock_168081720.jpeg',
  ];
  const [active, setActive] = useState(0);
  const servicesHome = [
    { label: 'Primary Care', href: '/service/primary-care', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665849.jpg' },
    { label: 'Thermography', href: '/service/thermography', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2807353.png' },
    { label: 'Wound Care', href: '/service/wound-care', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2818559.png' },
    { label: 'Hormone Balance Therapy', href: '/service/hormone-balance-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668320.png' },
    { label: 'Vasectomies', href: '/service/vasectomies', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668321.png' },
    { label: 'Vitamins And Supplements', href: '/service/vitamins-and-supplements', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665851.jpg' },
    { label: 'Weight Loss', href: '/service/weight-loss', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665846.jpeg' },
    { label: 'Hyperbaric Oxygen Therapy', href: '/service/hyperbaric-oxygen-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665857.jpg' },
    { label: 'Lab Services', href: '/service/lab-services', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696961.png' },
    { label: 'Red Light Therapy', href: '/service/red-light-therapy', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696960.png' },
    { label: 'Autoimmune Diseases', href: '/service/autoimmune-diseases', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696962.png' },
    { label: 'Infusion Therapy', href: '/service/infusion-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png' },
    { label: 'Aletheia Cell Therapy', href: '/service/aletheia-cell-therapy', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png' },
  ];

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
        <div className="absolute inset-0 bg-white/55" />
        {/* Text */}
        <div className="relative w-full max-w-[1200px] px-5 md:px-8 py-24 mx-auto">
          <div className="max-w-[760px] bg-white/55 p-8 mt-24 ml-[-26px]">
            <h1 className="text-[72px] leading-[1.05] font-semibold text-[rgb(38,69,123)] tracking-tight">
              Aletheia
              <br /> Integrative
            </h1>
            <p className="mt-4 text-[rgb(38,69,123)] uppercase tracking-[0.2em]">
              Family Practice & Direct Primary Care in Lincoln, NE
            </p>
            <hr className="mt-6 h-[2px] w-150 bg-[rgb(38,69,123)]/45 border-0" />
            <Link
              to="/contact-us"
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
              title: 'Infusion Therapy',
              href: '/service/infusion-therapy',
              img: 'https://sa1s3optim.patientpop.com/768x/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/shutterstock_1921584131.jpg',
            }, {
              title: 'Health Coaching',
              href: '/content/health-coaching',
              img: 'https://sa1s3optim.patientpop.com/768x/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/shutterstock_2168252655.jpg',
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
              At Aletheia Integrative experienced family medicine and direct primary care provider Jaime Dodge, MD, and the team including Tim Miller, APRN
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
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {servicesHome.map((item) => (
              <Link key={item.href} to={item.href} className="block group bg-white shadow-sm hover:shadow transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                    loading={[ '/service/primary-care','/service/thermography','/service/wound-care','/service/hormone-balance-therapy' ].includes(item.href) ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.src.includes('/filters:format(webp)/')) {
                        img.src = img.src.replace('/filters:format(webp)/', '/1024x/filters:format(webp)/');
                      }
                    }}
                  />
                </div>
                <div className="px-4 py-3 text-[rgb(38,69,123)] font-medium">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews teaser (static for now) */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-[32px] text-[rgb(38,69,123)]">Patients Reviews</h2>
          <SectionDivider />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Angela R.',
                text:
                  "Dr. Dodge is amazing! She takes the time to listen and truly cares about her patients. I've never felt so heard by a doctor before.",
              },
              {
                name: 'Michael T.',
                text:
                  'The team at Aletheia Integrative has completely changed my approach to health. Their holistic methods have helped me feel better than I have in years.',
              },
              {
                name: 'Sarah L.',
                text:
                  'I love the direct primary care model. Having 24/7 access to my doctor gives me such peace of mind. Highly recommend!',
              },
            ].map((r, i) => (
              <div key={i} className="bg-white shadow p-6">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic">“{r.text}”</p>
                <p className="mt-3 font-semibold text-[rgb(38,69,123)]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
