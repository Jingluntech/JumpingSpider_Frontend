import MemberInfo from '@/src/app/components/cards/MemberInfo';
import Pagination from '@/src/app/components/pagination/Pagination';
import RecordTable from '@/src/app/components/tables/RecordTable';
import Image from 'next/image';

const dummyData = [
  {
    id: '1',
    title: '錢包地址',
    content: '0x7566A9A20FA0C1C68FA308E8E40132474AD3DA8E',
    showButton: false,
  },
  {
    id: '2',
    title: '最新VPN訂閱狀態',
    content: '訂閱 12 個月',
    sub: '（訂閱到期日：2026-01-01）',
    showButton: true,
  },
  {
    id: '3',
    title: 'IP地址',
    content: '168.1.1.11',
    showButton: false,
  },
  {
    id: '4',
    title: '位置',
    content: 'Taipei , Taiwan',
    showButton: false,
  },
];

export default function MemberInfoPage({ params: { locale } }) {
  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>會員資料</h1>
      <MemberInfo locale={locale} data={dummyData} />
      <div className='mt-4 lg:mt-8 lg:flex lg:items-center'>
        <h3 className='text-[28px] font-medium'>VPN訂閱紀錄</h3>
        <p className='text-base text-grey-400 lg:pt-3'>
          （更新紀錄僅保留兩年）
        </p>
      </div>
      <RecordTable />
      <Pagination />
    </div>
  );
}
