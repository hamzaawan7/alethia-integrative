import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogArchive() {
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(new Date(iso))

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Blog Archive</h1>
          <p className="mt-4 text-white/80">All {blogPosts.length} articles</p>
        </div>
      </section>

      {/* Listing */}
      <section className="py-14">
        <div className="container max-w-[1100px] px-6">
          <div className="flex items-center justify-end mb-4">
            <Link to="/blog" className="text-slate-600 hover:text-[rgb(38,69,123)]">
              ← Back to Blog
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sortedPosts.map((p) => (
              <article key={p.slug} className="bg-[#eef2f6] p-8">
                <div className="aspect-video mb-4 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/blog/placeholder.svg'
                    }}
                  />
                </div>
                <Link to={`/post/${p.slug}`} className="block">
                  <h2 className="text-[18px] leading-6 text-slate-800 font-semibold">{p.title}</h2>
                </Link>
                <Link to={`/post/${p.slug}`} className="block mt-3 text-[rgb(38,69,123)]">
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                </Link>
                <hr className="mt-3 mb-4 border-slate-200" />
                <p className="text-slate-600 leading-7 line-clamp-3">{p.excerpt}</p>
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
