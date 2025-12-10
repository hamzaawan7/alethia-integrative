import { useEffect, useRef } from 'react'

export default function BookOnline() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    // Temporarily disable chat widget on this route to avoid interference
    const styleBlock = document.createElement('style')
    styleBlock.setAttribute('data-book-online-chat-hide', 'true')
    styleBlock.textContent = `
      /* Hide lead connector chat widgets on Book Online */
      [id*="chat-widget"], .lc-launcher, #lc_chat_widget, div[id^="lccw"], iframe[src*="leadconnector" i] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `
    document.head.appendChild(styleBlock)

    const el = iframeRef.current
    if (!el) return
    const wrapper = document.getElementById('book-form-wrap') as HTMLDivElement | null
    const ensureWrapperVisible = () => {
      if (!wrapper) return
      wrapper.style.minHeight = '900px'
      wrapper.style.display = 'block'
      wrapper.style.visibility = 'visible'
      wrapper.style.opacity = '1'
    }
    const ensureVisible = () => {
      el.style.opacity = '1'
      el.style.visibility = 'visible'
      el.style.display = 'block'
      ensureWrapperVisible()
    }
    ensureVisible()
    const mo = new MutationObserver(() => ensureVisible())
    mo.observe(el, { attributes: true, attributeFilter: ['style', 'class'] })
    // Watchdog: if iframe collapses or is hidden, restore and optionally reload
    let reloadAttempts = 0
    const src = el.getAttribute('src') || ''
    const id = window.setInterval(() => {
      ensureVisible()
      ensureWrapperVisible()
      const rect = el.getBoundingClientRect()
      const hidden = getComputedStyle(el).display === 'none' || getComputedStyle(el).visibility === 'hidden' || parseFloat(getComputedStyle(el).opacity || '1') < 0.5
      const collapsed = rect.height < 100
      if ((hidden || collapsed) && reloadAttempts < 3) {
        reloadAttempts += 1
        // Force a soft reload of the iframe if it appears collapsed/hidden
        el.src = src + (src.includes('?') ? '&' : '?') + 'r=' + Date.now()
        // Re-apply visibility immediately
        ensureVisible()
      }
    }, 1200)
    return () => {
      mo.disconnect()
      window.clearInterval(id)
      styleBlock.remove()
    }
  }, [])

  return (
    <main>
      <div className="h-16 md:h-20" />
      <section id="book-form-wrap" className="container max-w-[1100px] px-6 py-10">
        <iframe
          src="https://link.aletheia.md/widget/form/SaqVCVsIaMkH2arPe2iz"
          style={{ width: '100%', height: '870px', border: 'none', borderRadius: '3px', opacity: 0, transition: 'opacity 200ms ease' }}
          id="inline-book-SaqVCVsIaMkH2arPe2iz"
          ref={iframeRef}
          data-layout="{'id':'INLINE'}"
          data-trigger-style='{"fontFamily":"","color":"#ffffff","backgroundColor":"#000000","borderRadius":"0px","borderColor":"","buttonShadow":"","hideIcon":false,"hideTitle":false}'
          data-trigger-text=""
          data-lazy-loading="false"
          data-deactivation-text=""
          data-deactivation-delay="0"
          data-deactivation-position=""
          data-deactivation-action="none"
          data-deactivation-type="none"
          data-deactivation-value=""
          data-form-name="Contact us form for site"
          data-height="869"
          data-layout-iframe-id="inline-book-SaqVCVsIaMkH2arPe2iz"
          data-form-id="SaqVCVsIaMkH2arPe2iz"
          title="Contact us form for site"
          allow="clipboard-write; fullscreen; geolocation; microphone; camera"
          loading="eager"
          onLoad={(e) => {
            const el = e.currentTarget as HTMLIFrameElement;
            // Show after the first load event
            el.style.opacity = '1';
          }}
        />

        {/* Fallback calendar / booking link while branded LeadConnector domain is not resolving */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-700 mb-3">
            If the embedded booking form does not load, you can also schedule through our main booking calendar.
          </p>
          <a
            href="https://www.aletheia.md/schedule?utm_medium=markup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] bg-[rgb(38,69,123)] text-white hover:bg-[rgb(30,55,98)]"
          >
            Open Booking Calendar
          </a>
        </div>
      </section>
    </main>
  )
}
