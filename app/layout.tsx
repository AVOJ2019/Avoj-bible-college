import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avojministries.org'),
  title: {
    default: 'AVOJ Ministries & AVOJ Bible College',
    template: '%s | AVOJ Ministries',
  },
  description:
    'AVOJ Ministries & AVOJ Bible College - Equipping believers, transforming lives, and advancing the Gospel of Jesus Christ through biblically grounded education and Spirit-led ministry.',
  keywords: [
    'AVOJ Ministries',
    'AVOJ Bible College',
    'Bible College',
    'Christian Ministry',
    'Theological Education',
    'Evangelism',
    'Missions',
  ],
  openGraph: {
    title: 'AVOJ Ministries & AVOJ Bible College',
    description:
      'Equipping believers, transforming lives, and advancing the Gospel through biblically grounded education and Spirit-led ministry.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVOJ Ministries & AVOJ Bible College',
    description:
      'Equipping believers, transforming lives, and advancing the Gospel.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
