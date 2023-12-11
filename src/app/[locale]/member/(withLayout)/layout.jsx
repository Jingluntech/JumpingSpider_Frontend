import MemebrNavbar from '@/src/app/components/navbar/MemberNavbar';

export default function MemberLayout({ children, params: { locale } }) {
  return (
    <>
      <header className='fixed top-[82px] flex h-[68px] w-full justify-center bg-grey-900'>
        <MemebrNavbar locale={locale} />
      </header>
      <hr className='fixed top-[148px] w-full border-b border-grey-600' />
      <div className='h-fit px-[112px] pt-[68px]'>{children}</div>
    </>
  );
}
