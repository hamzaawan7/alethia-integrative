import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function AdvancedRecoverySupportContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">IMI Pathway</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IMI: Advanced Recovery Support</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        For patients recovering from serious illness, surgery, injury, or a major health event who need intensive support to get back to full function.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        We create a comprehensive recovery protocol that accelerates healing, rebuilds strength, and addresses the factors that can keep you stuck in a prolonged recovery.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function AdvancedRecoverySupportFullContent() {
  return (
    <>
      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Challenge</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Recovery shouldn't mean settling for less.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Whether you're recovering from surgery, a serious illness, an injury, or a major health event, the conventional approach to recovery often falls short. You're told to rest, wait, and hope things improve. But your body may need more targeted support to truly heal.
            </p>
            <p>
              This pathway combines advanced therapies like HBOT, IV infusions, and regenerative medicine with personalized nutrition and lifestyle support to get you back to full function.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            A comprehensive recovery protocol.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We create a comprehensive recovery protocol that accelerates healing, rebuilds strength, and addresses the factors that can keep you stuck in a prolonged recovery.
            </p>
            <p>
              Your protocol may include IV therapy for nutrient repletion, hyperbaric oxygen therapy to accelerate tissue repair, regenerative medicine to support healing, nutritional consultations with Sara Miller, M.Ed., INHC, and targeted supplementation.
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
              'You\'re recovering from surgery, illness, or a major health event',
              'Your recovery has stalled or isn\'t progressing as expected',
              'You want aggressive, comprehensive support to get back to full function',
              'You\'re willing to invest in accelerated healing',
              'You believe your body can heal when given the right support',
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
            Ready to accelerate your recovery?
          </h2>
          <p className="mt-4 text-white/90 text-[17px]">
            Let's evaluate your situation and determine if the IMI: Advanced Recovery Support pathway is right for you.
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
