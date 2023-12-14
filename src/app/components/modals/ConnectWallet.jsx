'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import {
  Chain,
  useAccount,
  useBalance,
  useNetwork,
  useSwitchNetwork,
  useSignMessage,
} from 'wagmi';

import ethersClient from '@/utils/eth/ethersClient';
import { use } from 'i18next';
import Image from 'next/image';
import { loginAPI, requestLoginAPI } from '@/api/login';
import Cookies from 'js-cookie';

export default function ConnectWallet({ onClick }) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { data, isError } = useBalance({
    address: address,
    watch: true,
  });
  const { chain } = useNetwork();
  const { pendingChainId, switchNetwork } = useSwitchNetwork();
  const { isLoading } = useSignMessage();

  const {
    ethereumConnect,
    getAddress,
    getDecimals,
    getBalance,
    signMessage,
    transfer,
  } = ethersClient();

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

        // TODO: fetch UUID API
        const tempAddress = await getAddress();
        const { data: uuid } = await requestLoginAPI({ address: tempAddress });
        // TODO: fetch JWT API
        const signCode = await signer.signMessage(uuid);
        const { data: jwt } = await loginAPI({
          address: tempAddress,
          uuid,
          signMsg: signCode,
        });

        Cookies.set('Token', jwt);
        // const decimals = await getDecimals();
        // const balance = await getBalance(address, decimals);
        // console.log(balance);
        // let re = await transfer(1, decimals);
        // console.log(re);
        // console.log(signCode);
        onClick();
      }
    } catch (error) {
      console.log('error', error);
      onClick();
    }
  };

  window.ethereum.on('chainChanged', () => {
    console.log('chainChanged');
  });

  window.ethereum.on('accountsChanged', () => {
    console.log('accountsChanged');
  });

  return (
    <div className='absolute left-1/2 top-1/2 z-50 flex h-fit w-full min-w-[359px] max-w-[516px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[14px] rounded-md bg-grey-900 p-6'>
      <h4 className='text-2xl font-bold'>連接錢包</h4>
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
          返回
        </h5>
      </button>
    </div>
  );
}