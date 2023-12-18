import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Image from 'next/image';
import SearchFAQ from '@/src/app/components/search/SearchFAQ';

export default function FAQPage() {
  const messages = useMessages();
  const t = useTranslations('faqPage');

  const FAQcardData = [
    {
      id: 'faq-1',
      title: 'questionOne',
      content: 'answerOne',
    },
    {
      id: 'faq-2',
      title: 'questionTwo',
      content: 'answerTwo',
    },
    {
      id: 'faq-3',
      title: 'questionThree',
      content: 'answerThree',
    },
    {
      id: 'faq-4',
      title: 'questionFour',
      content: 'answerFour',
    },
  ];

  return (
    <div className='flex h-fit w-full flex-col items-center gap-10 lg:gap-6'>
      <div className='h-fit w-full bg-gradient-to-b from-[#08396F] to-[#0E1727] px-4 pt-[56px] lg:pt-0'>
        <div className='mx-auto flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-3 lg:flex-row lg:justify-between'>
          <div className='flex w-full flex-col gap-4 lg:justify-center lg:pl-[200px]'>
            <h1 className='text-[46px] font-bold'>{t('title')}</h1>
            <p className='text-grey-300'>{t('description')}</p>
          </div>
          <div className='relative h-[260px] w-full'>
            <Image src='/faq/banner.svg' alt='faq-banner' fill={true} />
          </div>
        </div>
      </div>
      <NextIntlClientProvider messages={pick(messages, 'faqPage')}>
        <SearchFAQ FAQcardData={FAQcardData} />
      </NextIntlClientProvider>
    </div>
  );
}
