import Image from 'next/image';
import MemberInfo from '@/src/app/components/cards/MemberInfo';
import Link from 'next/link';

const dummyData = [
  {
    id: '1',
    title: 'URL',
    content: 'https://118.163.aaaabc/0000/webvpn/openvpn_cilent.ovpn',
    sub: <Image alt='copy-icon' src='/copy.svg' width={24} height={24} />,
  },
  {
    id: '2',
    title: '帳號',
    content: 'jumpingspider8866',
    sub: <Image alt='copy-icon' src='/copy.svg' width={24} height={24} />,
  },
  {
    id: '3',
    title: '密碼',
    content: 'jumpingspider8866',
    sub: <Image alt='copy-icon' src='/copy.svg' width={24} height={24} />,
  },
];

export default function VPNResgistration({ params: { locale } }) {
  return (
    <div className='mb-[54px] px-[112px] py-[53px]'>
      <Link href={`/${locale}/member/info`}>
        <button className='mb-8 flex gap-2 text-grey-400'>
          <Image
            src='/corner-down-left.svg'
            alt='return-icon'
            width={24}
            height={24}
          />
          返回
        </button>
      </Link>
      <h3 className='text mb-3 text-[28px] font-medium'>Open VPN登錄資料</h3>
      <p className='mb-6'>訂閱到期日：2026-01-01</p>
      <MemberInfo data={dummyData} />
    </div>
  );
}
