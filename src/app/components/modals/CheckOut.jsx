'use client';

import { useTranslations } from 'next-intl';
import ethersClient from '@/utils/eth/ethersClient';
import { createOrderAPI } from '@/api/order';
import { useRouter } from '@/src/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';
// import Image from 'next/image';

export default function CheckOut({
  onClick,
  months,
  setIsAlertOpen,
  walletAddress,
}) {
  const t = useTranslations('pricePage');
  const token = Cookies.get('Token');
  const sum = (months * 30).toFixed(2);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    ethereumConnect,
    getAddress,
    getDecimals,
    getBalance,
    signMessage,
    transfer,
  } = ethersClient();

  const handleCheckoutClick = async () => {
    try {
      setIsLoading(true);
      let { provider, signer, contract, contractSigner } =
        await ethereumConnect();
      const decimals = await getDecimals();
      const balance = await getBalance(walletAddress, decimals);

      if (sum > balance) {
        onClick();
        setIsAlertOpen(true);
        setTimeout(() => {
          setIsAlertOpen(false);
        }, 3000);
        return;
      }

      const re = await transfer(sum, decimals);

      await createOrderAPI({
        token,
        payload: {
          amount: Number(sum),
          month: months,
          txHash: re.hash,
        },
      });

      setIsLoading(false);
      onClick();
      router.push('/payment_completed');
    } catch (error) {
      setIsLoading(false);
      onClick();
      console.log(error);
    }
  };

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4'>
      <div className='relative flex h-fit w-full max-w-fit flex-col gap-4 rounded-md bg-grey-900 p-6'>
        <h4 className='text-2xl font-bold'>{t('subscribedDetails')}</h4>

        <div className='flex flex-col gap-1'>
          <h5 className='font-medium text-primary-yellow-500'>
            {t('address')}
          </h5>
          <p className='break-all font-medium'>{walletAddress}</p>
        </div>

        <div className='flex flex-col gap-3 border-y-2 border-grey-700 py-4'>
          <h5 className='font-medium text-primary-yellow-500'>
            {t('purchaseDetails')}
          </h5>
          <div className='flex flex-col justify-between gap-1 lg:flex-row lg:gap-10'>
            <h5 className='font-medium text-grey-300'>
              {t('subscribedMonth')}
            </h5>
            <p className='font-medium'>
              {months} {t('month')}
            </p>
          </div>
          <div className='flex flex-col justify-between gap-1 lg:flex-row lg:gap-10'>
            <h5 className='font-medium text-grey-300'>
              {t('subscribedAmount')}
            </h5>
            <p className='font-medium'>USDT 30.00 {t('month')}</p>
          </div>
        </div>

        <div>
          <h5 className='text-lg font-bold'>
            {t('total')}：USDT {sum}
          </h5>
        </div>

        <div className='mt-6 flex flex-col gap-2 lg:flex-row-reverse'>
          <button
            className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'
            onClick={() => handleCheckoutClick()}
            disabled={isLoading}
          >
            {t('payment')}
          </button>
          <button
            className='flex h-11 w-full items-center justify-center gap-2 rounded-md bg-grey-600 hover:bg-grey-100 hover:text-grey-800'
            onClick={onClick}
          >
            {t('cancel')}
          </button>
        </div>
        {/* {isLoading && (
          <div className='absolute inset-x-0 inset-y-0 z-50 flex h-full w-full items-center justify-center rounded-md bg-grey-300 opacity-50'>
            <Image
              src='/ellipse.svg'
              alt='spinner-icon'
              width={84}
              height={84}
              className='animate-spin'
            />
          </div>
        )} */}
      </div>
    </div>
  );
}
