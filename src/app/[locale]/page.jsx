import Image from 'next/image';
import FAQ from '@/src/app/components/cards/FAQ';
import CustomSubscription from '@/src/app/components/cards/CustomSubscription';
import Subscription from '@/src/app/components/cards/Subscription';

export default function Home() {
  return (
    <div className='flex h-fit w-full flex-col items-center'>
      <div
        id='home'
        className='h-fit w-full bg-gradient-to-b from-[#08396F] to-[#0E1727]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 lg:flex-row-reverse'>
          <div className='relative mt-[35px] h-[306px] w-[297px] flex-shrink-0 px-6 lg:h-[610px] lg:w-[598px] lg:flex-1 lg:py-[69px]'>
            <Image
              src='/home/homepage_image.png'
              alt='homepage-image'
              fill={true}
            />
          </div>
          <div className='flex flex-col items-center gap-5 lg:flex-1 lg:items-start lg:pr-12'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              跳躍到世界
              <br className='hidden sm:block md:hidden' />
              每個角落
              <br />從 Jumping Spider 開始
            </h1>
            <p className='text-center text-grey-200 lg:text-left'>
              透過 Jumping Spider 全球的 VPN 服務保護您的隱私。
              <br />
              快速的連接速度和遍及多個國家的伺服器，您可以隨時隨地存取任何內容。
            </p>
            <button className='mb-11 mt-5 h-14 w-[158px] rounded-md bg-primary-blue-500'>
              立即訂閱
            </button>
          </div>
        </div>
      </div>
      <div id='main-2' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center gap-8 px-4 py-14'>
          <div className='flex w-full flex-col items-center justify-center gap-4'>
            <h1 className='text-[46px] font-bold'>簡單直覺</h1>
            <p className='text-center text-grey-300'>
              只需輕鬆支付月費，即可擁有高品質的URL連線VPN服務。
              <br />
              企業用戶更享有定制服務，使用URL或憑證自由進行VPN連線，打造獨一無二的網路環境。
            </p>
          </div>
          <div className='flex h-fit w-full flex-col items-center gap-3 lg:flex-row-reverse'>
            <Subscription />
            <CustomSubscription />
          </div>
        </div>
      </div>
      <div
        id='main-3'
        className='h-fit w-full bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center gap-[30px] px-4 lg:flex-row-reverse lg:py-[30px]'>
          <div className='relative h-[343px] w-[343px] lg:h-[500px] lg:w-[500px] lg:flex-1'>
            <Image src='/home/vpn03_image.png' alt='vpn-image3' fill={true} />
          </div>
          <div className='mb-[60px] flex flex-col gap-4 lg:flex-1'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              一鍵建立
              <br className='md:hidden' />
              安全通道
            </h1>
            <p className='text-center text-grey-300 lg:text-left'>
              安裝OpenVPN，輸入Jumping
              Spider提供的URL或憑證，即可在本地端打通安全連線通道，輕鬆連接至裝置，探索虛擬網路中的無盡奇蹟。
            </p>
          </div>
        </div>
      </div>
      <div id='main-4' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[60px] lg:flex-row lg:gap-[108px] lg:py-[93px]'>
          <div className='relative h-[272px] w-[343px] lg:h-[354px] lg:w-[500px] lg:flex-1'>
            <Image src='/home/vpn04_image.png' alt='vpn-image4' fill={true} />
          </div>
          <div className='flex flex-col gap-4 lg:flex-1 lg:pl-14'>
            <h1 className='text-center text-[46px] font-bold lg:text-left'>
              超凡連線品質
            </h1>
            <p className='text-center text-grey-300 lg:text-left'>
              購買Jumping Spider的URL，
              <br className='md:hidden' />
              即刻建立穩定連線。
              <br />
              憑證則讓你指揮VPN連線至指定的裝置，
              <br className='md:hidden' />
              擁有更多自主權。
            </p>
          </div>
        </div>
      </div>
      <div
        id='price'
        className='h-fit w-full bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[86px]'>
          <div className='relative mb-6 h-[108px] w-[108px]'>
            <Image
              src='/home/vpn05_logo.svg'
              alt='vpn-image5-logo'
              fill={true}
            />
          </div>
          <h1 className='mb-6 text-center text-[46px] font-bold'>
            開啟你的Jumping Spider 之旅
          </h1>
          <h5 className='mb-2 text-center text-2xl font-bold text-grey-300'>
            享受高效、安全的VPN連線
          </h5>
          <p className='mb-10 text-center text-grey-300'>
            立即訂閱Jumping Spider
            VPN，打造你的專屬安全通道，體驗全新的網路自由。
          </p>
          <button className='h-14 w-[158px] rounded-md bg-primary-blue-500 text-lg font-bold hover:bg-grey-100 hover:text-grey-800'>
            立即訂閱
          </button>
        </div>
      </div>
      <div id='faq' className='h-fit w-full bg-grey-900'>
        <div className='mx-auto flex h-full w-full min-w-[350px] max-w-[1216px] flex-col items-center justify-center px-4 py-[68px]'>
          <h1 className='mb-10 text-[46px] font-bold'>常見問題</h1>
          <div className='flex w-full flex-col items-center gap-5 lg:mb-[84px]'>
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}
