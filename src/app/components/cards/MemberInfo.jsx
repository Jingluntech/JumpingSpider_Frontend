'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MemberInfo({ locale, data }) {
  const [isClickedId, setIsClickedId] = useState('');

  const handleClickBoard = ({ id, text }) => {
    navigator.clipboard.writeText(text);
    setIsClickedId(id);
    setTimeout(() => setIsClickedId(false), 5000);
  };
  return (
    <div className='flex h-fit w-full flex-col rounded-md border-2 border-grey-700 bg-grey-800 px-9 py-10'>
      {data.map((el) => (
        <div
          key={el.id}
          className='flex flex-col border-b-2 border-grey-700 px-2 py-6 first:pt-0 last:border-b-0 last:pb-0'
        >
          <div className='relative flex flex-col gap-3'>
            <div className='flex flex-col gap-1 lg:flex-row lg:justify-between'>
              <h5 className='font-medium text-grey-300'>{el.title}</h5>
              {el.showButton && (
                <Link href={`/${locale}/member/VPN_Registration`}>
                  <button className='flex items-center gap-1 font-medium text-primary-yellow-500'>
                    Open VPN登錄資料
                    <Image
                      src='/chevron-left.svg'
                      alt='chevronleft-icon'
                      width={24}
                      height={24}
                    />
                  </button>
                </Link>
              )}
            </div>
            <div className='flex flex-col gap-1 break-all pr-8 lg:flex-row lg:items-end lg:gap-2'>
              {el.content}
              {el.sub && (
                <p className='text-sm font-medium text-grey-400'>{el.sub}</p>
              )}
              {el.img && (
                <>
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
                      已複製
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
