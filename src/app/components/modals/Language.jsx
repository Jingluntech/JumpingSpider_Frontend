import Image from 'next/image';
import { Link, usePathname } from '@/src/navigation';

export default function Language({
  languages,
  openLang,
  setOpenLang,
  locale,
  showLanguage,
}) {
  const pathname = usePathname();

  return (
    <div
      className='relative flex cursor-pointer items-center gap-1 text-grey-300'
      onClick={() => setOpenLang(!openLang)}
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
        <ul className='absolute right-0 top-12 z-50 flex w-[232px] flex-col whitespace-nowrap rounded-md bg-grey-800 py-2 shadow-custom'>
          {languages.map((el) => (
            <Link key={el.id} href={pathname} locale={el.id}>
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
