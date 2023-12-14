import MemeberNavbar from '@/src/app/components/navbar/MemberNavbar';

export default function MemberLayout({ children, params: { locale } }) {
  return (
    <>
      <header className='fixed top-[80px] z-20 flex h-[68px] w-screen border-b border-grey-600 bg-grey-900'>
        <MemeberNavbar locale={locale} />
      </header>
      <div className='h-fit pt-[68px]'>{children}</div>
    </>
  );
}
