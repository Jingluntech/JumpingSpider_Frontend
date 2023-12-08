'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const memberNavLink = [
  {
    id: '1',
    title: '會員資料',
    url: '/member/info',
  },
  {
    id: '2',
    title: '分享器管理',
    url: '/member/management',
  },
  {
    id: '3',
    title: '訂閱方案',
    url: '/member/plan',
  },
];

export default function MemebrNavbar() {
  const pathname = usePathname();

  return (
    <nav className='h-full w-fit min-w-fit justify-between px-4 lg:pl-[180px]'>
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
