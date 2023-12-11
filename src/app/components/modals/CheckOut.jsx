export default function CheckOut({ onClick }) {
  return (
    <div className='absolute left-1/2 top-1/2 z-50 flex h-fit min-w-[444px] max-w-fit -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md bg-grey-900 p-6'>
      <header className='flex flex-col gap-5'>
        <h4 className='text-2xl font-bold'>VPN訂閱明細</h4>
        <p className='font-medium'>購買明細</p>
      </header>

      <main className='flex flex-col gap-3 border-y-2 border-grey-700 py-4'>
        <div className='flex justify-between'>
          <h5 className='font-medium'>訂閱月數</h5>
          <p className='font-medium'>000 / 個月</p>
        </div>
        <div className='flex justify-between'>
          <h5 className='font-medium'>VPN單月訂閱金額</h5>
          <p className='font-medium'>USDT 30.00 / 月</p>
        </div>
      </main>

      <footer>
        <h5 className='text-lg font-bold'>總金額：USDT 678.00</h5>
      </footer>

      <div className='mt-6 flex gap-2'>
        <button
          className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-grey-600 hover:bg-grey-100 hover:text-grey-800'
          onClick={onClick}
        >
          取消
        </button>
        <button className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'>
          確定付款
        </button>
      </div>
    </div>
  );
}
