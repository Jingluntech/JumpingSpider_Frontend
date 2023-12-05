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
        if (
          provider._network.name !== process.env.NEXT_PUBLIC_NETWORKNAME ||
          provider._network.chainId !== process.env.NEXT_PUBLIC_NCHAINID
        ) {
          try {
            let chainId =
              '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16);
            await provider.send('wallet_switchEthereumChain', [
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
              await provider.send('wallet_addEthereumChain', [customChain]);
              let chainId =
                '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16);
              await provider.send('wallet_switchEthereumChain', [
                { chainId: chainId },
              ]);
            }
          }
        }
        const tempAddress = getAddress();
        const decimals = await getDecimals();
        const balance = await getBalance(tempAddress, decimals);
        console.log(balance);
        // let re = await transfer(12, decimals, 20);
        // console.log(re);
        // TODO: fetch UUID API
        // TODO: fetch JWT API
        const signCode = await signMessage('uuid');
        // console.log(signCode);
        onClick();
      }
    } catch (error) {
      console.log('error', error);
      onClick();
    }
  };

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
