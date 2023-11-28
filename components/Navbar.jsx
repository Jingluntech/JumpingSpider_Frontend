import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='flex h-16 items-center justify-between'>
      <div className='flex items-center gap-5 md:flex-row-reverse'>
        <div className='md:hidden'>
          <Image
            src='/hamburger.svg'
            alt='menu'
            width={30}
            height={30}
            priority={true}
          />
        </div>
        <ul className='hidden gap-4 md:flex'>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
        <Image
          src='/Logo.svg'
          alt='logo'
          width={100}
          height={50}
          priority={true}
        />
      </div>
      <button className='h-fit w-fit rounded-md bg-primary-blue-500 px-4 py-2'>
        連結錢包
      </button>
    </nav>
  );
}
