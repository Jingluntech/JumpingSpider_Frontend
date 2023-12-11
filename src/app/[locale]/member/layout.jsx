import MemebrNavbar from '@/src/app/components/navbar/MemberNavbar';

export default function MemberLayout({ children, params: { locale } }) {
  return (
    <>
      <header className='fixed top-20 mx-auto h-[68px] w-full min-w-[350px] max-w-[1216px]'>
        <MemebrNavbar locale={locale} />
      </header>
      <hr className='fixed top-[148px] w-full border-b border-grey-600' />
      <div className='h-fit pt-[148px]'>{children}</div>
    </>
  );
}
