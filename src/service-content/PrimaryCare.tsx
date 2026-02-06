import { Link } from 'react-router-dom';

// Short intro for 2-column grid
export default function PrimaryCareContent() {
  return (
    <div className="text-slate-700 mt-4 space-y-6">
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold mb-2">Base Camp</p>
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Direct Primary Care: A Higher Standard</p>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        Most people never make it out of the valley. They're stuck with 10-minute appointments, providers who don't know their name, and a system designed for volume, not outcomes.
      </p>
      
      <p className="text-slate-600 leading-relaxed">
        <strong className="text-[rgb(38,69,123)]">Direct Primary Care (DPC)</strong> gets you to base camp—the stable foundation you need before climbing higher.
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Direct access to your physician',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Same-day or next-day appointments',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Extended visit times for thorough evaluation',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Preventive care and health optimization focus',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Coordination of care when specialists are needed',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Discounts on regenerative therapies & supplements',
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'A true partnership in your health',
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
                  DPC is membership-based primary care that removes insurance barriers and restores the doctor–patient relationship. No billing codes dictating what we can offer. No third parties between you and your care.
                </p>
                <p>
                  For a predictable monthly fee, you get a physician who actually knows you. You're seen twice a year for comprehensive wellness visits focused on prevention and optimization. When acute issues come up, we're here. You have direct access and a medical home you can rely on.
                </p>
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
                <div className="w-12 h-12 bg-[rgba(38,69,123,0.1)] rounded-lg flex items-center justify-center text-[rgb(38,69,123)] mb-4">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium text-[15px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                  alt="Healthcare partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">Who It's For</p>
              <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[rgb(38,69,123)] leading-tight">
                Who DPC Is For
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Direct Primary Care works for adults who want a doctor who knows them. Whether you're healthy and focused on staying that way, managing chronic conditions, or simply tired of the conveyor-belt approach, DPC provides the foundation.
                </p>
                <p>
                  For small businesses, we offer <strong className="text-[rgb(38,69,123)]">employer health partnerships</strong> to support workforce wellness, reduce absenteeism, and provide personalized healthcare benefits.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[rgba(38,69,123,0.08)] text-[rgb(38,69,123)] rounded-full text-sm font-medium">Health-Focused Adults</span>
                <span className="px-4 py-2 bg-[rgba(38,69,123,0.08)] text-[rgb(38,69,123)] rounded-full text-sm font-medium">Chronic Condition Management</span>
                <span className="px-4 py-2 bg-[rgba(38,69,123,0.08)] text-[rgb(38,69,123)] rounded-full text-sm font-medium">Small Businesses</span>
              </div>
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
            Experience the Difference
          </h2>
          <p className="mt-4 text-slate-600 text-[17px]">
            Care that treats the whole person, not just the symptoms.
          </p>
          <p className="mt-6 text-slate-600">
            Call Aletheia Integrative today at <a href="tel:531-333-2037" className="text-[#C75A33] font-semibold hover:underline">531-333-2037</a> to schedule your visit or book online anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/lets-talk"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200 rounded"
            >
              Let's Talk
            </Link>
            <Link 
              to="/book-online"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200 rounded"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
