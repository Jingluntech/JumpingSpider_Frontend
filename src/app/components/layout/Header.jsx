'use client';

import Image from 'next/image';
import ConnectWallet from '@/src/app/components/modals/ConnectWallet';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import Navbar from '@/src/app/components/navbar/Navbar';
import Language from '@/src/app/components/modals/Language';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { logoutAPI } from '@/api/login';
import { useDisconnect } from 'wagmi';
import { useRouter } from 'next/navigation';

export default function Header({ locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const isLogin = Boolean(Cookies.get('Token'));
  const { disconnect } = useDisconnect();

  const navLinks = [
    {
      id: '1',
      title: '首頁',
      url: `/${locale}`,
      hash: '#home',
    },
    {
      id: '2',
      title: '價格',
      url: `/${locale}`,
      hash: '#price',
    },
    {
      id: '3',
      title: '常見問題',
      url: `/${locale}`,
      hash: '#faq',
    },
    {
      id: '4',
      title: 'OpenVPN教學',
      url: `/${locale}/instruction`,
    },
  ];

  const handleNavigationClick = (e, hash) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setActiveHash(hash);
    if (pathname !== '/') {
      return router.push(`/${locale}${hash}`);
    }

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `/${locale}${hash}`);
    }

    const element = document.getElementById(hash.substring(1)); // Remove '#' from hash

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // router.replace(`/${locale}${hash}`, undefined, { shallow: true });
    }
  };

  const handleMemberCenterClick = () => {
    if (!isLogin) {
      return setOpenWallet(true);
    }
    setActiveHash('');
    router.push(`/${locale}/member/info`);
  };

  const handleDisconnectWallet = async () => {
    try {
      await logoutAPI();
      Cookies.remove('Token');
      disconnect();
      setActiveHash('#home');
      router.push(`/${locale}#home`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getHash = () => {
      if (pathname.includes('member')) {
        return '';
      } else if (window.location.hash) {
        return window.location.hash;
      } else {
        return '#home';
      }
    };
    setActiveHash(getHash());
  }, [pathname]);

  return (
    <>
      <header className='fixed z-30 mx-auto flex h-20 w-full justify-center bg-grey-900 px-4'>
        <div className='flex h-full w-full min-w-[350px] max-w-[1216px] items-center justify-between'>
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
                  <Link
                    key={el.id}
                    href={`${el.url}${el.hash}`}
                    className='relative h-full'
                    onClick={(e) => handleNavigationClick(e, el.hash)}
                  >
                    <li
                      className={
                        activeHash === el.hash
                          ? 'flex h-full items-center text-primary-yellow-500'
                          : 'flex h-full items-center text-grey-300'
                      }
                    >
                      {el.title}
                      {activeHash === el.hash && (
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
            <button
              className={
                pathname.includes('member')
                  ? 'relative flex h-full items-center text-primary-yellow-500'
                  : 'flex h-full items-center text-grey-300'
              }
              onClick={() => handleMemberCenterClick()}
            >
              會員中心
              {pathname.includes('member') && (
                <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
              )}
            </button>
            {isClient && isLogin ? (
              <button
                className='h-fit w-[104px] rounded-md bg-grey-600 px-5 py-[11px] text-grey-25'
                onClick={() => handleDisconnectWallet()}
              >
                中斷連線
              </button>
            ) : (
              <button
                className='h-fit w-[104px] rounded-md bg-primary-blue-500 px-5 py-[11px]'
                onClick={() => setOpenWallet(true)}
              >
                連結錢包
              </button>
            )}
          </div>
        </div>
      </header>
      {openWallet && (
        <>
          <ConnectWallet onClick={() => setOpenWallet(false)} />
          <ModalBackground onClick={() => setOpenWallet(false)} />
        </>
      )}
    </>
  );
}
