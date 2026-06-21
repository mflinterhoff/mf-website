import type { Metadata } from 'next'
import { Poppins, Inconsolata } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mflinterhoff.com'),
  title: {
    default: 'Matthias Flinterhoff — Operator & Technologist',
    template: '%s — Matthias Flinterhoff',
  },
  description:
    'Operator and builder restructuring businesses, implementing systems and running migrations.',
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
}

// Set the theme class before paint to avoid a flash of the wrong colour scheme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inconsolata.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
