'use client';

import Cookies from 'js-cookie';
import { useRouter } from '@/src/navigation';
import { createContext, useEffect, useRef, useState } from 'react';

export const WalletContext = createContext({});

export default function WalletProvider({ children }) {
  const token = Cookies.get('Token');
  const router = useRouter();
  const [openWallet, setOpenWallet] = useState({
    isOpen: false,
    from: 'home',
  });
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  console.log(openWallet);

  const handleSubscribeClick = () => {
    if (!token) {
      setOpenWallet((prev) => ({
        ...prev,
        isOpen: true,
      }));
    } else {
      router.push('/price');
    }
  };

  return (
    <WalletContext.Provider
      value={{
        openWallet,
        setOpenWallet,
        handleSubscribeClick,
        checkOutOpen,
        setCheckOutOpen,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
