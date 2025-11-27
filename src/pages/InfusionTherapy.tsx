export default function InfusionTherapy() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-12">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[32px] md:text-[36px] font-semibold">Infusion Therapy</h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-12">
        <div className="container max-w-[900px] px-6">
          <div className="text-center">
            <img
              src="https://sa1s3optim.patientpop.com/assets/docs/432471.png"
              alt="INFUSION THERAPY"
              className="mx-auto w-14 h-14 object-contain"
            />
            <h3 className="mt-4 text-[14px] tracking-wide text-slate-600">IV THERAPY</h3>
            <h2 className="mt-1 text-[20px] md:text-[22px] text-[rgb(38,69,123)]">BOOST YOUR IMMUNITY &amp; HYDRATION</h2>
          </div>

          <p className="mt-6 text-slate-700">
            Patients find that receiving infusions will boost immunity, whether for prevention or response to an illness. They provide a
            faster absorption rate, getting your nutrients at a rate of 90% versus 20-50% with oral intake. You can hydrate quickly, its
            the fastest way to rehydrate your body.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div>
              <div className="font-semibold text-slate-700">IV commonly helps with:</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                <li>Migraine or headache relief</li>
                <li>Immunity support</li>
                <li>Nausea or morning sickness</li>
                <li>Common cold or flu</li>
                <li>Athletic performance recovery</li>
                <li>Optimizing health</li>
                <li>Fighting fatigue</li>
                <li>Energy boost</li>
                <li>Mental clarity</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-700">Common add-ons available:</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                <li>Anti-nausea</li>
                <li>Anti-inflammatory</li>
                <li>Antacid</li>
                <li>Antihistamine</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              className="inline-block text-[rgb(38,69,123)] font-semibold underline"
              href="https://aletheia.md-hq.com/registration"
              target="_blank"
              rel="noreferrer"
            >
              START HERE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
