import { useTranslations } from 'next-intl';

export default function RecordTable() {
  const t = useTranslations('recordTable');

  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full lg:hidden'>
        <tbody className='border-b border-grey-600'>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('purchaseTime')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('expiredDate')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('content')}
            </th>
            <td className='w-1/2 p-3'>{t('contentDetail', { num: '2' })}</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('amount')}
            </th>
            <td className='w-1/2 p-3'>1,123.12</td>
          </tr>
        </tbody>
        <tbody className='border-b border-grey-600'>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('purchaseTime')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('expiredDate')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('content')}
            </th>
            <td className='w-1/2 p-3'>{t('contentDetail', { num: '2' })}</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('amount')}
            </th>
            <td className='w-1/2 p-3'>1,123.12</td>
          </tr>
        </tbody>
      </table>
      <table className='hidden w-full lg:table'>
        <thead className='bg-grey-800'>
          <tr className='h-11 border-b border-grey-700'>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('purchaseTime')}
            </th>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('expiredDate')}
            </th>
            <th className='px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('content')}
            </th>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('amount')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='px-6 py-3 text-left text-sm'>
              {t('contentDetail', { num: '2' })}
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>UTC 321.00</td>
          </tr>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='px-6 py-3 text-left text-sm'>
              {t('contentDetail', { num: '2' })}
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>UTC 321.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
