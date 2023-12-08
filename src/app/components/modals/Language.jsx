import Image from 'next/image';

const languages = [
  {
    id: 'zhTW',
    title: '繁體中文',
  },
  {
    id: 'zhCN',
    title: '簡體中文',
  },
  {
    id: 'enUS',
    title: 'English',
  },
];

export default function Language({
  selectedLang,
  openLang,
  setOpenLang,
  onLangClick,
}) {
  const ShowLanguage = () => {
    const lang = languages.find((el) => el.id === selectedLang);
    return lang.title;
  };

  return (
    <div>
      <div
        className='relative flex cursor-pointer items-center gap-1 text-grey-300'
        onClick={() => setOpenLang(!openLang)}
      >
        {ShowLanguage()}
        <Image
          src='/chevron-down.svg'
          alt='chevrondown-icon'
          width={24}
          height={24}
          className={openLang ? '' : 'rotate-180'}
        />
        {openLang && (
          <ul className='absolute right-1/2 top-7 flex w-fit translate-x-1/2 flex-col whitespace-nowrap bg-grey-800'>
            {languages.map((el) => (
              <li
                className={`cursor-pointer px-4 py-3 hover:bg-primary-yellow-100 hover:text-primary-yellow-500 ${
                  el.id === selectedLang ? 'text-primary-yellow-500' : ''
                }`}
                key={el.id}
                onClick={() => onLangClick(el.id)}
              >
                {el.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
