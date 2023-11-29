import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

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
        <header className='w-full border-b border-grey-600 px-4'>
          <Navbar />
        </header>
        <main className='h-screen-minus py-4'>{children}</main>
        <footer className='flex h-16 items-center justify-center bg-grey-800'>
          <h1>This is a footer</h1>
        </footer>
      </body>
    </html>
  );
}
