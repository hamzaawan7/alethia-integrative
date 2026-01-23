import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { useDocumentHead } from '../hooks/useDocumentHead'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  // Set document head meta tags
  useDocumentHead({
    title: post?.metaTitle || post?.title ? `${post?.metaTitle || post?.title} | Aletheia Integrative` : 'Blog | Aletheia Integrative',
    description: post?.metaDescription || post?.excerpt,
    keywords: post?.keywords
  })

  if (!post) {
    return (
      <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="h-16 md:h-20" />
        <section className="py-20">
          <div className="container max-w-[700px] px-6 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">Post Not Found</h1>
              <p className="text-slate-600 mb-8 text-lg">The blog post you're looking for doesn't exist or has been moved.</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-[rgb(38,69,123)] text-white tracking-wider px-6 py-3 rounded-lg text-sm hover:bg-[rgb(48,79,133)] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero Section with Title */}
      <section className="bg-[rgb(38,69,123)] py-12 md:py-16">
        <div className="container max-w-[900px] px-6 mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span>Aletheia Integrative</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-10 md:py-14">
        <div className="container max-w-[800px] px-6 mx-auto">
          {/* Featured Image */}
          <div className="mb-10 -mt-20 relative z-10">
            <div className="bg-white p-2 rounded-2xl shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto rounded-xl object-cover max-h-[450px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/blog/placeholder.svg'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-slate-200
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[rgb(38,69,123)]
              prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-5 prose-p:text-[17px]
              prose-ul:my-6 prose-ul:pl-0 prose-ul:list-none
              prose-ol:my-6 prose-ol:pl-0
              prose-li:text-slate-700 prose-li:leading-[1.8] prose-li:mb-3 prose-li:pl-8 prose-li:relative prose-li:text-[17px]
              [&_ul>li]:before:content-['●'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-[rgb(38,69,123)] [&_ul>li]:before:font-bold [&_ul>li]:before:text-lg
              [&_ol]:list-decimal [&_ol]:pl-8 [&_ol>li]:pl-2
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-a:text-[rgb(38,69,123)] prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-[rgb(199,90,51)] hover:prose-a:no-underline
              prose-blockquote:border-l-4 prose-blockquote:border-[rgb(38,69,123)] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-slate-600"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Call to Action */}
          <div className="mt-14 p-8 bg-gradient-to-r from-[rgb(38,69,123)] to-[rgb(48,89,153)] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Wellness Journey?</h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">Schedule a consultation with our expert team at Aletheia Integrative today.</p>
            <a 
              href="https://www.aletheia.md/book-online" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[rgb(38,69,123)] font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Back to blog link */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center flex-wrap gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[rgb(38,69,123)] font-medium hover:text-[rgb(199,90,51)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Posts
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-sm">Share:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-100 hover:bg-[rgb(38,69,123)] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-100 hover:bg-[rgb(38,69,123)] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-100 hover:bg-[rgb(38,69,123)] text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
