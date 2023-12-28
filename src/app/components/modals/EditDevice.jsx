import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function EditDevice({ onClick }) {
  const t = useTranslations('devicePage');

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4'>
      <div className='flex h-fit w-full max-w-[444px] flex-col gap-4 rounded-md bg-grey-900 p-6'>
        <div className='flex flex-col gap-4'>
          <label for='editName' className='text-2xl font-bold'>
            {t('edit')}
          </label>
          <input
            type='text'
            id='editName'
            name='editName'
            className='h-[46px] rounded-md border-2 border-grey-700 bg-grey-800 px-4 py-[10px] text-grey-100'
          />
        </div>

        <footer className='mt-6 flex gap-2'>
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
    </div>
  );
}
