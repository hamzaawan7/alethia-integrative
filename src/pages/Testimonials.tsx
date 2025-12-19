import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Review = {
  author: string;
  body: string;
  rating: number;
  date: string; // ISO or readable
};

const reviews: Review[] = [
  {
    author: 'Cordelia O.',
    body:
      "I've been attending the clinic for about 6 weeks now while I recover from a serious injury and I've already noticed positive changes in my body. The staff are all very accessible, caring and supportive. I am so glad I found Dr Dodge. I highly recommend Aletheia Integrative to my friends and family.",
    rating: 5,
    date: '2025-08-03',
  },
  {
    author: 'Alyssa H.',
    body:
      "Finding Dr. Dodge truly changed my daughters life! Finding a doctor who finally listened to my concerns and worked with us to better my daughters health in a natural way is something I am so thankful for!",
    rating: 5,
    date: '2025-06-23',
  },
  { author: 'Ashley S.', body: 'Great doctor.', rating: 5, date: '2025-04-17' },
  {
    author: 'Mark E.',
    body:
      'Great experience! Very helpful and overall positive, informative and time well spent. Dr Dodge is a good listener and mapped out a reasonable plan to achieve and maintain better health . I would highly recommend him',
    rating: 5,
    date: '2025-02-19',
  },
  {
    author: 'Dan R.',
    body:
      "I appreciate Dr. Jamie Dodge’s willingness to take the time to understand the patients needs. We were also greeted graciously by his staff as well.",
    rating: 5,
    date: '2025-02-18',
  },
  { author: 'William W.', body: "It's nice to feel heard and not rushed.", rating: 4, date: '2025-01-06' },
  {
    author: 'Charlie G.',
    body:
      'Down to earth staff. Made me feel like I was instantly at home! Couldn’t recommend this place enough',
    rating: 5,
    date: '2024-11-20',
  },
  { author: 'Stanley H.', body: 'The staff were helpful by answering my questions and concerns.', rating: 5, date: '2024-09-14' },
  {
    author: 'Kelly S.',
    body:
      'LOVE LOVE LOVE this practice! The red light therapy and hyperbaric chamber are AMAZING! All the staff are kind and friendly and always greet you with a smile. HIGHLY recommend Dr. Dodge and his team!',
    rating: 5,
    date: '2024-07-20',
  },
  { author: 'Dina H.', body: 'I’ve always had great care and never feel rushed. Peaceful environment.', rating: 5, date: '2024-07-02' },
  {
    author: 'Adriana L.',
    body:
      'I am very thankful to have Dr. Dodge as a doctor. He takes the time to explain things and is very patient. He answers all my questions and concerns. I do ask a lot of questions and every single message that I sent he answered very fast.',
    rating: 5,
    date: '2024-06-18',
  },
  {
    author: 'Amy T.',
    body:
      'Above and beyond grateful for all the wellness they offer myself and my husband. Super efficient, friendly and knowledgeable. Thanks to all staff at Alethia!',
    rating: 5,
    date: '2024-04-26',
  },
  {
    author: 'JD F.',
    body:
      'Dr. Dodge and Melissa strive to provide well-rounded care treating each individual in front of them and getting to know their patients on a deeper level. They emphasize improving ones health through diet and lifestyle changes rather than relying on prescription medications. Would highly recommend!',
    rating: 5,
    date: '2024-04-25',
  },
  {
    author: 'Denise S.',
    body:
      "Dr. Dodge is addressing one particular area we have felt has been an ongoing issue, while several others over the years said your child will outgrow the concern... He explains it very well.",
    rating: 5,
    date: '2024-04-04',
  },
  {
    author: 'Andrew A.',
    body:
      'It has been a blessing to work with Dr. Dodge and the staff. They have done a great job educating us and listening to what is important to us... I would recommended Altheia Integrative to anyone!',
    rating: 5,
    date: '2024-03-30',
  },
  {
    author: 'John A.',
    body:
      'Dr. Dodge is very knowledgeable and doesn’t just follow the typical playbook. He listens and understands the value of prevention through healthy lifestyle... Great guy. EQ is really high for a Dr.',
    rating: 5,
    date: '2024-02-21',
  },
  {
    author: 'Andrew S.',
    body:
      'Dr. Dodge is able to look at the entire patient, what is causing the problem, what are the symptoms, how to rectify the problem, so one can live their life to the fullest.',
    rating: 5,
    date: '2024-01-27',
  },
  {
    author: 'Steve C.',
    body:
      'Dr. Dodge is very knowledgeable in a functional medicine approach to a healthier life and lifestyle. He takes the time to listen, answer your questions, and works with you to attain your health goals. The staff is also friendly and a pleasure to work with.',
    rating: 5,
    date: '2024-01-24',
  },
  {
    author: 'Lonell N.',
    body:
      'Dr Dodge is amazing! His wife and staff are incredibly helpful, super friendly and knowledgeable... For once I feel like I have a Dr that works WITH me.',
    rating: 5,
    date: '2023-12-13',
  },
  { author: 'Dina H.', body: 'Great experience!', rating: 5, date: '2023-11-17' },
  {
    author: 'Tiffany C.',
    body:
      'Fabulous service, super helpful and nice staff. Was able to get in immediately when needed. Level of care was top notch.',
    rating: 5,
    date: '2023-11-06',
  },
  {
    author: 'Stephanie R.',
    body:
      'The thermography process was great and the results they share from their preferred provider were super detailed!',
    rating: 4,
    date: '2023-11-06',
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex gap-0.5" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={i < full ? 'w-4 h-4 fill-[rgb(199,90,51)]' : 'w-4 h-4 fill-slate-300'}
        >
          <path d="M10 15l-5.878 3.09L5.5 11.545.5 7.41l6.06-.88L10 1l3.44 5.53 6.06.88-5 4.135 1.378 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [page, setPage] = useState(0);
  const [fallbackOpen, setFallbackOpen] = useState(false);
  const [fallbackSent, setFallbackSent] = useState(false);
  const [fbName, setFbName] = useState('');
  const [fbEmail, setFbEmail] = useState('');
  const [fbRating, setFbRating] = useState(5);
  const [fbMessage, setFbMessage] = useState('');

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const openShareFeedback = () => {
    // Temporarily route to Contact page until a new feedback destination (e.g., Google Reviews) is confirmed
    navigate('/contact-us');
  };

  const totalPages = Math.max(1, Math.ceil(reviews.length / cardsPerView));
  const clampedPage = Math.min(page, totalPages - 1);
  if (clampedPage !== page) setPage(clampedPage);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Aletheia Integrative',
    url: 'https://www.aletheia.md',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (
        reviews.reduce((a, r) => a + r.rating, 0) / (reviews.length || 1)
      ).toFixed(2),
      ratingCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.body,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      datePublished: r.date,
    })),
  } as const;

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="relative bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Testimonials</h1>
          <p className="mt-3 text-[15px] opacity-95">Family Practice & Direct Primary Care in Lincoln, NE</p>
          <div className="mt-6 pointer-events-auto">
            <button
              type="button"
              onClick={openShareFeedback}
              className="inline-block px-4 py-2 text-white text-[12px] tracking-widest uppercase cursor-pointer"
              style={{ backgroundColor: '#111', letterSpacing: '0.12em' }}
            >
              Share Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container max-w-[1100px] px-6">
          <div className="flex items-center gap-3">
            <Stars value={
              reviews.reduce((a, r) => a + r.rating, 0) / (reviews.length || 1)
            } />
            <div className="text-[rgb(38,69,123)] font-medium">
              {reviews.length} Reviews
            </div>
          </div>

          {!showAll ? (
            <div className="mt-8">
              {/* Slider controls */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  className="px-3 py-2 text-[rgb(38,69,123)] border border-slate-300 bg-white hover:bg-slate-50"
                >
                  ‹
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to page ${i + 1}`}
                      onClick={() => setPage(i)}
                      className={
                        'w-2.5 h-2.5 rounded-full ' + (i === page ? 'bg-[rgb(38,69,123)]' : 'bg-slate-300')
                      }
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  className="px-3 py-2 text-[rgb(38,69,123)] border border-slate-300 bg-white hover:bg-slate-50"
                >
                  ›
                </button>
              </div>

              {/* Slider page */}
              <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {reviews
                  .slice(page * cardsPerView, page * cardsPerView + cardsPerView)
                  .map((rev, idx) => (
                    <article key={idx} className="bg-white shadow p-5">
                      <Stars value={rev.rating} />
                      <p className="mt-3 text-slate-700">{rev.body}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                        <span className="font-medium text-[rgb(38,69,123)]">{rev.author}</span>
                        <time dateTime={rev.date}>{new Date(rev.date).toLocaleDateString()}</time>
                      </div>
                    </article>
                  ))}
              </div>

              {/* Show More */}
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-block px-5 py-2 border text-[rgb(38,69,123)] hover:bg-white"
                >
                  Show More
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {reviews.map((rev, idx) => (
                  <article key={idx} className="bg-white shadow p-5">
                    <Stars value={rev.rating} />
                    <p className="mt-3 text-slate-700">{rev.body}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                      <span className="font-medium text-[rgb(38,69,123)]">{rev.author}</span>
                      <time dateTime={rev.date}>{new Date(rev.date).toLocaleDateString()}</time>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Fallback Feedback Modal (dev/local) */}
      {fallbackOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFallbackOpen(false)} />
          <div className="relative bg-white w-[92vw] max-w-[560px] p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-[rgb(38,69,123)]">Share Feedback</h2>
            {!fallbackSent ? (
              <form
                className="mt-4 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // No backend yet; mimic success
                  setFallbackSent(true);
                }}
              >
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Name</label>
                  <input value={fbName} onChange={(e) => setFbName(e.target.value)} className="w-full border p-2" required />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input type="email" value={fbEmail} onChange={(e) => setFbEmail(e.target.value)} className="w-full border p-2" required />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Rating</label>
                  <select value={fbRating} onChange={(e) => setFbRating(parseInt(e.target.value))} className="w-full border p-2">
                    {[5,4,3,2,1].map((r) => (
                      <option key={r} value={r}>{r} Stars</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Feedback</label>
                  <textarea value={fbMessage} onChange={(e) => setFbMessage(e.target.value)} className="w-full border p-2 h-28" required />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button type="button" onClick={() => setFallbackOpen(false)} className="px-4 py-2 border">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-white" style={{ backgroundColor: '#111', letterSpacing: '0.12em' }}>
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-4">
                <p className="text-slate-700">Thank you for your feedback!</p>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 border" onClick={() => setFallbackOpen(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
