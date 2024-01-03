import { deleteDeviceAPI } from '@/api/profile';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function DeleteDevice({
  onClick,
  setIsAlertOpen,
  selectedDeviceId,
}) {
  const token = Cookies.get('Token');
  const t = useTranslations('devicePage');

  const handleConfirmDeleteClick = async () => {
    await deleteDeviceAPI({
      token,
      payload: {
        deviceId: selectedDeviceId,
      },
    });

    onClick();
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 3000);
  };

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4'>
      <div className='flex h-fit w-full max-w-[388px] flex-col gap-4 rounded-md bg-grey-900 p-6'>
        <header className='relative h-12 w-12'>
          <Image
            src='/alert/alerts_icon_warn.svg'
            alt='warning-icon'
            fill={true}
          />
        </header>

        <main className='flex flex-col gap-2'>
          <h5 className='break-all text-2xl font-bold'>
            {t('deleteDevice')}：XXXX
          </h5>
          <p className='break-all font-medium'>{t('reminder')}</p>
        </main>

        <footer className='mt-[68px] flex gap-2'>
          <button
            className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-grey-600 hover:bg-grey-100 hover:text-grey-800'
            onClick={onClick}
          >
            {t('cancel')}
          </button>
          <button
            className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'
            onClick={() => handleConfirmDeleteClick()}
          >
            {t('confirm')}
          </button>
        </footer>
      </div>
    </div>
  );
}
