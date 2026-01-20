import { useParams, Link } from 'react-router-dom'

// Blog posts data - this should match the data in Blog.tsx
type Post = {
  title: string
  date: string
  excerpt: string
  slug: string
  content?: string
}

const posts: Post[] = [
  {
    title: 'How Regenerative Cell Therapy Helps Athletes Recover From Sports Injuries In Lincoln NE',
    date: '2025-11-14',
    excerpt:
      'At Aletheia Integrative, we know how deeply frustrating injuries can be. For active people in Lincoln who thrive on movement — pain and downtime can feel like losing a part of yourself.',
    slug: 'how-regenerative-cell-therapy-helps-athletes-recover-from-sports-injuries-in-lincoln-ne',
    content: `
      <p>At Aletheia Integrative, we know how deeply frustrating injuries can be. For active people in Lincoln who thrive on movement — pain and downtime can feel like losing a part of yourself.</p>
      <p>If you've been sidelined by a sports injury, regenerative cell therapy might be the solution you've been searching for. This innovative treatment is helping athletes recover faster and more completely than traditional methods alone.</p>
      <h2>Understanding Regenerative Cell Therapy</h2>
      <p>Regenerative cell therapy uses your body's natural healing mechanisms to repair damaged tissues. By concentrating growth factors and healing cells, this treatment accelerates recovery and promotes tissue regeneration at the cellular level.</p>
      <h2>Benefits for Athletes</h2>
      <ul>
        <li>Faster recovery times</li>
        <li>Reduced inflammation and pain</li>
        <li>Improved tissue healing</li>
        <li>Lower risk of re-injury</li>
        <li>Natural, non-surgical approach</li>
      </ul>
      <p>If you're ready to get back to your active lifestyle, contact Aletheia Integrative in Lincoln, NE to learn more about regenerative cell therapy.</p>
    `,
  },
  {
    title: 'How Regenerative Cell Therapy Can Transform Joint Pain Relief In Lincoln, NE',
    date: '2025-11-14',
    excerpt:
      "At Aletheia Integrative, we understand that joint pain isn't just physical — it's emotional. It can rob you of the activities and confidence that make life enjoyable.",
    slug: 'how-regenerative-cell-therapy-can-transform-joint-pain-relief-in-lincoln-ne',
    content: `
      <p>At Aletheia Integrative, we understand that joint pain isn't just physical — it's emotional. It can rob you of the activities and confidence that make life enjoyable.</p>
      <p>Regenerative cell therapy offers a revolutionary approach to managing chronic joint pain without surgery or prolonged medication use.</p>
      <h2>How It Works</h2>
      <p>This cutting-edge treatment harnesses your body's natural healing capabilities to repair and regenerate damaged joint tissue. By delivering concentrated growth factors directly to the affected area, regenerative cell therapy promotes healing from within.</p>
      <h2>What to Expect</h2>
      <p>Most patients experience gradual improvement over several weeks as their body responds to treatment. Many report significant pain reduction and improved mobility.</p>
      <p>Contact Aletheia Integrative today to discover if regenerative cell therapy is right for you.</p>
    `,
  },
  {
    title: 'Red Light Therapy: A Natural Way To Support Skin, Energy, And Pain Relief',
    date: '2025-11-13',
    excerpt:
      'Red light therapy is a noninvasive treatment that uses light to help support your skin, boost your energy, and combat pain. Read on to learn how it works.',
    slug: 'red-light-therapy-a-natural-way-to-support-skin-energy-and-pain-relief',
    content: `
      <p>Red light therapy is a noninvasive treatment that uses specific wavelengths of light to help support your skin, boost your energy, and combat pain. But how does it work? Read on to learn how red light therapy works with your body to help it heal from within.</p>
      <h2>What Is Red Light Therapy?</h2>
      <p>Red light therapy, also known as photobiomodulation or low-level light therapy, uses red and near-infrared light wavelengths to penetrate the skin and stimulate cellular function.</p>
      <h2>Benefits of Red Light Therapy</h2>
      <ul>
        <li>Improved skin health and appearance</li>
        <li>Enhanced energy production at the cellular level</li>
        <li>Reduced inflammation and pain</li>
        <li>Faster wound healing</li>
        <li>Better sleep quality</li>
      </ul>
      <h2>How It Works</h2>
      <p>The light energy from red light therapy is absorbed by mitochondria in your cells, boosting ATP (energy) production. This increased energy helps cells function more efficiently and repair damage more effectively.</p>
      <p>Experience the healing power of red light therapy at Aletheia Integrative in Lincoln, NE.</p>
    `,
  },
]

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  const fmt = (iso: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(new Date(iso))

  if (!post) {
    return (
      <main>
        <div className="h-16 md:h-20" />
        <section className="bg-[rgb(38,69,123)] text-white py-16">
          <div className="container max-w-[1100px] px-6 text-center">
            <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Post Not Found</h1>
          </div>
        </section>
        <section className="py-14">
          <div className="container max-w-[1100px] px-6 text-center">
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-block bg-[rgb(38,69,123)] text-white tracking-wider px-5 py-3 text-sm"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6">
          <Link to="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">{post.title}</h1>
          <time dateTime={post.date} className="text-white/80 mt-3 inline-block">
            {fmt(post.date)}
          </time>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <article className="container max-w-[800px] px-6">
          <div className="prose prose-slate max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p className="text-slate-600 leading-7 text-lg mb-6">{post.excerpt}</p>
                <p className="text-slate-600 leading-7">
                  This is the full content of the blog post. In a real application, this would
                  contain the complete article content.
                </p>
              </>
            )}
          </div>

          {/* Back to blog link */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              to="/blog"
              className="inline-block bg-[rgb(38,69,123)] text-white tracking-wider px-5 py-3 text-sm hover:bg-[rgb(48,79,133)]"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
