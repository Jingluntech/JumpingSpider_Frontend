import MemebrNavbar from '@/src/app/components/navbar/MemberNavbar';

export default function MemberLayout({ children, params: { locale } }) {
  return (
    <>
      <header className='fixed top-[82px] z-30 flex h-[68px] w-screen bg-grey-900'>
        <MemebrNavbar locale={locale} />
      </header>
      <hr className='fixed top-[148px] z-30 w-screen border-b border-grey-600' />
      <div className='h-fit pt-[68px]'>{children}</div>
    </>
  );
}
