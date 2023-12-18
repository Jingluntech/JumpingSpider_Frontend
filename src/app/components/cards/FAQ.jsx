'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQ({ q, a }) {
  const [openCard, setOpenCard] = useState(false);

  const getCardOpenClass = (boolean) => {
    const closeStyle =
      'bg-grey-700 w-full h-[86px] px-10 py-[27px] rounded-md flex flex-col justify-center cursor-pointer';
    const openStyle = boolean && 'h-fit transition-[height]';
    return `${closeStyle} ${openStyle}`;
  };

  return (
    <div
      className={getCardOpenClass(openCard)}
      onClick={() => setOpenCard(!openCard)}
    >
      <div
        className={`flex items-center justify-between gap-2 ${
          openCard ? 'mb-4' : 'mt-4'
        }`}
      >
        <h5 className='text-lg font-bold'>{q}</h5>
        <Image
          src='/chevron-down.svg'
          alt='chevrondown-icon'
          width={32}
          height={32}
          className={`flex-shrink-0 ${openCard ? '' : 'rotate-180'}`}
        />
      </div>
      <p
        className={`text-justify text-grey-300 ${
          openCard ? '' : 'mt-4 overflow-hidden'
        }`}
      >
        {a}
      </p>
    </div>
  );
}
