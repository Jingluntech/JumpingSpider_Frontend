import Image from 'next/image';

export default function CustomSubscription() {
  return (
    <div className='flex h-fit w-full max-w-[602px] flex-col gap-5 rounded-md border-[3px] border-grey-500 bg-grey-800 px-10 py-11 lg:flex-1 lg:gap-8'>
      <div>
        <p className='mb-1 text-sm text-primary-yellow-500'>企業端</p>
        <h1 className='mb-3 text-[28px] font-medium'>客製化VPN服務</h1>
        <p className='flex items-center text-base text-grey-300 lg:h-[104px]'>
          Jumping Spider VPN提供企業端全方位客製化服務，安全、穩定
          統一管理，無差異價格策略，最佳VPN解決方案。
        </p>
      </div>

      <hr className='border-t-[2px] border-grey-600' />

      <div className='flex h-fit w-full flex-col gap-3 rounded-md bg-grey-700 px-5 py-6  lg:flex-row-reverse lg:gap-9 lg:py-8 lg:pl-6 lg:pr-3'>
        <div className='relative h-[166px] w-[156px] lg:flex-shrink-0'>
          <Image
            src='/home/Business_vpn.png'
            alt='business-vpn-img'
            fill='true'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='text-lg font-bold'>聯繫我們</h5>
          <div className='flex items-center gap-2 underline'>
            <Image src='/mail.svg' alt='mail-icon' width={20} height={20} />
            <p className='break-all font-medium'>
              andrewking@mail.spiderweb.club
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
