import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

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
            <div className='flex flex-col gap-1 lg:flex-row lg:justify-between'>
              <h5 className='font-medium text-grey-300'>{t(el.title)}</h5>
              {el.showButton &&
                (!el.content ? (
                  <div>
                    <button className='flex cursor-not-allowed items-center gap-1 font-medium text-grey-400'>
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
                  </div>
                ) : (
                  <Link href='/profile/vpn_registration'>
                    <button className='flex items-center gap-1 font-medium text-primary-yellow-500'>
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
                          stroke='#DDA923'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </Link>
                ))}
            </div>
            <div
              className={`flex flex-col gap-2 ${
                el.id === '1' ? 'break-all' : 'whitespace-pre-line'
              }`}
            >
              {!el.content ? (
                <p className='font-medium text-secondary-red-500'>
                  {t('expired')}
                </p>
              ) : (
                <>
                  <p>{el.content}</p>
                  <p className='text-sm font-medium text-grey-400'>{el.sub}</p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
