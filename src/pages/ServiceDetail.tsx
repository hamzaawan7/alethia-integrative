import { useParams, Navigate } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';
import ServicesGrid from '../components/ServicesGrid';
import { services as allServices } from '../data/services';
import PrimaryCareContent from '../service-content/PrimaryCare';
import InfusionTherapyContent from '../service-content/InfusionTherapy';
import HormoneBalanceTherapyContent from '../service-content/HormoneBalanceTherapy';
import LabServicesContent from '../service-content/LabServices';
import WeightLossContent from '../service-content/WeightLoss';
import RedLightTherapyContent from '../service-content/RedLightTherapy';
import VitaminsAndSupplementsContent from '../service-content/VitaminsAndSupplements';

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
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2807353.png',
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
    img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665851.jpg',
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
      return <PrimaryCareContent />;
    }
    if (slug === 'infusion-therapy') {
      return <InfusionTherapyContent />;
    }
    if (slug === 'hormone-balance-therapy') {
      return <HormoneBalanceTherapyContent />;
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
      return <VitaminsAndSupplementsContent />;
    }
    if (slug === 'weight-loss') {
      return <WeightLossContent />;
    }
    if (slug === 'lab-services') {
      return <LabServicesContent />;
    }
    if (slug === 'red-light-therapy') {
      return <RedLightTherapyContent />;
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

      <ServiceHero title={svc.title} subtitle="Family Practice & Direct Primary Care located in Lincoln, NE" />

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

      {/* Lab Services wellness block full-width (no card) */}
      {slug === 'lab-services' && (
        <section className="py-10">
          <div className="container max-w-[1100px] px-6">
            <div className="space-y-6">
              <p>
                At Aletheia, we make it our mission to understand our patients' health status and guide them towards their desired
                outcomes. During our wellness exams, we take a personalized approach to determine which tests would be most relevant
                for each patient's health goals or underlying factors contributing to any health concerns.
              </p>
              <p>
                We believe that true health is more than just the absence of disease, it is a holistic approach that encompasses
                the physical, mental, and emotional wellbeing of our patients. Our team of dedicated healthcare professionals is
                committed to providing comprehensive care that addresses all aspects of our patients' health.
              </p>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Our approach to patient wellness includes:</h3>
              <ul className="list-disc pl-6 space-y-4 text-slate-700">
                <li>
                  <strong>Personalized Wellness Exams:</strong> Our team takes the time to understand each patient's unique health
                  status and goals to create a personalized plan that addresses their specific needs.
                </li>
                <li>
                  <strong>Comprehensive Testing:</strong> We utilize the latest technology and diagnostic tools to provide a
                  thorough evaluation of our patients' health status.
                </li>
                <li>
                  <strong>Collaborative Care:</strong> We work closely with other healthcare providers to ensure our patients
                  receive the best possible care.
                </li>
                <li>
                  <strong>Education and Support:</strong> We provide our patients with the information and resources they need to
                  make informed decisions about their health and support them every step of the way.
                </li>
              </ul>
              <p>At Aletheia, we are committed to helping our patients achieve optimal health and wellbeing.</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Services grid */}
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
          <ServicesGrid items={allServices} />
        </div>
      </section>
    </main>
  );
}
