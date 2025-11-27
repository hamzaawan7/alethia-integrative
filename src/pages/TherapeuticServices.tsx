import { Link } from 'react-router-dom';

export default function TherapeuticServices() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-12">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[32px] md:text-[36px] font-semibold">Regenerative Medicine</h1>
        </div>
      </section>

      {/* Treatment Options Intro */}
      <section className="py-10 bg-white">
        <div className="container max-w-[900px] px-6 text-center">
          <img
            src="https://sa1s3optim.patientpop.com/assets/docs/432411.png"
            alt="TREATMENT OPTIONS"
            className="mx-auto w-14 h-14 object-contain"
          />
          <h3 className="mt-4 text-[14px] tracking-wide text-slate-500">TREATMENT OPTIONS</h3>
          <h2 className="mt-1 text-[22px] md:text-[26px] text-[rgb(38,69,123)]">Multiple services personalized for you</h2>
          <p className="mt-3 text-slate-700">
            As part of your personalized care, we offer multiple treatments that will help you heal or optimize your health.
            Members receive discounts for each of these treatments.
          </p>
          <p className="mt-2 font-semibold text-[rgb(38,69,123)]">CHOOSE A THERAPY THAT’S RIGHT FOR YOU!</p>
        </div>
      </section>

      {/* Treatments list */}
      <section className="py-8">
        <div className="container max-w-[1100px] px-6 space-y-12">
          {/* Regenerative Medicine */}
          <article>
            <div className="text-center">
              <img
                src="https://sa1s3optim.patientpop.com/assets/docs/432412.png"
                alt="REGENERATIVE MEDICINE"
                className="mx-auto w-40 max-w-[240px] object-contain"
              />
              <h3 className="mt-3 text-[15px] font-semibold tracking-wide text-slate-700">REGENERATIVE MEDICINE</h3>
              <p className="mt-2 text-slate-700 max-w-3xl mx-auto">
                Regenerative Medicine promotes health by using your own body tissues and cellular processes to bring you beyond the
                status quo in your health.
              </p>
              <div className="mt-4">
                <Link to="/service/aletheia-cell-therapy" className="inline-block px-6 py-3 uppercase tracking-[0.2em] text-[12px] text-[rgb(38,69,123)] transition-colors duration-200 hover:bg-[#C75A33] hover:text-white">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Hyperbaric Oxygen Therapy */}
          <article>
            <div className="text-center">
              <img
                src="https://sa1s3optim.patientpop.com/assets/docs/432413.png"
                alt="HYPERBARIC OXYGEN THERAPY"
                className="mx-auto w-40 max-w-[240px] object-contain"
              />
              <h3 className="mt-3 text-[15px] font-semibold tracking-wide text-slate-700">HYPERBARIC OXYGEN THERAPY</h3>
              <p className="mt-2 text-slate-700 max-w-4xl mx-auto">
                Hyperbaric oxygen therapy is a treatment that increases the amount of oxygen blood cells can carry. It has been known
                to help with multiple levels of healing; including brain injuries and wound care.
              </p>
              <div className="mt-4">
                <Link to="/service/hyperbaric-oxygen-therapy" className="inline-block px-6 py-3 uppercase tracking-[0.2em] text-[12px] text-[rgb(38,69,123)] transition-colors duration-200 hover:bg-[#C75A33] hover:text-white">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Intravenous (IV) Infusion */}
          <article>
            <div className="text-center">
              <img
                src="https://sa1s3optim.patientpop.com/assets/docs/432414.png"
                alt="INTRAVENOUS (IV) INFUSION"
                className="mx-auto w-40 max-w-[240px] object-contain"
              />
              <h3 className="mt-3 text-[15px] font-semibold tracking-wide text-slate-700">INTRAVENOUS (IV) INFUSION</h3>
              <p className="mt-2 text-slate-700 max-w-4xl mx-auto">
                Aletheia offers IV infusions for patients wanting to prevent or respond to an illness. Infusions offer a faster
                absorption rate at 90% versus the typical 20-50% from standard vitamins taken orally. Infusions also allow you to
                hydrate quickly while boosting your immunity.
              </p>
              <div className="mt-4">
                <Link to="/infusion-therapy" className="inline-block px-6 py-3 uppercase tracking-[0.2em] text-[12px] text-[rgb(38,69,123)] transition-colors duration-200 hover:bg-[#C75A33] hover:text-white">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Near Infrared Therapy */}
          <article>
            <div className="text-center">
              <img
                src="https://sa1s3optim.patientpop.com/assets/docs/432415.png"
                alt="NEAR INFRARED THERAPY"
                className="mx-auto w-40 max-w-[240px] object-contain"
              />
              <h3 className="mt-3 text-[15px] font-semibold tracking-wide text-slate-700">NEAR INFRARED THERAPY</h3>
              <p className="mt-2 text-slate-700 max-w-3xl mx-auto">
                Red Light Therapy promotes healing, from relieving minor aches to improving skin quality with collagen production to
                helping ease the side effects of traumatic brain injuries.
              </p>
              <div className="mt-4">
                <Link to="/service/red-light-therapy" className="inline-block px-6 py-3 uppercase tracking-[0.2em] text-[12px] text-[rgb(38,69,123)] transition-colors duration-200 hover:bg-[#C75A33] hover:text-white">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
