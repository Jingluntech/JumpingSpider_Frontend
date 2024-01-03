import pick from 'lodash.pick';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';
import { getDevicesAPI } from '@/api/profile';

const DeviceTable = dynamic(
  () => import('@/src/app/components/tables/DeviceTable')
);
const Pagination = dynamic(
  () => import('@/src/app/components/pagination/Pagination')
);

export default async function DevicePage() {
  const messages = await getMessages();
  const t = await getTranslations('devicePage');
  const cookieStore = cookies();
  const token = cookieStore.get('Token').value;

  const { data } = await getDevicesAPI({
    token,
  });

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('management')}</h1>
      <NextIntlClientProvider messages={pick(messages, 'devicePage')}>
        <DeviceTable data={data} />
      </NextIntlClientProvider>
      <Pagination />
    </div>
  );
}
