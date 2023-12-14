import Pagination from '@/src/app/components/pagination/Pagination';
import RecordTable from '@/src/app/components/tables/RecordTable';

export default function MemberManagementPage() {
  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>裝置管理</h1>
      <RecordTable />
      <Pagination />
    </div>
  );
}
