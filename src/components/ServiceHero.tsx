export default function ServiceHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-[rgb(38,69,123)] text-white py-16">
      <div className="container max-w-[1100px] px-6 text-center">
        <h1 className="text-[36px] leading-tight font-semibold tracking-wide">{title}</h1>
        {subtitle && <p className="mt-3 text-[15px] opacity-95">{subtitle}</p>}
      </div>
    </section>
  );
}
