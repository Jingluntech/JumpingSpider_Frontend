import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FAQ from '@/src/app/components/cards/FAQ';
import SearchInput from '@/src/app/components/searchInput/SearchInput';

export default function PricePage() {
  const t = useTranslations('faqPage');

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

      <div className='mx-auto flex h-fit w-full min-w-[350px] max-w-[750px] flex-col items-center gap-10 px-4 pb-[84px]'>
        <SearchInput search={t('search')} placeholder={t('placeholder')} />
        <hr className='w-full border-b border-grey-600' />
        <div className='flex flex-col gap-5'>
          <FAQ
            q={t('questionOne')}
            a={t.rich('answerOne', {
              tutorial: (chunks) => (
                <a
                  className='text-primary-yellow-500 underline'
                  href='/tutorial'
                >
                  {chunks}
                </a>
              ),
            })}
          />
          <FAQ q={t('questionTwo')} a={t('answerTwo')} />
          <FAQ q={t('questionThree')} a={t('answerThree')} />
          <FAQ q={t('questionFour')} a={t('answerFour')} />
        </div>
      </div>
    </div>
  );
}
