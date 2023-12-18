'use client';

import { createContext, useState } from 'react';

export const WalletContext = createContext({});

export default function WalletProvider({ children }) {
  const [openWallet, setOpenWallet] = useState(false);

  return (
    <WalletContext.Provider value={{ openWallet, setOpenWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
