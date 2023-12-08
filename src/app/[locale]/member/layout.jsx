import MemebrNavbar from '@/src/app/components/navbar/MemberNavbar';

export default function MemberLayout({ children, params: { locale } }) {
  return (
    <div>
      <header className='mx-auto h-[68px] w-full min-w-[350px] max-w-[1216px]'>
        <MemebrNavbar locale={locale} />
      </header>
      <hr className='w-full border-b border-grey-600' />
      {children}
    </div>
  );
}
