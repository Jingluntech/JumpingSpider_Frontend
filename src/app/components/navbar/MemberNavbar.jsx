'use client';
import { Link, usePathname } from '@/src/navigation';
import { useTranslations } from 'next-intl';

export default function MemebrNavbar() {
  const t = useTranslations('memberHeader');
  const pathname = usePathname();

  const memberNavLink = [
    {
      id: '1',
      title: 'info',
      url: '/member/info',
    },
    {
      id: '2',
      title: 'device',
      url: '/member/device',
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
              {t(el.title)}
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
