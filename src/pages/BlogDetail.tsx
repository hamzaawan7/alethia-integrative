import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main>
        <div className="h-16 md:h-20" />
        <section className="py-16">
          <div className="container max-w-[800px] px-6 text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Post Not Found</h1>
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
    <main className="bg-white">
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Blog Content */}
      <article className="py-12">
        <div className="container max-w-[800px] px-6 mx-auto">
          {/* Back Link */}
          <Link to="/blog" className="text-[rgb(38,69,123)] hover:underline mb-8 inline-block text-sm">
            ← Back to Blog
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center leading-tight mb-10">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/blog/placeholder.svg'
              }}
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-bold
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:pl-6
              prose-ol:my-4 prose-ol:pl-6
              prose-li:text-slate-700 prose-li:leading-relaxed prose-li:mb-2
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-a:text-[rgb(38,69,123)] prose-a:underline hover:prose-a:text-[rgb(48,79,133)]"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Back to blog link */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              to="/blog"
              className="inline-block bg-[rgb(38,69,123)] text-white tracking-wider px-6 py-3 text-sm hover:bg-[rgb(48,79,133)] transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
