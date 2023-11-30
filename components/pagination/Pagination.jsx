'use client';

import { useState } from 'react';

// const currentPage = 2;
const totalPage = 20;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(2);

  const pager = () => {
    const pages = [];
    const centerPage = currentPage;

    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    } else if (currentPage > totalPage - 3) {
      for (let i = totalPage - 4; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= centerPage + 2; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const generatePages = () => {
    const pagesArr = pager();

    return pagesArr.map((page) => (
      <button
        key={`page_${page}`}
        className={`flex h-10 w-10 items-center justify-center rounded-md ${
          currentPage === page ? 'bg-primary-yellow-500' : 'border'
        }`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className='flex h-fit w-full items-center justify-center gap-3 py-2'>
      <button
        disabled={currentPage === 1}
        className={`flex h-10 w-10 items-center justify-center rounded-md border ${
          currentPage === 1 ? 'text-grey-500' : ''
        }`}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ＜
      </button>
      {currentPage >= 4 && (
        <>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-md ${
              currentPage === 1 ? 'bg-primary-yellow-500' : 'border'
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button className='flex h-10 w-10 items-center justify-center rounded-md border'>
            ...
          </button>
        </>
      )}

      {generatePages()}

      {currentPage <= 17 && (
        <>
          <button className='flex h-10 w-10 items-center justify-center rounded-md border'>
            ...
          </button>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-md ${
              currentPage === totalPage ? 'bg-primary-yellow-500' : 'border'
            }`}
            onClick={() => setCurrentPage(totalPage)}
          >
            {totalPage}
          </button>
        </>
      )}

      <button
        disabled={currentPage === totalPage}
        className={`flex h-10 w-10 items-center justify-center rounded-md border ${
          currentPage === totalPage ? 'text-grey-500' : ''
        }`}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        ＞
      </button>
    </div>
  );
}
