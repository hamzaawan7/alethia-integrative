import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function PrimaryCareContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">Base Camp</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Base Camp: Higher than most will ever climb.</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        Most people are stuck in the valley of healthcare. Rushed appointments, rotating providers, dismissed concerns. Direct Primary Care gets you out of the valley and onto the mountain.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        <strong className="text-[rgb(38,69,123)]">DPC</strong> is a membership model that removes insurance from the equation and puts the relationship where it belongs: between you and your physician.
      </p>
    </div>
  );
}

// Full content for below the grid - full width
export function PrimaryCareFullContent() {
  const membershipBenefits = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Two comprehensive wellness visits per year',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Acute care appointments when needed',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Direct access to your provider',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Priority scheduling',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Discounts on therapies and supplements',
    },
  ];

  return (
    <>
      {/* What is DPC */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Understanding DPC</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                What is Direct Primary Care?
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a member, you're seen twice yearly for comprehensive wellness visits. These aren't your typical 10-minute physicals. We take time to understand what's happening, review your labs in context, and focus on prevention and optimization. When acute issues come up, we're here. You have direct access to your provider and a medical home you can count on.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-[rgb(38,69,123)] font-semibold text-[17px] mb-4">The Aletheia approach, even at base camp:</p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'We take an integrative view, looking at the whole person',
                    "We support your body's innate ability to heal rather than just managing symptoms",
                    'We blend conventional medicine with functional insights',
                    'You have complete medical freedom, no insurance company involved in your care decisions',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C75A33] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665849.jpg"
                  alt="Doctor consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C75A33] rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Membership Benefits</p>
            <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
              What's Included in Your DPC Membership
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-[rgb(38,69,123)] mb-4">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium text-[15px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What DPC is not */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Setting Expectations</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                What DPC is not
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  'Unlimited visits for complex or unstable chronic conditions',
                  'Ongoing intensive support for deep-dive functional or investigative care',
                  'Continuous messaging about unresolved symptoms',
                  '24/7 or emergency care',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-600 leading-relaxed">
                If you need more than base camp, that's what our Integrative Medicine Intensives are for. Many patients start with DPC and add an IMI when they're ready to climb higher.
              </p>
            </div>
            <div>
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">For Businesses</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                Employer Health Partnerships
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                We also offer employer health partnerships for local businesses. Give your team access to high-quality, relationship-based primary care that reduces absenteeism and supports long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Climb Higher */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-white leading-tight">
            Ready to Climb Higher?
          </h2>
          <p className="mt-6 text-white/90 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Some people reach base camp and realize they want more. Maybe you've been managing symptoms that never fully resolve. Maybe you want to see what peak performance really feels like. That's when we gear up for an <strong>Integrative Medicine Intensive (IMI)</strong>—a focused program designed to restore function, resolve what's been stuck, and optimize your health.
          </p>
          <div className="mt-8">
            <Link 
              to="/service/integrative-medicine-intensive"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Learn About IMI Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
            Questions about DPC?
          </h2>
          <p className="mt-4 text-slate-600 text-[17px]">
            Call us to learn more about membership and how Direct Primary Care works.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:531-333-2037"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Call 531-333-2037
            </a>
            <Link 
              to="/lets-talk"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200 rounded"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
