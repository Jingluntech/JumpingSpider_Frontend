'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/plugins/i18n';
import { useTranslation } from 'react-i18next';

const footerLinks = [
  {
    id: 'footer-0',
    title: 'footer.home',
    url: '/',
  },
  {
    id: 'footer-1',
    title: 'footer.price',
    url: '/price',
  },
  {
    id: 'footer-2',
    title: 'footer.faq',
    url: '/faq',
  },
  {
    id: 'footer-3',
    title: 'footer.instruction',
    url: '/instruction',
  },
  {
    id: 'footer-4',
    title: 'footer.policy',
    url: '/policy',
    icon: '/external-link.svg',
  },
  {
    id: 'footer-5',
    title: 'footer.spiderweb',
    url: '/',
    icon: '/external-link.svg',
  },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='flex h-[142px] w-full flex-col items-center justify-center gap-8 bg-grey-800 py-14 md:gap-10 lg:flex-row xl:justify-between xl:px-28'>
      <ul className='flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10'>
        {footerLinks.map((el) => (
          <Link key={el.id} href={el.url}>
            <li className='flex gap-1 text-grey-300'>
              {t(el.title)}
              {el.icon && (
                <Image
                  src={el.icon}
                  alt='external-link-icon'
                  width={16}
                  height={16}
                />
              )}
            </li>
          </Link>
        ))}
      </ul>
      <Image src='/Logo.svg' alt='Logo' width={106} height={48} />
    </footer>
  );
}
