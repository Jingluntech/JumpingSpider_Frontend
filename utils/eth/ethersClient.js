import { ethers } from 'ethers';
import ABIJson from '@/utils/eth/contract/usdt.json';

export default function ethersClient() {
  let provider;
  let signer;
  let contract;
  let contractSigner;

  /**
   * ethereumConnect
   * @returns provider、signer、contract、contract
   */

  const ethereumConnect = async () => {
    try {
      if (window.ethereum == null) {
        console.log('MetaMask not installed; using read-only defaults');
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(
          process.env.NEXT_PUBLIC_USDT_CONTRACT,
          ABIJson.abi,
          provider
        );
        contractSigner = new ethers.Contract(
          process.env.NEXT_PUBLIC_USDT_CONTRACT,
          ABIJson.abi,
          signer
        );
      }

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
          console.log('Error', error);
          if (error.info?.error.code === 4001) {
            return;
          }
          if (error.info?.error.code === 4902) {
            const customChain = {
              chainId:
                '0x' + parseInt(process.env.NEXT_PUBLIC_NCHAINID).toString(16),
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

      return {
        provider,
        signer,
        contract,
        contractSigner,
      };
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 取得帳戶地址
   * @returns address
   */

  const getAddress = async () => {
    try {
      const temp = await signer.getAddress();
      return temp;
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 取得貨幣單位
   * @returns symbol
   */

  const getSymbol = async () => {
    try {
      const symbol = await contract.symbol();
      return symbol;
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 取得貨幣進位
   * @returns decimals
   */

  const getDecimals = async () => {
    try {
      const decimals = await contract.decimals();
      return decimals;
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 取得帳戶餘額
   * @returns balance
   */

  const getBalance = async (address, decimals = 6) => {
    try {
      const balance = await contract.balanceOf(address);
      // ethers.formatUnits(SCTBalance, decimals)
      return ethers.formatUnits(balance, decimals);
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 簽名
   * @returns signCode
   */

  const signMessage = async (message) => {
    try {
      const signCode = await signer.signMessage(message);
      return signCode;
    } catch (error) {
      console.error('error: ', error);
      return Promise.reject(error);
    }
  };

  /**
   * 轉帳
   * @returns tx 交易紀錄
   */

  const transfer = async (amount, decimals = 6, limit = 1) => {
    try {
      // if (amount < limit) {
      //   console.log('Insufficient balance');
      //   return;
      // }
      const temp = amount.toString();
      amount = ethers.parseUnits(temp, decimals);
      const tempAddress = process.env.NEXT_PUBLIC_RECEIVE_ADDRESS;
      const tx = await contractSigner.transfer(tempAddress, amount);
      // await tx.wait();
      return tx;
    } catch (error) {
      console.error('transfer Usdc error: ', error);
      return Promise.reject(error);
    }
  };

  return {
    ethereumConnect,
    getAddress,
    getSymbol,
    getDecimals,
    getBalance,
    signMessage,
    transfer,
  };
}
