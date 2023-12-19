import Image from 'next/image';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

export default function PaymentCompleted() {
  const t = useTranslations('pricePage');

  return (
    <div className='mx-auto mb-[145px] mt-[56px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col items-center gap-4 px-4 pb-6'>
      <div className='relative h-[204px] w-[204px]'>
        <Image src='/paid.svg' alt='payment-completed-img' fill={true} />
      </div>
      <h3 className='flex gap-3 font-inter text-[28px] font-bold'>
        <Image
          src='/alert/alerts_icon_success.svg'
          alt='success-icon'
          width={33}
          height={33}
        />
        {t('paid')}
      </h3>
      <p className='px-4 text-center text-grey-300'>{t('reminder')}</p>
      <Link href='/profile/info' className='mt-6'>
        <button className='h-11 w-[194px] rounded-md bg-primary-blue-500'>
          {t('back')}
        </button>
      </Link>
    </div>
  );
}
