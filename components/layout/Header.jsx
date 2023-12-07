'use client';

import Image from 'next/image';
import ConnectWallet from '@/components/modals/ConnectWallet';
import ModalBackground from '@/components/modals/ModalBackground';
import Navbar from '@/components/navbar/Navbar';
import Language from '@/components/modals/Language';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    id: '1',
    title: '首頁',
    url: '/',
  },
  {
    id: '2',
    title: '價格',
    url: '/price',
  },
  {
    id: '3',
    title: '常見問題',
    url: '/faq',
  },
  {
    id: '4',
    title: 'OpenVPN教學',
    url: '/instruction',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [openWallet, setOpenWallet] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState('zhTW');
  console.log(pathname);

  const handleOpenLang = (lang) => {
    setSelectedLang(lang);
    setOpenLang(false);
  };

  return (
    <header className='h-20 w-full border-b border-grey-600 px-4 py-5'>
      <div className='flex  h-full w-full items-center justify-between'>
        <div className='flex h-full w-full items-center gap-4'>
          <div
            className='relative cursor-pointer lg:hidden'
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
              <Navbar navLinks={navLinks} />
              <ModalBackground onClick={() => setOpenNavbar(false)} />
            </>
          )}
          <div className='flex-shrink-0 lg:mr-14'>
            <Image
              src='/Logo.svg'
              alt='logo'
              width={100}
              height={50}
              priority={true}
            />
          </div>
          <nav className='h-full w-fit min-w-fit justify-between'>
            <ul className='hidden h-full items-center gap-10 lg:flex'>
              {navLinks.map((el) => (
                <Link key={el.id} href={el.url} className='relative'>
                  <li
                    className={
                      pathname === el.url
                        ? ' text-primary-yellow-500'
                        : 'text-grey-300'
                    }
                  >
                    {el.title}
                    {pathname === el.url && (
                      <div className='absolute left-1/2 top-12 h-1 w-10 -translate-x-1/2 rounded bg-primary-yellow-500'></div>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className='flex flex-shrink-0 items-center gap-5'>
          <Language
            selectedLang={selectedLang}
            openLang={openLang}
            setOpenLang={setOpenLang}
            onLangClick={(lang) => handleOpenLang(lang)}
          />
          <Link href='/member' className='text-grey-300'>
            會員中心
          </Link>
          <button
            className='h-fit w-[104px] rounded-md bg-primary-blue-500 px-5 py-[11px]'
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
