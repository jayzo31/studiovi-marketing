import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudioVid - AI-Powered YouTube Growth Platform',
  description: 'Generate scripts, optimize SEO, create thumbnails, and analyze trends. Everything you need to grow your YouTube channel, powered by AI.',
  keywords: 'YouTube, AI, video scripts, SEO, thumbnails, analytics, content creator',
  openGraph: {
    title: 'StudioVid - AI-Powered YouTube Growth Platform',
    description: 'Everything you need to grow your YouTube channel, powered by AI.',
    url: 'https://studiovi.ai',
    siteName: 'StudioVid',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioVid - AI-Powered YouTube Growth Platform',
    description: 'Everything you need to grow your YouTube channel, powered by AI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
