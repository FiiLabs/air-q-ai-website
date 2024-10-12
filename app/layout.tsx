import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/app/components/Header';
import Mail from '@/assets/svg/mail.svg?react';
import { cn } from '@/utils';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'AirQAI - Instant Air Quality Analysis from Photos',
  description:
    'AirQAI uses AI to instantly analyze air quality from your photos. Make informed decisions about outdoor activities, ventilation, and travel based on real-time air quality data.',
  keywords:
    'air quality app, photo air analysis, outdoor safety, pollution detection, environmental health, AI air quality, smart city, health tech, air pollution app, real-time air quality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'relative bg-[#171717]')}>
        <Header />
        {children}
        <hr className="container mx-auto mt-10 h-px border-white xl:mt-20" />
        <footer className="mx-3 pb-10 pt-2.5 md:mx-0 md:pb-20 md:pt-5">
          <div className="container mx-auto flex flex-col items-end">
            <h3 className="text-base font-semibold text-white lg:text-xl xl:text-2xl">
              Contact us
            </h3>
            <a
              href="mailto:"
              className="mt-5 flex items-center gap-2">
              <Mail className="h-auto w-5 text-white md:w-10" />
              <p className="text-sm font-normal text-white lg:text-lg xl:text-xl">
                contact@publicai.io
              </p>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
