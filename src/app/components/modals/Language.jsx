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
          <ul className='shadow-custom absolute right-0 top-12 z-10 flex flex-col whitespace-nowrap rounded-md bg-grey-800'>
            {languages.map((el) => (
              <li
                className={`flex w-[154px] cursor-pointer justify-start px-[14px] py-[10px] hover:bg-grey-600 ${
                  el.id === selectedLang
                    ? 'font-bold text-primary-yellow-500'
                    : ''
                }`}
                key={el.id}
                onClick={() => onLangClick(el.id)}
              >
                {el.id === selectedLang && (
                  <Image
                    src='/chevron-left.svg'
                    alt='chevronleft-icon'
                    width={24}
                    height={24}
                  />
                )}
                {el.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
