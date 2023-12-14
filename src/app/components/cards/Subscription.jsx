'use client';
import Image from 'next/image';
import { useState } from 'react';
import CheckOut from '@/src/app/components/modals/CheckOut';
import ModalBackground from '@/src/app/components/modals/ModalBackground';

export default function Subscription() {
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  return (
    <div className='flex h-fit w-full max-w-[602px] flex-col gap-5 rounded-md border-[3px] border-primary-blue-500 bg-grey-800 px-10 py-11 lg:flex-1'>
      <div className='flex flex-col gap-3 lg:mb-8 lg:flex-row-reverse lg:justify-between'>
        <div className='relative h-[156px] w-[174px]'>
          <Image
            src='/home/monthly_vpn.png'
            alt='monthly-vpn-img'
            fill={true}
          />
        </div>
        <div className='h-fit'>
          <p className='mb-1 text-sm text-primary-yellow-500'>月費訂閱制</p>
          <h1 className='text-[28px] font-medium'>VPN訂閱計畫</h1>
          <p className='mt-3 flex h-16 items-center font-inter text-base text-grey-300'>
            USDT
            <span className='mx-2 font-inter text-[46px] font-bold text-grey-100'>
              30.00
            </span>
            /月
          </p>
        </div>
      </div>

      <hr className='border-t-[2px] border-grey-600' />

      <ul className='flex flex-col gap-4 lg:mb-5'>
        <li className='flex gap-3 text-base font-medium text-grey-300'>
          <Image
            src='/alert/alerts_icon_success.svg'
            alt='success icon'
            width={16}
            height={16}
          />
          提供穩定的連線品質
        </li>
        <li className='flex gap-3 text-base font-medium text-grey-300'>
          <Image
            src='/alert/alerts_icon_success.svg'
            alt='success icon'
            width={16}
            height={16}
          />
          高度的安全性
        </li>
        <li className='flex gap-3 text-base font-medium text-grey-300'>
          <Image
            src='/alert/alerts_icon_success.svg'
            alt='success icon'
            width={16}
            height={16}
          />
          無區域限制的虛擬網路體驗
        </li>
        <li className='flex gap-3 text-base font-medium text-grey-300'>
          <Image
            src='/alert/alerts_icon_success.svg'
            alt='success icon'
            width={16}
            height={16}
          />
          適用於所有用戶
        </li>
      </ul>
      <div className='mt-5 flex w-full flex-wrap items-center gap-5 lg:flex-nowrap'>
        <div className='text-sm text-grey-300'>訂閱月數</div>
        <div className='flex h-11 w-[180px]'>
          <button className='flex h-full flex-1 items-center rounded-l-md border border-grey-600 bg-grey-700 p-3 text-grey-400'>
            －
          </button>
          <div className='flex-2'>
            <input
              type='number'
              disabled
              className='h-full w-full border-y border-grey-600 bg-grey-900 text-center align-middle'
              defaultValue={0}
            />
          </div>
          <button className='flex h-full flex-1 items-center rounded-r-md border border-grey-600 bg-grey-700 p-3 text-grey-400'>
            ＋
          </button>
        </div>
        <button
          className='h-11 w-[164px] rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'
          onClick={() => setCheckOutOpen(true)}
        >
          付款
        </button>
      </div>
      {checkOutOpen && (
        <>
          <CheckOut onClick={() => setCheckOutOpen(false)} />
          <ModalBackground />
        </>
      )}
    </div>
  );
}
