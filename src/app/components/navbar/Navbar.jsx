import Image from 'next/image';
import { Link, usePathname } from '@/src/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar({
  profile,
  locale,
  navLinks,
  languages,
  setOpenNavbar,
  setOpenLang,
  openLang,
  onProfileClick,
  showLanguage,
}) {
  const t = useTranslations('header');
  const pathname = usePathname();

  return (
    <nav className='fixed inset-y-0 left-0 z-50 flex w-3/5 min-w-[220px] flex-col items-center bg-grey-900'>
      <ul className='mt-14 flex h-fit w-full flex-col'>
        {navLinks.map((el) => {
          return el.id === '4' ? (
            <a
              key={el.id}
              href={el.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => {
                setOpenNavbar(false);
              }}
              className='h-fit w-full px-[14px] py-[10px] hover:bg-grey-600'
            >
              <li
                className={`flex h-full w-full items-center gap-1 ${
                  pathname === el.url ? 'text-primary-yellow-500' : 'pl-7'
                }`}
              >
                {pathname === el.url && (
                  <Image
                    src='/chevron-left.svg'
                    alt='chevronleft-icon'
                    width={24}
                    height={24}
                  />
                )}

                {t(el.title)}
              </li>
            </a>
          ) : (
            <Link
              key={el.id}
              href={el.url}
              onClick={() => {
                setOpenNavbar(false);
              }}
              className='h-fit w-full px-[14px] py-[10px] hover:bg-grey-600'
            >
              <li
                key={el.id}
                className={`flex h-full w-full items-center gap-1 ${
                  pathname === el.url ? 'text-primary-yellow-500' : 'pl-7'
                }`}
              >
                {pathname === el.url && (
                  <Image
                    src='/chevron-left.svg'
                    alt='chevronleft-icon'
                    width={24}
                    height={24}
                  />
                )}

                {t(el.title)}
              </li>
            </Link>
          );
        })}
      </ul>
      <hr className='my-4 w-11/12 border-t-2 border-grey-700' />
      <ul className='flex h-fit w-full flex-col'>
        <li
          onClick={() => {
            onProfileClick();
            setOpenNavbar(false);
          }}
          className={`flex h-fit w-full cursor-pointer py-[10px] hover:bg-grey-600 ${
            pathname.includes('profile')
              ? 'pl-[14px] text-primary-yellow-500'
              : 'pl-10'
          }`}
        >
          {pathname.includes('profile') && (
            <Image
              src='/chevron-left.svg'
              alt='chevronleft-icon'
              width={24}
              height={24}
            />
          )}
          {profile}
        </li>
        <li
          onClick={() => setOpenLang(!openLang)}
          className='flex h-fit w-full cursor-pointer gap-1 py-[10px] pl-10 hover:bg-grey-600'
        >
          {showLanguage()}
          <Image
            src='/chevron-down.svg'
            alt='chevrondown-icon'
            width={24}
            height={24}
            className={openLang ? '' : 'rotate-180'}
          />
        </li>
        {openLang &&
          languages.map((el) => (
            <Link key={el.id} href={pathname} locale={el.id}>
              <li
                className={`flex h-fit w-full cursor-pointer gap-1 py-[10px]  hover:bg-grey-600 ${
                  el.id === locale
                    ? 'pl-[14px] text-primary-yellow-500'
                    : 'pl-10'
                }`}
              >
                {el.id === locale && (
                  <Image
                    src='/chevron-left.svg'
                    alt='chevronleft-icon'
                    width={24}
                    height={24}
                  />
                )}
                {el.title}
              </li>
            </Link>
          ))}
      </ul>
    </nav>
  );
}
