import ProfileNavbar from '@/src/app/components/navbar/ProfileNavbar';
import pick from 'lodash.pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function ProfileLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <>
      <header className='fixed top-[80px] z-20 flex h-[68px] w-screen border-b border-grey-600 bg-grey-900'>
        <NextIntlClientProvider messages={pick(messages, 'profileHeader')}>
          <ProfileNavbar locale={locale} />
        </NextIntlClientProvider>
      </header>
      <div className='h-fit pt-[68px]'>{children}</div>
    </>
  );
}
