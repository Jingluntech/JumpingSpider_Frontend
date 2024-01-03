import { getUserInfoAPI } from '@/api/profile';
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

  const { data } = await getUserInfoAPI({
    token,
    payload: {
      page,
    },
  });

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('profile')}</h1>
      <ProfileInfo data={data} />
      {data?.orders?.list?.length > 0 && (
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
