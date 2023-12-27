import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFoundPage() {
  const t = useTranslations('notFoundPage');

  return (
    <div className='mx-auto flex h-fit min-h-screen-minus w-screen min-w-[350px] flex-col items-center justify-center gap-5 px-4 py-[168px]'>
      <div className='relative h-[118px] w-full'>
        <Image src='/404.svg' alt='404-img' fill='true' />
      </div>
      <h1 className='text-[46px] font-bold text-primary-yellow-500'>
        {t('title')}
      </h1>
      <h3 className='text-center text-[28px] font-medium'>{t('content')}</h3>
    </div>
  );
}
