export default function ConnectWallet({ onClick }) {
  return (
    <div className='absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-2'>
      <div className='flex h-fit w-full min-w-[359px] max-w-[516px] flex-col gap-[14px] rounded-md bg-grey-900 p-6'>
        <h4 className='text-h4 font-bold'>Connect Wallet</h4>
        <button className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'>
          <div className='flex items-center gap-4'>Metamask</div>
        </button>

        <button className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'>
          <div className='flex items-center gap-4'>Trust Wallet</div>
        </button>

        <button className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'>
          <div className='flex items-center gap-4'>WalletConnect</div>
        </button>

        <button
          className='flex h-14 w-full items-center justify-center gap-2 rounded-md bg-grey-100'
          onClick={onClick}
        >
          <h5 className='text-h5 border-gray-900 font-bold text-grey-800'>
            Back
          </h5>
        </button>
      </div>
    </div>
  );
}
