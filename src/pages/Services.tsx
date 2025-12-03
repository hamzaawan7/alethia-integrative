import { services } from '../data/services';
import ServicesGrid from '../components/ServicesGrid';

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
          <ServicesGrid items={services} />
        </div>
      </section>
    </main>
  );
}
