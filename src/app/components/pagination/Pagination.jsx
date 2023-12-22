'use client';

import { useRouter, usePathname } from '@/src/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Pagination({ data }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [currentPageData, setCurrentPageData] = useState({
    currentPage: data?.currentPage,
    totalPage: data?.totalPage,
  });

  const onClick = (n) => {
    setCurrentPageData((prev) => ({
      ...prev,
      currentPage: prev.currentPage + n,
    }));
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', currentPageData.currentPage);
    router.push(pathname + '?' + params.toString());
  }, [currentPageData.currentPage]);

  return (
    <div className='mt-1 flex h-fit w-full items-center justify-end gap-3 px-10 py-3'>
      <button className='text-title-m h-10 w-[58px] rounded-md border-2 border-grey-700 bg-grey-800 font-inter text-grey-100'>
        {currentPageData.currentPage}
      </button>
      <p className='text-title-m font-inter text-grey-400'>
        of {currentPageData.totalPage === 0 ? 1 : currentPageData.totalPage}
      </p>

      {/* 上一頁 */}
      <button
        className='flex h-10 w-10 items-center justify-center rounded-md bg-grey-600'
        disabled={currentPageData.currentPage === 1}
        onClick={() => onClick(-1)}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='rotate-180'
        >
          <path
            d='M9 18L15 12L9 6'
            stroke={currentPageData.currentPage === 1 ? '#323F52' : '#EFF2F5'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* 下一頁 */}
      <button
        className='flex h-10 w-10 items-center justify-center rounded-md bg-grey-600'
        disabled={currentPageData.currentPage === currentPageData.totalPage}
        onClick={() => onClick(1)}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 18L15 12L9 6'
            stroke={
              currentPageData.currentPage === currentPageData.totalPage ||
              currentPageData.totalCount === 0
                ? '#323F52'
                : '#EFF2F5'
            }
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
