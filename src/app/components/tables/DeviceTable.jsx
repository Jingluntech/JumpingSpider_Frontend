'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import DeleteDevice from '@/src/app/components/modals/DeleteDevice';
import ModalBackground from '@/src/app/components/modals/ModalBackground';

export default function DeviceTable() {
  const t = useTranslations('devicePage');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full lg:hidden'>
        <tbody className='border-b border-grey-600'>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>#</th>
            <td className='w-1/2 p-3'>1</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('name')}
            </th>
            <td className='w-1/2 p-3'>11CB00413</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('operate')}
            </th>
            <td
              className='w-1/2 cursor-pointer p-3 text-primary-yellow-500 hover:text-grey-100'
              onClick={() => handleDeleteClick()}
            >
              {t('delete')}
            </td>
          </tr>
        </tbody>
        <tbody className='border-b border-grey-600'>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>#</th>
            <td className='w-1/2 p-3'>1</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('name')}
            </th>
            <td className='w-1/2 p-3'>11CB00413</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <td className='w-1/2 p-3'>2023-06-01 21:00</td>
          </tr>
          <tr className='min-h-11 h-11 text-left'>
            <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
              {t('operate')}
            </th>
            <td
              className='w-1/2 cursor-pointer p-3 text-primary-yellow-500 hover:text-grey-100'
              onClick={() => handleDeleteClick()}
            >
              {t('delete')}
            </td>
          </tr>
        </tbody>
      </table>
      <table className='hidden w-full lg:table'>
        <thead className='bg-grey-800'>
          <tr className='h-11 border-b border-grey-700'>
            <th className='w-1/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              #
            </th>
            <th className='w-4/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('name')}
            </th>
            <th className='w-5/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('time')}
            </th>
            <th className='w-2/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('operate')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/12 px-6 py-3 text-left text-sm'>1</td>
            <td className='w-4/12 px-6 py-3 text-left text-sm'>11CB00413</td>
            <td className='w-5/12 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td
              className='w-2/12 cursor-pointer px-6 py-3 text-left text-sm text-primary-yellow-500 hover:text-grey-100'
              onClick={() => handleDeleteClick()}
            >
              {t('delete')}
            </td>
          </tr>
          <tr className='h-20 border-b border-grey-500'>
            <td className='w-1/12 px-6 py-3 text-left text-sm'>1</td>
            <td className='w-4/12 px-6 py-3 text-left text-sm'>11CB00413</td>
            <td className='w-5/12 px-6 py-3 text-left text-sm'>
              2023-06-01 21:00
            </td>
            <td
              className='w-2/12 cursor-pointer px-6 py-3 text-left text-sm text-primary-yellow-500 hover:text-grey-100'
              onClick={() => handleDeleteClick()}
            >
              {t('delete')}
            </td>
          </tr>
        </tbody>
      </table>
      {openDeleteModal && (
        <>
          <DeleteDevice onClick={() => handleDeleteClick(!openDeleteModal)} />
          <ModalBackground />
        </>
      )}
    </div>
  );
}
