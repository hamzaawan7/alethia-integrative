import { Link } from 'react-router-dom';

export default function IntegrativeMedicineIntensiveContent() {
  return (
    <div className="text-slate-700 mt-4 max-w-[620px] space-y-5">
      {/* Short intro for the grid layout */}
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Focused programs designed to restore function, resolve what's been stuck, and optimize performance.</p>
        <p className="mt-2 text-slate-600">For those ready to go beyond base camp and climb to the summit.</p>
      </div>

      {/* Brief intro */}
      <div className="space-y-3">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Summit Paths</p>
        <h3 className="text-[22px] font-semibold text-[rgb(38,69,123)]">For those ready to climb higher.</h3>
        <p className="text-[15px] leading-relaxed">
          Some people get to base camp and realize they want more. Maybe you've been stuck at the same altitude for too long, managing symptoms that never fully resolve. Maybe you're facing a challenge that requires focused effort.
        </p>
      </div>
    </div>
  );
}

// Full page content component to be rendered outside the grid
export function IntegrativeMedicineIntensiveFullContent() {
  return (
    <div className="bg-white">
      {/* What is an IMI */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What is an IMI?</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            What is an Integrative Medicine Intensive?
          </h2>
          <div className="mt-8 space-y-5 text-gray-700 text-[17px] leading-[1.8]">
            <p>
              An IMI is a structured, time-limited engagement—typically <strong>90 days</strong>—where we go deep. We're not managing your symptoms indefinitely. We're identifying root causes, implementing targeted interventions, and building a foundation you can sustain.
            </p>
            <p className="font-medium text-[rgb(38,69,123)]">
              You'll work closely with Dr. Dodge and our provider team.
            </p>
            <p>
              Nutritional consultations are provided by Sara Miller, M.Ed., INHC. Therapies and supplements—including IV infusions, hyperbaric oxygen, and regenerative treatments—are woven in based on what your body needs to restore balance and heal from within.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">Three Pathways</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Three Pathways to the Summit
          </h2>
          <p className="mt-6 text-gray-700 text-[17px] leading-[1.8]">
            We've designed three focused IMI pathways based on the most common challenges our patients face. Each is customized to you, but the framework ensures we're not guessing.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Pathway 1 */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#C75A33]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="h-2 bg-[#C75A33]"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-[#C75A33]/10 flex items-center justify-center mb-4 group-hover:bg-[#C75A33] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#C75A33] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Foundational Health Shift</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  For those dealing with fatigue, brain fog, gut dysfunction, or chronic inflammation. We dig into the root causes and build a protocol that restores your baseline.
                </p>
                <Link 
                  to="/service/foundational-health-shift"
                  className="inline-flex items-center gap-2 text-[#C75A33] font-semibold text-[14px] hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#C75A33]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="h-2 bg-[rgb(38,69,123)]"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-[rgb(38,69,123)]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(38,69,123)] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[rgb(38,69,123)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Hormone Balance & Vitality</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  For those experiencing hormonal decline, metabolic dysfunction, or loss of vitality. We optimize the full hormonal picture using bioidentical hormones and peptides.
                </p>
                <Link 
                  to="/service/hormone-balance-vitality"
                  className="inline-flex items-center gap-2 text-[#C75A33] font-semibold text-[14px] hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#C75A33]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="h-2 bg-[#C75A33]"></div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-[#C75A33]/10 flex items-center justify-center mb-4 group-hover:bg-[#C75A33] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#C75A33] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Regenerative Restoration</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  For those with joint pain, soft tissue injuries, or structural issues limiting function. We combine regenerative cell therapies and peptides to help repair damage.
                </p>
                <Link 
                  to="/service/regenerative-restoration"
                  className="inline-flex items-center gap-2 text-[#C75A33] font-semibold text-[14px] hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Process</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-white leading-tight font-bold">
            How an IMI Works
          </h2>
          <p className="mt-6 text-white/80 text-[17px] leading-[1.8]">
            Every IMI follows a structured 90-day framework designed to take you from discovery to lasting results.
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                num: '01',
                title: 'Discovery',
                desc: 'Comprehensive intake, advanced testing, and building a complete picture of where you are. We leave no stone unturned.',
                duration: 'Weeks 1-2'
              },
              {
                num: '02',
                title: 'Implementation',
                desc: 'Targeted interventions, therapies, and protocols based on your unique needs. This is where we do the work.',
                duration: 'Weeks 3-10'
              },
              {
                num: '03',
                title: 'Optimization',
                desc: 'Fine-tuning your protocol based on your response and building a sustainable maintenance plan for ongoing success.',
                duration: 'Weeks 11-12'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#C75A33] flex items-center justify-center text-white font-bold text-2xl">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm">{step.duration}</span>
                  </div>
                  <p className="mt-2 text-white/80 text-[16px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What's Included</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Everything you need for real transformation.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { icon: 'user', title: 'Direct Access to Dr. Dodge', desc: 'Regular consultations and ongoing communication throughout your intensive.' },
              { icon: 'clipboard', title: 'Comprehensive Testing', desc: 'Advanced labs and diagnostics to build a complete picture of your health.' },
              { icon: 'heart', title: 'Nutritional Consultations', desc: 'Sessions with Sara Miller, M.Ed., INHC for personalized nutrition guidance.' },
              { icon: 'flask', title: 'IV Therapy Sessions', desc: 'Targeted infusions based on your specific needs and protocol.' },
              { icon: 'sun', title: 'Hyperbaric Oxygen Therapy', desc: 'HBOT sessions as indicated by your treatment plan.' },
              { icon: 'pill', title: 'Supplements & Medications', desc: 'Pharmaceutical-grade supplements and prescriptions as needed.' },
              { icon: 'refresh', title: 'Regenerative Treatments', desc: 'PRP, peptides, and other regenerative therapies based on your pathway.' },
              { icon: 'chart', title: 'Progress Monitoring', desc: 'Regular check-ins and lab rechecks to track your improvements.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgb(38,69,123)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(38,69,123)]">{item.title}</h4>
                  <p className="text-gray-600 text-[14px] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">Who This Is For</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            IMIs are for people who are ready.
          </h2>
          
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-green-600 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                An IMI is for you if:
              </h4>
              <ul className="space-y-3 text-gray-700 text-[15px]">
                {[
                  "You take ownership of your health and want real answers",
                  "You're ready to invest time, resources, and effort for real change",
                  "You've tried conventional approaches without lasting results",
                  "You want to understand the root causes, not just manage symptoms",
                  "You're committed to doing the work required for transformation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-500 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                An IMI may not be right if:
              </h4>
              <ul className="space-y-3 text-gray-600 text-[15px]">
                {[
                  "You're looking for a quick fix or magic pill",
                  "You prefer passive care without personal involvement",
                  "You're not ready to commit to a 90-day program",
                  "You expect results without lifestyle changes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-700 text-[17px] font-medium">
            If you've been stuck, if you've tried everything, if you know there's another level—<span className="text-[rgb(38,69,123)]">this is how you get there.</span>
          </p>
        </div>
      </section>

      {/* Investment */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Investment</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Real results require real commitment.
          </h2>
          <div className="mt-8 space-y-5 text-gray-700 text-[17px] leading-[1.8]">
            <p>
              IMI pricing varies based on the pathway and specific therapies included. During your discovery call, we'll discuss your situation, recommend the appropriate pathway, and provide a clear breakdown of your investment.
            </p>
            <p>
              We operate completely outside the insurance system. This is what allows us to practice medicine this way—without restrictions, without prior authorizations, without someone else deciding what you can and can't do with your own body.
            </p>
            <p className="font-medium text-[rgb(38,69,123)]">
              For patients who complete an IMI, ongoing care can transition to our DPC membership for continued optimization and access.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="container max-w-[800px] px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] text-white font-bold">Ready to climb higher?</h2>
          <p className="mt-6 text-white/90 text-[17px] leading-relaxed">
            If you're done settling for "normal" and ready to discover what's actually possible, let's talk. We'll help you determine which IMI pathway is right for your situation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 px-10 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-bold bg-[#C75A33] hover:bg-[#B3502E] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:531-333-2037"
              className="inline-block px-8 py-4 text-white text-[16px] font-medium hover:text-white/80 transition-colors"
            >
              Or call: 531-333-2037
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
