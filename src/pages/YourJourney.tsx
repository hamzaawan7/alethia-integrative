import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';
import LocationLincoln from '../components/LocationLincoln';

export default function YourJourney() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="bg-[rgb(38,69,123)] text-white py-20">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] md:text-[48px] leading-tight font-semibold tracking-wide">
            This isn't the medicine you're used to.
          </h1>
          <p className="mt-4 text-[17px] opacity-95 max-w-[700px] mx-auto">
            Aletheia Integrative Medical exists because the conventional model keeps people stuck in the valley.
          </p>
        </div>
      </section>

      {/* Base Camp Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1000px] px-6">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold">Base Camp</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-semibold">
            Base Camp: Higher than most will ever climb.
          </h2>
          <div className="mt-8 space-y-5 text-slate-700 text-[16px] leading-relaxed">
            <p>
              Most people are stuck in the valley. Rushed appointments with rotating providers. Labs that come back "normal" while they still feel terrible. No continuity, no relationship, no one paying attention.
            </p>
            <p>
              Membership at Aletheia gets you out of the valley and onto the mountain.
            </p>
            <p>
              As an Aletheia member, you have a physician who actually knows you. You're seen twice a year for comprehensive wellness visits focused on prevention, optimization, and catching issues early. When something acute comes up, we're here. You have direct access to your provider and a medical home you can rely on.
            </p>
            <p>
              Even at base camp, the Aletheia philosophy applies. We take an integrative approach to your primary care, looking at the whole person rather than isolated symptoms. We believe your body has an innate capacity to heal, and our job is to support that process. And because we've stepped outside the insurance system, you have the freedom to make your own healthcare choices without a third party deciding what's allowed.
            </p>
            <p>
              For many people, base camp is exactly the right altitude. It's stable, it's sustainable, and it's higher than most will ever reach. You're not settling. You're building a foundation.
            </p>
            <p className="font-semibold text-[rgb(38,69,123)]">
              This is the membership model for people who want prevention, continuity, and optimization—not reactionary, rushed care.
            </p>
          </div>

          {/* Membership includes list */}
          <div className="mt-10 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-[22px] text-[rgb(38,69,123)] font-semibold mb-6">Aletheia membership includes:</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Two comprehensive wellness visits per year',
                'Acute care when you need it',
                'Direct access to your provider',
                'Discounts on therapies and supplements',
                'A real relationship with continuity',
                'An integrative approach to your care',
                'Freedom from insurance restrictions',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C75A33] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/service/primary-care"
              className="inline-block px-6 py-3 text-white text-[13px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200"
            >
              Learn More About DPC Membership →
            </Link>
          </div>
        </div>
      </section>

      {/* Summit Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1000px] px-6">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold">Summit Paths</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-semibold">
            The Summit Paths: For those ready to climb higher.
          </h2>
          <div className="mt-8 space-y-5 text-slate-700 text-[16px] leading-relaxed">
            <p>
              Some people get to base camp and realize they want more.
            </p>
            <p>
              Maybe you've been stuck at the same altitude for years, managing symptoms that never fully resolve. Maybe you're facing a new challenge that requires focused attention and a dedicated guide. Maybe you've optimized everything you can on your own and want to see how much higher you can go.
            </p>
            <p>
              That's when we gear up for an Integrative Medicine Intensive.
            </p>
            <p>
              An IMI is where our integrative philosophy goes deepest. We investigate root causes using comprehensive functional testing. We support your body's ability to heal from within with targeted protocols. We draw on advanced therapies that work with your body's natural systems. And we do all of this with the medical freedom that comes from operating outside insurance constraints.
            </p>
            <p>
              You'll work closely with Dr. Dodge and our provider team. Nutritional consultations are provided by Sara Miller, M.Ed., INHC. Therapies such as IV infusions, hyperbaric oxygen, and regenerative medicine are integrated based on what your body needs to restore balance.
            </p>
            <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">
              This isn't maintenance. This is transformation.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/service/integrative-medicine-intensive"
              className="inline-block px-6 py-3 text-white text-[13px] uppercase tracking-[0.15em] font-semibold bg-[rgb(38,69,123)] hover:bg-[#1F3761] transition-colors duration-200"
            >
              Learn More About IMI Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1000px] px-6">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold text-center">How It Works</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-semibold text-center">
            How it works.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Reach Out',
                description: 'Give us a call or schedule a time for us to call you. We\'ll learn about your situation and help you figure out the right starting point.',
              },
              {
                step: '2',
                title: 'Choose Your Path',
                description: 'Based on our conversation, you\'ll either begin with an Aletheia membership or move into an Integrative Medicine Intensive. The path fits your situation.',
              },
              {
                step: '3',
                title: 'Climb',
                description: 'Whether you\'re building a foundation at base camp or pushing toward a summit, we\'re with you. Adjusting your plan, addressing new challenges, helping you reach and maintain your peak.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[rgb(38,69,123)] flex items-center justify-center">
                  <span className="text-white text-[24px] font-bold">{item.step}</span>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold text-[rgb(38,69,123)]">{item.title}</h3>
                <p className="mt-3 text-slate-700 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Peak Health Looks Like */}
      <section className="py-16 bg-[rgb(29,46,76)]">
        <div className="container max-w-[900px] px-6 text-center">
          <p className="text-[#C75A33] text-[14px] uppercase tracking-[0.2em] font-semibold">What Peak Health Looks Like</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] text-white leading-tight font-semibold">
            What peak health looks like.
          </h2>
          <div className="mt-8 space-y-5 text-white/90 text-[16px] leading-relaxed">
            <p>
              Peak health isn't about perfection. It's about freedom.
            </p>
            <p>
              Energy that lasts through demanding days. Mental clarity when the stakes are high. A body that recovers, adapts, and supports everything you're building.
            </p>
            <p>
              For some patients, that means finally resolving symptoms that have held them back for years. For others, it means optimizing what's already working so they can perform at their peak. For everyone, it means having a partner who's paying attention and thinking ahead.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="tel:531-333-2037"
              className="inline-block px-8 py-4 text-white text-[14px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200"
            >
              Ready to start? Give us a call.
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <LocationLincoln />

      {/* Footer CTA */}
      <FooterCTA />
    </main>
  );
}
