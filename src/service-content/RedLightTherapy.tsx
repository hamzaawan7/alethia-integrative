export default function RedLightTherapyContent() {
  return (
    <div className="text-slate-700 space-y-5 mt-4">
      <h3 className="text-[20px] font-semibold text-[rgb(38,69,123)]">Red Light Therapy</h3>
      <p>
        A gentle, noninvasive treatment using low‑level red and near‑infrared wavelengths to stimulate cellular healing. Commonly
        used in functional medicine and aesthetic care to reduce inflammation, promote tissue repair, and improve skin health.
      </p>

      <div className="mt-3 p-6" style={{ background: "rgba(38,69,123,.10)" }}>
        <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)]">How does it work?</h4>
        <p className="mt-2">
          Red wavelengths activate the mitochondria—the cell’s “power plant”—to increase ATP, circulation, and collagen production,
          supporting natural repair and recovery.
        </p>
      </div>

      <div className="mt-3 p-6" style={{ background: "rgba(38,69,123,.10)" }}>
        <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What can it help?</h4>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Chronic joint or muscle pain; inflammation and tissue injury</li>
          <li>Fatigue and mitochondrial dysfunction</li>
          <li>Skin rejuvenation, fine lines; acne, rosacea, scarring</li>
          <li>Wound healing and post‑procedure recovery</li>
          <li>Mood and cognitive support</li>
        </ul>
        <p className="mt-2">Often combined with IV therapy, HBOT, and nutrition for synergistic results.</p>
      </div>

      <div className="mt-3 p-6" style={{ background: "rgba(38,69,123,.10)" }}>
        <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)]">What to expect</h4>
        <p>Comfortable 20–40 minute sessions while light shines onto your skin. Treatments are cumulative over several weeks.</p>
      </div>

      <div className="mt-3 p-6" style={{ background: "rgba(38,69,123,.10)" }}>
        <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Is it safe?</h4>
        <p>Yes—noninvasive and typically well‑tolerated without downtime.</p>
      </div>
    </div>
  );
}
