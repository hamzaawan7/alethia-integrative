import { Link } from 'react-router-dom';

const services = [
  { label: 'Primary Care', href: '/service/primary-care', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665849.jpg' },
  { label: 'Thermography', href: '/service/thermography', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2807353.png' },
  { label: 'Wound Care', href: '/service/wound-care', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2818559.png' },
  { label: 'Hormone Balance Therapy', href: '/service/hormone-balance-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668320.png' },
  { label: 'Vasectomies', href: '/service/vasectomies', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2668321.png' },
  { label: 'Vitamins And Supplements', href: '/service/vitamins-and-supplements', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665851.jpg' },
  { label: 'Weight Loss', href: '/service/weight-loss', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665846.jpeg' },
  { label: 'Hyperbaric Oxygen Therapy', href: '/service/hyperbaric-oxygen-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2665857.jpg' },
  { label: 'Lab Services', href: '/service/lab-services', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696961.png' },
  { label: 'Red Light Therapy', href: '/service/red-light-therapy', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696960.png' },
  { label: 'Autoimmune Diseases', href: '/service/autoimmune-diseases', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2696962.png' },
  { label: 'Infusion Therapy', href: '/service/infusion-therapy', img: 'https://sa1s3optim.patientpop.com/640x/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png' },
  { label: 'Aletheia Cell Therapy', href: '/service/aletheia-cell-therapy', img: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/5f50911825dfafd2a1cea2ae6c62e600fe136970/images/2707649.png' },
];

function SectionDivider() {
  return <hr className="w-20 h-[2px] bg-[rgb(199,90,51)] border-0" />;
}

export default function Services() {
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner (matches template) */}
      <section className="bg-[rgb(38,69,123)] text-white py-20">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Services</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care located in Lincoln, NE</p>
        </div>
      </section>

      {/* Services grid with images + titles */}
      <section
        className="pt-20 pb-20"
        style={{
          minHeight: 118,
          backgroundColor: '#D2D8E9',
          backgroundImage:
            "radial-gradient(1200px 600px at -200px 0px, rgba(38,69,123,0.06), rgba(255,255,255,0) 60%), url('https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Artboard%201m-1693234887334.png')",
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'left top, center',
          backgroundSize: 'auto, 700px',
          backgroundAttachment: 'scroll, fixed',
        }}
      >
        <div className="container max-w-[1100px] px-6">
        
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((item) => (
              <Link key={item.href} to={item.href} className="block group bg-white shadow-sm hover:shadow transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                    loading={['/service/primary-care','/service/thermography','/service/wound-care','/service/hormone-balance-therapy'].includes(item.href) ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.src.includes('/filters:format(webp)/')) {
                        img.src = img.src.replace('/filters:format(webp)/', '/1024x/filters:format(webp)/');
                      }
                    }}
                  />
                </div>
                <div className="px-4 py-3 text-[rgb(38,69,123)] font-medium">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
