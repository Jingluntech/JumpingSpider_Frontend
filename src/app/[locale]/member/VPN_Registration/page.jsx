import Image from 'next/image';
import ConnectInfo from '@/src/app/components/cards/ConnectInfo';
import { Link } from '@/src/navigation';
import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

const dummyData = [
  {
    id: '1',
    title: 'url',
    content: 'https://118.163.aaaabc/0000/webvpn/openvpn_cilent.ovpn',
    img: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
          stroke='#465465'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'account',
    content: 'jumpingspider8866',
    img: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
          stroke='#465465'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'password',
    content: 'jumpingspider8866',
    img: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
          stroke='#465465'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
];

export default function VPNResgistration({ params: { locale } }) {
  const messages = useMessages();
  const t = useTranslations('memberInfoPage');
  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <Link href='/member/info'>
        <button className='flex gap-2 text-grey-400'>
          <Image
            src='/corner-down-left.svg'
            alt='return-icon'
            width={24}
            height={24}
          />
          {t('back')}
        </button>
      </Link>
      <div className='flex flex-col gap-3'>
        <h3 className='text-[28px] font-medium'>{t('connectInfo')}</h3>
        <p>{t('expiredDate')}：2026-01-01</p>
      </div>
      <NextIntlClientProvider messages={pick(messages, 'memberInfoPage')}>
        <ConnectInfo data={dummyData} />
      </NextIntlClientProvider>
    </div>
  );
}
