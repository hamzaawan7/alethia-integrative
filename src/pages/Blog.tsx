import { Link } from 'react-router-dom'

type Post = {
  title: string
  date: string // ISO-like for dateTime
  excerpt: string
  slug: string
}

const posts: Post[] = [
  {
    title: 'How Regenerative Cell Therapy Helps Athletes Recover From Sports Injuries In Lincoln NE',
    date: '2025-11-14',
    excerpt:
      'At Aletheia Integrative, we know how deeply frustrating injuries can be. For active people in Lincoln who thrive on movement — pain and downtime can feel like losing a part of yourself.',
    slug: 'how-regenerative-cell-therapy-helps-athletes-recover-from-sports-injuries-in-lincoln-ne',
  },
  {
    title: 'How Regenerative Cell Therapy Can Transform Joint Pain Relief In Lincoln, NE',
    date: '2025-11-14',
    excerpt:
      "At Aletheia Integrative, we understand that joint pain isn’t just physical — it’s emotional. It can rob you of the activities and confidence that make life enjoyable.",
    slug: 'how-regenerative-cell-therapy-can-transform-joint-pain-relief-in-lincoln-ne',
  },
  {
    title: 'Red Light Therapy: A Natural Way To Support Skin, Energy, And Pain Relief',
    date: '2025-11-13',
    excerpt:
      'Red light therapy is a noninvasive treatment that uses light to help support your skin, boost your energy, and combat pain. Read on to learn how it works.',
    slug: 'red-light-therapy-a-natural-way-to-support-skin-energy-and-pain-relief',
  },
]

export default function Blog() {
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(new Date(iso))
  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Blog Articles</h1>
        </div>
      </section>

      {/* Listing */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <div className="flex items-center justify-end mb-4">
            <Link to="/blog-archive" className="text-slate-600 hover:text-[rgb(38,69,123)]">
              View all
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article key={p.slug} className="bg-[#eef2f6] p-8">
                <Link to={`/post/${p.slug}`} className="block">
                  <h2 className="text-[18px] leading-6 text-slate-800 font-semibold">{p.title}</h2>
                </Link>
                <Link to={`/post/${p.slug}`} className="block mt-3 text-[rgb(38,69,123)]">
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                </Link>
                <hr className="mt-3 mb-4 border-slate-200" />
                <p className="text-slate-600 leading-7">{p.excerpt}</p>
                <div className="mt-6">
                  <Link
                    to={`/post/${p.slug}`}
                    className="inline-block bg-[rgb(38,69,123)] text-white tracking-wider px-5 py-3 text-sm"
                  >
                    CONTINUE READING →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
