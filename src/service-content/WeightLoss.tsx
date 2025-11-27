export default function WeightLossContent() {
  return (
    <div className="text-slate-700 space-y-5 mt-4">
      <h3 className="text-[20px] font-semibold text-[rgb(38,69,123)]">Medically Supervised Weight Loss</h3>
      <p>
        Practical, evidence‑based programs with routine checkups, health coaching, nutrition education, and tools when appropriate.
        We focus on sustainable change—not fad diets.
      </p>

      <div className="mt-3 p-6" style={{ background: "rgba(38,69,123,.10)" }}>
        <h4 className="text-[18px] font-semibold text-[rgb(38,69,123)]">Program Elements</h4>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Health coaching and accountability</li>
          <li>Nutrition education and meal guidance</li>
          <li>Exercise recommendations tailored to your level</li>
          <li>Prescription options when clinically indicated</li>
        </ul>
        <p className="mt-2">Many people see measurable progress in the first month with consistent follow‑through.</p>
      </div>
    </div>
  );
}
