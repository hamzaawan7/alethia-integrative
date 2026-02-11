import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function FoundationalHealthShiftContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Stop managing symptoms. Start getting answers.</p>
        <p className="mt-2 text-slate-600">Built for high performers and busy adults who are stuck and want a true root-cause investigation.</p>
      </div>
      
      <p className="text-slate-600">
        The Foundational Health Shift is our flagship 90-day intensive for patients who have been through the conventional system without answers. If you're tired of hearing "your labs look fine" when you know something is wrong, this program is designed for you.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function FoundationalHealthShiftFullContent() {
  const whatsIncluded = [
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Deep-Dive Initial Consultation', 
      description: 'We start by really understanding your story—not just your symptoms, but your history, lifestyle, previous treatments, and goals.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Comprehensive Functional Testing', 
      description: 'Advanced labs and assessments to uncover what\'s actually going on beneath the surface—tests most doctors don\'t know to order.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Detailed Findings Review', 
      description: 'We walk you through your results in plain language. You\'ll understand what\'s happening in your body and why.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'Personalized Protocol', 
      description: 'A protocol designed specifically for you—targeted supplements, dietary modifications, lifestyle changes, and therapeutic interventions.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Therapeutic Interventions', 
      description: 'IV therapy, peptides, hormone support, or other advanced therapies—tailored to what your body needs.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Nutritional Consultations', 
      description: 'Work with Sara Miller, M.Ed., INHC to implement dietary changes and build sustainable eating patterns.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Regular Check-Ins', 
      description: 'We meet regularly throughout the 90 days to assess your progress and adjust your protocol as needed.' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Direct Access', 
      description: 'Questions come up between appointments. You\'ll have direct access to our team—never left wondering.' 
    },
  ];

  const commonConcerns = [
    'Chronic fatigue that doesn\'t improve with rest',
    'Brain fog and cognitive issues',
    'Digestive problems (bloating, IBS, food sensitivities)',
    'Autoimmune symptoms or diagnosis',
    'Chronic inflammation and pain',
    'Hormonal imbalances',
    'Sleep disturbances',
    'Anxiety, depression, or mood issues',
    'Unexplained weight changes',
    'Feeling "off" without a clear diagnosis',
  ];

  const phases = [
    { 
      phase: 'Phase 1', 
      weeks: 'Weeks 1-3', 
      title: 'Investigation', 
      description: 'We gather the data. Comprehensive intake, advanced testing, and assessment. By the end of this phase, we have a clear picture of what\'s happening in your body.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    { 
      phase: 'Phase 2', 
      weeks: 'Weeks 3-6', 
      title: 'Protocol Launch', 
      description: 'We review your findings together and you start your personalized protocol. This phase is about laying the foundation—implementing changes and starting targeted interventions.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    { 
      phase: 'Phase 3', 
      weeks: 'Weeks 6-12', 
      title: 'Optimization', 
      description: 'We monitor your response, retest key markers, and refine your protocol. This is where the transformation deepens. Most patients begin feeling significantly better during this phase.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
  ];

  const whyUs = [
    { title: 'Depth of investigation', description: 'We run tests most doctors don\'t know to order—and we know how to interpret them in context.' },
    { title: 'Time and attention', description: 'You\'re not being shuffled through a 10-minute visit. This is 90 days of focused partnership.' },
    { title: 'Integrative approach', description: 'We combine the best of conventional medicine with functional diagnostics and advanced therapies.' },
    { title: 'Root cause focus', description: 'We want to understand why your symptoms are happening and address that.' },
    { title: 'Whole-person care', description: 'We look at the whole picture—body, lifestyle, environment, and history.' },
    { title: 'Ongoing relationship', description: 'After the intensive, continue with DPC membership and maintain your gains.' },
  ];

  return (
    <>
      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">The Problem</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            You've tried everything.<br />And you're still stuck.
          </h2>
          
          <div className="mt-12 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <p>
              You're not someone who gives up. You've seen the doctors—multiple doctors. You've tried the diets, the supplements, the protocols you found online. You've done the elimination experiments, tracked your symptoms, and researched until 2am.
            </p>
            <p>
              And yet, here you are. Still exhausted. Still foggy. Still dealing with symptoms that no one can explain. Still hearing <span className="font-semibold text-[rgb(38,69,123)]">"your labs look fine"</span> when you know something is wrong.
            </p>
            <p>
              The conventional system wasn't built for you. It's built for acute problems with obvious solutions. But for the kind of complex, interconnected issues you're dealing with? The system falls apart.
            </p>
          </div>
        </div>
      </section>

      {/* The Aletheia Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">The Aletheia Approach</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            A 90-day deep dive into<br />what's actually going on.
          </h2>
          
          <div className="mt-12 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <p>
              The Foundational Health Shift is our flagship program—designed for patients who are stuck and ready for real answers.
            </p>
            <p>
              This isn't a quick fix. It's not a prescription based on a 10-minute conversation. It's a comprehensive, 90-day intensive where we investigate the underlying causes of your symptoms, build a personalized protocol, and guide you through transformation.
            </p>
            <p>
              We believe your body is designed to heal from within. But it can't heal what we don't understand. That's why we start with investigation—<span className="font-semibold text-[rgb(38,69,123)]">real investigation</span>—before we start throwing solutions at the problem.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">Who This Is For</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            You might be a Foundational Health Shift patient if...
          </h2>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-[20px] font-semibold text-[rgb(38,69,123)] mb-6">Signs You're Ready</h3>
              <ul className="space-y-4">
                {[
                  'You\'ve been dealing with chronic symptoms no one can explain',
                  'You\'ve seen multiple doctors without getting real answers',
                  'Your labs come back "normal" but you still feel terrible',
                  'You\'re exhausted, foggy, inflamed, or just not yourself',
                  'You suspect something deeper is going on',
                  'You\'re ready to invest serious time and resources into finally figuring this out',
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

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-[20px] font-semibold text-[rgb(38,69,123)] mb-6">Common Concerns We Address</h3>
              <div className="grid grid-cols-1 gap-3">
                {commonConcerns.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#C75A33] font-bold">•</span>
                    <span className="text-slate-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">What's Included</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            90 days of comprehensive,<br />hands-on support.
          </h2>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsIncluded.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-[#C75A33] mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[rgb(38,69,123)] text-[16px]">{item.title}</h4>
                <p className="mt-2 text-slate-600 text-[14px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - 90 Days */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">The Process</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            How the 90 days unfold.
          </h2>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {phases.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C75A33] text-white rounded-full flex items-center justify-center text-[20px] font-bold">
                  {idx + 1}
                </div>
                <div className="text-[rgb(38,69,123)] mb-4">
                  {item.icon}
                </div>
                <span className="text-[#C75A33] text-[11px] uppercase tracking-wider font-semibold">{item.weeks}</span>
                <h4 className="mt-2 text-[22px] font-semibold text-[rgb(38,69,123)]">{item.title}</h4>
                <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* After 90 Days */}
          <div className="mt-12 p-8 bg-[rgb(38,69,123)] rounded-xl text-center">
            <h4 className="text-[24px] font-semibold text-white">After 90 Days</h4>
            <p className="mt-4 text-white/90 text-[16px] max-w-2xl mx-auto leading-relaxed">
              The Foundational Health Shift doesn't end at day 90—but the intensive phase does. From here, you can transition to DPC membership for ongoing care and optimization, or continue with targeted follow-up as needed. The foundation we've built together becomes the base camp for your long-term health.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold text-center">What to Expect</p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            This is real work.<br />The results are real too.
          </h2>
          
          <div className="mt-12 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <p>
              This program requires commitment. You'll need to show up for appointments, follow your protocol, make dietary and lifestyle changes, and stay engaged in the process. <span className="font-semibold text-[rgb(38,69,123)]">This is a partnership</span>—we bring the expertise, you bring the effort.
            </p>
            <p>
              Healing takes time. Some patients feel better within weeks. Others take longer, especially if they've been sick for years. We're honest about this. We're looking for lasting transformation, not quick fixes that fade.
            </p>
          </div>

          <div className="mt-10 p-8 bg-gray-50 rounded-xl">
            <h4 className="text-[20px] font-semibold text-[rgb(38,69,123)] mb-6">Most patients experience:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Significant improvement in energy and mental clarity',
                'Reduction or resolution of chronic symptoms',
                'Better sleep and stress resilience',
                'Improved digestion and reduced inflammation',
                'A clear understanding of what was driving their issues',
                'A sustainable path forward for maintaining gains',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Foundational Health Shift */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[rgb(38,69,123)] text-center leading-tight">
            This isn't another doctor's appointment.<br />It's a different level of care.
          </h2>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-[rgb(38,69,123)] text-[17px]">{item.title}</h4>
                <p className="mt-2 text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This Right for You */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[24px] font-semibold text-[rgb(38,69,123)]">The Foundational Health Shift is right for you if...</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'You\'re stuck and ready for answers',
                  'You\'ve been through the conventional system without resolution',
                  'You\'re willing to invest 90 days and significant resources',
                  'You\'re ready to be an active participant in your healing',
                  'You want a provider who will dig deep and tell you the truth',
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

            <div>
              <h3 className="text-[24px] font-semibold text-slate-700">This program may not be right for you if:</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'You\'re looking for a quick fix or magic pill',
                  'You\'re not ready to make dietary and lifestyle changes',
                  'You want someone else to fix you while you stay passive',
                  'You\'re in an acute medical crisis (we\'ll help you get appropriate care first)',
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
            Ready to finally get answers?
          </h2>
          <p className="mt-6 text-white/90 text-[18px] leading-relaxed">
            If you've been stuck in the valley and you're ready to climb, let's talk. We'll evaluate your situation and help you determine if the Foundational Health Shift is the right path for you.
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
