'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQ() {
  const [openCard, setOpenCard] = useState(false);

  const getCardOpenClass = (boolean) => {
    const closeStyle =
      'bg-grey-700 w-full max-w-[750px] h-[86px] px-10 py-[27px] rounded-md flex flex-col justify-center cursor-pointer';
    const openStyle = boolean && 'h-fit transition-[height]';
    return `${closeStyle} ${openStyle}`;
  };

  return (
    <div
      className={getCardOpenClass(openCard)}
      onClick={() => setOpenCard(!openCard)}
    >
      <div
        className={`flex items-center justify-between ${
          openCard ? 'mb-4' : 'mt-4'
        }`}
      >
        <h5 className='text-h5 font-bold'>如何安裝設定OpenVPN</h5>
        <Image
          src='/chevron-down.svg'
          alt='chevrondown-icon'
          width={24}
          height={24}
          className={openCard ? '' : 'rotate-180'}
        />
      </div>
      <p
        className={`pr-16 text-justify text-grey-300 ${
          openCard ? '' : 'mt-4 overflow-hidden'
        }`}
      >
        我們有一份詳細的安裝指南，您可以在 [ OpenVPN教學 ] 找到，步驟清晰明瞭。
        如果您需要更進一步的協助，請隨時與我們聯繫，我們的客服團隊將樂意協助您完成設定。
      </p>
    </div>
  );
}
