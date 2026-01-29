import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Top banner (matches template) */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">About Aletheia Integrative</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care located in Lincoln, NE</p>
        </div>
      </section>

      {/* About body with image */}
      <section className="py-16">
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <img
              src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2669001.jpg"
              alt="Aletheia Integrative Office"
              className="w-full md:w-[520px] h-auto shadow"
            />
          </div>
          <div>
            <h2 className="text-[28px] text-[rgb(38,69,123)] font-semibold">About Aletheia Integrative</h2>
            <div className="mt-4 space-y-4 text-slate-700 text-[15px] leading-7">
              <p>
                At Aletheia Integrative experienced family medicine and direct primary care provider Jaime Dodge, MD, and the team provide personalized functional medicine to individuals and families in Lincoln, Nebraska, and throughout Lancaster County.
              </p>
              <p>
                Aletheia Integrative is a full-service, direct primary care practice. Paying a small monthly or annual fee gives patients 24/7 access to the team, including functional medicine, cutting-edge restorative treatments, and primary care.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/book-online"
                className="inline-block px-5 py-2 text-[12px] uppercase tracking-wider font-semibold text-white bg-[rgb(38,69,123)] hover:opacity-90"
              >
                Set Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
