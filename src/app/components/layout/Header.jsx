'use client';

import Image from 'next/image';
import ConnectWallet from '@/src/app/components/modals/ConnectWallet';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import Navbar from '@/src/app/components/navbar/Navbar';
import Language from '@/src/app/components/modals/Language';
import { useContext, useEffect, useState } from 'react';
import { Link, usePathname, useRouter } from '@/src/navigation';
import Cookies from 'js-cookie';
import { logoutAPI } from '@/api/login';
import { useDisconnect } from 'wagmi';
import { useTranslations } from 'next-intl';
import { WalletContext } from '@/src/app/context/context';
import { getUserInfoAPI } from '@/api/profile';

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
      url: '/OpenVPN教學總覽.pdf',
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

  const handleProfileClick = () => {
    if (!isLogin) {
      return setOpenWallet(true);
    }
    router.push('/profile/info');
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
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (pathname.includes('profile')) {
      const getUserInfoAPIAsync = async () => {
        const res = await getUserInfoAPI({
          token: Cookies.get('Token'),
        });
        if (
          (res && res.errorCode === 1011) ||
          (res && res.errorCode === 1010)
        ) {
          Cookies.remove('Token');
          router.push('/');
        }
      };
      getUserInfoAPIAsync();
    }
  }, [pathname]);

  useEffect(() => {
    // 檢查 window 物件是否存在
    if (typeof window !== 'undefined') {
      // 定義監聽器的回調函數
      const handleChainChanged = async () => {
        await logoutAPI();
        Cookies.remove('Token');
        disconnect();
        router.push('/');
        console.log('chainChanged');
      };

      const handleAccountsChanged = async () => {
        await logoutAPI();
        Cookies.remove('Token');
        disconnect();
        router.push('/');
        console.log('accountsChanged');
      };

      // 添加監聽器
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.on('accountsChanged', handleAccountsChanged);

      // 返回函數：當組件卸載時移除監聽器
      return () => {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
        window.ethereum.removeListener(
          'accountsChanged',
          handleAccountsChanged
        );
      };
    }
  }, []);

  return (
    <header className='fixed z-30 flex h-20 w-full min-w-[350px] justify-center border-b border-grey-600 bg-grey-900 px-4'>
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
            <Link href='/'>
              <Image src='/Logo.svg' alt='logo' fill={true} priority={true} />
            </Link>
          </div>
          <nav className='hidden h-full w-fit lg:flex'>
            <ul className='flex h-full items-center gap-10'>
              {navLinks.map((el) => {
                return el.id === '4' ? (
                  <a
                    key={el.id}
                    href={el.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative h-full'
                  >
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
                  </a>
                ) : (
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
                );
              })}
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
                pathname.includes('profile')
                  ? 'relative flex h-full items-center text-primary-yellow-500'
                  : 'flex h-full items-center text-grey-300'
              }
              onClick={() => handleProfileClick()}
            >
              {t('profile')}
              {pathname.includes('profile') && (
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
            profile={t('profile')}
            locale={locale}
            navLinks={navLinks}
            languages={languages}
            setOpenNavbar={setOpenNavbar}
            showLanguage={showLanguage}
            openLang={openLang}
            setOpenLang={setOpenLang}
            onProfileClick={() => handleProfileClick()}
          />
          <ModalBackground onClick={() => setOpenNavbar(false)} />
        </>
      )}
    </header>
  );
}
