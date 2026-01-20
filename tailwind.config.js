/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '1.75rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              borderBottom: '2px solid #e2e8f0',
              paddingBottom: '0.5rem',
            },
            h3: {
              color: '#1e293b',
              fontWeight: '600',
              fontSize: '1.375rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.8',
            },
            a: {
              color: 'rgb(38,69,123)',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(48,79,133)',
              },
            },
            strong: {
              color: '#0f172a',
              fontWeight: '700',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              lineHeight: '1.7',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: 'rgb(38,69,123)',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              color: '#475569',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
