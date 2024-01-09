'use client';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import CheckOut from '@/src/app/components/modals/CheckOut';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/src/navigation';
import Cookies from 'js-cookie';
import { WalletContext } from '@/src/app/context/context';
import { getUserInfoAPI } from '@/api/profile';
import ethersClient from '@/utils/eth/ethersClient';

export default function Subscription() {
  const isLogin = Cookies.get('Token');
  const pathname = usePathname();
  const t = useTranslations('pricePage');
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const { openWallet, setOpenWallet } = useContext(WalletContext);
  const [walletAddress, setWalletAddress] = useState('');

  const { ethereumConnect, getAddress } = ethersClient();

  const handlePayClick = async () => {
    if (!isLogin) {
      return setOpenWallet(!openWallet);
    }

    const { errorCode } = await getUserInfoAPI({
      token: isLogin,
    });

    if (errorCode === 1010 || errorCode === 1011) {
      Cookies.remove('Token');
      setOpenWallet(!openWallet);
      return;
    }

    setCheckOutOpen(!checkOutOpen);
  };

  useEffect(() => {
    const getAddressAsync = async () => {
      let { provider, signer, contract, contractSigner } =
        await ethereumConnect();
      const address = await getAddress();
      setWalletAddress(address);
    };
    getAddressAsync();
  }, []);

  return (
    <div className='flex h-fit w-full max-w-[602px] flex-col gap-5 rounded-md border-[3px] border-primary-blue-500 bg-grey-800 px-10 py-11 lg:flex-1 lg:gap-8'>
      <div className='flex h-fit flex-col gap-3 lg:flex-row-reverse lg:justify-between'>
        <div className='relative h-[156px] w-[174px]'>
          <Image
            src='/home/monthly_vpn.svg'
            alt='monthly-vpn-img'
            fill={true}
          />
        </div>
        <div className='mb-1 h-full'>
          <p className='mb-1 text-sm text-primary-yellow-500'>{t('monthly')}</p>
          <h1 className='text-[28px] font-medium lg:whitespace-nowrap'>
            {t('plan')}
          </h1>
          <p className='mt-6 flex h-fit items-center font-inter text-base text-grey-300'>
            USDT
            <span className='mx-2 font-inter text-[46px] font-bold text-grey-100'>
              30.00
            </span>
            {t('perMonth')}
          </p>
        </div>
      </div>

      <hr className='border-t-[2px] border-grey-600' />

      <div className='flex h-fit flex-col gap-4 lg:h-[212px] lg:gap-0'>
        <ul className='mb-[22px] flex flex-col gap-4'>
          <li className='flex gap-3 text-base font-medium text-grey-300'>
            <Image
              src='/alert/alerts_icon_success.svg'
              alt='success icon'
              width={16}
              height={16}
            />
            {t('featureOne')}
          </li>
          <li className='flex gap-3 text-base font-medium text-grey-300'>
            <Image
              src='/alert/alerts_icon_success.svg'
              alt='success icon'
              width={16}
              height={16}
            />
            {t('featureTwo')}
          </li>
          <li className='flex gap-3 text-base font-medium text-grey-300'>
            <Image
              src='/alert/alerts_icon_success.svg'
              alt='success icon'
              width={16}
              height={16}
            />
            {t('featureThree')}
          </li>
          <li className='flex gap-3 text-base font-medium text-grey-300'>
            <Image
              src='/alert/alerts_icon_success.svg'
              alt='success icon'
              width={16}
              height={16}
            />
            {t('featureFour')}
          </li>
        </ul>
        {!pathname.includes('price') ? (
          <Link href='/price'>
            <button className='h-11 w-full rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'>
              {t('more')}
            </button>
          </Link>
        ) : (
          <div className='flex w-full flex-wrap items-center gap-5 lg:flex-nowrap'>
            <div className='text-sm text-grey-300'>{t('months')}</div>
            <div className='flex h-11 w-[180px]'>
              <button
                className='flex h-full flex-1 items-center rounded-l-md border border-grey-600 bg-grey-700 p-3'
                disabled={inputValue === 1}
                onClick={() => setInputValue((prev) => prev - 1)}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 10H16'
                    stroke={inputValue === 1 ? '#949EAE' : '#EFF2F5'}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <div className='flex-2 border-y border-grey-600 bg-grey-900 align-middle text-grey-100'>
                <input
                  type='number'
                  disabled
                  className='h-full w-full bg-transparent text-center text-grey-100'
                  value={inputValue}
                />
              </div>
              <button
                className='flex h-full flex-1 items-center rounded-r-md border border-grey-600 bg-grey-700 p-3'
                disabled={inputValue === 12}
                onClick={() => setInputValue((prev) => prev + 1)}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 4V16M4 10H16'
                    stroke={inputValue === 12 ? '#949EAE' : '#EFF2F5'}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <button
              className='h-11 w-[164px] rounded-md bg-primary-blue-500 hover:bg-grey-100 hover:text-grey-800'
              onClick={() => handlePayClick()}
            >
              {t('pay')}
            </button>
          </div>
        )}
      </div>

      {checkOutOpen && (
        <>
          <CheckOut
            onClick={() => setCheckOutOpen(false)}
            months={inputValue}
            setIsAlertOpen={setIsAlertOpen}
            walletAddress={walletAddress}
          />
          <ModalBackground />
        </>
      )}

      {isAlertOpen && (
        <div className='fixed inset-x-0 top-0 z-50 flex h-fit items-center justify-center gap-3 bg-secondary-red-100 p-4 font-medium text-secondary-red-500'>
          <Image
            src='/alert/alerts_icon_mistake.svg'
            alt='mistake-icon'
            width={24}
            height={24}
          />
          {t('failed')}
        </div>
      )}
    </div>
  );
}
