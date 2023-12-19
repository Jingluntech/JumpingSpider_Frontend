'use client';

import Cookies from 'js-cookie';
import { useRouter } from '@/src/navigation';
import { createContext, useState } from 'react';

export const WalletContext = createContext({});

export default function WalletProvider({ children }) {
  const router = useRouter();
  const [openWallet, setOpenWallet] = useState(false);

  const handleSubscribeClick = () => {
    const token = Cookies.get('Token');
    if (!token) {
      return setOpenWallet(!openWallet);
    }
    router.push('/price');
  };

  return (
    <WalletContext.Provider
      value={{ openWallet, setOpenWallet, handleSubscribeClick }}
    >
      {children}
    </WalletContext.Provider>
  );
}
