import ProfileInfo from '@/src/app/components/cards/ProfileInfo';
import Pagination from '@/src/app/components/pagination/Pagination';
import RecordTable from '@/src/app/components/tables/RecordTable';
import { useTranslations } from 'next-intl';

const dummyData = [
  {
    id: '1',
    title: 'address',
    content: '0x7566A9A20FA0C1C68FA308E8E40132474AD3DA8E',
    showButton: false,
  },
  {
    id: '2',
    title: 'status',
    // content: '月費訂閱制 / 企業端方案\n－ 訂閱 12 個月',
    sub: '（訂閱到期日：2026-01-01）',
    showButton: true,
  },
];

export default function ProfileInfoPage() {
  const t = useTranslations('profilePage');

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('profile')}</h1>
      <ProfileInfo data={dummyData} />
      <div className='mt-4 lg:mt-8 lg:flex lg:items-center'>
        <h3 className='text-[28px] font-medium'>{t('record')}</h3>
        <p className='text-base text-grey-400 lg:ml-3 lg:pt-3'>
          {t('reminder')}
        </p>
      </div>
      <RecordTable />
      <Pagination />
    </div>
  );
}
