import Image from 'next/image';
import ConnectInfo from '@/src/app/components/cards/ConnectInfo';
import { Link } from '@/src/navigation';
import pick from 'lodash.pick';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { getVpnInfoAPI } from '@/api/profile';

export default async function ConnectInfoPage() {
  const messages = await getMessages();
  const t = await getTranslations('profilePage');
  const cookieStore = cookies();
  const token = cookieStore.get('Token').value;

  const { data } = await getVpnInfoAPI({
    token,
  });

  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <Link href='/profile/info' className='w-fit'>
        <button className='flex gap-2 text-grey-400'>
          <Image
            src='/corner-down-left.svg'
            alt='return-icon'
            width={24}
            height={24}
          />
          {t('back')}
        </button>
      </Link>
      <div className='flex flex-col gap-3'>
        <h3 className='text-[28px] font-medium'>{t('connectInfo')}</h3>
        <p>
          {t('expiredDate')}：{data.expireDate}
        </p>
      </div>
      <NextIntlClientProvider messages={pick(messages, 'profilePage')}>
        <ConnectInfo data={data} />
      </NextIntlClientProvider>
    </div>
  );
}
