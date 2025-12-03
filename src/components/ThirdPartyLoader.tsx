import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ensureScript(src: string, attrs: Record<string, string> = {}) {
  const existing = Array.from(document.scripts).find((s) => s.src === src)
  if (existing) return existing
  const s = document.createElement('script')
  s.src = src
  s.async = true
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v))
  document.head.appendChild(s)
  return s
}

export default function ThirdPartyLoader() {
  const { pathname } = useLocation()

  useEffect(() => {
    const onBookOnline = pathname === '/book-online'
    // Chat widget on all pages except Book Online
    if (!onBookOnline) {
      ensureScript('https://widgets.leadconnectorhq.com/loader.js', {
        'data-resources-url': 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
        'data-widget-id': '684311ff7322c267985b3bb3',
      })
    }

    // On Book Online, ensure chat UI is hidden defensively
    if (onBookOnline) {
      const styleBlock = document.createElement('style')
      styleBlock.setAttribute('data-thirdparty-hide-chat', 'true')
      styleBlock.textContent = `
        [id*="chat-widget"], .lc-launcher, #lc_chat_widget, div[id^="lccw"], iframe[src*="leadconnector" i] {
          display: none !important; visibility: hidden !important; opacity: 0 !important;
        }
      `
      document.head.appendChild(styleBlock)
      return () => { styleBlock.remove() }
    }
  }, [pathname])

  return null
}
