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
          <div className="mt-8 max-w-3xl mx-auto bg-white shadow p-8">
            <form className="grid md:grid-cols-2 gap-5">
              <div className="col-span-1">
                <label className="block text-slate-700 text-sm">First Name *</label>
                <input className="mt-2 w-full border border-slate-300 px-3 py-2" placeholder="First Name" />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-700 text-sm">Last Name *</label>
                <input className="mt-2 w-full border border-slate-300 px-3 py-2" placeholder="Last Name" />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-700 text-sm">Phone *</label>
                <input className="mt-2 w-full border border-slate-300 px-3 py-2" placeholder="Phone" />
              </div>
              <div className="col-span-1">
                <label className="block text-slate-700 text-sm">Email *</label>
                <input type="email" className="mt-2 w-full border border-slate-300 px-3 py-2" placeholder="Email" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-700 text-sm">Interested In: *</label>
                <select className="mt-2 w-full border border-slate-300 px-3 py-2">
                  <option>Primary Care</option>
                  <option>Infusion Therapy</option>
                  <option>Hyperbaric Oxygen Therapy</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-slate-700 text-sm">Message</label>
                <textarea className="mt-2 w-full border border-slate-300 px-3 py-2" rows={6} placeholder="Message" />
              </div>
              <div className="col-span-2">
                <button type="submit" className="px-6 py-3 text-white" style={{ backgroundColor: 'rgb(199,90,51)' }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <LocationLincoln />
    </main>
  )
}
