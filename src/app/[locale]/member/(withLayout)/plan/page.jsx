import CustomSubscription from '@/src/app/components/cards/CustomSubscription';
import Subscription from '@/src/app/components/cards/Subscription';

export default function MemberPlanPage() {
  return (
    <div className='min-h-member-screen-minus mx-auto h-fit w-full min-w-[350px] max-w-[1216px] py-[56px]'>
      <h1 className='mb-10 text-[46px] font-bold'>訂閱方案</h1>
      <div className='flex gap-3'>
        <CustomSubscription />
        <Subscription />
      </div>
    </div>
  );
}
