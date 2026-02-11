import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function ImmuneRegulationResilienceContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">IMI Pathway</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IMI: Immune Regulation & Resilience</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        For patients dealing with autoimmune conditions, chronic infections, or immune dysfunction who haven't found answers in the conventional system.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        We investigate the root causes of your immune imbalance—from gut health and environmental triggers to hidden infections and inflammatory patterns—and build a protocol to regulate and restore healthy immune function.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function ImmuneRegulationResilienceFullContent() {
  return (
    <>
      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Challenge</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Your immune system needs regulation, not suppression.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Autoimmune conditions, chronic infections, and immune dysfunction are among the most misunderstood and under-investigated conditions in conventional medicine. The standard approach often involves immunosuppressive medications that manage symptoms without addressing why your immune system is misfiring.
            </p>
            <p>
              This pathway is for those ready to address the underlying drivers, not just manage symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Investigate. Regulate. Restore.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We investigate the root causes of your immune imbalance—from gut health and environmental triggers to hidden infections and inflammatory patterns—and build a protocol to regulate and restore healthy immune function.
            </p>
            <p>
              Your 90-day program may include comprehensive functional testing, gut health protocols, targeted supplementation, IV therapy, dietary modifications, and lifestyle changes designed to support immune regulation.
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
              'You have an autoimmune condition or suspected autoimmune symptoms',
              'You\'re dealing with chronic infections that won\'t resolve',
              'Your immune system seems overactive or underactive',
              'You\'ve tried conventional treatments without lasting improvement',
              'You want to understand the root causes of your immune dysfunction',
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
            Ready to restore immune balance?
          </h2>
          <p className="mt-4 text-white/90 text-[17px]">
            Let's evaluate your situation and determine if the IMI: Immune Regulation & Resilience pathway is right for you.
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
