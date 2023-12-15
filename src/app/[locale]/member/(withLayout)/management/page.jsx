import Pagination from '@/src/app/components/pagination/Pagination';
import DeviceTable from '@/src/app/components/tables/DeviceTable';
import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

export default function MemberManagementPage() {
  const messages = useMessages();
  const t = useTranslations('devicePage');
  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('management')}</h1>
      <NextIntlClientProvider messages={pick(messages, 'devicePage')}>
        <DeviceTable />
      </NextIntlClientProvider>
      <Pagination />
    </div>
  );
}
