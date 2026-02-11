// Short intro for 2-column grid
export default function InfusionTherapyContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IV Therapy and Infusions</p>
        <p className="mt-2 text-slate-600">Delivering nutrients directly into your bloodstream where your cells can use them immediately.</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        When you take vitamins orally, your body absorbs roughly half of what you swallow—sometimes less, depending on your gut health. Intravenous infusion therapy bypasses digestion entirely, delivering nutrients directly into your bloodstream where your cells can use them immediately.
      </p>
      <p className="text-slate-600 leading-relaxed">
        This isn't about luxury wellness. It's functional medicine—giving your body the raw materials it needs to produce energy, fight inflammation, clear toxins, and repair itself from the inside out.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function InfusionTherapyFullContent() {
  const infusionTypes = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Energy & Recovery',
      description: 'We use formulations built around B vitamins, magnesium, and amino acids—the building blocks your mitochondria need to produce cellular energy. If you\'re dealing with fatigue, burnout, or just running on empty, these infusions help restore what\'s been depleted.',
      benefits: ['B-Complex Vitamins', 'Magnesium', 'Amino Acids', 'Mitochondrial Support'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Immune Support',
      description: 'Targeted blends designed to strengthen your body\'s natural defenses. These are especially useful during cold and flu season, after travel, or when you\'re fighting something off.',
      benefits: ['Vitamin C', 'Zinc', 'Selenium', 'Immune Boosters'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Detox & Cellular Repair',
      description: 'Glutathione is the cornerstone. It\'s your body\'s master antioxidant—essential for clearing toxins, reducing oxidative stress, and supporting everything from liver function to skin health.',
      benefits: ['Glutathione', 'Antioxidants', 'Liver Support', 'Cellular Repair'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Brain Function & Longevity',
      description: 'NAD+ therapy supports mitochondrial health, mental clarity, and cellular repair at a foundational level. Patients dealing with brain fog, chronic stress, or accelerated aging often notice a significant shift.',
      benefits: ['NAD+', 'Cognitive Support', 'Anti-Aging', 'Mental Clarity'],
    },
  ];

  const faqs = [
    {
      question: 'How often should I get IV therapy?',
      answer: 'It depends on your goals and current health status. Some patients benefit from weekly infusions during acute phases, while others use them monthly for maintenance. We\'ll help you determine the right frequency based on your individual needs.',
    },
    {
      question: 'Is IV therapy safe?',
      answer: 'When administered by trained professionals, IV therapy is very safe. All infusions are performed in a monitored clinical setting with pharmaceutical-grade ingredients.',
    },
    {
      question: 'What should I expect during my infusion?',
      answer: 'Plan for 45-90 minutes depending on the infusion type. Bring something to read or relax with. Most patients feel an immediate sense of well-being and improved energy after their session.',
    },
    {
      question: 'Can IV therapy be combined with other treatments?',
      answer: 'Absolutely. IV therapy is often included as part of our IMI protocols or used alongside other regenerative therapies for enhanced results.',
    },
  ];

  return (
    <>
      {/* Why IV Therapy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Why IV Therapy</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Direct Delivery for<br />Maximum Impact
          </h2>
          
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-[rgb(38,69,123)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="mt-4 font-semibold text-[rgb(38,69,123)] text-[18px]">100% Absorption</h4>
              <p className="mt-2 text-slate-600 text-[15px]">Bypasses digestive system for immediate cellular availability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-[rgb(38,69,123)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-4 font-semibold text-[rgb(38,69,123)] text-[18px]">Fast Results</h4>
              <p className="mt-2 text-slate-600 text-[15px]">Feel the difference often within hours of your session</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-[rgb(38,69,123)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="mt-4 font-semibold text-[rgb(38,69,123)] text-[18px]">Higher Doses</h4>
              <p className="mt-2 text-slate-600 text-[15px]">Deliver therapeutic levels not possible through oral supplements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infusion Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">What We Offer</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            IV Infusion Categories
          </h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Every infusion is customized. We look at your symptoms, your labs, and your goals to determine what your body actually needs—not a one-size-fits-all drip menu. Infusions are delivered in a comfortable, monitored setting and typically take 45 to 90 minutes.
          </p>
          <p className="mt-4 text-center text-slate-500 italic text-[14px] max-w-2xl mx-auto">
            IV therapy is also included as part of some of the IMI protocols or used independently for ongoing optimization.
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {infusionTypes.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-[rgba(199,90,51,0.1)] rounded-xl flex items-center justify-center text-[#C75A33] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(38,69,123)] text-[20px]">{item.title}</h4>
                    <p className="mt-2 text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.benefits.map((benefit, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-[rgb(38,69,123)] rounded-full text-[12px] font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Who Benefits</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                IV Therapy Is Especially Useful For
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Patients with malabsorption or gut issues',
                  'Those dealing with chronic illness or fatigue',
                  'Athletes seeking faster recovery',
                  'Anyone wanting to optimize performance',
                  'People recovering from illness or surgery',
                  'Those experiencing acute nutrient depletion',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#C75A33] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h4 className="text-[20px] font-semibold text-[rgb(38,69,123)]">Customized to Your Needs</h4>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Every infusion is customized. We look at your symptoms, your labs, and your goals to determine what your body actually needs—not a one-size-fits-all drip menu.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Infusions are delivered in a comfortable, monitored setting and typically take 45 to 90 minutes.
              </p>
              <p className="mt-4 text-slate-500 italic text-[14px]">
                IV therapy is also included as part of some IMI protocols or used independently for ongoing optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">Common Questions</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            Frequently Asked Questions
          </h2>
          
          <div className="mt-12 space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-[rgb(38,69,123)] text-[17px]">{item.question}</h4>
                <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[rgb(38,69,123)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight">
            Questions about IV therapy?
          </h2>
          <p className="mt-6 text-white/90 text-[18px] leading-relaxed">
            Whether you're looking to boost energy, support your immune system, or optimize your health, we'll help you find the right infusion protocol.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:531-333-2037"
              className="inline-block px-10 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Call 531-333-2037
            </a>
            <a
              href="tel:531-333-2037"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-[14px] font-semibold hover:text-white/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              531-333-2037
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
