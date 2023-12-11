import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Header from '@/src/app/components/layout/Header';
import Footer from '@/src/app/components/layout/Footer';
import { notFound } from 'next/navigation';

import { Web3Modal } from '@/src/app/components/Web3Modal';

// 字體變數設定
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-notoSans',
});

//頁籤設定
export const metadata = {
  title: {
    default: 'Jumping Spider',
    template: '%s | Jumping Spider',
  },
};

// Can be imported from a shared config
const locales = ['en', 'tw', 'cn'];

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} className={`${notoSans.variable} ${inter.variable} `}>
      <body className='flex flex-col bg-grey-900 text-grey-100'>
        <Web3Modal>
          <Header locale={locale} />
          <hr className='fixed top-20 w-full border-b border-grey-600' />
          <main className='h-fit pt-20'>{children}</main>
          <Footer locale={locale} />
        </Web3Modal>
      </body>
    </html>
  );
}
