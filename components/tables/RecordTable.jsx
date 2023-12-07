export default function RecordTable() {
  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full'>
        <thead className='bg-grey-800'>
          <tr className='h-11 border-b border-grey-700'>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              訂閱時間
            </th>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              訂閱到期日
            </th>
            <th className='px-6 py-3 text-left text-sm font-medium text-grey-300'>
              訂閱內容
            </th>
            <th className='w-1/5 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              金額
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
              Jumping Spider VPN Subscription - 12 Months
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
              Jumping Spider VPN訂閱 - 12個月
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>UTC 321.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
