import CustomSubscription from '@/src/app/components/cards/CustomSubscription';
import Subscription from '@/src/app/components/cards/Subscription';

export default function MemberPlanPage() {
  return (
    <div className='mx-auto mb-[27px] flex h-fit w-full min-w-[350px] max-w-[1216px] flex-col gap-6 px-4 py-[56px]'>
      <h1 className='mb-4 text-[46px] font-bold'>訂閱方案</h1>
      <div className='flex flex-col gap-3 lg:flex-row-reverse'>
        <Subscription />
        <CustomSubscription />
      </div>
    </div>
  );
}
