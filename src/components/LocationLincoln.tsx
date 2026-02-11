import { Link } from 'react-router-dom';

export default function LocationLincoln() {
  return (
    <section className="py-14" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Info card */}
        <div>
          <div className="bg-white shadow p-8">
            <h2 className="text-[36px] text-[rgb(38,69,123)] leading-none">Lincoln</h2>
            <p className="mt-3 text-slate-700">
              5445 Red Rock Ln, Suite 300
              <br />
              Lincoln, NE 68516
            </p>

            <div className="mt-6">
              <div className="text-slate-500 text-sm">Hours Of Operation:</div>
              <div className="mt-2 grid grid-cols-[120px_1fr] gap-y-2 text-slate-700">
                <div>Monday:</div>
                <div>9:00 AM - 4:30 PM</div>
                <div>Tuesday:</div>
                <div>9:00 AM - 4:30 PM</div>
                <div>Wednesday:</div>
                <div>9:00 AM - 4:30 PM</div>
                <div>Thursday:</div>
                <div>9:00 AM - 4:30 PM</div>
                <div>Friday:</div>
                <div>10:00 AM - 3:00 PM</div>
                <div>Saturday:</div>
                <div>Closed</div>
                <div>Sunday:</div>
                <div>Closed</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link to="/book-online" className="px-5 py-2 text-white" style={{ backgroundColor: 'rgb(199,90,51)' }}>
                BOOK ONLINE
              </Link>
              <a href="tel:531-333-2037" className="px-5 py-2 text-white" style={{ backgroundColor: 'rgb(38,69,123)' }}>
                531-333-2037
              </a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.860683106622!2d-96.645835!3d40.7379549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796be98f1d7a0ef%3A0x0000000000000000!2s5445%20Red%20Rock%20Ln%20Suite%20300%2C%20Lincoln%2C%20NE%2068516!5e0!3m2!1sen!2sus!4v1700000000000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
