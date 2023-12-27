import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Header from '@/src/app/components/layout/Header';
import Footer from '@/src/app/components/layout/Footer';
import pick from 'lodash.pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Web3Modal } from '@/src/app/components/Web3Modal';
import WalletProvider from '@/src/app/context/context';

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
  icons: {
    icon: '/home/vpn05_logo.svg', // /public path
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale} className={`${notoSans.variable} ${inter.variable} `}>
      <body className='flex w-screen flex-col bg-grey-900 text-grey-100'>
        <Web3Modal>
          <WalletProvider>
            <NextIntlClientProvider messages={pick(messages, 'header')}>
              <Header locale={locale} />
            </NextIntlClientProvider>
            <main className='mt-[80px] h-fit w-full'>{children}</main>
            <Footer />
          </WalletProvider>
        </Web3Modal>
      </body>
    </html>
  );
}
