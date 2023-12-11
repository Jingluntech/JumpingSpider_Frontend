import RecordTable from '@/src/app/components/tables/RecordTable';

export default function MemberManagementPage() {
  return (
    <div className='min-h-member-screen-minus mx-auto h-fit w-full min-w-[350px] max-w-[1216px] py-[56px]'>
      <h1 className='mb-10 text-[46px] font-bold'>裝置管理</h1>
      <RecordTable />
    </div>
  );
}
