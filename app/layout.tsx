import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lydiaxiaoyang980112.github.io/lydiaworkspace/'),
  title: 'LUCA · 个人工作台',
  description: '一个干净、轻盈的个人工作与生活管理空间。',
  openGraph: {
    title: 'LUCA · 个人工作台',
    description: '把生活和工作，收进同一张桌面。',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUCA · 个人工作台',
    description: '把生活和工作，收进同一张桌面。',
    images: ['/og.jpg'],
  },
};

export const dynamic = 'force-static';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
