import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function CognitivePreservationRepairContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">IMI Pathway</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">IMI: Cognitive Preservation & Repair</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        For patients experiencing brain fog, memory concerns, cognitive decline, or those with a family history who want to be proactive about brain health.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        We investigate the underlying factors affecting your cognitive function—from inflammation and hormones to toxins and nutrient deficiencies—and build a protocol designed to protect and restore your brain.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function CognitivePreservationRepairFullContent() {
  return (
    <>
      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Challenge</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Cognitive decline is not inevitable.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Brain fog, memory concerns, difficulty concentrating—these aren't just signs of aging. They're signals that something is happening beneath the surface. And the conventional system often has little to offer beyond "it's just stress" or "that's normal for your age."
            </p>
            <p>
              This is focused, evidence-based work for those who refuse to accept cognitive decline as inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            A 90-day protocol to protect and restore your brain.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              We investigate the underlying factors affecting your cognitive function—from inflammation and hormones to toxins and nutrient deficiencies—and build a protocol designed to protect and restore your brain.
            </p>
            <p>
              You'll work closely with Dr. Dodge and our provider team throughout the program. Therapies may include targeted supplementation, hormone optimization, IV therapy, hyperbaric oxygen, and lifestyle modifications designed to support brain health.
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
              'You\'re experiencing brain fog, memory issues, or difficulty concentrating',
              'You have a family history of cognitive decline or dementia',
              'You want to be proactive about protecting your brain health',
              'You\'ve been told cognitive decline is "just aging"',
              'You\'re ready to investigate the root causes affecting your cognition',
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
            Ready to protect your cognitive health?
          </h2>
          <p className="mt-4 text-white/90 text-[17px]">
            Let's evaluate your situation and determine if the IMI: Cognitive Preservation & Repair pathway is right for you.
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
