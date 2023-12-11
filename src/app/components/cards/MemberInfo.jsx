import Image from 'next/image';
import Link from 'next/link';

export default function MemberInfo({ locale, data }) {
  return (
    <div className='flex h-fit w-full flex-col rounded-md border-2 border-grey-700 bg-grey-800 px-9 py-4'>
      {data.map((el) => (
        <div
          key={el.id}
          className='flex items-start justify-between border-b-2 border-grey-700 py-6 pl-2 last:border-b-0'
        >
          <div className='flex flex-col gap-3'>
            <h5 className='font-medium text-grey-300'>{el.title}</h5>
            <p className='flex items-center gap-2'>
              {el.content}
              {el.sub && (
                <span className='text-sm font-medium text-grey-400'>
                  {el.sub}
                </span>
              )}
            </p>
          </div>
          {el.showButton && (
            <Link href={`/${locale}/member/VPN_Registration`}>
              <button className='flex items-center gap-1 font-medium text-primary-yellow-500'>
                Open VPN登錄資料
                <Image
                  src='/chevron-left.svg'
                  alt='chevronleft-icon'
                  width={24}
                  height={24}
                />
              </button>
            </Link>
          )}
        </div>
      ))}
      {/* <div className='flex flex-col gap-3 border-b-2 border-grey-700 pb-8 pl-2'>
        <h5 className='font-medium text-grey-300'>錢包地址</h5>
        <p>0x7566A9A20FA0C1C68FA308E8E40132474AD3DA8E</p>
      </div>
      <div className='flex items-start justify-between border-b-2 border-grey-700 px-2 py-8'>
        <div className='flex flex-col gap-3'>
          <h5 className='font-medium text-grey-300'>最新VPN訂閱狀態</h5>
          <p>
            訂閱 12 個月{' '}
            <span className='text-sm font-medium text-grey-400'>
              （訂閱到期日：2026-01-01）
            </span>{' '}
          </p>
        </div>
        <button className='flex items-center gap-1 font-medium text-primary-yellow-500'>
          取得URL和憑證
          <Image
            src='/chevron-left.svg'
            alt='chevronleft-icon'
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className='flex flex-col gap-3 border-b-2 border-grey-700 px-2 py-8'>
        <h5 className='font-medium text-grey-300'>IP地址</h5>
        <p>168.1.1.11</p>
      </div>
      <div className='flex flex-col gap-3 pl-2 pt-8'>
        <h5 className='font-medium text-grey-300'>位置</h5>
        <p>Taipei , Taiwan</p>
      </div> */}
    </div>
  );
}
