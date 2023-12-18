'use client';

import Image from 'next/image';
import ConnectWallet from '@/src/app/components/modals/ConnectWallet';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import Navbar from '@/src/app/components/navbar/Navbar';
import Language from '@/src/app/components/modals/Language';
import { useContext, useEffect, useState } from 'react';
import { Link, usePathname } from '@/src/navigation';
import Cookies from 'js-cookie';
import { logoutAPI } from '@/api/login';
import { useDisconnect } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { WalletContext } from '@/src/app/context/context';

export default function Header({ locale }) {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const { openWallet, setOpenWallet } = useContext(WalletContext);
  const [isClient, setIsClient] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const isLogin = Boolean(Cookies.get('Token'));
  const { disconnect } = useDisconnect();
  const navLinks = [
    {
      id: '1',
      title: 'home',
      url: '/',
    },
    {
      id: '2',
      title: 'price',
      url: '/price',
    },
    {
      id: '3',
      title: 'faq',
      url: '/faq',
    },
    {
      id: '4',
      title: 'tutorial',
      url: '/tutorial',
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

  const handleMemberCenterClick = () => {
    if (!isLogin) {
      return setOpenWallet(true);
    }
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
      router.push(`/${locale}#home`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                <Link key={el.id} href={el.url} className='relative h-full'>
                  <li
                    className={
                      pathname === el.url
                        ? 'flex h-full items-center text-primary-yellow-500'
                        : 'flex h-full items-center text-grey-300'
                    }
                  >
                    {t(el.title)}
                    {pathname === el.url && (
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
              className='h-fit w-fit rounded-md bg-primary-blue-500 px-5 py-[11px] hover:bg-grey-100 hover:text-grey-800'
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
            onMemberClick={() => handleMemberCenterClick()}
          />
          <ModalBackground onClick={() => setOpenNavbar(false)} />
        </>
      )}
    </header>
  );
}
