import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi';
import {
  WagmiConfig,
  configureChains,
  createConfig,
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from 'viem/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

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
        <Header />
        <main className='h-screen-minus py-4'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
