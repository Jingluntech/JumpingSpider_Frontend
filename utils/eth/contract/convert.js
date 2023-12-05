import { ethers } from 'ethers';

export default function convert() {
  function strToBytes32(str) {
    return ethers.utils.formatBytes32String(str);
  }

  function bytes32ToStr(bytes32) {
    return ethers.utils.parseBytes32String(bytes32);
  }

  /**
   * parse string value to units wei
   * example:
   *   ('1.0') => 1000000000000000000, wei of 1 ether
   *   ('1.0', 'gwei') => 100000000, wei of 1 gwei
   * @param {*} str value string
   * @returns BigNumber object
   */
  function strToBigint(str, unit = 'ether') {
    return ethers.utils.parseUnits(str, unit);
  }

  /**
   * parse BigNumber object to wei string
   * example:
   *   ('1000000000000000000') => 1000000000000000000, just convert bn -> string
   *   ('1000000000000000000', 'gwei') => wei -> 2.0 gwei
   *   ('1000000000000000000', 18) => wei -> 1.0 ether
   * @param {*} str value string
   * @returns string
   */
  function bigintToStr(bn, unit = 'ether') {
    return ethers.utils.formatUnits(bn, unit);
  }

  return {
    strToBytes32,
    bytes32ToStr,
    strToBigint,
    bigintToStr,
  };
}
