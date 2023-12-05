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
      const symbol = await await contract.symbol();
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
      const signCode = await signer.signMessage('uuid');
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
      if (amount < limit) {
        console.log('Insufficient balance');
        return;
      }
      const temp = amount.toString();
      amount = ethers.parseUnits(temp, decimals);
      const tempAddress = process.env.NEXT_PUBLIC_RECEIVE_ADDRESS;
      const tx = await contractSigner.transfer(tempAddress, amount);
      await tx.wait();
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
