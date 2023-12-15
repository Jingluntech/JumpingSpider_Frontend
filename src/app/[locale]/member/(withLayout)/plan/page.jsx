import CustomSubscription from '@/src/app/components/cards/CustomSubscription';
import Subscription from '@/src/app/components/cards/Subscription';
import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

export default function MemberPlanPage() {
  const messages = useMessages();
  const t = useTranslations('pricePage');

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>{t('plans')}</h1>
      <div className='flex flex-col gap-3 lg:flex-row-reverse'>
        <NextIntlClientProvider messages={pick(messages, 'pricePage')}>
          <Subscription />
          <CustomSubscription />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
