import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { Web3Modal } from '@/components/Web3Modal';

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

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${notoSans.variable} ${inter.variable} `}>
      <body className='flex min-h-screen min-w-[350px] flex-col bg-grey-900 text-grey-100'>
        <Web3Modal>
          <Header />
          <main className='h-fit'>{children}</main>
          <Footer />
        </Web3Modal>
      </body>
    </html>
  );
}
