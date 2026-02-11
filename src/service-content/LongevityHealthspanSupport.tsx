import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function LongevityHealthspanSupportContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">IMI Pathway</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IMI: Longevity & Healthspan Support</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        For high-performers who want their bodies to keep up with their ambitions for decades to come.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        We go beyond standard wellness with advanced diagnostics, peptide therapies, hormone optimization, and regenerative interventions designed to slow biological aging and maximize function. You've built a life worth living—this pathway helps you protect it.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function LongevityHealthspanSupportFullContent() {
  return (
    <>
      {/* The Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Vision</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Optimizing for decades, not just tomorrow.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              This program is designed to support long-term health, resilience, and healthy aging through a thoughtful, whole-body approach. It focuses on optimizing the factors that influence energy, recovery, and overall healthspan over time.
            </p>
            <p>
              Care is personalized, structured, and aimed at helping patients feel stronger, more capable, and better supported as they age.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Advanced longevity medicine.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We go beyond standard wellness with advanced diagnostics, peptide therapies, hormone optimization, and regenerative interventions designed to slow biological aging and maximize function.
            </p>
            <p>
              Your personalized protocol may include comprehensive biomarker testing, hormone optimization, peptide therapy, IV therapy, hyperbaric oxygen therapy, nutritional consultations with Sara Miller, M.Ed., INHC, and targeted lifestyle modifications.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Who This Is For</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            This pathway may be right for you if...
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              'You\'re a high-performer who wants your body to match your ambitions long-term',
              'You\'re interested in slowing biological aging and maximizing healthspan',
              'You want advanced diagnostics beyond standard wellness panels',
              'You\'re ready to invest in proactive, longevity-focused medicine',
              'You\'ve built a life worth living and want to protect it',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-[#C75A33] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-white leading-tight">
            Ready to invest in your longevity?
          </h2>
          <p className="mt-4 text-white/90 text-[17px]">
            Let's evaluate your situation and determine if the IMI: Longevity & Healthspan Support pathway is right for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/lets-talk"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Let's Talk
            </Link>
            <a 
              href="tel:531-333-2037"
              className="inline-block px-8 py-4 text-white text-[14px] font-semibold hover:text-white/80 transition-colors"
            >
              Or call: 531-333-2037
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
