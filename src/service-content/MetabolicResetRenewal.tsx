import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function MetabolicResetRenewalContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">IMI Pathway</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IMI: Metabolic Reset & Renewal</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        For patients struggling with stubborn weight, blood sugar dysregulation, metabolic syndrome, or the feeling that their metabolism has simply stopped working.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        We go beyond calories and willpower to investigate the hormonal, inflammatory, and cellular factors driving your metabolic dysfunction, then build a protocol to reset your body's metabolic machinery. This is a sustainable transformation, not another diet that fails.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function MetabolicResetRenewalFullContent() {
  return (
    <>
      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Challenge</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Your metabolism isn't broken. It's stuck.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              You've tried the diets, the exercise programs, the calorie tracking. You've cut carbs, added protein, increased your steps. And yet the scale won't move, your energy is tanking, and your body seems to be working against you.
            </p>
            <p>
              The problem isn't willpower. It's that the conventional approach to metabolic health ignores the hormonal, inflammatory, and cellular factors that actually drive metabolism. Until those are addressed, no diet will create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Reset your metabolic machinery.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We go beyond calories and willpower to investigate the hormonal, inflammatory, and cellular factors driving your metabolic dysfunction, then build a protocol to reset your body's metabolic machinery.
            </p>
            <p>
              Your 90-day protocol may include comprehensive metabolic testing, hormone optimization, targeted supplementation, nutritional consultations with Sara Miller, M.Ed., INHC, dietary modifications, and lifestyle changes designed for sustainable transformation.
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
              'You\'re struggling with stubborn weight that won\'t respond to diet and exercise',
              'You have blood sugar dysregulation or metabolic syndrome',
              'You feel like your metabolism has simply stopped working',
              'You\'re tired of diets that fail and want a sustainable approach',
              'You want to understand the root causes of your metabolic dysfunction',
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
            Ready to reset your metabolism?
          </h2>
          <p className="mt-4 text-white/90 text-[17px]">
            Let's evaluate your situation and determine if the IMI: Metabolic Reset & Renewal pathway is right for you.
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
