import LocationLincoln from '../components/LocationLincoln'

export default function ContactUs() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Contact Us</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care in Lincoln, NE</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <h2 className="text-center text-[36px] text-[rgb(38,69,123)]">Send A Message To Aletheia Integrative</h2>
          <div className="mt-8 max-w-3xl mx-auto bg-white shadow p-0" style={{ overflow: 'hidden' }}>
            <iframe
              src="https://link.aletheia.md/widget/form/SaqVCVsIaMkH2arPe2iz"
              style={{ width: '100%', height: 772, border: 'none', borderRadius: 3 }}
              id="inline-SaqVCVsIaMkH2arPe2iz"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact us form for site"
              data-height="772"
              data-layout-iframe-id="inline-SaqVCVsIaMkH2arPe2iz"
              data-form-id="SaqVCVsIaMkH2arPe2iz"
              title="Contact us form for site"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <LocationLincoln />
    </main>
  )
}
