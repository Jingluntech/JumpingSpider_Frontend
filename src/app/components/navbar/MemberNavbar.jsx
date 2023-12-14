'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MemebrNavbar({ locale }) {
  const pathname = usePathname();

  const memberNavLink = [
    {
      id: '1',
      title: '會員資料',
      url: `/${locale}/member/info`,
    },
    {
      id: '2',
      title: '裝置管理',
      url: `/${locale}/member/management`,
    },
    {
      id: '3',
      title: '訂閱方案',
      url: `/${locale}/member/plan`,
    },
  ];

  return (
    <nav className='fixed top-[82px] z-30 w-screen px-[56px]'>
      <ul className='mx-auto flex h-[67px] min-w-[350px] max-w-[1216px] items-center gap-10 lg:px-[120px] xl:px-[168px]'>
        {memberNavLink.map((el) => (
          <Link key={el.id} href={el.url} className='relative h-full'>
            <li
              className={`flex h-full items-center ${
                pathname === el.url ? ' text-grey-100' : 'text-grey-400'
              }`}
            >
              {el.title}
              {pathname === el.url && (
                <div className='absolute inset-x-0 bottom-0 h-1 w-full rounded-3xl bg-primary-yellow-500'></div>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}