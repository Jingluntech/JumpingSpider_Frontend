import Image from 'next/image';
import FAQ from '@/src/app/components/cards/FAQ';
import CustomSubscription from '@/src/app/components/cards/CustomSubscription';
import Subscription from '@/src/app/components/cards/Subscription';
import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

export default function Home() {
  const t = useTranslations('homePage');
  const messages = useMessages();

  return (
    <div className='flex h-fit w-full flex-col items-center'>
      <div
        id='home'
        className='h-fit w-full bg-gradient-to-b from-[#08396F] to-[#0E1727]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 lg:flex-row-reverse'>
          <div className='relative mt-[35px] h-[306px] w-[297px] flex-shrink-0 px-6 lg:h-[610px] lg:w-[598px] lg:flex-1 lg:py-[69px]'>
            <Image
              src='/home/homepage_image.png'
              alt='homepage-image'
              fill={true}
            />
          </div>
          <div className='flex flex-col items-center gap-5 lg:flex-1 lg:items-start lg:pr-12'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              {t('sectionOneTitleA')}
              <br />
              {t('sectionOneTitleB')}
            </h1>
            <p className='text-center text-grey-200 lg:text-left'>
              {t('sectionOneContentA')}
              <br />
              {t('sectionOneContentB')}
            </p>
            <button className='mb-11 mt-5 h-14 w-[158px] rounded-md bg-primary-blue-500'>
              {t('sectionOneButton')}
            </button>
          </div>
        </div>
      </div>
      <div id='main-2' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center gap-8 px-4 py-14'>
          <div className='flex w-full flex-col items-center justify-center gap-4'>
            <h1 className='text-center text-[46px] font-bold'>
              {t('sectionTwoTitle')}
            </h1>
            <p className='text-center text-grey-300'>
              {t('sectionTwoContentA')}
              <br />
              {t('sectionTwoContentB')}
            </p>
          </div>
          <div className='flex h-fit w-full flex-col items-center gap-3 lg:flex-row-reverse'>
            <NextIntlClientProvider messages={pick(messages, 'pricePage')}>
              <Subscription />
              <CustomSubscription />
            </NextIntlClientProvider>
          </div>
        </div>
      </div>
      <div
        id='main-3'
        className='h-fit w-full bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center gap-[30px] px-4 lg:flex-row-reverse lg:py-[30px]'>
          <div className='relative h-[343px] w-[343px] lg:h-[500px] lg:w-[500px] lg:flex-1'>
            <Image src='/home/vpn03_image.png' alt='vpn-image3' fill={true} />
          </div>
          <div className='mb-[60px] flex flex-col gap-4 lg:flex-1'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              {t('sectionThreeTitleA')}
              <br className='md:hidden' />
              {t('sectionThreeTitleB')}
            </h1>
            <p className='text-center text-grey-300 lg:text-left'>
              {t('sectionThreeContent')}
            </p>
          </div>
        </div>
      </div>
      <div id='main-4' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[60px] lg:flex-row lg:gap-[108px] lg:py-[93px]'>
          <div className='relative h-[272px] w-[343px] lg:h-[354px] lg:w-[500px] lg:flex-1'>
            <Image src='/home/vpn04_image.png' alt='vpn-image4' fill={true} />
          </div>
          <div className='flex flex-col gap-4 lg:flex-1 lg:pl-14'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              {t('sectionFourTitle')}
            </h1>
            <p className='text-center text-grey-300 lg:text-left'>
              {t('sectionFourContentA')}
              <br className='md:hidden' />
              {t('sectionFourContentB')}
              <br />
              {t('sectionFourContentC')}
              <br className='md:hidden' />
              {t('sectionFourContentD')}
            </p>
          </div>
        </div>
      </div>
      <div
        id='price'
        className='h-fit w-full bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[86px]'>
          <div className='relative mb-6 h-[108px] w-[108px]'>
            <Image
              src='/home/vpn05_logo.svg'
              alt='vpn-image5-logo'
              fill={true}
            />
          </div>
          <h1 className='mb-6 text-center text-[46px] font-bold'>
            {t('sectionFiveTitle')}
          </h1>
          <h5 className='mb-2 text-center text-2xl font-bold text-grey-300'>
            {t('sectionFiveSub')}
          </h5>
          <p className='mb-10 text-center text-grey-300'>
            {t('sectionFiveContent')}
          </p>
          <button className='h-14 w-[158px] rounded-md bg-primary-blue-500 text-lg font-bold hover:bg-grey-100 hover:text-grey-800'>
            {t('sectionOneButton')}
          </button>
        </div>
      </div>
      <div id='faq' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[68px]'>
          <h1 className='mb-10 text-[46px] font-bold'>
            {t('sectionSixTitle')}
          </h1>
          <div className='flex w-full flex-col items-center gap-5 lg:mb-[84px]'>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}
