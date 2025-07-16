import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer & Designer',
  description: 'Professional portfolio showcasing full stack development skills, UI/UX design, and project achievements.',
  keywords: ['full stack developer', 'ui/ux designer', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'John Doe' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'John Doe - Full Stack Developer & Designer',
    description: 'Professional portfolio showcasing full stack development skills, UI/UX design, and project achievements.',
    type: 'website',
    url: 'https://johndoe.dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer & Designer',
    description: 'Professional portfolio showcasing full stack development skills, UI/UX design, and project achievements.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}