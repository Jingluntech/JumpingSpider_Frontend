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
    <nav className='fixed top-[82px] z-20 h-[67px] w-full min-w-[350px] max-w-[1216px] justify-between bg-grey-900 px-10 lg:px-[174px]'>
      <ul className='flex h-full items-center gap-10'>
        {memberNavLink.map((el) => (
          <Link key={el.id} href={el.url} className='relative h-full pt-[26px]'>
            <li
              className={
                pathname === el.url ? 'h-full text-grey-100' : 'text-grey-400'
              }
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
