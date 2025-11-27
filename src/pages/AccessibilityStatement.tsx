export default function AccessibilityStatement() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] md:text-[48px] leading-tight font-semibold tracking-wide">Accessibility Notice</h1>
        </div>
      </section>

      {/* Embedded statement */}
      <section className="py-0" style={{ backgroundColor: 'rgba(248,250,252,1)' }}>
        <div className="container max-w-[1000px] px-0 md:px-0">
          <iframe
            id="tebra-audio-eye"
            src="https://portal.audioeye.com/accessibility-statement.html?domain=https://www.aletheia.md"
            title="Accessibility Statement"
            style={{ width: '100%', height: '2315px', border: '0' }}
          />
        </div>
      </section>
    </main>
  );
}
