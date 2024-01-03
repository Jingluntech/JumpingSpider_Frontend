'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ConnectInfo({ data }) {
  const t = useTranslations('profilePage');
  const [isClickedId, setIsClickedId] = useState('');

  const VpnConnectData = [
    {
      id: '1',
      title: 'url',
      content: data.url,
      img: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
            stroke='#465465'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: '2',
      title: 'account',
      content: data.account,
      img: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
            stroke='#465465'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: '3',
      title: 'password',
      content: data.password,
      img: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
            stroke='#465465'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  const handleClickBoard = ({ id, text }) => {
    navigator.clipboard.writeText(text);
    setIsClickedId(id);
    setTimeout(() => setIsClickedId(false), 5000);
  };
  return (
    <div className='flex h-fit w-full flex-col rounded-md border-2 border-grey-700 bg-grey-800 px-9 py-10'>
      {VpnConnectData.map((el) => (
        <div
          key={el.id}
          className='flex flex-col border-b-2 border-grey-700 px-2 py-6 first:pt-0 last:border-b-0 last:pb-0'
        >
          <div className='relative flex flex-col gap-3'>
            <div className='flex flex-col gap-1 lg:flex-row lg:justify-between'>
              <h5 className='font-medium text-grey-300'>{t(el.title)}</h5>
            </div>
            <div className='flex flex-col gap-1 break-all pr-8 lg:flex-row lg:items-end lg:gap-2'>
              {el.id === '1' ? `https://${el.content}` : el.content}
              <div
                className='copy absolute bottom-0 right-0 cursor-pointer text-sm font-medium text-grey-400 lg:static'
                onClick={() =>
                  handleClickBoard({ id: el.id, text: el.content })
                }
              >
                {el.img}
              </div>
              {el.id === isClickedId && (
                <span className='absolute -bottom-8 right-0 flex h-[28px] w-[66px] items-center justify-center rounded-[30px] bg-grey-600 text-sm lg:static'>
                  {t('copied')}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
