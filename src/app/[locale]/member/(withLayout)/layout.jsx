import MemeberNavbar from '@/src/app/components/navbar/MemberNavbar';
import pick from 'lodash.pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

export default function MemberLayout({ children, params: { locale } }) {
  const messages = useMessages();
  const t = useTranslations('memberHeader');

  return (
    <>
      <header className='fixed top-[80px] z-20 flex h-[68px] w-screen border-b border-grey-600 bg-grey-900'>
        <NextIntlClientProvider messages={pick(messages, 'memberHeader')}>
          <MemeberNavbar locale={locale} />
        </NextIntlClientProvider>
      </header>
      <div className='h-fit pt-[68px]'>{children}</div>
    </>
  );
}
