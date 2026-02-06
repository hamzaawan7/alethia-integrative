import { Link } from 'react-router-dom';

export default function HormoneBalanceVitalityContent() {
  return (
    <div className="text-slate-700 mt-4 max-w-[620px] space-y-5">
      {/* Short intro for the grid layout */}
      <div className="border-l-4 border-[#C75A33] pl-6">
        <p className="text-[20px] font-semibold text-[rgb(38,69,123)]">Restore your foundation. Reclaim your energy, clarity, and drive.</p>
        <p className="mt-2 text-slate-600">Built for men and women who want hormone optimization done comprehensively—not a quick prescription.</p>
      </div>

      {/* The Problem - Brief */}
      <div className="space-y-3">
        <p className="text-[#C75A33] text-[12px] uppercase tracking-[0.2em] font-semibold">The Problem</p>
        <h3 className="text-[22px] font-semibold text-[rgb(38,69,123)]">You don't feel like yourself anymore. And no one can tell you why.</h3>
        <p className="text-[15px] leading-relaxed">
          You're tired all the time, even when you sleep. Your brain feels foggy when it used to be sharp. Your mood swings for no reason. Your libido has disappeared. You're gaining weight despite doing everything right. You don't recover like you used to.
        </p>
      </div>
    </div>
  );
}

// Full page content component to be rendered outside the grid
export function HormoneBalanceVitalityFullContent() {
  return (
    <div className="bg-white">
      {/* The Problem - Full */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Problem</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            You don't feel like yourself anymore. And no one can tell you why.
          </h2>
          <div className="mt-8 space-y-5 text-gray-700 text-[17px] leading-[1.8]">
            <p>
              You've mentioned it to your doctor. Maybe they ran a basic panel and told you everything looks "normal." Maybe they offered an antidepressant or suggested you're just getting older. Maybe they dismissed you entirely.
            </p>
            <p className="font-medium text-[rgb(38,69,123)]">
              But you know something is off. You remember what it felt like to have energy, mental clarity, and drive. This isn't that.
            </p>
            <p>
              Here's what the conventional system often misses: "normal" lab ranges are based on population averages, not optimal function. You can be technically "normal" and still feel terrible. And hormones don't operate in isolation—they're part of an interconnected system that requires a deeper look.
            </p>
          </div>
        </div>
      </section>

      {/* The Aletheia Approach */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">The Aletheia Approach</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Hormone optimization that actually gets to the root.
          </h2>
          <div className="mt-8 space-y-5 text-gray-700 text-[17px] leading-[1.8]">
            <p>
              At Aletheia, we don't just check a box and hand you a prescription. We investigate.
            </p>
            <p>
              Hormones regulate nearly every aspect of how you feel and function: your energy, mood, sleep, libido, metabolism, mental clarity, and resilience. When they fall out of balance—whether from aging, stress, lifestyle, or underlying dysfunction—the effects ripple through your entire system.
            </p>
            <p>
              Our approach is integrative. We look at the whole picture: not just your hormone levels, but why they're off. We assess thyroid function, adrenal health, metabolic markers, inflammation, and lifestyle factors that influence hormone production and utilization. Then we build a protocol designed to restore balance from the inside out.
            </p>
            <p className="font-medium text-[rgb(38,69,123)]">
              This is medicine that works with your body's natural systems, not against them. We believe your body knows how to function optimally—it just needs the right support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Evaluate */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What We Evaluate</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Comprehensive testing that goes far beyond the standard panel.
          </h2>
          <p className="mt-6 text-gray-700 text-[17px] leading-[1.8]">
            Most doctors check TSH for thyroid, maybe total testosterone, and call it a day. That's not enough.
          </p>
          <p className="mt-4 font-semibold text-gray-800 text-[17px]">We run comprehensive panels that give us the full picture:</p>
          
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">Sex Hormones</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Total and free testosterone</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Estrogen (estradiol, estrone, estriol)</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Progesterone</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> DHEA and DHEA-S</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Sex hormone binding globulin (SHBG)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">Thyroid Function</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> TSH, Free T3, Free T4</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Reverse T3</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Thyroid antibodies (TPO, thyroglobulin)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">Adrenal & Stress</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Cortisol patterns</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> DHEA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">Metabolic Markers</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Fasting insulin and glucose</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Hemoglobin A1c</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Inflammatory markers</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 lg:col-span-2">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">Supporting Factors</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 text-[15px]">
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Vitamin D</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> B vitamins</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Iron and ferritin</li>
                <li className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> Other nutrients that influence hormone function</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-semibold text-[rgb(38,69,123)] text-[17px] bg-white p-6 rounded-xl shadow-sm">
            We interpret these results in context—looking at patterns, ratios, and how your levels relate to optimal function, not just "normal" ranges.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What We Offer</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Personalized protocols to restore hormonal balance.
          </h2>
          <p className="mt-6 text-gray-700 text-[17px] leading-[1.8]">
            Based on your comprehensive evaluation, we design a protocol tailored to your specific imbalances, symptoms, and goals. This may include:
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                title: 'Bioidentical Hormone Replacement Therapy (BHRT)',
                content: [
                  'Bioidentical hormones are molecularly identical to the hormones your body naturally produces. Unlike synthetic hormones, they\'re designed to work seamlessly with your body\'s receptors and metabolic pathways.',
                  '<strong>For women:</strong> This may include estrogen, progesterone, testosterone, or DHEA, depending on your specific needs and stage of life.',
                  '<strong>For men:</strong> Testosterone replacement therapy (TRT) can restore energy, mental clarity, muscle mass, libido, and overall vitality when levels have declined.',
                  'We monitor your levels closely and adjust dosing to keep you in the optimal range—not just "normal."'
                ]
              },
              {
                title: 'Peptide Therapy',
                content: [
                  'Peptides are short chains of amino acids that act as signaling molecules in your body. Specific peptides can support hormone production, improve sleep, enhance recovery, boost libido, and promote cellular repair.',
                  'Peptide therapy can complement hormone replacement or be used on its own depending on your situation.'
                ]
              },
              {
                title: 'Thyroid Optimization',
                content: [
                  'If your thyroid is underperforming—even if your TSH is "normal"—we address it. This may include thyroid hormone replacement, support for conversion of T4 to active T3, or addressing underlying factors like inflammation or nutrient deficiencies.'
                ]
              },
              {
                title: 'Adrenal Support',
                content: [
                  'Chronic stress wreaks havoc on your hormones. If your adrenals are burned out, no amount of testosterone or thyroid hormone will make you feel right. We assess adrenal function and address it as part of your protocol.'
                ]
              },
              {
                title: 'Nutritional and Lifestyle Support',
                content: [
                  'Hormones don\'t exist in a vacuum. Sleep, stress, nutrition, movement, and environmental factors all influence how your hormones function. We incorporate targeted nutritional support and lifestyle modifications to optimize your results.',
                  'Nutritional consultations are provided by Sara Miller, M.Ed., INHC, our Integrative Health Coach.'
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-[rgb(38,69,123)]">
                <h4 className="font-bold text-[rgb(38,69,123)] text-lg">{item.title}</h4>
                <div className="mt-3 space-y-3 text-gray-700 text-[15px] leading-relaxed">
                  {item.content.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Signs */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1000px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">Common Signs of Hormone Imbalance</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            Symptoms we commonly address.
          </h2>
          
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">For Both Men & Women</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                {['Persistent fatigue, even with adequate sleep', 'Brain fog and difficulty concentrating', 'Mood swings, irritability, or anxiety', 'Depression or loss of motivation', 'Weight gain, especially around the midsection', 'Difficulty losing weight despite diet and exercise', 'Sleep disturbances', 'Decreased libido or sexual dysfunction', 'Loss of muscle mass or strength', 'Joint pain or slow recovery from exercise'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">For Women</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                {['Hot flashes and night sweats', 'Irregular or heavy periods', 'PMS symptoms', 'Vaginal dryness', 'Hair thinning'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[rgb(38,69,123)] text-lg mb-4">For Men</h4>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                {['Erectile dysfunction', 'Decreased morning erections', 'Loss of drive and competitiveness', 'Gynecomastia (breast tissue development)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#C75A33] mt-1">•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 font-semibold text-[rgb(38,69,123)] text-[17px] text-center">
            If you're experiencing several of these symptoms and haven't found answers, hormone imbalance is worth investigating.
          </p>
        </div>
      </section>

      {/* Why Choose an IMI */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">Why Choose an IMI for Hormone Balance</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-white leading-tight font-bold">
            This isn't a testosterone clinic. It's a 90-day intensive.
          </h2>
          <p className="mt-6 text-white/90 text-[17px] leading-[1.8]">
            You can get hormone replacement at a lot of places. Testosterone mills will check one lab, hand you a prescription, and send you on your way. That's not what we do.
          </p>
          <p className="mt-6 font-semibold text-white text-[17px]">The IMI: Hormone Balance & Vitality pathway includes:</p>
          
          <div className="mt-8 space-y-4">
            {[
              { title: 'Comprehensive evaluation', desc: "We don't just check your testosterone or estrogen. We assess the entire hormonal system—thyroid, adrenals, sex hormones, metabolic markers—plus the lifestyle and environmental factors that influence them." },
              { title: 'Root cause investigation', desc: "We ask why your hormones are off, not just what to replace. Are your adrenals burned out? Is inflammation suppressing thyroid function? Is insulin resistance driving the problem? We dig deeper." },
              { title: 'Personalized protocol', desc: "Based on your evaluation, we design a protocol using bioidentical hormones, peptides, thyroid support, adrenal support, and nutritional interventions tailored to your specific situation." },
              { title: 'Close monitoring', desc: "Over 90 days, we track your labs, symptoms, and response to treatment. We adjust your protocol as needed to dial in optimal levels—not just \"normal\" levels." },
              { title: 'Ongoing support', desc: "After your IMI, you can transition to DPC membership for continued hormone management and optimization. This isn't a one-time fix; it's the beginning of a long-term partnership." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C75A33] flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-white/80 text-[15px] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#C75A33] rounded-full"></div>
            <p className="text-[#C75A33] text-[13px] uppercase tracking-[0.25em] font-bold">What to Expect</p>
          </div>
          <h2 className="text-[32px] md:text-[40px] text-[rgb(38,69,123)] leading-tight font-bold">
            The process is thorough. The results speak for themselves.
          </h2>
          
          <div className="mt-10 space-y-6">
            {[
              { title: 'Initial consultation', desc: "We'll discuss your symptoms, history, and goals. We'll order comprehensive labs and review any previous testing you've had." },
              { title: 'Lab review and protocol design', desc: "Once we have your results, we'll walk you through what's happening and why. Then we'll design your personalized protocol together." },
              { title: 'Treatment begins', desc: "Depending on your protocol, this may include hormone therapy, peptides, thyroid support, supplements, and lifestyle modifications. We'll teach you how to administer any therapies and what to expect." },
              { title: 'Follow-up and adjustment', desc: "We'll recheck labs at appropriate intervals and meet regularly to assess your progress. Hormone optimization is an iterative process—we adjust until you feel right." },
              { title: 'Timeline for results', desc: "Most patients begin noticing improvements within 2-4 weeks. Full optimization typically takes 2-3 months as we dial in your protocol. Some benefits, like improved body composition and long-term vitality, continue to develop over 6-12 months." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[rgb(38,69,123)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[rgb(38,69,123)]">{item.title}</p>
                  <p className="text-gray-700 text-[15px] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This Right for You */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[900px] px-6">
          <h2 className="text-[28px] md:text-[36px] text-[rgb(38,69,123)] leading-tight font-bold">
            Hormone Balance & Vitality may be right for you if...
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-green-600 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                This pathway is for you if:
              </h4>
              <ul className="space-y-3 text-gray-700 text-[15px]">
                {[
                  "You're experiencing symptoms of hormone imbalance (fatigue, brain fog, low libido, mood changes, weight gain, sleep issues)",
                  "You've been told your labs are \"normal\" but you still don't feel right",
                  "You want a comprehensive evaluation, not just a quick prescription",
                  "You're ready to invest in understanding and optimizing your hormonal health",
                  "You want a provider who will monitor you closely and adjust your protocol"
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
                This pathway may not be right if:
              </h4>
              <ul className="space-y-3 text-gray-600 text-[15px]">
                {[
                  "You're looking for a quick fix without addressing underlying factors",
                  "You're not willing to make lifestyle changes that support hormonal health",
                  "You have certain medical conditions that contraindicate hormone therapy (we'll discuss this in your consultation)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(38,69,123)]">
        <div className="container max-w-[800px] px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] text-white font-bold">Ready to feel like yourself again?</h2>
          <p className="mt-6 text-white/90 text-[17px] leading-relaxed">
            If you're tired of being told everything is "normal" when you know something is off, let's talk. We'll evaluate your situation and help you determine if the IMI: Hormone Balance & Vitality pathway is right for you.
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
