import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function RegenerativeRestorationContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Repair. Rebuild. Restore function. Without surgery.</p>
        <p className="mt-2 text-slate-600">Built for active adults who want to restore function and avoid surgery when possible.</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        Regenerative therapy harnesses your body's natural healing mechanisms to repair damaged tissue, reduce inflammation, and restore function. If you've been told surgery is your only option, there may be another path.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function RegenerativeRestorationFullContent() {
  const therapies = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Regenerative Cell Therapy',
      description: 'We use advanced biologic products containing growth factors and signaling molecules that support tissue regeneration. These therapies stimulate your body\'s own repair mechanisms, reduce inflammation, and promote healing at the cellular level.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'Peptide Therapy',
      description: 'Peptides are short chains of amino acids that act as signaling molecules. Specific peptides can promote tissue repair, reduce inflammation, support collagen production, and accelerate healing—used alongside regenerative cell therapy or on its own.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Supporting Therapies',
      description: 'Regenerative treatments work best when your whole system is optimized. We may incorporate IV therapy, near infrared light therapy, hyperbaric oxygen, nutritional support, and lifestyle modifications to enhance your results.',
    },
  ];

  const conditions = [
    { area: 'Knee pain', conditions: 'Osteoarthritis, meniscus injuries, ligament sprains' },
    { area: 'Shoulder pain', conditions: 'Rotator cuff injuries, tendonitis, bursitis, frozen shoulder' },
    { area: 'Back & neck', conditions: 'Disc degeneration, facet joint pain, ligament injuries' },
    { area: 'Hip pain', conditions: 'Arthritis, labral tears, bursitis' },
    { area: 'Elbow pain', conditions: 'Tennis elbow, golfer\'s elbow' },
    { area: 'Wrist & hand', conditions: 'Carpal tunnel, arthritis, tendonitis' },
    { area: 'Ankle & foot', conditions: 'Plantar fasciitis, Achilles tendonitis, arthritis' },
    { area: 'Sports injuries', conditions: 'Muscle strains, tendon injuries, overuse' },
    { area: 'Post-surgical', conditions: 'Incomplete healing, lingering pain, scar tissue' },
  ];

  const imiIncludes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Comprehensive Evaluation',
      description: 'We assess your condition thoroughly—not just the joint but the whole picture: movement patterns, inflammation, nutritional status, and any underlying factors slowing healing.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Targeted Regenerative Treatments',
      description: 'Based on your evaluation, we design a protocol using the most appropriate regenerative therapies for your specific situation.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Supporting Therapies',
      description: 'Regenerative injections work better with proper support. We incorporate IV therapy, light therapy, hyperbaric oxygen, and nutritional support.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Ongoing Monitoring',
      description: 'Over 90 days, we track your progress, adjust your protocol as needed, and ensure real restoration—not just temporary relief.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Integration with Your Care',
      description: 'After your IMI, transition to DPC membership for ongoing support, or continue with maintenance treatments as needed.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We evaluate your condition, review imaging or previous treatments, and determine if regenerative therapy is right for you. If we don\'t think it will help, we\'ll tell you directly.',
    },
    {
      step: '02',
      title: 'Treatment Sessions',
      description: 'Regenerative treatments are performed in-office and are minimally invasive. Most patients experience only mild discomfort and can return to normal activities within a day or two.',
    },
    {
      step: '03',
      title: 'Healing Phase',
      description: 'Unlike steroid injections that mask pain temporarily, regenerative therapy stimulates actual tissue repair. Many patients notice improvement within 4-6 weeks, with continued progress over 3-6 months.',
    },
    {
      step: '04',
      title: 'Long-lasting Results',
      description: 'Because we\'re supporting tissue repair rather than suppressing symptoms, benefits are often long-lasting. Many patients experience years of relief from a single treatment protocol.',
    },
  ];

  return (
    <>
      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">The Problem</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            You've been told your only options are<br />manage the pain or go under the knife.
          </h2>
          
          <div className="mt-12 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <p>
              You're dealing with joint pain that won't quit. Maybe it's a knee that's been grinding for years. A shoulder that never fully healed after an injury. A back that limits everything you want to do.
            </p>
            <p>
              You've tried rest. Physical therapy. Anti-inflammatories. Steroid injections that helped for a while, then stopped working. And now someone's suggesting surgery, with all the risks, recovery time, and uncertainty that comes with it.
            </p>
            <p className="text-[rgb(38,69,123)] font-semibold text-[18px] p-6 bg-white rounded-xl border-l-4 border-[#C75A33]">
              But here's what the conventional system often misses: your body already knows how to heal. It just needs the right support to do it.
            </p>
          </div>
        </div>
      </section>

      {/* The Aletheia Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Aletheia Approach</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Regenerative medicine that works<br />with your body, not around it.
          </h2>
          
          <div className="mt-10 space-y-6 text-slate-600 text-[17px] leading-relaxed text-left max-w-3xl mx-auto">
            <p>
              Regenerative therapy harnesses your body's natural healing mechanisms to repair damaged tissue, reduce inflammation, and restore function. Instead of masking symptoms or cutting out the problem, we stimulate your body's natural repair processes at the cellular level.
            </p>
            <p>
              This isn't experimental wishful thinking. These therapies have been refined through years of research and clinical use, and proven effective for patients who want to avoid surgery or have hit a wall with conventional treatments.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">What We Offer</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            Advanced Regenerative Therapies
          </h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Every patient is different. We assess your specific situation and design a protocol using the most appropriate therapies for your condition.
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {therapies.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-[rgb(38,69,123)] mb-6">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[rgb(38,69,123)] text-[20px]">{item.title}</h4>
                <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Conditions We Treat</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                What Regenerative Therapy Can Help
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Regenerative therapy is effective for a wide range of musculoskeletal conditions. If you've been told surgery is your only option, there may be another path.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 gap-4">
                {conditions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-[#C75A33] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-[rgb(38,69,123)]">{item.area}:</span>{' '}
                      <span className="text-slate-600 text-[14px]">{item.conditions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose an IMI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">Why Choose an IMI</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            This isn't a one-and-done injection.<br />It's a 90-day intensive.
          </h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            You can get regenerative injections at a lot of places. What makes Aletheia different is the intensive, integrative approach.
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imiIncludes.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[#C75A33] mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[rgb(38,69,123)] text-[17px]">{item.title}</h4>
                <p className="mt-2 text-slate-600 text-[14px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect - Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">What to Expect</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            The Process Is Straightforward.<br />The Results Can Be Life-Changing.
          </h2>
          
          <div className="mt-12 space-y-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[rgb(38,69,123)] text-white rounded-xl flex items-center justify-center text-[24px] font-bold">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h4 className="font-semibold text-[rgb(38,69,123)] text-[20px]">{item.title}</h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This Right for You */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-[24px] font-semibold text-[rgb(38,69,123)]">Regenerative Restoration may be right for you if...</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'You have chronic joint pain, soft tissue injuries, or degenerative conditions',
                  'You want to avoid surgery or have had surgery that didn\'t fully resolve the problem',
                  'You\'ve tried conventional treatments without lasting relief',
                  'You\'re willing to invest in a comprehensive approach, not just a quick fix',
                  'You believe your body can heal when given the right support',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-[24px] font-semibold text-slate-700">This pathway may not be right for you if:</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Your condition requires immediate surgical intervention',
                  'You\'re looking for instant results (regenerative therapy takes time)',
                  'You\'re not willing to make lifestyle changes that support healing',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[rgb(38,69,123)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight">
            Ready to Explore Regenerative Restoration?
          </h2>
          <p className="mt-6 text-white/90 text-[18px] leading-relaxed">
            If you're tired of managing pain and ready to actually heal, let's talk. We'll evaluate your situation and help you determine if the IMI: Regenerative Restoration pathway is right for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-block px-10 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Let's Talk
            </Link>
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
