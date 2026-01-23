import { useEffect } from 'react'

interface DocumentHeadProps {
  title?: string
  description?: string
  keywords?: string
}

export function useDocumentHead({ title, description, keywords }: DocumentHeadProps) {
  useEffect(() => {
    // Set title
    if (title) {
      document.title = title
    }

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)
    }

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)
    }

    // Cleanup function to restore original title on unmount
    return () => {
      document.title = 'Aletheia Integrative'
    }
  }, [title, description, keywords])
}
