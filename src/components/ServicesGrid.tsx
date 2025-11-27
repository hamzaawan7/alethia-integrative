import { Link } from 'react-router-dom';
import type { ServiceItem } from '../data/services';

export default function ServicesGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item) => (
        <Link key={item.href} to={item.href} className="block group bg-white shadow-sm hover:shadow transition">
          <div className="overflow-hidden flex items-center justify-center">
            <img
              src={item.img}
              alt={item.label}
              width={265}
              height={240}
              className="w-[265px] h-[240px] object-cover group-hover:scale-[1.03] transition"
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
          <div className="px-4 py-3 text-[rgb(38,69,123)] font-medium text-center">{item.label}</div>
        </Link>
      ))}
    </div>
  );
}
