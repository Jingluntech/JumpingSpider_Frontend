import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PaymentCompleted({ params: { locale } }) {
  const t = useTranslations('pricePage');

  return (
    <div className='mx-auto flex h-screen-minus w-full min-w-[350px] max-w-[1216px] flex-col items-center gap-4 py-[56px]'>
      <div className='h-[204px] w-[204px] bg-grey-500'>Image</div>
      <h1 className='flex gap-3 text-[46px] font-bold'>
        <Image
          src='/alert/alerts_icon_success.svg'
          alt='success-icon'
          width={33}
          height={33}
        />
        {t('paid')}
      </h1>
      <p className='text-grey-300'>{t('reminder')}</p>
      <Link href={`/${locale}/member/info`} className='mt-6'>
        <button className='h-11 w-[194px] rounded-md bg-primary-blue-500'>
          {t('back')}
        </button>
      </Link>
    </div>
  );
}
