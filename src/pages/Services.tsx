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
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            You're not here for another quick fix or bandaid—you're looking for 
            something deeper. At Aletheia Integrative, we've structured every service 
            around the belief that you deserve time, precision, and partnership in your care.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're starting with a stable foundation or diving into advanced 
            interventions, we'll meet you where you are—and walk with you toward where 
            you want to be.
          </p>
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
