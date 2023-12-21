import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';
import SubscribeBtn from '@/src/app/components/button/SubscribeBtn';

const handleStatus = (statusCode, t) => {
  switch (statusCode) {
    case 0: {
      return (
        <button className='flex h-fit w-[255px] cursor-not-allowed items-center justify-center gap-1 rounded-md bg-grey-600 px-3 py-[9px] font-medium text-grey-400'>
          {t('connectInfo')}
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 18L15 12L9 6'
              stroke='#949EAE'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      );
      break;
    }
    case 1: {
      return (
        <Link href='/profile/connect_info'>
          <button className='flex h-fit w-[255px] items-center justify-center gap-1 rounded-md bg-primary-yellow-500 px-3 py-[9px] font-medium text-grey-800'>
            {t('connectInfo')}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 18L15 12L9 6'
                stroke='#1B2839'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Link>
      );
      break;
    }
    case 2: {
      return (
        <Link href='/price'>
          <button className='flex h-fit w-[255px] items-center justify-center gap-1 rounded-md bg-primary-blue-500 px-3 py-[9px] font-medium text-grey-100'>
            {t('subscribedBtn')}
          </button>
        </Link>
      );
      break;
    }
  }
};

export default function ProfileInfo({ data }) {
  const t = useTranslations('profilePage');

  return (
    <div className='flex h-fit w-full flex-col rounded-md border-2 border-grey-700 bg-grey-800 px-9 py-10'>
      {data.map((el) => (
        <div
          key={el.id}
          className='flex flex-col border-b-2 border-grey-700 px-2 py-6 first:pt-0 last:border-b-0 last:pb-0'
        >
          <div className='relative flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <h5 className='font-medium text-grey-300'>{t(el.title)}</h5>
              {!el.content ? (
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                  <div
                    className={`flex flex-col gap-2 ${
                      el.id === '1' ? 'break-all' : 'whitespace-pre-line'
                    }`}
                  >
                    <p className='font-medium text-secondary-red-500'>
                      {t('expired')}
                    </p>
                  </div>
                  {el.showButton && handleStatus(2, t)}
                </div>
              ) : (
                <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
                  <div
                    className={`flex flex-col justify-center gap-3 ${
                      el.id === '1' ? 'break-all' : 'whitespace-pre-line'
                    }`}
                  >
                    <p>{el.content}</p>
                    {el.sub && (
                      <p className='text-sm font-medium text-grey-400'>
                        {el.sub}
                      </p>
                    )}
                  </div>
                  {el.showButton && handleStatus(1, t)}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
