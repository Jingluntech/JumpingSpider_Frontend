export default function RecordTable() {
  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full'>
        <thead className='bg-grey-800'>
          <tr className='h-16 border-b border-grey-500'>
            <th className='w-1/5 px-6 py-3 text-left text-sm'>訂閱時間</th>
            <th className='w-1/5 px-6 py-3 text-left text-sm'>訂閱方案</th>
            <th className='w-1/5 px-6 py-3 text-left text-sm'>到期日</th>
            <th className='w-1/5 px-6 py-3 text-left text-sm'>狀態</th>
            <th className='w-1/5 px-6 py-3 text-left text-sm'>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>2023/06/12</td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              企業版VPN（12個月）
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>2024/06/12</td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>訂閱中</td>
            <td className='w-1/5 px-6 py-3 text-left text-sm text-primary-yellow-500'>
              訂閱資訊
            </td>
          </tr>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>2023/06/12</td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>
              企業版VPN（12個月）
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm'>2024/06/12</td>
            <td className='w-1/5 px-6 py-3 text-left text-sm text-secondary-red-500'>
              已過期
            </td>
            <td className='w-1/5 px-6 py-3 text-left text-sm text-primary-yellow-500'>
              訂閱資訊
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
