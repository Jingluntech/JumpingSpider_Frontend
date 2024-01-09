import Image from 'next/image';
import { Link, usePathname } from '@/src/navigation';

export default function Language({
  languages,
  openLang,
  setOpenLang,
  locale,
  showLanguage,
  langRef,
}) {
  const pathname = usePathname();

  return (
    <div
      ref={langRef}
      role='button'
      tabIndex='0'
      className='relative flex cursor-pointer items-center gap-1 text-grey-300'
      onClick={() => setOpenLang(!openLang)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setOpenLang(!openLang);
        }
      }}
    >
      {showLanguage()}
      <Image
        src='/chevron-down.svg'
        alt='chevrondown-icon'
        width={24}
        height={24}
        className={openLang ? '' : 'rotate-180'}
      />
      {openLang && (
        <ul
          aria-label='language menu'
          role='menu'
          className='absolute right-0 top-12 z-50 flex w-[232px] flex-col whitespace-nowrap rounded-md bg-grey-800 py-2 shadow-custom'
        >
          {languages.map((el) => (
            <Link
              role='menuitem'
              tabIndex='0'
              key={el.id}
              href={pathname}
              locale={el.id}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.currentTarget.click();
                }
              }}
            >
              <li
                className={`flex w-full cursor-pointer justify-start px-[14px] py-[10px] hover:bg-grey-600 ${
                  el.id === locale ? 'font-bold text-primary-yellow-500' : ''
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
      )}
    </div>
  );
}
