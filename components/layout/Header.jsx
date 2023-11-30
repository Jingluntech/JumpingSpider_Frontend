'use client';

import Image from 'next/image';
import ConnectWallet from '@/components/modals/ConnectWallet';
import ModalBackground from '@/components/modals/ModalBackground';
import Navbar from '@/components/Navbar';
import Language from '@/components/modals/Language';
import { useState } from 'react';

export default function Header() {
  const [openWallet, setOpenWallet] = useState(false);
  // const [openNavbar, setOpenNavbar] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState('zhTW');

  const handleOpenLang = (lang) => {
    setSelectedLang(lang);
    setOpenLang(false);
  };

  return (
    <header className='w-full border-b border-grey-600 px-4'>
      <div className='flex h-16 items-center justify-between'>
        <div className='flex items-center'>
          {/* <div
            className='relative cursor-pointer md:hidden'
            onClick={() => setOpenNavbar(true)}
          >
            <Image
              src='/hamburger.svg'
              alt='menu'
              width={30}
              height={30}
              priority={true}
            />
          </div>
          {openNavbar && (
            <>
              <Navbar />
              <ModalBackground onClick={() => setOpenNavbar(false)} />
            </>
          )} */}
          <Image
            src='/Logo.svg'
            alt='logo'
            width={100}
            height={50}
            priority={true}
          />
          {/* <nav>
            <ul className='hidden gap-4 md:flex'>
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
            </ul>
          </nav> */}
        </div>
        <div className='flex items-center gap-5'>
          <Language
            selectedLang={selectedLang}
            openLang={openLang}
            setOpenLang={setOpenLang}
            onLangClick={(lang) => handleOpenLang(lang)}
          />
          <button
            className='h-fit w-fit rounded-md bg-primary-blue-500 px-4 py-2'
            onClick={() => setOpenWallet(true)}
          >
            連結錢包
          </button>
          {openWallet && (
            <>
              <ConnectWallet onClick={() => setOpenWallet(false)} />
              <ModalBackground onClick={() => setOpenWallet(false)} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
