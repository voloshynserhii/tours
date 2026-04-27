import type { Metadata } from 'next';
import { Anton, Inter, Archivo, Poppins } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';
import { Header, Footer, Providers } from '@/components';
import { getDictionary, Locale } from '@/get-dictionary';

const archivoblack = Archivo({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
});

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Castellon Cycling Co',
  description:
    '',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

import { headers } from 'next/headers';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const headersList = await headers();
  const host = headersList.get('host');

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body
        className={`${anton.variable} ${inter.variable} ${archivoblack.variable} ${poppins.variable} antialiased bg-cream-50 text-stone-900`}
        data-region={process.env.NEXT_PUBLIC_REGION ?? ''}
        data-channelcode={process.env.NEXT_PUBLIC_CHANNELCODE ?? ''}
      >
        <Script src="//widget.siteminder.com/ibe.min.js" strategy="afterInteractive" />
        <Providers dictionary={dict}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}