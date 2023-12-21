'use client';

import FAQ from '@/src/app/components/cards/FAQ';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function SearchFAQ({ FAQcardData }) {
  const t = useTranslations('faqPage');

  const translatedData = FAQcardData.map((el) => {
    if (el.id === 'faq-1') {
      const answerOne = t.rich(el.content, {
        tutorial: (chunks) => (
          <a className='text-primary-yellow-500 underline' href='/tutorial'>
            {chunks}
          </a>
        ),
      });
      return {
        ...el,
        title: t(el.title),
        content: answerOne[0] + answerOne[1].props.children + answerOne[2],
      };
    } else {
      return {
        ...el,
        title: t(el.title),
        content: t(el.content),
      };
    }
  });

  const [searchedData, setSearchedData] = useState(translatedData);

  const [searchedKeyword, setSearchedKeyword] = useState('');

  const handleSearchInputChange = (value) => {
    setSearchedKeyword(value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    const searchedArr = searchedData.filter(
      (el) =>
        el.title.toLowerCase().includes(searchedKeyword.toLowerCase()) ||
        el.content.toLowerCase().includes(searchedKeyword.toLowerCase())
    );
    setSearchedData(searchedArr);
  };

  useEffect(() => {
    if (!searchedKeyword || !searchedKeyword.trim()) {
      setSearchedData(translatedData);
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
          className='flex h-full w-[124px] items-center justify-center rounded bg-primary-blue-500 px-[18px] py-3 font-medium hover:bg-grey-100 hover:text-grey-800'
          onClick={(e) => handleSearchClick(e)}
        >
          {t('search')}
        </button>
      </form>
      <hr className='w-full border-b border-grey-600' />
      <div className='flex w-full flex-col gap-5'>
        {searchedData?.map((el) => (
          <FAQ q={el.title} a={el.content} key={el.id} />
        ))}
      </div>
    </div>
  );
}
