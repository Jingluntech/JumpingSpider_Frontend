import Image from 'next/image';

export default function Subscription() {
  return (
    <div className='flex h-fit w-[602px] flex-col rounded-md border-[3px] border-grey-500 bg-grey-800 px-10 py-11'>
      <div>
        <p className='mb-1 text-sm text-primary-yellow-500'>月費訂閱制</p>
        <h1 className='mb-3 text-[28px] font-medium'>VPN訂閱計畫</h1>
        <p className='flex h-16 items-center text-base text-grey-300'>
          UTC<span className='mx-2 text-[46px] text-grey-100'>32.00</span>/月
        </p>
        <p className='mb-5 mt-1 text-sm text-grey-400'>
          （可能需要另外支付增值稅）
        </p>
      </div>
      <hr className='border-t-[2px] border-grey-600' />
      <ul className='mt-5 flex flex-col gap-4'>
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
      <div className='mt-10 flex w-full items-center gap-2'>
        <div className='text-sm text-grey-300'>訂閱月數</div>
        <div className='flex h-11 w-[180px]'>
          <button className='flex h-full flex-1 items-center rounded-l-md border border-grey-600 p-3 text-grey-400'>
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
          <button className='flex h-full flex-1 items-center rounded-r-md border border-grey-600 p-3 text-grey-400'>
            ＋
          </button>
        </div>
        <button className='ml-1 h-11 w-[164px] rounded-md bg-primary-blue-500'>
          付款
        </button>
      </div>
    </div>
  );
}
