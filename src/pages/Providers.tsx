//

export default function Providers() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />
      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Jaime K Dodge, MD</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care located in Lincoln, NE</p>
        </div>
      </section>

      {/* Provider content */}
      <section className="pt-20 pb-16">
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <img
              src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg"
              srcSet="https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg 640w, https://sa1s3optim.patientpop.com/768x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg 768w, https://sa1s3optim.patientpop.com/1024x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg 1024w, https://sa1s3optim.patientpop.com/1280x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg 1280w, https://sa1s3optim.patientpop.com/1536x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665886.jpg 1536w"
              sizes="(min-width: 768px) 520px, 100vw"
              alt="Jaime K Dodge, MD"
              className="w-full md:w-[520px] h-auto shadow"
              loading="eager"
              onError={(e) => { const img = e.currentTarget; img.onerror = null; img.src = 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2669001.jpg'; }}
            />
          </div>
          <div>
            <h2 className="text-[28px] text-[rgb(38,69,123)] font-semibold">About Jaime K Dodge, MD</h2>
            <div className="mt-4 space-y-4 text-slate-700 text-[15px] leading-7">
              <p>With over 20 years in family medicine, hospital medicine, and emergency medicine, Dr. Dodge understands the importance of building a trusting relationship between himself and his patients. This rapport and trust enables patients to communicate freely with their physician and get to the root cause of their concerns. Dr. Dodge’s priority is to respect patients’ freedom when making healthcare decisions.</p>
              <p>Dr. Dodge held several clinical professorships through the Universities of Nebraska, Iowa, and South Dakota. While in South Dakota, Dr. Dodge also taught at a Family Medicine postgraduate training program. After over 12 years of service in the Army National Guard, including three deployments to Iraq and Afghanistan, Dr. Dodge returned to the United States to dedicate himself to Aletheia Integrative and its patients.</p>
              <p>Currently, Dr. Dodge holds an appointment to the Nebraska State Board of Health and serves on the Board of Directors of the Nebraska Medical Association and the Lancaster County Medical Society.</p>
              <p>Dr. Dodge is a Fellow of the American Academy of Family Physicians and has been board-certified by the American Board of Family Medicine since 2005.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
