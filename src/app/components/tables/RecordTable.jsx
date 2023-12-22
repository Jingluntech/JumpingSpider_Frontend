import { useTranslations } from 'next-intl';

const handleStatus = (statusCode, t) => {
  switch (statusCode) {
    case 0: {
      return (
        <div className='flex h-7 w-fit items-center justify-center whitespace-nowrap rounded-2xl bg-grey-300 px-[10px] py-1 text-sm font-medium text-grey-700'>
          {t('orderPlaced')}
        </div>
      );
      break;
    }
    case 1: {
      return (
        <div className='flex h-7 w-fit items-center justify-center whitespace-nowrap rounded-2xl bg-secondary-green-100 px-[10px] py-1 text-sm font-medium text-secondary-green-text'>
          {t('confirmed')}
        </div>
      );
      break;
    }
    case 2: {
      return (
        <div className='flex h-7 w-fit items-center justify-center whitespace-nowrap rounded-2xl bg-secondary-red-100 px-[10px] py-1 text-sm font-medium text-secondary-red-500'>
          {t('failed')}
        </div>
      );
      break;
    }
  }
};

export default function RecordTable({ data }) {
  const t = useTranslations('recordTable');
  const orderList = data.orderList;

  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full lg:hidden'>
        {orderList.map((el) => (
          <tbody
            key={el.orderNumber}
            className='border-b border-grey-600 last:border-none'
          >
            <tr className='min-h-11 h-11'></tr>
            <tr className='min-h-11 h-11 text-left'>
              <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                {t('time')}
              </th>
              <td className='w-1/2 p-3'>{el.createTime}</td>
            </tr>
            <tr className='min-h-11 h-11 text-left'>
              <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                {t('orderNumber')}
              </th>
              <td className='w-1/2 p-3'>{el.orderNumber}</td>
            </tr>
            <tr className='min-h-11 h-11 text-left'>
              <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                {t('content')}
              </th>
              <td className='w-1/2 p-3'>
                {t('contentDetail', { num: el.month })}
              </td>
            </tr>
            <tr className='min-h-11 h-11 text-left'>
              <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                {t('amount')}
              </th>
              <td className='w-1/2 p-3'>USDT {el.amount}</td>
            </tr>
            <tr className='min-h-11 h-11 text-left'>
              <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                {t('status')}
              </th>
              <td className='w-1/2 p-3'>{handleStatus(el.status, t)}</td>
            </tr>
            <tr className='min-h-11 h-11'></tr>
          </tbody>
        ))}
        {/* <tbody className='border-b border-grey-600 last:border-none'>
          <tr className='min-h-11 h-11'></tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('orderNumber')}
            </th>
            <td className='w-1/2 p-3'>11CB00413</td>
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
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('status')}
            </th>
            <td className='w-1/2 p-3'>{handleStatus(0, t)}</td>
          </tr>
          <tr className='min-h-11 h-11'></tr>
        </tbody>
        <tbody className='border-b border-grey-600 last:border-none'>
          <tr className='min-h-11 h-11'></tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('orderNumber')}
            </th>
            <td className='w-1/2 p-3'>11CB00413</td>
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
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('status')}
            </th>
            <td className='w-1/2 p-3'>{handleStatus(1, t)}</td>
          </tr>
          <tr className='min-h-11 h-11'></tr>
        </tbody>
        <tbody className='border-b border-grey-600 last:border-none'>
          <tr className='min-h-11 h-11'></tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('orderNumber')}
            </th>
            <td className='w-1/2 p-3'>11CB00413</td>
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
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('status')}
            </th>
            <td className='w-1/2 p-3'>{handleStatus(2, t)}</td>
          </tr>
          <tr className='min-h-11 h-11'></tr>
        </tbody> */}
      </table>
      <table className='hidden w-full lg:table'>
        <thead className='bg-grey-800'>
          <tr className='h-11 border-b border-grey-700'>
            <th className='w-1/6 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <th className='w-1/6 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('orderNumber')}
            </th>
            <th className='w-1/3 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('content')}
            </th>
            <th className='w-1/6 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('amount')}
            </th>
            <th className='w-1/6 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('status')}
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((el) => (
            <tr key={el.orderNumber} className='h-20 border-b border-grey-500'>
              <td className='w-1/6 px-6 py-3 text-left text-sm'>
                {el.createTime}
              </td>
              <td className='w-1/6 px-6 py-3 text-left text-sm'>
                {el.orderNumber}
              </td>
              <td className='w-1/3 px-6 py-3 text-left text-sm'>
                {t('contentDetail', { num: el.month })}
              </td>
              <td className='w-1/6 px-6 py-3 text-left text-sm'>
                USDT {el.amount}
              </td>
              <td className='w-1/6 px-6 py-3 text-left text-sm'>
                {handleStatus(el.status, t)}
              </td>
            </tr>
          ))}

          {/* <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>11CB00413</td>
            <td className='w-1/3 px-6 py-3 text-left text-sm'>
              {t('contentDetail', { num: '2' })}
            </td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>UTC 321.00</td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>
              {handleStatus(0, t)}
            </td>
          </tr>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>11CB00413</td>
            <td className='w-1/3 px-6 py-3 text-left text-sm'>
              {t('contentDetail', { num: '2' })}
            </td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>UTC 321.00</td>
            <td className='w-1/6 px-6 py-3 text-left text-sm'>
              {handleStatus(1, t)}
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
