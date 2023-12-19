import { useTranslations } from 'next-intl';

export default function CheckOut({ onClick }) {
  const t = useTranslations('pricePage');

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4'>
      <div className='flex h-fit w-full max-w-fit flex-col gap-4 rounded-md bg-grey-900 p-6'>
        <h4 className='text-2xl font-bold'>{t('subscribedDetails')}</h4>

        <div className='flex flex-col gap-1'>
          <h5 className='font-medium text-primary-yellow-500'>
            {t('address')}
          </h5>
          <p className='break-all font-medium'>
            0x7566A9A20FA0C1C68FA308E8E40132474AD3DA8
          </p>
        </div>

        <div className='flex flex-col gap-3 border-y-2 border-grey-700 py-4'>
          <h5 className='font-medium text-primary-yellow-500'>
            {t('purchaseDetails')}
          </h5>
          <div className='flex flex-col justify-between gap-1 lg:flex-row lg:gap-10'>
            <h5 className='font-medium text-grey-300'>
              {t('subscribedMonth')}
            </h5>
            <p className='font-medium'>000 {t('month')}</p>
          </div>
          <div className='flex flex-col justify-between gap-1 lg:flex-row lg:gap-10'>
            <h5 className='font-medium text-grey-300'>
              {t('subscribedAmount')}
            </h5>
            <p className='font-medium'>USDT 30.00 {t('month')}</p>
          </div>
        </div>

        <div>
          <h5 className='text-lg font-bold'>{t('total')}：USDT 678.00</h5>
        </div>

        <div className='mt-6 flex flex-col gap-2 lg:flex-row-reverse'>
          <button className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'>
            {t('payment')}
          </button>
          <button
            className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-grey-600 hover:bg-grey-100 hover:text-grey-800'
            onClick={onClick}
          >
            {t('cancel')}
          </button>
        </div>
      </div>
    </div>
  );
}
