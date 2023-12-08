'use client';

import Image from 'next/image';
import ConnectWallet from '@/src/app/components/modals/ConnectWallet';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import Navbar from '@/src/app/components/navbar/Navbar';
import Language from '@/src/app/components/modals/Language';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ locale }) {
  const pathname = usePathname();
  const [openWallet, setOpenWallet] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const navLinks = [
    {
      id: '1',
      title: '首頁',
      url: `/${locale}`,
    },
    {
      id: '2',
      title: '價格',
      url: '#price',
    },
    {
      id: '3',
      title: '常見問題',
      url: '#faq',
    },
    {
      id: '4',
      title: 'OpenVPN教學',
      url: `/${locale}/instruction`,
    },
  ];

  return (
    <header className='mx-auto h-20 w-full min-w-[350px] max-w-[1216px] px-4'>
      <div className='flex h-full w-full items-center justify-between'>
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
                <Link key={el.id} href={el.url} className='relative h-full'>
                  <li
                    className={
                      pathname === el.url
                        ? 'flex h-full items-center text-primary-yellow-500'
                        : 'flex h-full items-center text-grey-300'
                    }
                  >
                    {el.title}
                    {pathname === el.url && (
                      <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className='flex h-full flex-shrink-0 items-center gap-5'>
          <Language
            openLang={openLang}
            setOpenLang={setOpenLang}
            locale={locale}
          />
          <Link
            href={`/${locale}/member/info`}
            className={
              pathname.includes('member')
                ? 'relative flex h-full items-center text-primary-yellow-500'
                : 'flex h-full items-center text-grey-300'
            }
          >
            會員中心
            {pathname.includes('member') && (
              <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
            )}
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
