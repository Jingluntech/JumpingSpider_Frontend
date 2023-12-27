import { getOrdersAPI } from '@/api/order';
// import ProfileInfo from '@/src/app/components/cards/ProfileInfo';
// import Pagination from '@/src/app/components/pagination/Pagination';
// import RecordTable from '@/src/app/components/tables/RecordTable';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';

const ProfileInfo = dynamic(
  () => import('@/src/app/components/cards/ProfileInfo')
);
const RecordTable = dynamic(
  () => import('@/src/app/components/tables/RecordTable')
);
const Pagination = dynamic(
  () => import('@/src/app/components/pagination/Pagination')
);

export default async function ProfileInfoPage({ searchParams: { page } }) {
  const t = await getTranslations('profilePage');
  const cookieStore = cookies();
  const token = cookieStore.get('Token').value;

  const { data } = await getOrdersAPI({
    token,
    payload: {
      page,
    },
  });

  const profileData = [
    {
      id: '1',
      title: 'address',
      content: '0xA55B004469f6930c1362A08c3A5E7418Cd289242',
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

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('profile')}</h1>
      <ProfileInfo data={profileData} />
      {data?.orderList?.length > 0 && (
        <>
          <div className='mt-[56px] lg:flex lg:items-center'>
            <h3 className='text-[28px] font-medium'>{t('record')}</h3>
            <p className='text-base text-grey-400 lg:ml-3 lg:pt-3'>
              {t('reminder')}
            </p>
          </div>
          <RecordTable data={data} />
          <Pagination data={data} />
        </>
      )}
    </div>
  );
}
