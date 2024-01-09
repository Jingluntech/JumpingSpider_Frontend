import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CustomSubscription() {
  const t = useTranslations('pricePage');

  return (
    <div className='flex h-fit w-full max-w-[602px] flex-col gap-5 rounded-md border-[3px] border-grey-500 bg-grey-800 px-10 py-11 lg:flex-1 lg:gap-8'>
      <div className='flex h-1/2 flex-col lg:h-[156px]'>
        <p className='mb-1 text-sm text-primary-yellow-500'>{t('business')}</p>
        <h1 className='text-[28px] font-medium lg:whitespace-nowrap'>
          {t('customized')}
        </h1>
        <p className='mt-3 flex text-base text-grey-300 lg:h-fit'>
          {t('planDescription')}
        </p>
      </div>

      <hr className='border-t-[2px] border-grey-600' />

      <div className='flex h-1/2 w-full flex-col gap-3 rounded-md bg-grey-700 px-5 py-6 lg:flex-row-reverse lg:justify-between lg:px-6 lg:py-8'>
        <div className='relative h-[148px] w-[158px] lg:flex-shrink-0'>
          <Image
            src='/home/Business_vpn.svg'
            alt='business-vpn-img'
            fill='true'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='text-lg font-bold'>{t('contact')}</h5>
          <div className='flex items-end gap-2 underline'>
            <Image src='/mail.svg' alt='mail-icon' width={20} height={20} />
            <a
              href='mailto:support@spiderweb.club'
              className='break-all text-sm font-medium lg:text-base'
            >
              support@spiderweb.club
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
