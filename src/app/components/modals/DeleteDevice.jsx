import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function DeleteDevice({ onClick }) {
  const t = useTranslations('devicePage');

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex h-fit w-fit max-w-[388px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md bg-grey-900 p-6'>
      <header className='relative h-12 w-12'>
        <Image
          src='/alert/alerts_icon_warn.svg'
          alt='warning-icon'
          fill={true}
        />
      </header>

      <main className='flex flex-col gap-2'>
        <h5 className='text-2xl font-bold'>{t('deleteDevice')}：XXXX</h5>
        <p className='break-all font-medium'>{t('reminder')}</p>
      </main>

      <footer className='mt-[68px] flex gap-2'>
        <button
          className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-grey-600 hover:bg-grey-100 hover:text-grey-800'
          onClick={onClick}
        >
          {t('cancel')}
        </button>
        <button className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'>
          {t('confirm')}
        </button>
      </footer>
    </div>
  );
}