'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import DeleteDevice from '@/src/app/components/modals/DeleteDevice';
import ModalBackground from '@/src/app/components/modals/ModalBackground';
import Image from 'next/image';
import EditDevice from '@/src/app/components/modals/EditDevice';

export default function DeviceTable({ data }) {
  const t = useTranslations('devicePage');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  const handleDeleteClick = (id) => {
    setOpenDeleteModal(!openDeleteModal);
    setSelectedDeviceId(id);
  };

  const handleEditClick = (id) => {
    setOpenEditModal(!openEditModal);
    setSelectedDeviceId(id);
  };

  return (
    <div className='h-fit w-full overflow-hidden rounded-lg'>
      <table className='w-full lg:hidden'>
        {data?.length > 0 ? (
          data.map((el) => (
            <tbody className='border-b border-grey-600' key={el.deviceId}>
              <tr className='min-h-11 h-11 text-left'>
                <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                  {t('name')}
                </th>
                <td className='w-1/2 p-3'>{el.deviceId}</td>
              </tr>
              <tr className='min-h-11 h-11 text-left'>
                <th className='w-1/2 p-3 text-sm font-medium text-grey-300'>
                  {t('definedName')}
                </th>
                <td className='w-1/2 p-3'>
                  <div className='flex items-center gap-2 text-grey-100'>
                    {!el.nickName ? '-' : el.nickName}
                    <span
                      className='edit cursor-pointer'
                      onClick={() => handleEditClick()}
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11 4.00001H4C3.46957 4.00001 2.96086 4.21073 2.58579 4.5858C2.21071 4.96087 2 5.46958 2 6.00001V20C2 20.5304 2.21071 21.0392 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0392 20 20.5304 20 20V13M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z'
                          stroke='#656E80'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </td>
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
          ))
        ) : (
          <tbody>
            <tr>
              <td>
                <p className='flex flex-col items-center justify-center gap-6 text-[28px] font-medium text-grey-100'>
                  <Image
                    src='/empty-box.svg'
                    alt='empty-data'
                    width={168}
                    height={215}
                  />
                  目前尚無資料
                </p>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <table className='hidden w-full lg:table'>
        <thead className='bg-grey-800'>
          <tr className='h-11 border-b border-grey-700'>
            <th className='w-5/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('name')}
            </th>
            <th className='w-5/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('definedName')}
            </th>
            <th className='w-2/12 px-6 py-3 text-left text-sm font-medium text-grey-300'>
              {t('operate')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((el) => (
              <tr className='h-20 border-b border-grey-500' key={el.deviceId}>
                <td className='w-5/12 px-6 py-3 text-left text-sm'>
                  {el.deviceId}
                </td>
                <td className='w-5/12 px-6 py-3 text-left text-sm'>
                  <div className='flex items-center gap-2'>
                    {!el.nickName ? '-' : el.nickName}
                    <span
                      className='edit cursor-pointer'
                      onClick={() => handleEditClick(el.deviceId)}
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11 4.00001H4C3.46957 4.00001 2.96086 4.21073 2.58579 4.5858C2.21071 4.96087 2 5.46958 2 6.00001V20C2 20.5304 2.21071 21.0392 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0392 20 20.5304 20 20V13M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z'
                          stroke='#656E80'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td
                  className='w-2/12 cursor-pointer px-6 py-3 text-left text-sm text-primary-yellow-500 hover:text-grey-100'
                  onClick={() => handleDeleteClick(el.deviceId)}
                >
                  {t('delete')}
                </td>
              </tr>
            ))
          ) : (
            <tr className='h-[300px]'>
              <td colSpan={3}>
                <p className='flex flex-col items-center justify-center text-[28px] font-medium'>
                  <Image
                    src='/empty-box.svg'
                    alt='empty-data'
                    width={168}
                    height={215}
                  />
                  目前尚無資料
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {openDeleteModal && (
        <>
          <DeleteDevice
            onClick={() => handleDeleteClick()}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            selectedDeviceId={selectedDeviceId}
          />
          <ModalBackground />
        </>
      )}
      {openEditModal && (
        <>
          <EditDevice
            onClick={() => handleEditClick()}
            selectedDeviceId={selectedDeviceId}
          />
          <ModalBackground />
        </>
      )}
      {isAlertOpen && (
        <div className='fixed inset-x-0 top-0 z-50 flex h-10 items-center justify-center gap-3 bg-secondary-green-100 font-medium text-secondary-green-text'>
          <Image
            src='/alert/alerts_icon_success.svg'
            alt='success-icon'
            width={24}
            height={24}
          />
          {t('deleted')}
        </div>
      )}
    </div>
  );
}
