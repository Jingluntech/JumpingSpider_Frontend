import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

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
          <button className='flex h-fit w-[255px] items-center justify-center gap-1 rounded-md bg-primary-yellow-500 px-3 py-[9px] font-medium text-grey-800 hover:bg-grey-100 hover:text-grey-800'>
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
          <button className='flex h-fit w-[255px] items-center justify-center gap-1 rounded-md bg-primary-blue-500 px-3 py-[9px] font-medium text-grey-100 hover:bg-grey-100 hover:text-grey-800'>
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

  const showSubscriptionDetail = () => {
    if (!data.expireDate) {
      return (
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col gap-2 whitespace-pre-line'>
            <p className='font-medium text-secondary-red-500'>{t('expired')}</p>
          </div>
          {handleStatus(2, t)}
        </div>
      );
    }

    const now = new Date();
    const expired = new Date(data.expireDate);
    const nowTimestamp = now.getTime();
    const expiredTimestamp = expired.getTime();

    if (expiredTimestamp < nowTimestamp) {
      return (
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col gap-2 whitespace-pre-line'>
            <p className='font-medium text-secondary-red-500'>{t('expired')}</p>
          </div>
          {handleStatus(2, t)}
        </div>
      );
    } else {
      if (data.lastPrepaidPlan === 0) {
        return (
          <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
            <div className='flex flex-col gap-2 whitespace-pre-line'>
              <p>{t('monthly', { num: data.lastPrepaidMonth })}</p>
              <p className='text-sm font-medium text-grey-400'>
                {t('expiredDate')}：{data.expireDate}
              </p>
            </div>
            {handleStatus(1, t)}
          </div>
        );
      }

      if (data.lastPrepaidPlan === 1) {
        return (
          <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
            <div className='flex flex-col gap-2 whitespace-pre-line'>
              <p>{t('customized', { num: data.lastPrepaidMonth })}</p>
              <p className='text-sm font-medium text-grey-400'>
                {t('expiredDate')}：{data.expireDate}
              </p>
            </div>
            {handleStatus(1, t)}
          </div>
        );
      }
    }
  };

  const profileData = [
    {
      id: '1',
      title: 'address',
      content: data.address,
    },
    {
      id: '2',
      title: 'status',
      content: showSubscriptionDetail(),
    },
  ];

  return (
    <div className='flex h-fit w-full flex-col rounded-md border-2 border-grey-700 bg-grey-800 px-9 py-10'>
      {profileData.map((el) => (
        <div
          key={el.id}
          className='flex flex-col border-b-2 border-grey-700 px-2 py-6 first:pt-0 last:border-b-0 last:pb-0'
        >
          <div className='relative flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <h5 className='font-medium text-grey-300'>{t(el.title)}</h5>
              {el.id === '1' && (
                <div className='flex flex-col justify-center gap-3 break-all'>
                  <p>{el.content}</p>
                </div>
              )}
              {el.id === '2' && el.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
