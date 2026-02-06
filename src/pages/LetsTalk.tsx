import LocationLincoln from '../components/LocationLincoln';

export default function LetsTalk() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="bg-[rgb(38,69,123)] text-white py-20">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] md:text-[48px] leading-tight font-semibold tracking-wide">
            Honest talk before you call.
          </h1>
          <p className="mt-4 text-[17px] opacity-95 max-w-[700px] mx-auto">
            Aletheia Integrative Medical isn't for everyone. Here's how to know if we're the right fit.
          </p>
        </div>
      </section>

      {/* You're Probably Our Patient If */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] px-6">
          <h2 className="text-[28px] md:text-[36px] text-[rgb(38,69,123)] leading-tight font-semibold">
            You're probably our patient if...
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "You're tired of the valley.",
                description: "You've done the conventional route. Rushed appointments, dismissed concerns, labs that come back \"normal\" while you still feel terrible. You're ready for something different.",
              },
              {
                title: "You take ownership.",
                description: "You're not looking for someone to fix you while you sit back. You want to understand what's happening in your body and be part of the solution.",
              },
              {
                title: "You're willing to invest.",
                description: "Whether that's the steady commitment of DPC membership or the focused investment of an IMI, you understand that real results require real resources: your time, your energy, and yes, your money.",
              },
              {
                title: "You want a real relationship.",
                description: "You want a physician who will listen, explain, challenge you when needed, and treat you like the intelligent person you are.",
              },
              {
                title: "You're in it for the long game.",
                description: "You understand that lasting change takes time. Base camp isn't built in a day. Summits aren't reached without effort. You're willing to do the work.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(38,69,123)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[rgb(38,69,123)]">{item.title}</h3>
                  <p className="mt-1 text-slate-700 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We're Probably Not Right If */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <h2 className="text-[28px] md:text-[36px] text-[rgb(38,69,123)] leading-tight font-semibold">
            We're probably not right for you if...
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "You want insurance to handle it.",
                description: "We operate completely outside the insurance system. That's what allows us to practice medicine this way. But it's not for everyone.",
              },
              {
                title: "You prefer passive care.",
                description: "We guide, recommend, and partner, but you make the decisions about your body. If you'd rather just be told what to do without engaging, we're not your practice.",
              },
              {
                title: "You expect unlimited access without an IMI.",
                description: "DPC membership includes two comprehensive wellness visits per year plus care for acute issues. If you need more frequent visits, deep-dive testing, or ongoing support for complex concerns and chronic issues, that's what our Integrative Medicine Intensives are for. Both paths have value. But they're different paths.",
              },
              {
                title: "You need a quick fix.",
                description: "Real change requires commitment. We'll give you the roadmap and the tools, but you have to show up and do the work.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-slate-800">{item.title}</h3>
                  <p className="mt-1 text-slate-700 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Ways to Connect */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1000px] px-6">
          <h2 className="text-center text-[28px] md:text-[36px] text-[rgb(38,69,123)] leading-tight font-semibold">
            Two Ways to Connect
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Option 1: Schedule a Call */}
            <div className="p-8 bg-gray-50 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgb(38,69,123)] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold text-[rgb(38,69,123)]">Schedule a Call</h3>
              <p className="mt-3 text-slate-700 text-[15px] leading-relaxed">
                Pick a time that works for you and we'll call you. No waiting on hold. No phone trees. Just a real conversation.
              </p>
              <div className="mt-6">
                <a
                  href="/book-online"
                  className="inline-block px-6 py-3 text-white text-[13px] uppercase tracking-[0.15em] font-semibold bg-[#C75A33] hover:bg-[#B3502E] transition-colors duration-200"
                >
                  Schedule Now →
                </a>
              </div>
            </div>

            {/* Option 2: Call Us */}
            <div className="p-8 bg-[rgb(38,69,123)] rounded-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-[rgb(38,69,123)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold text-white">Call Us Anytime</h3>
              <p className="mt-3 text-white/90 text-[15px] leading-relaxed">
                Ready now? Pick up the phone.
              </p>
              <div className="mt-6">
                <a
                  href="tel:531-333-2037"
                  className="inline-block px-6 py-3 text-[rgb(38,69,123)] text-[18px] font-bold bg-white hover:bg-gray-100 transition-colors duration-200 rounded"
                >
                  531-333-2037
                </a>
              </div>
              <p className="mt-4 text-white/70 text-[13px]">
                We're here: Monday through Thursday 8:30am to 4:30pm<br />Friday 9am to 12pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <h2 className="text-[28px] md:text-[36px] text-[rgb(38,69,123)] leading-tight font-semibold">
            What to expect.
          </h2>
          <div className="mt-6 space-y-5 text-slate-700 text-[16px] leading-relaxed">
            <p>
              We want to understand what's going on and what you're hoping to find. We'll answer your questions and help you figure out if we're the right fit.
            </p>
            <p>
              If we are, we'll talk about the right starting point for you: DPC membership, an Integrative Medicine Intensive, or both. If we're not the right fit, we'll tell you directly.
            </p>
            <p className="font-semibold text-[rgb(38,69,123)]">
              No pressure, no pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <LocationLincoln />
    </main>
  );
}
