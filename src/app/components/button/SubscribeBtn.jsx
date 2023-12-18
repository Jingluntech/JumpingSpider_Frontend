'use client';

import { useContext } from 'react';
import { WalletContext } from '@/src/app/context/context';

export default function SubscribeBtn({ button }) {
  const { handleSubscribeClick } = useContext(WalletContext);

  return (
    <button
      className='mb-11 h-14 w-[158px] rounded-md bg-primary-blue-500 text-lg font-bold hover:bg-grey-100 hover:text-grey-800'
      onClick={() => handleSubscribeClick()}
    >
      {button}
    </button>
  );
}
