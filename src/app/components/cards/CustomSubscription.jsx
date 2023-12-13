import Image from 'next/image';

export default function CustomSubscription() {
  return (
    <div className='flex h-fit w-[602px] flex-col  rounded-md border-[3px] border-grey-500 bg-grey-800 px-10 py-11'>
      <div className='mb-10'>
        <p className='mb-1 text-sm text-primary-yellow-500'>企業端</p>
        <h1 className='mb-10 text-[28px] font-medium'>客製化VPN服務</h1>
        <p className='flex h-16 items-center pb-10 pr-10 text-base text-grey-300'>
          Jumping Spider VPN提供企業端全方位客製化服務，安全、穩定
          統一管理，無差異價格策略，最佳VPN解決方案。
        </p>
      </div>

      <hr className='border-t-[2px] border-grey-600' />

      <div className='mt-5 flex h-fit w-full justify-between gap-9 rounded-md bg-grey-700 px-6 py-8'>
        <div className='flex flex-shrink-0 flex-col gap-2'>
          <h5 className='text-lg font-bold'>聯繫我們</h5>
          <div className='flex items-end gap-2 underline'>
            <Image src='/mail.svg' alt='mail-icon' width={20} height={20} />
            <p>andrewking@mail.spiderweb.club</p>
          </div>
        </div>
        <div className='relative h-[166px] w-[156px]'>
          <Image
            src='/home/Business_vpn.png'
            alt='business-vpn-img'
            fill='true'
          />
        </div>
      </div>
    </div>
  );
}
