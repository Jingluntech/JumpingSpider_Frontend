'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import {
  Chain,
  useAccount,
  useBalance,
  useNetwork,
  useSwitchNetwork,
  useSignMessage,
  useDisconnect,
} from 'wagmi';

import ethersClient from '@/utils/eth/ethersClient';
import Image from 'next/image';
import { loginAPI, logoutAPI, requestLoginAPI } from '@/api/login';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from '@/src/navigation';
import { useContext } from 'react';
import { WalletContext } from '@/src/app/context/context';

export default function ConnectWallet({ onClick, connect, back }) {
  const pathname = usePathname();
  const router = useRouter();
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { data, isError } = useBalance({
    address: address,
    watch: true,
  });
  const { chain } = useNetwork();
  const { pendingChainId, switchNetwork } = useSwitchNetwork();
  const { isLoading } = useSignMessage();
  const { disconnect } = useDisconnect();
  const {
    ethereumConnect,
    getAddress,
    getDecimals,
    getBalance,
    signMessage,
    transfer,
  } = ethersClient();

  const { openWallet, checkOutOpen, setCheckOutOpen } =
    useContext(WalletContext);

  const walletConnectHandler = async (walletType) => {
    try {
      if (walletType === 'walletConnect') {
        open();
        if (isConnected) {
          if (chain.id !== process.env.NEXT_PUBLIC_NCHAINID) {
            const chainId =
              '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16);
            switchNetwork(chainId);
          }
        }
        // TODO: fetch uuid API
        const signCode = await signMessage('uuid');
        // TODO: fetch JWT API
        onClick();
      } else {
        let { provider, signer, contract, contractSigner } =
          await ethereumConnect();

        const tempAddress = await getAddress();
        const { data: uuid } = await requestLoginAPI({ address: tempAddress });
        const signCode = await signer.signMessage(uuid);
        const { data: jwt } = await loginAPI({
          address: tempAddress,
          uuid,
          signMsg: signCode,
        });

        Cookies.set('Token', jwt);
        onClick();
        if (pathname === '/' && openWallet.from === 'home') {
          router.push('/price');
        }
        if (pathname === '/price' && openWallet.from === 'pay') {
          setCheckOutOpen(!checkOutOpen);
        }
      }
    } catch (error) {
      console.log('error', error);
      onClick();
    }
  };

  return (
    <div className='fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4'>
      <div className='flex h-fit w-full max-w-[516px] flex-col gap-[14px] rounded-md bg-grey-900 p-6'>
        <h4 className='text-2xl font-bold'>{connect}</h4>
        <button
          className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
          onClick={() => walletConnectHandler('metamask')}
        >
          <div className='flex items-center gap-4'>
            <Image
              src='/wallet/wallet_metamask.svg'
              alt='meta-mask-icon'
              width={50}
              height={50}
            />
            <h5 className='text-h5 font-bold'>Metamask</h5>
          </div>
          <Image
            src='/wallet/wallet_icon_arrow.svg'
            alt='arrow-icon'
            width={24}
            height={24}
          />
        </button>

        <button
          className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
          onClick={() => walletConnectHandler('trustWallet')}
        >
          <div className='flex items-center gap-4'>
            <Image
              src='/wallet/wallet_trustwallet.svg'
              alt='meta-mask-icon'
              width={50}
              height={50}
            />
            <h5 className='text-h5 font-bold'>Trust Wallet</h5>
          </div>
          <Image
            src='/wallet/wallet_icon_arrow.svg'
            alt='arrow-icon'
            width={24}
            height={24}
          />
        </button>

        <button
          className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
          onClick={() => walletConnectHandler('walletConnect')}
        >
          <div className='flex items-center gap-4'>
            <Image
              src='/wallet/wallet_walletconnect.svg'
              alt='meta-mask-icon'
              width={50}
              height={50}
            />
            <h5 className='text-h5 font-bold'>WalletConnect</h5>
          </div>
          <Image
            src='/wallet/wallet_icon_arrow.svg'
            alt='arrow-icon'
            width={24}
            height={24}
          />
        </button>

        <button
          className='flex h-14 w-full items-center justify-center gap-2 rounded-md bg-grey-100'
          onClick={onClick}
        >
          <Image
            src='/wallet/wallet_button_back.svg'
            alt='back-icon'
            width={24}
            height={24}
          />
          <h5 className='text-h5 border-gray-900 font-bold text-grey-800'>
            {back}
          </h5>
        </button>
      </div>
    </div>
  );
}
