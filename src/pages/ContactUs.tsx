import { Link } from 'react-router-dom'

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
      <section className="py-14" style={{ backgroundColor: '#eef2f6' }}>
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Info cards */}
          <div className="">
            <div className="bg-white shadow p-8">
              <h2 className="text-[36px] text-[rgb(38,69,123)] leading-none">Lincoln</h2>
              <p className="mt-3 text-slate-700">5445 Red Rock Ln, Suite 300<br />Lincoln, NE 68516</p>

              <div className="mt-6">
                <div className="text-slate-500 text-sm">Hours Of Operation:</div>
                <div className="mt-2 grid grid-cols-[120px_1fr] gap-y-2 text-slate-700">
                  <div>Monday:</div><div>9:00 AM - 4:30 PM</div>
                  <div>Tuesday:</div><div>9:00 AM - 4:30 PM</div>
                  <div>Wednesday:</div><div>9:00 AM - 4:30 PM</div>
                  <div>Thursday:</div><div>9:00 AM - 4:30 PM</div>
                  <div>Friday:</div><div>10:00 AM - 3:00 PM</div>
                  <div>Saturday:</div><div>Closed</div>
                  <div>Sunday:</div><div>Closed</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link to="/book-online" className="px-5 py-2 text-white" style={{ backgroundColor: 'rgb(199,90,51)' }}>BOOK ONLINE</Link>
                <a href="tel:531-333-2037" className="px-5 py-2 text-white" style={{ backgroundColor: 'rgb(38,69,123)' }}>531-333-2037</a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="bg-white shadow">
            <div className="aspect-[4/3]">
              <iframe
                title="Aletheia Integrative Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.860683106622!2d-96.667!3d40.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5445%20Red%20Rock%20Ln%20Suite%20300%2C%20Lincoln%2C%20NE%2068516!5e0!3m2!1sen!2sus!4v1700000000000"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
