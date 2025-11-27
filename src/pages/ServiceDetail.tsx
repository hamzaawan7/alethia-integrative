import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
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
import WoundCareContent from '../service-content/WoundCare';
import VasectomiesContent from '../service-content/Vasectomies';

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
    img: 'https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2670754.jpeg',
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
    img: 'https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665857.jpg',
  },
  'vitamins-and-supplements': {
    title: 'Vitamins And Supplements',
    img: 'https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2794789.png',
  },
  'weight-loss': {
    title: 'Weight Loss',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665846.jpeg',
  },
  'hyperbaric-oxygen-therapy': {
    title: 'Hyperbaric Oxygen Therapy',
    img: 'https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668320.png',
  },
  'lab-services': {
    title: 'Lab Services',
    img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696961.png',
  },
  'red-light-therapy': {
    title: 'Red Light Therapy',
    img: 'https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668321.png',
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

  // Always start each service detail at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

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
        <div className="text-slate-700 mt-4 max-w-[620px] space-y-4">
          <p className="font-semibold">Elevate Healing with the Power of Oxygen</p>
          <p>
            Hyperbaric Oxygen Therapy (HBOT) is a cutting‑edge, non‑invasive treatment that delivers <strong>100% medical‑grade
            oxygen in a pressurized chamber</strong>, allowing your body to absorb oxygen at levels far beyond what’s possible under
            normal conditions. This deep saturation helps <strong>accelerate healing, reduce inflammation, boost immune response, and
            enhance cellular repair</strong>.
          </p>
          <p>
            At Aletheia Integrative in Lincoln, Nebraska, <strong>Jaime K. Dodge, MD</strong> and our experienced team offer HBOT as part of
            our commitment to whole‑body, integrative care. We are proud to be the <strong>only clinic in the Lincoln metro area</strong>
            offering this advanced therapy within a family practice and functional medicine setting.
          </p>
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
    if (slug === 'aletheia-cell-therapy') {
      return (
        <div className="text-slate-700 mt-4 max-w-[620px] space-y-4">
          <p>
            <strong>Aletheia Cell Therapy</strong> utilizes a platelet‑rich plasma solution to promote your body’s natural healing
            process. At Aletheia Integrative in Lincoln, Nebraska, Jaime K Dodge, MD and the team of family practice and direct
            primary care physicians offers Aletheia Cell Therapy, peptide and hormone therapies to treat joint inflammation and
            other systemic issues, like hormone imbalances. Treatment is minimally invasive, presents few risks, and can provide
            near‑instant results. Call Aletheia Integrative today to schedule a Aletheia Cell Therapy appointment or book your visit
            online.
          </p>
          <p>
            Check out our new offering of <strong>LifeWave phototherapy patches</strong>. The science of phototherapy and supports the
            activation of the body’s stem cells. Phototherapy has been around for about 100 years, using light to improve the health of
            the body. Optimum health and wellness can now be yours with X39, a new approach to improving the way your body fosters the
            flow of energy in your body for improvements in strength, stamina and beyond. By gently stimulating the skin with light, our
            general wellness, non‑transdermal patches help you conquer your active life‑style and pave a new way to achieve health.
          </p>
        </div>
      );
    }
    if (slug === 'wound-care') {
      return <WoundCareContent />;
    }
    if (slug === 'vasectomies') {
      return <VasectomiesContent />;
    }
    if (slug === 'autoimmune-diseases') {
      return (
        <div className="text-slate-700 mt-4 max-w-[620px] space-y-4">
          <p>
            At Aletheia we address immune support with comprehensive and personalized protocols. We partner with our patients to
            find the root causes of immune system imbalances. Our functional medicine approach helps optimize the body’s natural
            defenses and promote overall well‑being.
          </p>
          <p>
            We believe that patient wellness is not just about treating symptoms but about addressing the root causes of immune
            system imbalances. Our approach is based on functional medicine, which takes a holistic view of the patient’s health and
            considers all aspects of their lifestyle, environment, and genetics.
          </p>
          <p>
            We work closely with each patient to develop a personalized protocol that addresses their unique needs. Our
            comprehensive approach includes not just medical treatments but also lifestyle modifications, nutritional counseling,
            and stress management techniques.
          </p>
          <p>
            We aim to optimize the body’s natural defenses and promote overall well‑being by addressing factors such as chronic
            inflammation, food sensitivities, gut health, and environmental toxins.
          </p>
        </div>
      );
    }
    if (slug === 'thermography') {
      return (
        <div className="text-slate-700 mt-4 max-w-[560px]">
          <p>
            Thermography is a cutting-edge imaging technique that uses heat-detecting sensors to gain insights into your health. At
            Aletheia Integrative in Lincoln, Nebraska, Jaime K Dodge, MD and the team of family practice and direct primary care
            physicians uses onsite thermography to screen for various conditions, including breast cancer, peripheral vascular
            disease, and lymphatic disorders. Call Aletheia Integrative today to schedule a thermography appointment, or book your
            visit online.
          </p>
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
            <div
              className={
                'overflow-hidden ' +
                (slug === 'primary-care'
                  ? 'aspect-[550/1336]'
                  : slug === 'thermography'
                  ? 'aspect-[550/538]'
                  : slug === 'hormone-balance-therapy'
                  ? 'aspect-[550/538]'
                  : slug === 'hyperbaric-oxygen-therapy'
                  ? 'aspect-[550/538]'
                  : slug === 'vasectomies'
                  ? 'aspect-[550/538]'
                  : slug === 'vitamins-and-supplements'
                  ? 'aspect-[550/1196]'
                  : slug === 'weight-loss'
                  ? 'aspect-[550/538]'
                  : slug === 'lab-services'
                  ? 'aspect-[550/780]'
                  : slug === 'red-light-therapy'
                  ? 'aspect-[550/588]'
                  : slug === 'autoimmune-diseases'
                  ? 'aspect-[550/832]'
                  : slug === 'infusion-therapy'
                  ? 'aspect-[550/2263]'
                  : slug === 'aletheia-cell-therapy'
                  ? 'aspect-[550/820]'
                  : 'aspect-[4/3]')
              }
            >
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
            {slug !== 'primary-care' && slug !== 'thermography' && slug !== 'wound-care' && slug !== 'hormone-balance-therapy' && slug !== 'vasectomies' && slug !== 'vitamins-and-supplements' && slug !== 'weight-loss' && slug !== 'hyperbaric-oxygen-therapy' && slug !== 'lab-services' && slug !== 'red-light-therapy' && slug !== 'autoimmune-diseases' && slug !== 'infusion-therapy' && slug !== 'aletheia-cell-therapy' && (
              <>
                <h2 className="text-[28px] text-[rgb(38,69,123)] font-semibold">About {svc.title}</h2>
                <hr className="w-20 h-[2px] bg-[rgb(199,90,51)] border-0 mt-2" />
              </>
            )}
            {renderContent()}
          </div>
        </div>
      </section>

      {/* Aletheia Cell Therapy Q&A full-width */}
      {slug === 'aletheia-cell-therapy' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Cell Therapy Q&A</h2>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How are Aletheia Cell Therapy, peptide and hormone therapy different?</h3>
              <p>Aletheia Cell Therapy, peptide and hormone therapy are minimally invasive treatments designed to promote healing and wellness; however, they have distinct differences:</p>
              <p><strong>Cell Therapy (Aletheia Cell Therapy)</strong></p>
              <p>Aletheia offers 2 types of regenerative cell therapy for our patients to help speed up your body's healing process: Joint and Systemic. Each therapy is specifically designed to promote healing and stimulate new cell production in the body.</p>
              <p>The process involves drawing a sample of blood, separating the plasma, then concentrating and activating the platelets that support healing and growth. Then the sample is reintroduced into the joint or into the blood system.</p>
              <p><strong>Peptide therapy</strong></p>
              <p>Peptide therapy uses peptides — short chains of amino acids — to stimulate healing at the cellular level. Like Aletheia Cell Therapy, peptide therapy is administered with injections. The Aletheia Integrative team uses peptide therapy to promote healing, encourage weight loss, and assist in anti‑aging.</p>
              <p><strong>Hormone therapy</strong></p>
              <p>Hormone therapy uses synthetic (man‑made) hormones to restore hormone balance. You might benefit from this type of treatment if you’re going through menopause or experiencing symptoms of low testosterone.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What types of medical issues can benefit from Cell Therapy (Aletheia Cell Therapy)?</h3>
              <p>The Aletheia Integrative team uses cell therapy to treat various medical issues, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Joint inflammation and pain</li>
                <li>Acute sports injuries, like pulled muscles</li>
                <li>Tendon injuries</li>
                <li>Osteoarthritis</li>
                <li>Chronic Fatigue</li>
                <li>Fibromyalgia</li>
                <li>Pain and Inflammation</li>
                <li>Autoimmune Disorders</li>
                <li>Neurologic Dysfunction</li>
                <li>Autism Spectrum Disorders</li>
              </ul>
              <p>Cell Therapy (Aletheia Cell Therapy) can help speed up your recovery after orthopedic surgery. It can also be used to encourage hair growth if you have male pattern baldness (androgenic alopecia).</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What types of medical issues can benefit from LifeWave patches?</h3>
              <p>The Aletheia Integrative team uses phototherapy patches to support:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduced Inflammation</li>
                <li>Increased mental clarity</li>
                <li>Increased energy &amp; vitality</li>
                <li>Rapid pain relief</li>
                <li>Sports performance</li>
                <li>Faster recovery from exercise</li>
                <li>Improves skin appearance</li>
                <li>Supports wound healing</li>
              </ul>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How does Cell Therapy (Aletheia Cell Therapy) work?</h3>
              <p>Cell therapy is an outpatient procedure that averages 60‑120 minutes.</p>
              <p>Your blood sample will be drawn and placed into a centrifuge — a machine that separates your platelets from the rest of your blood.</p>
              <p>Once the platelet‑rich solution is ready, your provider injects it into specific areas of your body, like an arthritic knee or a damaged tendon or intravenously. The Aletheia Cell Therapy solution can amplify the natural growth factors found in our blood to begin healing at the cellular level.</p>
              <h4 className="text-[16px] font-semibold text-[rgb(38,69,123)]">How does phototherapy work?</h4>
              <p>Activate your stem cells with our non‑medicated patches that fit into your daily lifestyle. Your body emits heat, including heat energy in the infrared spectrum. Our patches are designed to reflect particular wavelengths of this energy back to stimulate specific points on the skin that can promote a general state of health and wellness unique to each patch. Patients have experienced an increase in strength, energy, mental clarity, restored muscle, stamina, sleep and reduction in inflammation.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is Cell Therapy safe?</h3>
              <p>The side effects of Aletheia Cell Therapy are limited and reduced because the injection uses substances from your own body. After treatment, it’s normal to experience mild bruising and redness at the injection sites, but these symptoms should improve within a day or two. Systemic treatments may result in longer recovery, please discuss with the Aletheia provider. After each session, avoid strenuous activity for at least 24 hours and follow the team’s recovery instructions.</p>
              <p>Call Aletheia Integrative today to schedule a Cell Therapy appointment or book your visit online.</p>
            </div>
          </div>
        </section>
      )}

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

      {/* Infusion Therapy Q&A full-width */}
      {slug === 'infusion-therapy' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Infusion Therapy Q&A</h2>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is it true that infusion therapy is more beneficial than oral supplements?</h3>
              <p>Yes. Infusion therapy administers vitamins, minerals, and nutrients directly into your bloodstream.</p>
              <p>When taken orally, nutrients break down in the stomach first, so only about 50% of the benefits are absorbed. Infusion therapy bypasses digestion so cells can receive about 90% of the benefits.</p>
              <p>Infusion therapy is quick, convenient, and affordable. There aren’t any side effects for most people, so you can return to your normal routine immediately afterward.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What types of medical issues can benefit from infusion therapy?</h3>
              <p>The Aletheia Integrative team uses infusion therapy to treat various medical issues, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Migraines and headaches</li>
                <li>Nausea</li>
                <li>Inflammation</li>
                <li>Hangovers</li>
                <li>Jet lag</li>
                <li>Arthritis</li>
                <li>Fatigue</li>
                <li>Common cold</li>
                <li>Seasonal flu</li>
                <li>Brain fog</li>
                <li>Allergies</li>
                <li>Heartburn</li>
              </ul>
              <p>You don’t need to be sick to benefit from infusion therapy. Many runners and athletes schedule infusion therapy after races and competitions to speed up the body’s natural recovery process. Infusion therapy can also be used to relieve anxiety, depression, and other mental health conditions that affect mood and outlook.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What Specialty IV Infusions Do You Offer?</h3>
              <p>
                At Aletheia Integrative, we offer a range of specialty IV infusions designed to target specific health needs and enhance overall wellness. Each infusion is formulated with <strong>clinical‑grade nutrients</strong> and can be customized based on your symptoms, lab findings, or wellness goals. Our specialty IV offerings include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NAD+ Therapy</strong> – Supports cellular energy, brain function, detoxification, and anti‑aging.</li>
                <li><strong>Myers’ Cocktail</strong> – Foundational blend of vitamins and minerals to support immune health, energy levels, mood, and recovery from illness.</li>
                <li><strong>High‑Dose Vitamin C</strong> – Immune‑boosting, antioxidant, and anti‑inflammatory support.</li>
                <li><strong>Immune Support Infusion</strong> – Custom mix of nutrients including zinc, selenium, B‑complex, and vitamin C to strengthen your defenses.</li>
                <li><strong>Hydration + Electrolyte Replenishment</strong> – Perfect for recovery from athletic events, travel, illness, or general dehydration.</li>
                <li><strong>Glutathione Add‑On</strong> – Master antioxidant added to many of our IVs to support detoxification, cellular repair, and skin health.</li>
              </ul>
              <p>Every infusion is delivered in a relaxing, monitored setting and can be paired with other therapies such as <strong>Red Light Therapy</strong> or <strong>Hyperbaric Oxygen</strong> for synergistic results.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How do I prepare for infusion therapy?</h3>
              <p>Your Aletheia Integrative provider reviews your medical records, asks about your treatment goals, and completes a physical exam.</p>
              <p>Your provider makes personalized infusion therapy recommendations. Infusion therapy is administered intravenously with a drip. The drip is a saline (salt water) solution containing vitamins, minerals, antioxidants, and other nutrients.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What happens during infusion therapy?</h3>
              <p>Infusion therapy is an outpatient procedure that averages 45–90 minutes.</p>
              <p>At the beginning of treatment, your Aletheia Integrative provider prepares the drip. Then, they clean your arm and carefully insert a very thin needle into a vein in your inner elbow. The needle connects to a catheter attached to the IV drip. The IV slowly lets nutrients into your bloodstream, where they’re processed by your cells.</p>
              <p>You can read a book, listen to music, or take a nap during treatment. Once the drip finishes, your provider removes the needle, bandages your arm, and provides recovery instructions.</p>
              <p>Call Aletheia Integrative today to schedule an infusion therapy appointment or book your visit online.</p>
            </div>
          </div>
        </section>
      )}

      {slug === 'autoimmune-diseases' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Unlock Your Health’s Potential</h2>

            <div className="space-y-6 text-slate-700">
              <p>
                In functional medicine, testing for autoimmune diseases involves a comprehensive and individualized approach to
                understand the underlying factors contributing to immune system dysfunction. Rather than just focusing on symptom
                management, we aim to identify and address the root causes of autoimmune conditions. Our personalized protocol
                utilizes:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">1. A Comprehensive Assessment</p>
                  <p>Beginning with a thorough patient history, examining lifestyle, stress levels, diet, sleep patterns, and environmental exposures. Also assessing for any underlying conditions or chronic stressors.</p>
                </div>
                <div>
                  <p className="font-semibold">2. Nutrient Optimization</p>
                  <p>Ensure optimal levels of key nutrients essential for immune function, such as vitamins A, C, D, and zinc. Customized infusions designed to replenish depleted nutrients, boost immune support and reduce oxidative stress may be offered. Individualized supplementation may be recommended based on blood tests.</p>
                </div>
                <div>
                  <p className="font-semibold">3. Gut Health Optimization</p>
                  <p>Your gut plays a significant role in immune function. We’ll focus on gut health through probiotics, prebiotics, and dietary measures. Identifying and addressing any imbalances in the gut microbiome.</p>
                </div>
                <div>
                  <p className="font-semibold">4. Stress Management</p>
                  <p>Implementing stress reduction techniques, as chronic stress can suppress the immune system. This may include mindfulness practices, relaxation techniques, and lifestyle modifications.</p>
                </div>
                <div>
                  <p className="font-semibold">5. Optimizing Sleep Patterns</p>
                  <p>Prioritizing adequate and quality sleep, as it plays a crucial role in immune function. We’ll address sleep hygiene, circadian rhythms, and any underlying sleep disorders.</p>
                </div>
                <div>
                  <p className="font-semibold">6. Detoxification Support</p>
                  <p>Evaluating exposure to environmental toxins and supporting the body’s natural detoxification pathways. This may involve dietary changes, targeted supplementation, and lifestyle modifications.</p>
                </div>
                <div>
                  <p className="font-semibold">7. Individualized Herbal and Supplement Support</p>
                  <p>Incorporating immune‑modulating herbs based on individual needs. Echinacea, astragalus, and medicinal mushrooms like reishi and shiitake are prime examples.</p>
                </div>
              </div>

              <p>
                We’ll continuously assess the effectiveness of the protocol through regular follow‑ups and appropriate testing,
                adjusting the approach based on your individual response and addressing any emerging imbalances or changing needs.
              </p>
              <p>
                Book a free initial consultation to learn more about our approach! 531‑333‑2037
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Hyperbaric Oxygen Therapy Q&A full-width */}
      {slug === 'hyperbaric-oxygen-therapy' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Hyperbaric Oxygen Therapy Q&A</h2>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How does hyperbaric oxygen therapy work?</h3>
              <p>Hyperbaric oxygen therapy is an outpatient treatment that involves sitting in a pressurized chamber for about 90 minutes. The chamber contains air that’s 100% oxygen. Sitting in the chamber lets your lungs gather and absorb more oxygen so your body can heal quicker and better withstand infections.</p>
              <p>Hyperbaric oxygen therapy (HBOT) is the medical use of oxygen in a pressurized environment, at a level higher than 1 atmosphere absolute (ATA). Increased pressure allows for oxygen to dissolve and saturate the blood plasma (independent of hemoglobin/red blood cells), which yields a broad variety of positive physiological, biochemical and cellular effects. This noninvasive therapy is the most trusted way to increase oxygen levels to all organs of the body.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What types of medical issues can benefit from hyperbaric oxygen therapy?</h3>
              <p>HBOT has been demonstrated in several clinical studies to enhance the body’s innate ability to repair and regenerate. It is used as an adjunct therapy to complement and enhance the healing process in both chronic and acute conditions. The Aletheia Integrative team uses hyperbaric oxygen therapy to treat various medical conditions, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Burns</li>
                <li>Carbon monoxide poisoning</li>
                <li>Gangrene</li>
                <li>Hearing loss</li>
                <li>Diabetic ulcers and other open wounds</li>
                <li>Severe bone and skin infections</li>
                <li>Skin grafts</li>
              </ul>
              <p>Hyperbaric oxygen therapy promotes healing after accidents. So you might benefit if you run, play sports, or work a physically demanding job.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How does hyperbaric oxygen therapy promote healing?</h3>
              <p>Your body needs rest and oxygen to heal after an accident, illness, injury, or surgery. The regular atmosphere outside of a hyperbaric oxygen chamber contains about 20% oxygen. But the air the patient is breathing inside the chamber contains five times more.</p>
              <p>As your body begins the healing process, it needs more oxygen. The increased oxygen inside the pressurized hyperbaric chamber helps your blood carry more oxygen to your damaged tissues. It also increases the transfer of white blood cells, which are responsible for fighting infection.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How do I prepare for hyperbaric oxygen therapy?</h3>
              <p>Let your provider know if you take any prescription medication or have an implantable medical device, like a pacemaker. Certain devices and medications can interfere with hyperbaric oxygen therapy, so it’s important that the clinic is aware.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What happens during hyperbaric oxygen therapy?</h3>
              <p>Each session takes place in a comfortable, pressurized chamber where you can relax, listen to music or even take a nap. Our team monitors every session to ensure safety, comfort and optimal results.</p>
              <p>It’s normal for your ears to pop like they would on an airplane during the first 15–20 minutes. After one hour, the pressure will gradually decrease in the chamber. Feeling drowsy afterward is normal, so you might want to have a friend or family member drive you home.</p>
              <p>Call Aletheia Integrative today to schedule a hyperbaric oxygen therapy appointment or book your visit online.</p>
            </div>
          </div>
        </section>
      )}

      {/* Weight Loss Q&A full-width */}
      {slug === 'weight-loss' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Weight Loss Q&A</h2>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Can medically supervised weight loss help me achieve my ideal weight?</h3>
              <p className="mt-3">Yes. Medically supervised weight loss uses a combination of routine checkups, health coaching, and nutrition education to help you live a healthier and more active lifestyle. Rather than relying on yo-yo dieting and other fads, the Aletheia Integrative team uses a practical and proven approach to weight loss management.</p>
            </div>

            <div className="p-6 md:p-8 space-y-4" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What does medically supervised weight loss involve?</h3>
              <p>The Aletheia Integrative team develops medically supervised weight loss programs that include:</p>
              <p><strong>Health coaching</strong></p>
              <p>Health coaching involves working with a certified health coach to set specific health goals and then take steps to achieve them. Simply speaking, it provides an accountability partner to help you stay on track, a structured system to give success and simple instructions to make it easy to follow.</p>
              <p>You attend regular checkups at Aletheia Integrative and monitor your progress over time. Your coach makes adjustments at each visit to help you reach your ideal weight.</p>
              <p><strong>Nutrition education</strong></p>
              <p>Eating high‑calorie foods with sugar, saturated fat, and salt causes you to gain weight quickly. These foods can provide a quick burst of energy, but afterward, they cause you to crash.</p>
              <p>The Aletheia Integrative team recommends nutrient‑dense, balanced meals and snacks. They encourage you to focus on fruits, vegetables, whole grains, healthy fats, and lean proteins rather than eating junk food.</p>
              <p><strong>Exercise guidance</strong></p>
              <p>An improved diet is only one aspect of effective weight loss. You need to stay physically active to shed pounds and keep them off. The Aletheia Integrative team makes personalized recommendations that align with your fitness level. Depending on your needs, they might suggest walking, cycling, or swimming.</p>
              <p><strong>Prescription medication</strong></p>
              <p>The older you get, the harder it is to effectively lose weight, even with improved diet and exercise. Your provider might prescribe medications when clinically appropriate to support your program.</p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">When will I see results from medically supervised weight loss?</h3>
              <p className="mt-3">The time it takes to see results from medically supervised weight loss depends on your metabolism and commitment to the treatment plan. Many people lose 5–10 pounds during the first month, but it may take longer. Follow the Aletheia Integrative team’s instructions, attend each of your checkups, and commit to your treatment plan.</p>
              <p className="mt-3">Call Aletheia Integrative today to schedule a medically supervised weight loss visit or book your appointment online.</p>
            </div>
          </div>
        </section>
      )}
      {/* Vitamins & Supplements full-width */}
      {slug === 'vitamins-and-supplements' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">GET A FREE SCAN AT OUR OFFICE OR CALL FOR A QUICK PERSONALIZED ASSESSMENT</h2>

            <div className="space-y-6 text-slate-700">
              <h3 className="text-[24px] font-semibold text-slate-800">Explore Our Supplement Collections</h3>
              <p>
                At Aletheia Integrative, we take a comprehensive approach to your well‑being. Each supplement we offer is carefully
                selected for its ability to support your health goals and integrate seamlessly into your care plan. Below, you’ll find
                a breakdown of our key product lines and why they may be the right fit for you:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[18px] font-semibold text-slate-800">🪴 Vital Health Global</h4>
                  <p className="mt-2"><strong>Functional wellness, simplified.</strong></p>
                  <p className="mt-2">Vital Health Global supplements are designed with a systems‑based, root‑cause philosophy in mind. Whether you need support for energy, digestion, inflammation, hormones, or detoxification, Vital Health offers clean, effective formulas tailored for real‑life results. Perfect for those seeking simple, high‑quality support without unnecessary fillers.</p>
                  <p className="mt-3 underline"><a href="https://vitalhealthglobal.com/pages/become-an-affiliate?refID=92476" target="_self" rel="noopener noreferrer">Shop Vital Health Global Supplements</a></p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-slate-800">💊 Orthomolecular Products</h4>
                  <p className="mt-2"><strong>Clinical‑grade, evidence‑based nutrition.</strong></p>
                  <p className="mt-2">Orthomolecular is a trusted name in functional medicine circles for a reason. These supplements are backed by decades of clinical research and used by providers worldwide to address nutrient deficiencies, chronic conditions, and optimize long‑term health. Ideal for those needing targeted, research‑driven support.</p>
                  <p className="mt-3 underline"><a href="https://aletheiawellness.com/" target="_self" rel="noopener noreferrer">Order Orthomolecular Supplements</a></p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-slate-800">✨ LifeWave Phototherapy Patches</h4>
                  <p className="mt-2"><strong>Wellness powered by light.</strong></p>
                  <p className="mt-2">These non‑invasive, wearable patches harness the power of phototherapy to stimulate the body’s natural healing responses. From energy and pain relief to better sleep and cellular repair, LifeWave patches offer a unique, drug‑free approach to wellness. They’re great for anyone looking to optimize their health without pills or powders.</p>
                  <p className="mt-3 underline"><a href="https://www.lifewave.com/aletheiaintegrative" target="_self" rel="noopener noreferrer">Discover LifeWave Patches</a></p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-slate-800">📦 Nationwide Shipping Available</h4>
                  <p className="mt-2">No matter where you live, we make it easy to stay consistent with your supplement routine. All orders ship directly to your home—fast, secure, and hassle‑free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Vasectomies Q&A full-width */}
      {slug === 'vasectomies' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-8">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Vasectomies Q&A</h2>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Are vasectomies the best way to prevent an unwanted pregnancy?</h3>
              <p className="mt-3">It depends. There are several ways for sexually active men to reduce the risk of unwanted pregnancy, like condoms and the withdrawal method. These approaches to contraception can help lower the risk of pregnancy, but they aren’t as effective as a vasectomy.</p>
              <p className="mt-3">Vasectomies surgically close off the vas deferens — hollow tubes that carry sperm to the urethra in preparation for ejaculation. Though no vasectomy is entirely effective, it has a failure rate far less than other birth control methods.</p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How do I prepare for a vasectomy?</h3>
              <p className="mt-3">The Aletheia Integrative team completes a presurgical consultation before recommending a vasectomy.</p>
              <p className="mt-3">Your provider reviews your medical records, completes a physical exam, and asks about your lifestyle and general health. Let your provider know if you take prescription medications, like blood thinners. These drugs won’t necessarily prevent you from undergoing a vasectomy, but they can increase the risk of complications, so it’s important your provider is aware.</p>
              <p className="mt-3">Your provider has you sign a surgical consent form if they determine that you’re a candidate for a vasectomy.</p>
              <p className="mt-3">You may need to fast or take certain medications before your vasectomy. Follow your provider’s instructions to ensure positive results.</p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What do vasectomies involve?</h3>
              <p className="mt-3">Vasectomies are an outpatient procedure that averages 30–60 minutes. Aletheia utilizes the latest technology which includes a minimally invasive, scalpel-free procedure for permanent male sterilization.</p>
              <p className="mt-3">Our low-risk, in-office procedure includes oral and topical pain medications that are provided before the procedure to aid in relaxation and minor discomfort.</p>
              <p className="mt-3">Patients may experience minor soreness, tightness, and swelling for a few days after the procedure. Your physician administers local and general anesthesia. After the anesthetic sets in, they use surgical tools to close off the vas deferens, preventing sperm from exiting your body with semen. Since it takes several hours for the anesthetic to wear off, you need a friend or family member to drive you home.</p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What is recovery like after a vasectomy?</h3>
              <p className="mt-3">After a vasectomy, it’s normal to have mild bruising, swelling, and discomfort for several days. Follow your provider’s recovery instructions. Take your medication as prescribed, apply ice to your crotch several times daily, and change your dressings whenever they get dirty.</p>
              <p className="mt-3">Most people return to work and other activities within three days, but it may take longer.</p>
              <p className="mt-3">Call Aletheia Integrative today to schedule a vasectomy consultation or book your appointment online.</p>
            </div>
          </div>
        </section>
      )}
      {/* Hormone Balance Therapy full-width */}
      {slug === 'hormone-balance-therapy' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-10">
            <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Reclaim Your Energy, Balance, And Confidence At Any Age</h2>

            <div className="space-y-6 text-slate-700">
              <h4 className="text-slate-500">Introduction</h4>
              <p>
                At Aletheia Integrative, we understand how frustrating it feels when your energy, mood, or health no longer match the
                life you want to live. Hormone changes—whether from aging, stress, or other factors—can take a toll on how you look,
                feel, and function. Our hormone optimization therapy program in Lincoln, NE, is designed to restore balance so you can
                thrive again.
              </p>
              <hr className="border-slate-300" />

              <h3 className="text-[18px] font-semibold text-slate-800">What Is Hormone Optimization Therapy?</h3>
              <p>
                Hormones regulate nearly every part of daily life—your metabolism, mood, sleep, libido, and even mental clarity. When
                hormones fall out of balance, you may experience:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Fatigue and low energy</li>
                <li>Mood swings, irritability, or depression</li>
                <li>Weight gain or stubborn belly fat</li>
                <li>Decreased muscle mass or strength</li>
                <li>Low libido or changes in sexual performance</li>
                <li>Hot flashes, night sweats, or menstrual changes</li>
                <li>Brain fog and difficulty concentrating</li>
              </ul>
              <p>
                Hormone Optimization Therapy (HOT) works to restore hormones to an optimal functional range, not just what labs call
                “normal.” With carefully monitored treatment, patients often notice steady, sustainable improvements in energy, mood,
                and overall well‑being.
              </p>
              <hr className="border-slate-300" />

              <h3 className="text-[18px] font-semibold text-slate-800">Our Approach at Aletheia Integrative</h3>
              <p>Our Lincoln clinic offers a personalized and evidence-based process for hormone optimization:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Comprehensive Evaluation & Lab Work</strong>
                  <div>We assess key hormones like testosterone, estrogen, progesterone, thyroid, FSH, LH, and prolactin.</div>
                </li>
                <li>
                  <strong>Tailored Treatment Plan</strong>
                  <div>Your plan may include bioidentical hormone replacement therapy (BHRT), testosterone replacement therapy (TRT), nutrition support, peptide therapies, and lifestyle coaching.</div>
                </li>
                <li>
                  <strong>Ongoing Monitoring & Adjustments</strong>
                  <div>Regular follow‑ups ensure your therapy is safe, effective, and adjusted to your changing needs.</div>
                </li>
              </ol>

              <h3 className="text-[18px] font-semibold text-slate-800 mt-6">Benefits of Hormone Optimization Therapy</h3>
              <p>Patients commonly report:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>More consistent <strong>energy and stamina</strong></li>
                <li>Improved <strong>mood and mental clarity</strong></li>
                <li>Better <strong>libido and sexual health</strong></li>
                <li>Easier <strong>weight management</strong></li>
                <li>Relief from <strong>menopause or andropause symptoms</strong></li>
                <li>Deeper, more restful <strong>sleep</strong></li>
              </ul>
              <hr className="border-slate-300" />

              <h3 className="text-[18px] font-semibold text-slate-800">FAQ – Hormone Optimization in Lincoln, NE</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold">Q: Who is hormone therapy for?</p>
                  <p>Both men and women experiencing fatigue, weight gain, mood changes, low libido, or other symptoms of hormone imbalance may benefit.</p>
                </div>
                <div>
                  <p className="font-semibold">Q: How soon will I notice results?</p>
                  <p>Some patients experience changes within weeks, while optimal results often appear over several months.</p>
                </div>
                <div>
                  <p className="font-semibold">Q: Is hormone therapy safe?</p>
                  <p>When closely managed by an experienced provider like Tim Miller, APRN‑FNP, MSN, RN, hormone therapy is safe and carefully monitored.</p>
                </div>
                <div>
                  <p className="font-semibold">Q: What’s the difference between bioidentical hormones and synthetic hormones?</p>
                  <p>Bioidentical hormones are structurally identical to those your body produces, often leading to better tolerance and more natural results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Wound Care full-width sections */}
      {slug === 'wound-care' && (
        <section className="py-12">
          <div className="container max-w-[1100px] px-6 space-y-10">
            <div className="space-y-3">
              <h2 className="text-[32px] text-[rgb(199,90,51)] font-semibold">Specialized Treatment For All Wound Types</h2>
              <h3 className="text-[24px] font-semibold text-slate-800">45% of chronic wounds heal within 4 weeks with our advanced protocols</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Diabetic Foot Ulcers</h4>
                <p className="mt-2 text-slate-700">Comprehensive diabetic wound management with advanced biologics and offloading techniques. Prevent amputation risk with our proven protocols.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Blood sugar optimization</li>
                  <li>Custom offloading devices</li>
                  <li>Weekly progress monitoring</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Pressure Ulcers (Bedsores)</h4>
                <p className="mt-2 text-slate-700">Specialized care for all stages of pressure injuries with focus on pressure redistribution and advanced wound dressings.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Stage I–IV treatment</li>
                  <li>Repositioning education</li>
                  <li>Nutritional support planning</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Venous Leg Ulcers</h4>
                <p className="mt-2 text-slate-700">Comprehensive venous insufficiency management with compression therapy and circulation improvement strategies.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Compression therapy</li>
                  <li>Edema management</li>
                  <li>Vascular assessment</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Surgical & Traumatic Wounds</h4>
                <p className="mt-2 text-slate-700">Post‑operative and trauma wound care to prevent infection and optimize healing trajectory.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Infection prevention</li>
                  <li>Scar minimization</li>
                  <li>Pain management</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Arterial Ulcers</h4>
                <p className="mt-2 text-slate-700">Specialized care for wounds caused by poor arterial circulation with focus on revascularization support.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Vascular consultation</li>
                  <li>Pain control protocols</li>
                  <li>Gentle debridement</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-slate-800">Non‑Healing/Chronic Wounds</h4>
                <p className="mt-2 text-slate-700">Expert care for wounds that haven't healed after 4–6 weeks of standard treatment.</p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                  <li>Biofilm disruption</li>
                  <li>Growth factor therapy</li>
                  <li>Cellular tissue products</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-[28px] font-semibold text-slate-800">Why Patients Choose Aletheia</h2>
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>97% Healing Rate: Outcomes exceed national averages; wounds heal 53% faster than standard care</li>
                <li>Same‑Week Appointments: No referral needed</li>
                <li>Insurance Accepted: Medicare Part B</li>
                <li>Coordinated Care: We work with your healthcare team for comprehensive treatment</li>
                <li>Home Visits Available: Mobile wound care brings treatment to you</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-[28px] font-semibold text-slate-800">FAQ's</h2>
              <div className="space-y-4 text-slate-700">
                <p><strong>Q:</strong> When should I seek specialized wound care?</p>
                <p><strong>A:</strong> See a specialist if your wound hasn't shown improvement in 2 weeks or hasn't healed within 4–6 weeks. Also seek care immediately for signs of infection, worsening wounds, diabetes, or circulation problems.</p>

                <p><strong>Q:</strong> How long does wound healing typically take?</p>
                <p><strong>A:</strong> With our advanced treatments, 45% of wounds heal within 4 weeks, 65% within 8 weeks, and 75% within 12 weeks. Our average healing time is 51 days compared to the national average of 107 days.</p>

                <p><strong>Q:</strong> Is wound care covered by insurance?</p>
                <p><strong>A:</strong> We verify coverage before treatment and discuss any potential out‑of‑pocket costs.</p>

                <p><strong>Q:</strong> Do I need a referral to see a wound care specialist?</p>
                <p><strong>A:</strong> No referral is needed. You can schedule directly with us; we coordinate with your primary care physician and other specialists as needed.</p>

                <p><strong>Q:</strong> What should I bring to my first appointment?</p>
                <p><strong>A:</strong> Bring your insurance card, photo ID, medication list, and recent medical records related to your wound. If you have diabetes, bring your blood sugar log. Wear loose, comfortable clothing for easy access to the wound area.</p>

                <p><strong>Q:</strong> How does mobile/home wound care work?</p>
                <p><strong>A:</strong> Our certified wound care specialists come to your home, assisted living, or care facility—bringing all necessary equipment for comprehensive treatment. Visits are typically weekly and coordinated with your providers; ideal for mobility or transportation challenges.</p>

                <p><strong>Q:</strong> What are the risks of untreated chronic wounds?</p>
                <p><strong>A:</strong> Risks include infection, cellulitis, bone infection (osteomyelitis), sepsis, and in severe cases, amputation. About 30% of untreated diabetic wounds result in amputation. Early specialized care significantly reduces risks.</p>

                <p><strong>Q:</strong> Can all wounds be healed?</p>
                <p><strong>A:</strong> While our healing rate is 97%, some wounds may not fully heal due to underlying conditions. Our goal is to optimize quality of life, prevent complications, manage pain, and maintain the best possible wound condition. We also provide palliative wound care when appropriate.</p>
              </div>
              <p className="underline">
                <a href="https://aletheia.reliefdiscovery.com/wc-consult" target="_self" rel="noopener noreferrer">
                  Click here for more information
                </a>
              </p>
            </div>
          </div>
        </section>
      )}
      {/* Thermography Q&A full-width */}
      {slug === 'thermography' && (
        <section className="py-10">
          <div className="container max-w-[1100px] px-6 space-y-10">
            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What type of medical information can thermography provide?</h3>
              <p className="mt-3">
                Thermography is a diagnostic screening procedure free of radiation. It uses an infrared camera and other heat‑detecting
                technology to identify and assess temperature differences throughout your body.
              </p>
              <p className="mt-3">
                Many diseases cause specific body systems to overheat, while others trigger a drop in temperature or hypothermia.
                Thermography provides a safe, noninvasive way to catch potential problems when they respond best to treatment.
              </p>
              <p className="mt-3">
                Thermography was developed in the 1950s. In 1982, the Food and Drug Administration (FDA) approved it as a supplementary
                procedure to mammograms for breast cancer screening.
              </p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What types of medical issues can thermography detect?</h3>
              <p className="mt-3">The Aletheia Integrative team uses thermography to detect various medical issues, including:</p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li>Breast cancer</li>
                <li>Thyroid problems</li>
                <li>Cerebrovascular disease (conditions that affect blood flow in the brain)</li>
                <li>Peripheral vascular disease (PAD)</li>
                <li>Neuromuscular conditions</li>
                <li>Infections</li>
                <li>Inflammation</li>
                <li>Toxicity</li>
                <li>Lymphatic system disorders</li>
                <li>Testicular disorders</li>
              </ul>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What happens during thermography screening?</h3>
              <p className="mt-3">At Aletheia Integrative, thermography screenings average 30–60 minutes.</p>
              <p className="mt-3">Don’t wear deodorant on the day of your exam, as it can interfere with your results.</p>
              <p className="mt-3">
                When you arrive, you’re asked to remove your top so your body can adjust to the room temperature. After about 15
                minutes, your technician has you stand in front of the thermography imaging system.
              </p>
              <p className="mt-3">
                Once you’re in position, your technician takes several scans of your body from the front, back, and sides. Breast
                images may be taken if you’re using thermography to supplement a mammogram.
              </p>
              <p className="mt-3">
                After the screen is finished, you change back into your clothes and head home. It takes about a week to receive the
                results of your thermography scan.
              </p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is thermography safe?</h3>
              <p className="mt-3">
                Thermography is safe and typically well‑tolerated. The machine doesn’t emit any radiation or compress breast tissue
                like digital mammography.
              </p>
              <p className="mt-3">
                Thermography isn’t as accurate as some other diagnostic imaging types and can have a higher false positive rate. For
                that reason, we typically recommend thermography alongside other imaging procedures.
              </p>
              <p className="mt-3 italic">*Individual results may vary.</p>
            </div>
          </div>
        </section>
      )}
      {/* Primary Care Q&A full-width */}
      {slug === 'primary-care' && (
        <section className="py-10">
          <div className="container max-w-[1100px] px-6 space-y-10">
            <h2 className="text-[28px] text-[rgb(199,90,51)] font-semibold">Primary Care Q&amp;A</h2>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is primary care necessary if I’m in good health?</h3>
              <p className="mt-3">Absolutely. Primary care is a foundational part of preventive, whole-body health.</p>
              <p className="mt-3">
                Even if you're feeling well and full of energy, it doesn't always mean your body is functioning at its best. Many
                chronic conditions—like high blood pressure, insulin resistance, and inflammation—can develop silently, without
                noticeable symptoms.
              </p>
              <p className="mt-3">
                At Aletheia Integrative, we use primary care not only to treat illness or injury but to proactively identify
                imbalances before they become problems. Our team emphasizes early detection, functional lab testing, lifestyle
                education, and collaboration with specialists when needed. We’re here to help you stay ahead of disease and thrive at
                every stage of life.
              </p>
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h2 className="text-[24px] text-[rgb(199,90,51)] font-semibold">What Primary Care Services Does Aletheia Integrative Offer?</h2>
              <p className="mt-3">
                At Aletheia Integrative, primary care is more than just routine checkups — it’s a proactive partnership in your
                lifelong health. Our integrative model blends traditional medical care with the tools of functional medicine to
                uncover root causes, prevent disease, and help you thrive.
              </p>
              <p className="mt-3">
                We also operate under a Direct Primary Care (DPC) model, which means our patients receive unparalleled access, more
                time with their provider, and a deeper level of personalized care—without the red tape of insurance.
              </p>

              <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)] mt-6">Employee Wellness Programs</h4>
              <p>
                We partner with local businesses to create customized employee wellness programs that support healthier teams and
                workplaces. Our offerings help reduce absenteeism, promote injury prevention, and encourage sustainable lifestyle
                changes that benefit both employers and employees.
              </p>

              <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)] mt-6">Comprehensive Physical Exams</h4>
              <p>
                Our physicals go beyond the basics. We take time to evaluate your whole-body health, checking vital signs, completing
                a thorough exam, and ordering relevant lab work. We also include sex-specific screenings and spend time understanding
                your history, goals, and any underlying symptoms—even those you might not notice.
              </p>

              <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)] mt-6">Preventive Screenings</h4>
              <p>
                We offer a range of preventive services designed to catch illness early—when it’s most treatable. These include Pap
                smears, prostate and breast exams, and thermography (a radiation-free imaging option for early inflammation
                detection). We also coordinate referrals for advanced imaging like colonoscopies and mammograms when needed.
              </p>

              <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)] mt-6">Functional Lab Testing</h4>
              <p>
                Our lab work includes both standard and advanced panels that evaluate things like hormone balance, inflammation, gut
                health, nutrient deficiencies, insulin resistance, and cardiovascular risk. These insights allow us to build a
                personalized plan that supports long-term healing and prevention.
              </p>
              <hr className="border-slate-300 mt-6" />
            </div>

            <div className="p-6 md:p-8" style={{ background: '#D2D8E9' }}>
              <h2 className="text-[24px] text-[rgb(199,90,51)] font-semibold">Why Choose Our Direct Primary Care Membership?</h2>
              <p className="mt-3">
                Our DPC model is designed to restore the relationship between patient and provider—focusing on accessibility, trust,
                and comprehensive care.
              </p>
              <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)] mt-4">DPC Member Benefits Include:</h4>
              <ul className="list-disc pl-6 space-y-6 mt-4">
                <li><strong>After-hours direct access</strong> to your physician via text, call, or secure messaging</li>
                <li><strong>Longer, unhurried appointments</strong> so you never feel rushed</li>
                <li><strong>Easy scheduling</strong> for urgent needs</li>
                <li><strong>Transparent, affordable pricing</strong> with no surprise bills</li>
                <li><strong>Discounts</strong> on in-house therapies and supplements</li>
                <li><strong>Whole-person care coordination</strong>, including referrals and support from our integrative team</li>
              </ul>
              <p className="mt-6">
                We believe health shouldn’t be limited by the system. With DPC, you get the <strong>freedom, support, and proactive
                guidance</strong> you need to truly take control of your wellness.
              </p>
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
