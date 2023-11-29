'use client';

import Image from 'next/image';
import ConnectWallet from './modals/ConnectWallet';
import ModalBackground from './modals/ModalBackground';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className='absolute bottom-0 left-0 top-0 z-20 flex w-3/5 min-w-[220px] flex-col items-center bg-grey-900'>
      <ul className='mt-14 flex w-full flex-col gap-4 px-4'>
        <li className='h-fit p-2'>link1</li>
        <li className='h-fit p-2'>link2</li>
        <li className='h-fit p-2'>link3</li>
      </ul>
    </nav>
  );
}
