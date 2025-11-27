export default function HealthCoaching() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-12">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[32px] md:text-[36px] font-semibold">Health Coaching</h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-12">
        <div className="container max-w-[900px] px-6">
          <div className="text-center">
            <div className="italic uppercase text-slate-600 text-[13px] tracking-wide">Health Coaching</div>
            <img
              src="https://sa1s3optim.patientpop.com/assets/docs/432416.png"
              alt="OPTIMIZE YOUR HEALTH"
              className="mx-auto w-14 h-14 object-contain mt-3"
            />
            <h2 className="mt-4 text-[20px] md:text-[22px] text-[rgb(38,69,123)]">OPTIMIZE YOUR HEALTH</h2>
            <div className="text-[14px] text-slate-600">REBOOT | RENEW | RESTORE</div>
          </div>

          <div className="mt-6 space-y-5 text-slate-700">
            <p>
              At Aletheia, we are looking to assist others towards transformational wellness. This means that we are building a sustainable,
              healthy lifestyle which allows for a more fulfilling lifestyle and in turn prevents many unnecessary diseases and injuries to our body.
            </p>
            <p>
              We believe that our bodies can heal from within by using an integrative approach. We have found that many people kickstart their
              health and healing journey by changing how they fuel their body. This approach allows for weight loss and improved energy and and helps
              create healthy habits that last for a lifetime. We also offer medical assisted weight loss as a healthy alternative. Meet with our certified
              coach to find out which method is best for you! She offers monthly coaching and a personalized plan that includes nutrition and fitness!
            </p>
            <p>
              We make getting started simple by quickly building self-efficacy and creating early successes for you. As you feel better, have more energy,
              and are losing weight safely, you will be motivated to discover more ways you can improve your health. It’s easy to do, and you won’t have hunger pangs or
              food cravings if you follow our approach.
            </p>
          </div>

          <div className="mt-8">
            <div className="font-semibold text-slate-700">BENEFITS</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
              <li>Metabolic Reset</li>
              <li>Weight Loss</li>
              <li>Healthy Body</li>
              <li>Reduced Inflammation</li>
              <li>Sustainability</li>
              <li>Healthy Mind</li>
              <li>True Transformation</li>
            </ul>
          </div>

          <p className="mt-6 text-slate-700">
            If you want more information or are ready to get started then please contact us. We look forward to working with you to achieve your goals.
          </p>

          <blockquote className="mt-8 italic text-slate-600">
            As my coach, Melissa provided exceptional support in helping me understand the program as well as helping me think through and plan healthy options,
            especially when facing unexpected situations. With her guidance and positive mindset I successfully met my weight loss goal. To this day, I still reach out
            whenever I feel myself derail knowing she will be there to catch me.
            <div className="mt-4 font-semibold">– Ann Blaya-Arena</div>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
