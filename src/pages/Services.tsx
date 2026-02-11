import { useDocumentHead } from '../hooks/useDocumentHead';
import ServicesGrid from '../components/ServicesGrid';
import { services } from '../data/services';

export default function Services() {
  useDocumentHead({
    title: 'Services | Aletheia Integrative',
    description: 'Explore our comprehensive range of integrative medical services including Direct Primary Care, Integrative Medicine Intensives, IV Therapy, and more.',
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(38,69,123)] mb-6">
            Care that finally matches your standards.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Every service at Aletheia is grounded in the same philosophy: support your body's ability to heal from within, take an integrative approach that addresses root causes, and give you the freedom to make your own healthcare decisions. Whether you're at base camp or pushing toward a summit, these are the tools we use to help you climb.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Patients come to us for energy and recovery, hormone and metabolic optimization, longevity-focused prevention, and deeper root-cause investigation when performance has plateaued or symptoms won't resolve.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We took everything that frustrates you about conventional care and built the opposite.
          </p>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 text-[17px] leading-[1.8] mb-6">
            At Aletheia, we believe your body knows how to heal. Our job is to support that process, not override it with endless medications. We take an integrative approach, combining the best of conventional medicine with functional diagnostics and therapies that work with your body's natural systems.
          </p>
          <p className="text-gray-700 text-[17px] leading-[1.8] mb-8">
            And because we operate completely outside the insurance system, you have real medical freedom. No one tells us what we can or can't offer. No one limits how much time we spend with you. You're in control of your own healthcare decisions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Time', description: "Your visits are unhurried. We listen. We ask questions. We dig into your history because that's where the real answers hide." },
              { title: 'Investigation', description: "We don't just run the standard panel and hope something shows up. We look at functional markers, patterns, and context. We're looking for why, not just managing what." },
              { title: 'Partnership', description: "You're not a passive recipient here. We educate you, involve you in decisions, and expect you to engage. This is a collaboration between equals." },
              { title: 'Healing from within', description: "We support your body's innate ability to restore balance and function. The goal isn't to manage symptoms forever. It's to help you actually get better." },
              { title: 'Integration', description: "We have access to advanced therapies: IV infusions, hyperbaric oxygen, regenerative medicine, hormone optimization. We use what your body needs, based on your specific situation." },
              { title: 'Freedom', description: "You decide what's right for you. We inform, recommend, and guide. But this is your body and your health." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-[18px] font-bold text-[rgb(38,69,123)] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <ServicesGrid items={services} />
      </section>

      {/* Philosophy Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 italic text-lg">
            Every service is designed with intention—not to overwhelm, but to meet 
            real needs with real solutions. Not sure where to start? That's exactly 
            what we're here for.
          </p>
          <a 
            href="/lets-talk" 
            className="inline-block mt-8 px-8 py-3 bg-[#C75A33] text-white font-semibold rounded-lg hover:bg-[#a84a2a] transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </main>
  );
}
