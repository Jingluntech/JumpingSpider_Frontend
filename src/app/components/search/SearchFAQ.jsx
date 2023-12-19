'use client';

import FAQ from '@/src/app/components/cards/FAQ';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function SearchFAQ({ FAQcardData }) {
  const t = useTranslations('faqPage');
  const [searchedData, setSearchedData] = useState(FAQcardData);
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const handleSearchInputChange = (value) => {
    setSearchedKeyword(value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    const searchedArr = searchedData.filter(
      (el) =>
        t(el.title).toLowerCase().includes(searchedKeyword.toLowerCase()) ||
        t(el.content).toLowerCase().includes(searchedKeyword.toLowerCase())
    );
    setSearchedData(searchedArr);
  };

  useEffect(() => {
    if (!searchedKeyword || !searchedKeyword.trim()) {
      setSearchedData(FAQcardData);
    }
  }, [searchedKeyword]);

  return (
    <div className='mx-auto flex h-fit w-full min-w-[350px] max-w-[750px] flex-col items-center gap-10 px-4 pb-[84px]'>
      <form className='flex h-12 w-full gap-2'>
        <input
          type='text'
          placeholder={t('placeholder')}
          className=' h-full w-full rounded-md border-2 border-grey-700 bg-grey-800 px-[14px] py-[11px] font-medium placeholder:text-grey-400'
          onChange={(e) => handleSearchInputChange(e.target.value)}
        />
        <button
          className='flex h-full w-[124px] items-center justify-center rounded bg-primary-blue-500 px-[18px] py-3 font-medium'
          onClick={(e) => handleSearchClick(e)}
        >
          {t('search')}
        </button>
      </form>
      <hr className='w-full border-b border-grey-600' />
      <div className='flex flex-col gap-5'>
        {searchedData?.map((el) =>
          el.content === 'answerOne' ? (
            <FAQ
              q={t(el.title)}
              a={t.rich(el.content, {
                tutorial: (chunks) => (
                  <a
                    className='text-primary-yellow-500 underline'
                    href='/tutorial'
                  >
                    {chunks}
                  </a>
                ),
              })}
              key={el.id}
            />
          ) : (
            <FAQ q={t(el.title)} a={t(el.content)} key={el.id} />
          )
        )}
      </div>
    </div>
  );
}