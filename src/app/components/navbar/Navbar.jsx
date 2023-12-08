import Image from 'next/image';
import ConnectWallet from '../modals/ConnectWallet';
import ModalBackground from '../modals/ModalBackground';
import Link from 'next/link';

export default function Navbar({ navLinks }) {
  return (
    <nav className='absolute bottom-0 left-0 top-0 z-20 flex w-3/5 min-w-[220px] flex-col items-center bg-grey-900'>
      <ul className='mt-14 flex w-full flex-col gap-4 px-4'>
        {navLinks.map((el) => (
          <Link key={el.id} href={el.url}>
            <li key={el.id} className='h-fit p-2'>
              {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
