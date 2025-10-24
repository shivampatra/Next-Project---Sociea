import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Load Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Sociea - We Grow Your Brand\'s Voice on Social Media',
  description: 'Transform your social presence into a powerful growth engine. We craft strategies that turn followers into loyal customers.',
  keywords: 'social media marketing, digital marketing, content creation, brand growth',
  openGraph: {
    title: 'Sociea - Social Media Marketing Agency',
    description: 'Transform your social presence into a powerful growth engine',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}