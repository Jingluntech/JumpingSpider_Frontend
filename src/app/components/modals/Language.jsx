import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function Language({ openLang, setOpenLang, locale }) {
  const pathname = usePathname();

  const RedirectURL = (lang) => {
    const currentPath = pathname.slice(4) || '';
    return `/${lang}/${currentPath}`;
  };

  const showLanguage = () => {
    const lang = languages.find((el) => el.id === locale);
    return lang.title;
  };

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
        <ul className='shadow-custom absolute right-0 top-12 z-50 flex flex-col whitespace-nowrap rounded-md bg-grey-800'>
          {languages.map((el) => (
            <Link key={el.id} locale={el.id} href={RedirectURL(el.id)}>
              <li
                className={`flex w-[154px] cursor-pointer justify-start px-[14px] py-[10px] hover:bg-grey-600 ${
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
