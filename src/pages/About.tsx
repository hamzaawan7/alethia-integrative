import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function About() {
  useDocumentHead({
    title: 'About Us | Aletheia Integrative',
    description: 'Meet Dr. Jaime Dodge and the team at Aletheia Integrative Medical. Learn about our integrative approach to healthcare in Lincoln, NE.',
  });

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero Section */}
      <section className="bg-[rgb(38,69,123)] text-white py-20">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the team.</h1>
          <p className="mt-4 text-lg md:text-xl opacity-95">The people behind Aletheia Integrative Medical.</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-14 bg-gray-50 border-t-4 border-[rgb(38,69,123)]">
        <div className="container max-w-[1100px] px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(38,69,123)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[rgb(38,69,123)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[rgb(38,69,123)] font-bold text-lg">Location</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Aletheia Integrative Medical<br />
                5445 Red Rock Lane, Suite 300<br />
                Lincoln, NE 68516
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(38,69,123)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[rgb(38,69,123)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-[rgb(38,69,123)] font-bold text-lg">Contact</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="text-gray-400">Phone:</span>
                  <a href="tel:531-333-2037" className="hover:text-[#C75A33] font-medium transition-colors">531-333-2037</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gray-400">Email:</span>
                  <a href="mailto:hello@aletheia.md" className="hover:text-[#C75A33] font-medium transition-colors">hello@aletheia.md</a>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(38,69,123)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[rgb(38,69,123)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[rgb(38,69,123)] font-bold text-lg">Hours</h3>
              </div>
              <div className="space-y-1 text-gray-600">
                <p className="flex justify-between">
                  <span className="text-gray-400">Mon – Thu:</span>
                  <span className="font-medium">8:30am – 4:30pm</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-400">Friday:</span>
                  <span className="font-medium">9am – 12pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Dodge Section */}
      <section className="py-16">
        <div className="container max-w-[1100px] px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2669001.jpg"
              alt="Dr. Jaime Dodge"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-[rgb(38,69,123)] font-bold mb-2">Dr. Jaime Dodge</h2>
            <p className="text-[#C75A33] font-semibold text-lg mb-6">A physician who gets it.</p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dr. Jaime Dodge spent 20+ years inside the conventional system. Family practice, 
                hospital medicine, emergency rooms. He's held clinical professorships at three 
                universities. He's deployed with the Army National Guard to Iraq and Afghanistan.
              </p>
              <p>
                He's seen medicine at its best, and watched it fail the people who needed it most.
              </p>
              <p>
                He built Aletheia Integrative Medical because he got tired of watching driven, 
                intelligent people get stuck in a system that wasn't designed for them. People 
                who deserved real answers, not dismissive shrugs. People who wanted a partner, 
                not a prescription pad.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-[#C75A33]">
              <p className="text-lg italic text-gray-800">
                "My patients aren't broken. They're stuck in a broken system. Aletheia exists 
                to give them something better."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Practice Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-[1100px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[rgb(38,69,123)] font-bold mb-4">The Practice</h2>
            <div className="w-20 h-1 bg-[#C75A33] mx-auto rounded-full"></div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Integrative Approach */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(38,69,123)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Integrative Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We combine the best of conventional medicine with functional diagnostics and advanced therapies.
              </p>
            </div>

            {/* Body's Healing */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(38,69,123)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Your Body Heals</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe your body has an innate ability to heal, and our job is to support that process.
              </p>
            </div>

            {/* Freedom */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(38,69,123)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[rgb(38,69,123)] mb-3">Complete Freedom</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate outside the insurance system. No middlemen. No restrictions.
              </p>
            </div>
          </div>

          {/* Quote Box */}
          <div className="bg-[rgb(38,69,123)] rounded-2xl p-8 md:p-12 text-center text-white">
            <svg className="w-10 h-10 text-white/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
              Just medicine the way it should be practiced.
            </p>
            <p className="text-white/80 text-sm max-w-2xl mx-auto">
              We serve patients in person from Lincoln, Omaha, and throughout Eastern Nebraska 
              and surrounding states. We also offer telemedicine in 12 additional states.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-wider font-semibold text-white bg-[#C75A33] hover:bg-[#a84a2a] rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#C75A33]/25"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
