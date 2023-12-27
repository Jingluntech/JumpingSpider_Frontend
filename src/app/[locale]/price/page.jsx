import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const CustomSubscription = dynamic(
  () => import('@/src/app/components/cards/CustomSubscription')
);
const Subscription = dynamic(
  () => import('@/src/app/components/cards/Subscription')
);

export default function PricePage() {
  const messages = useMessages();
  const t = useTranslations('pricePage');

  return (
    <div className='flex h-fit w-full flex-col items-center gap-10 lg:gap-6'>
      <div className='h-fit w-full bg-gradient-to-b from-[#08396F] to-[#0E1727] px-4 pt-[56px] lg:pt-0'>
        <div className='mx-auto flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-3 lg:flex-row lg:justify-between'>
          <div className='flex w-full flex-col gap-4 lg:justify-center lg:pl-[200px]'>
            <h1 className='text-[46px] font-bold'>{t('plans')}</h1>
            <p className='text-grey-300'>{t('description')}</p>
          </div>
          <div className='relative h-[260px] w-full'>
            <Image src='/price/banner.svg' alt='price-banner' fill={true} />
          </div>
        </div>
      </div>

      <div className='mx-auto flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col items-center gap-3 px-4 pb-[84px] lg:flex-row-reverse'>
        <NextIntlClientProvider messages={pick(messages, 'pricePage')}>
          <Subscription />
          <CustomSubscription />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
