'use client';

import { useState } from 'react';

export default function Subscription() {
  const [selectedInterval, setSelectedInterval] = useState(12);

  return (
    <div className='flex w-1/2 flex-col gap-4'>
      <nav className='rounded-xl bg-grey-300 text-grey-800'>
        <ul className='flex h-fit text-2xl'>
          <li
            className={`flex-1 cursor-pointer rounded-xl py-6 text-center ${
              selectedInterval === 12 &&
              'border-[4px] border-primary-yellow-500 bg-grey-25 font-semibold'
            }`}
            onClick={() => setSelectedInterval(12)}
          >
            12個月
          </li>
          <li
            className={`flex-1 cursor-pointer rounded-xl py-6 text-center ${
              selectedInterval === 6 &&
              'border-[4px] border-primary-yellow-500 bg-grey-25 font-semibold'
            }`}
            onClick={() => setSelectedInterval(6)}
          >
            6個月
          </li>
          <li
            className={`flex-1 cursor-pointer rounded-xl py-6 text-center ${
              selectedInterval === 3 &&
              'border-[4px] border-primary-yellow-500 bg-grey-25 font-semibold'
            }`}
            onClick={() => setSelectedInterval(3)}
          >
            3個月
          </li>
          <li
            className={`flex-1 cursor-pointer rounded-xl py-6 text-center ${
              selectedInterval === 1 &&
              'border-[4px] border-primary-yellow-500 bg-grey-25 font-semibold'
            }`}
            onClick={() => setSelectedInterval(1)}
          >
            1個月
          </li>
        </ul>
      </nav>
      <div className='flex flex-col items-center gap-6 rounded-xl bg-grey-25 p-10 text-grey-900'>
        <h1 className='flex items-end gap-6 font-inter text-5xl font-semibold'>
          32.00 USDT
          <span className='text-lg font-normal'>/月</span>
        </h1>
        <ul className='flex w-3/4 flex-col gap-4'>
          <li className='flex gap-4 text-xl'>
            <span>V</span>支援全球各地區連線
          </li>
          <li className='flex gap-4 text-xl'>
            <span>V</span>企業專用VPN節點，保護您的企業隱私
          </li>
          <li className='flex gap-4 text-xl'>
            <span>V</span>全天候監控保護
          </li>
          <li className='flex gap-4 text-xl'>
            <span>V</span>24/7企業支援
          </li>
        </ul>
        <button className='w-3/5 rounded-2xl border-[3px] border-grey-800 py-4 text-xl'>
          購買企業 VPN
        </button>
      </div>
    </div>
  );
}
