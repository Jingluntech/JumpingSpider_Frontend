'use client';
import { useEffect, useRef } from 'react';

import { ethers } from 'ethers';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import {
  Chain,
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useSignMessage,
} from 'wagmi';

export default function ConnectWallet({ onClick }) {
  const web3Provider = useRef();
  const signer = useRef();

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { pendingChainId, switchNetwork } = useSwitchNetwork();
  const { isLoading } = useSignMessage();

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
        // console.log(signer);
        const signCode = await signer.current.signMessage('uuid');
        // TODO: fetch JWT API
        onClick();
      } else {
        if (
          web3Provider.current._network.name !==
            process.env.NEXT_PUBLIC_NETWORKNAME ||
          web3Provider.current._network.chainId !==
            process.env.NEXT_PUBLIC_NCHAINID
        ) {
          try {
            let chainId =
              '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16);
            await web3Provider.current.send('wallet_switchEthereumChain', [
              { chainId: chainId },
            ]);
          } catch (error) {
            if (error.code === 4902) {
              const customChain = {
                chainId:
                  '0x' +
                  parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16),
                chainName: process.env.NEXT_PUBLIC_CHAINNAME,
                nativeCurrency: {
                  decimals: parseInt(
                    process.env.NEXT_PUBLIC_NATIVECURRENCYDECIMALS
                  ),
                  name: process.env.NEXT_PUBLIC_NATIVECURRENCYNAME,
                  symbol: process.env.NEXT_PUBLIC_NATIVECURRENCYSYMBOL,
                },
                rpcUrls: [`${process.env.NEXT_PUBLIC_RPCURL}`],
                blockExplorerUrls: [
                  `${process.env.NEXT_PUBLIC_BLOCKEXPLORERURL}`,
                ],
              };
              await web3Provider.current.send('wallet_addEthereumChain', [
                customChain,
              ]);
              let chainId =
                '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16);
              await web3Provider.current.send('wallet_switchEthereumChain', [
                { chainId: chainId },
              ]);
            }
          }
        }
        const addr = await signer.current.getAddress();
        // console.log(addr);
        // TODO: fetch UUID API
        // TODO: fetch JWT API
        const signCode = await signer.current.signMessage('uuid');
        // console.log(signCode);
        onClick();
      }
    } catch (error) {
      console.log('error', error);
      onClick();
    }
  };

  const ethereumConnect = async () => {
    try {
      if (window.ethereum == null) {
        console.log('MetaMask not installed; using read-only defaults');
        web3Provider.current = ethers.getDefaultProvider();
      } else {
        web3Provider.current = new ethers.BrowserProvider(window.ethereum);
        signer.current = await web3Provider.current.getSigner();
        // console.log(web3Provider.current._network);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    try {
      ethereumConnect();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <div className='absolute left-1/2 top-1/2 z-20 flex h-fit w-full min-w-[359px] max-w-[516px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[14px] rounded-md bg-grey-900 p-6'>
      <h4 className='text-h4 font-bold'>Connect Wallet</h4>
      <button
        className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
        onClick={() => walletConnectHandler('metamask')}
      >
        <div className='flex items-center gap-4'>Metamask</div>
      </button>

      <button
        className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
        onClick={() => walletConnectHandler('trustWallet')}
      >
        <div className='flex items-center gap-4'>Trust Wallet</div>
      </button>

      <button
        className='flex h-[74px] w-full items-center justify-between rounded-md bg-grey-700 px-6 py-3'
        onClick={() => walletConnectHandler('walletConnect')}
      >
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
  );
}
