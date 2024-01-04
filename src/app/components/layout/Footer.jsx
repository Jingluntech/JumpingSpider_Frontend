import Image from 'next/image';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const footerLinks = [
    {
      id: 'footer-0',
      title: 'home',
      url: '/',
    },
    {
      id: 'footer-1',
      title: 'price',
      url: '/price',
    },
    {
      id: 'footer-2',
      title: 'faq',
      url: '/faq',
    },
    {
      id: 'footer-3',
      title: 'tutorial',
      url: '/OpenVPN教學總覽.pdf',
      icon: '/external-link.svg',
    },
    {
      id: 'footer-4',
      title: 'TOS',
      url: '/Jumping Spider 服務條款.pdf',
      icon: '/external-link.svg',
    },
    {
      id: 'footer-5',
      title: 'policy',
      url: '/Jumping Spider 隱私政策.pdf',
      icon: '/external-link.svg',
    },
    {
      id: 'footer-6',
      title: 'spiderweb',
      url: 'https://www.spiderweb.club/',
      icon: '/external-link.svg',
    },
    {
      id: 'footer-7',
      title: 'scan',
      url: 'https://scan.spiderweb.club/',
      icon: '/external-link.svg',
    },
  ];

  return (
    <footer className='h-fit w-full bg-grey-800'>
      <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center px-4 py-14 lg:flex-row lg:justify-between'>
        <ul className='flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8'>
          {footerLinks.map((el) => {
            return el.id === 'footer-3' ||
              el.id === 'footer-4' ||
              el.id === 'footer-5' ? (
              <a
                key={el.id}
                href={el.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <li className='flex gap-1 text-grey-300'>
                  {t(el.title)}
                  <Image
                    src={el.icon}
                    alt='external-link-icon'
                    width={16}
                    height={16}
                  />
                </li>
              </a>
            ) : (
              <Link
                key={el.id}
                href={el.url}
                target={
                  el.id === 'footer-6' || el.id === 'footer-7' ? '_blank' : ''
                }
              >
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
            );
          })}
        </ul>
        <Image src='/Logo.svg' alt='Logo' width={106} height={48} />
      </div>
    </footer>
  );
}
