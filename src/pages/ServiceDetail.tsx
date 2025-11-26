import { Link, useParams, Navigate } from 'react-router-dom';

type ServiceInfo = {
  title: string;
  img: string;
};

// Map each template page (aletheia/service/*.html) to a slug, title, and hero image
const SERVICE_MAP: Record<string, ServiceInfo> = {
  'primary-care': {
    title: 'Primary Care',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665849.jpg',
  },
  'thermography': {
    title: 'Thermography',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2807353.png',
  },
  'wound-care': {
    title: 'Wound Care',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2818559.png',
  },
  'hormone-balance-therapy': {
    title: 'Hormone Balance Therapy',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668320.png',
  },
  'vasectomies': {
    title: 'Vasectomies',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668321.png',
  },
  'vitamins-and-supplements': {
    title: 'Vitamins And Supplements',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665851.jpg',
  },
  'weight-loss': {
    title: 'Weight Loss',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665846.jpeg',
  },
  'hyperbaric-oxygen-therapy': {
    title: 'Hyperbaric Oxygen Therapy',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665857.jpg',
  },
  'lab-services': {
    title: 'Lab Services',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696961.png',
  },
  'red-light-therapy': {
    title: 'Red Light Therapy',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696960.png',
  },
  'autoimmune-diseases': {
    title: 'Autoimmune Diseases',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696962.png',
  },
  'infusion-therapy': {
    title: 'Infusion Therapy',
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png',
  },
  'aletheia-cell-therapy': {
    title: 'Aletheia Cell Therapy',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png',
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  if (!slug || !SERVICE_MAP[slug]) return <Navigate to="/services" replace />;
  const svc = SERVICE_MAP[slug];

  const renderContent = () => {
    if (slug === 'primary-care') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>Routine primary care checkups preserve health and address symptoms at their root.</p>
          <p>We blend traditional and functional medicine with labs, exams, and lifestyle review.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>After-hours access</li>
            <li>Discounts on therapies/supplements</li>
            <li>True partnership in your health</li>
          </ul>
          <div className="mt-6 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">What We Offer</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Employee wellness programs</li>
              <li>Comprehensive physical exams</li>
              <li>Functional lab testing</li>
            </ul>
          </div>
          <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold mt-6">Why DPC?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>After‑hours access</strong></li>
            <li><strong>Longer appointments</strong></li>
            <li><strong>Easy scheduling</strong></li>
            <li><strong>Transparent pricing</strong></li>
            <li><strong>Discounts</strong></li>
            <li><strong>Care coordination</strong></li>
          </ul>
          <h2 className="text-[28px] text-[rgb(199,90,51)] font-semibold mt-8">Primary Care Q&A</h2>
          <div className="mt-3 p-6" style={{ background: '#D2D8E9' }}>
            <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is primary care necessary?</h3>
            <p className="mt-2">Absolutely—prevention, early detection, and whole‑body support.</p>
          </div>
        </div>
      );
    }
    if (slug === 'infusion-therapy') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>Medical‑grade IV therapy for rapid absorption and targeted benefits.</p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Popular Infusions</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Immune support (C, Zinc, B‑complex)</li>
              <li>Energy & recovery (B‑12, aminos, electrolytes)</li>
              <li>Hydration therapy</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'hormone-balance-therapy') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>Restore balance to address fatigue, mood, sleep, and metabolic changes.</p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Our Approach</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Comprehensive labs (thyroid, sex hormones, adrenal)</li>
              <li>Personalized plans (lifestyle, supplements, meds when needed)</li>
              <li>Ongoing monitoring</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'hyperbaric-oxygen-therapy') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>HBOT supports tissue healing, recovery, and resilience via pressurized oxygen.</p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Potential Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Wound healing support</li>
              <li>Inflammation reduction</li>
              <li>Performance and cognitive support</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'vitamins-and-supplements') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            Targeted supplementation can correct nutrient gaps and support energy, immunity, cognition, and
            metabolic health. We use high‑quality, clinically backed products.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Personalized Plans</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Review of labs to identify deficiencies</li>
              <li>Evidence‑based dosing and product selection</li>
              <li>Ongoing follow‑up and adjustments</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'weight-loss') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            A root‑cause approach to sustainable weight loss that considers hormones, metabolism, sleep, stress,
            and nutrition—beyond simple calorie counting.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Program Elements</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Comprehensive labs and metabolic assessment</li>
              <li>Nutrition coaching and movement guidance</li>
              <li>Tools and medications when appropriate</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'lab-services') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            We offer standard and advanced functional lab testing to uncover drivers of symptoms and tailor care.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Common Panels</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Thyroid, lipid, glucose/insulin resistance</li>
              <li>Micronutrients, inflammation, gut health</li>
              <li>Hormone and cardiometabolic risk</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'red-light-therapy') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            Red light therapy (photobiomodulation) uses specific wavelengths to support cellular energy, recovery,
            skin health, and mood.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Common Uses</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Muscle recovery and joint comfort</li>
              <li>Skin rejuvenation and wound support</li>
              <li>Energy, mood, and sleep support</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'autoimmune-diseases') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            We address autoimmune conditions with a root‑cause strategy that includes immune regulation, gut health,
            and inflammation reduction.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Our Focus</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Advanced testing and individualized plans</li>
              <li>Nutrition and lifestyle interventions</li>
              <li>Targeted supplements and coordination of care</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'thermography') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            Thermography is a non‑invasive imaging method that measures heat patterns to help identify areas that may
            warrant further clinical evaluation.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>No radiation or compression</li>
              <li>Adjunctive screening insights</li>
              <li>Comfortable, quick sessions</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'vasectomies') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            We provide in‑office vasectomy procedures that are efficient, discreet, and focused on comfort and
            recovery.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">What to Expect</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Consultation, preparation, and clear aftercare guidance</li>
              <li>Minimally invasive technique with local anesthesia</li>
              <li>Follow‑up and support during recovery</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'aletheia-cell-therapy') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            Aletheia Cell Therapy focuses on supporting the body’s regenerative capacity with evidence‑informed
            protocols and careful screening.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Areas of Support</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Joint and soft‑tissue recovery</li>
              <li>Inflammation modulation</li>
              <li>Personalized plans with ongoing evaluation</li>
            </ul>
          </div>
        </div>
      );
    }
    if (slug === 'wound-care') {
      return (
        <div className="text-slate-700 space-y-4 mt-4">
          <p>
            Comprehensive wound care with integrative strategies to promote healing and reduce complications.
          </p>
          <div className="mt-3 p-6" style={{ background: 'rgba(38,69,123,.20)' }}>
            <h3 className="text-[20px] text-[rgb(38,69,123)] font-semibold">Care Approach</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Assessment, cleaning, and dressing strategies</li>
              <li>Infection prevention and monitoring</li>
              <li>Adjunctive therapies to support tissue repair</li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="text-slate-700 mt-4">
        <p>Full content for {svc.title} will be replicated in pure TSX.</p>
      </div>
    );
  };

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">{svc.title}</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care located in Lincoln, NE</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[28px] text-[rgb(38,69,123)] font-semibold">About {svc.title}</h2>
            <hr className="w-20 h-[2px] bg-[rgb(199,90,51)] border-0 mt-2" />
            {renderContent()}
          </div>
        </div>
      </section>

      {/* Related Services grid (same as Services.tsx) */}
      <section
        className="pt-20 pb-20"
        style={{
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
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
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
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block group bg-white shadow-sm hover:shadow transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3 text-[rgb(38,69,123)] font-medium">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
