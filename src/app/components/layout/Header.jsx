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
import { useTranslations } from 'next-intl';

export default function Header({ locale }) {
  const t = useTranslations('header');
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
      title: 'home',
      url: `/${locale}`,
      hash: '#home',
    },
    {
      id: '2',
      title: 'price',
      url: `/${locale}`,
      hash: '#price',
    },
    {
      id: '3',
      title: 'faq',
      url: `/${locale}`,
      hash: '#faq',
    },
    {
      id: '4',
      title: 'tutorial',
      url: `/${locale}`,
    },
  ];

  const languages = [
    {
      id: 'tw',
      title: '繁體中文',
    },
    {
      id: 'cn',
      title: '简体中文',
    },
    {
      id: 'en',
      title: 'English',
    },
  ];

  const handleNavigationClick = (e, hash) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setActiveHash(hash);
    if (pathname !== `/${locale}`) {
      return router.push(`/${locale}${hash}`);
    }

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `/${locale}${hash}`);
    }

    const element = document.getElementById(hash.substring(1)); // Remove '#' from hash

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleMemberCenterClick = () => {
    if (!isLogin) {
      return setOpenWallet(true);
    }
    setActiveHash('');
    router.push(`/${locale}/member/info`);
  };

  const showLanguage = () => {
    const lang = languages.find((el) => el.id === locale);
    return lang.title;
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
    <header className='fixed z-30 flex h-20 w-screen min-w-[350px] justify-center border-b border-grey-600 bg-grey-900 px-4'>
      <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] items-center justify-between'>
        <div className='flex h-full w-full items-center gap-4'>
          <div
            className='relative h-[30px] w-[30px] cursor-pointer lg:hidden'
            onClick={() => setOpenNavbar(true)}
          >
            <Image
              src='/hamburger.svg'
              alt='menu'
              fill={true}
              priority={true}
            />
          </div>
          <div className='relative h-20 w-[100px] flex-shrink-0 lg:mr-14'>
            <Image src='/Logo.svg' alt='logo' fill={true} priority={true} />
          </div>
          <nav className='hidden h-full w-fit lg:flex'>
            <ul className='flex h-full items-center gap-10'>
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
                    {t(el.title)}
                    {activeHash === el.hash && (
                      <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className='flex h-full flex-shrink-0 items-center gap-10'>
          <div className='hidden h-full items-center gap-10 lg:flex'>
            <Language
              languages={languages}
              openLang={openLang}
              setOpenLang={setOpenLang}
              locale={locale}
              showLanguage={showLanguage}
            />
            <button
              className={
                pathname.includes('member')
                  ? 'relative flex h-full items-center text-primary-yellow-500'
                  : 'flex h-full items-center text-grey-300'
              }
              onClick={() => handleMemberCenterClick()}
            >
              {t('profile')}
              {pathname.includes('member') && (
                <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
              )}
            </button>
          </div>
          {isClient && isLogin ? (
            <button
              className='h-fit w-fit rounded-md bg-grey-600 px-5 py-[11px] text-grey-25'
              onClick={() => handleDisconnectWallet()}
            >
              {t('offline')}
            </button>
          ) : (
            <button
              className='h-fit w-fit rounded-md bg-primary-blue-500 px-5 py-[11px]'
              onClick={() => setOpenWallet(true)}
            >
              {t('connect')}
            </button>
          )}
        </div>
      </div>
      {openWallet && (
        <>
          <ConnectWallet
            onClick={() => setOpenWallet(false)}
            connect={t('connect')}
            back={t('back')}
          />
          <ModalBackground onClick={() => setOpenWallet(false)} />
        </>
      )}
      {openNavbar && (
        <>
          <Navbar
            member={t('profile')}
            locale={locale}
            navLinks={navLinks}
            languages={languages}
            setOpenNavbar={setOpenNavbar}
            showLanguage={showLanguage}
            openLang={openLang}
            setOpenLang={setOpenLang}
            activeHash={activeHash}
            RedirectURL={RedirectURL}
            onNavClick={(e, hash) => handleNavigationClick(e, hash)}
            onMemberClick={() => handleMemberCenterClick()}
          />
          <ModalBackground onClick={() => setOpenNavbar(false)} />
        </>
      )}
    </header>
  );
}
