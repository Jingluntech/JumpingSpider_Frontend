import FAQ from '../components/cards/FAQ';

export default function Home() {
  return (
    <div className='flex h-fit w-full flex-col items-center'>
      <div
        id='home'
        className='flex h-[748px] w-full items-center bg-gradient-to-b from-[#08396F] to-[#0E1727]'
      >
        <div className='flex flex-1 flex-col gap-5 pl-[112px]'>
          <h1 className='text-[46px] font-bold'>
            跳躍到世界每個角落
            <br />從 Jumping Spider 開始
          </h1>
          <p className='text-grey-200'>
            透過 Jumping Spider 全球的 VPN 服務保護您的隱私。
            <br />
            快速的連接速度和遍及多個國家的伺服器，您可以隨時隨地存取任何內容。
          </p>
          <button className='mt-5 h-14 w-[158px] rounded-md bg-primary-blue-500'>
            立即訂閱
          </button>
        </div>
        <div className='flex h-full w-full flex-1 items-center justify-center'>
          Image
        </div>
      </div>
      <div
        id='main-2'
        className='h-[852px] w-full bg-grey-900 px-[112px] py-[86px]'
      >
        <div className='mx-auto flex w-[600px] flex-col items-center justify-center gap-4 pb-[26px]'>
          <h1 className='text-[46px] font-bold'>簡單直覺</h1>
          <p className='text-center text-grey-300'>
            只需輕鬆支付月費，即可擁有高品質的URL連線VPN服務。企業用戶更享有定制服務，使用URL或憑證自由進行VPN連線，打造獨一無二的網路環境。
          </p>
        </div>
        <div className='mt-6 flex gap-3'>
          <div className='h-[504px] flex-1 border'>card</div>
          <div className='h-[504px] flex-1 border'>card</div>
        </div>
      </div>
      <div
        id='main-3'
        className='flex h-[560px] w-full items-center bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='flex flex-1 flex-col gap-5 pl-[112px]'>
          <h1 className='text-[46px] font-bold'>一鍵建立安全通道</h1>
          <p className='text-grey-300'>
            安裝OpenVPN，輸入Jumping
            Spider提供的URL或憑證，即可在本地端打通安全連線通道，輕鬆連接至裝置，探索虛擬網路中的無盡奇蹟。
          </p>
        </div>
        <div className='flex h-full w-full flex-1 items-center justify-center'>
          Image
        </div>
      </div>
      <div
        id='main-4'
        className='flex h-[560px] w-full items-center bg-grey-900'
      >
        <div className='flex h-full w-full flex-1 items-center justify-center'>
          Image
        </div>
        <div className='flex flex-1 flex-col gap-5 pl-[112px]'>
          <h1 className='text-[46px] font-bold'>超凡連線品質</h1>
          <p className='text-grey-300'>
            購買Jumping Spider的URL，即刻建立穩定連線。
            <br />
            憑證則讓你指揮VPN連線至指定的裝置，擁有更多自主權。
          </p>
        </div>
      </div>
      <div
        id='price'
        className='flex h-[560px] w-full flex-col items-center justify-center bg-gradient-to-b from-[#0E1727] to-[#08396F]'
      >
        <div className='h-[108px] w-[108px] border'>icon</div>
        <h1 className='my-6 text-[46px] font-bold'>
          開啟你的Jumping Spider 之旅
        </h1>
        <h5 className='mb-2 text-2xl font-bold text-grey-300'>
          享受高效、安全的VPN連線
        </h5>
        <p className='text-grey-300'>
          立即訂閱Jumping Spider VPN，打造你的專屬安全通道，體驗全新的網路自由。
        </p>
        <button className='mt-5 h-14 w-[158px] rounded-md bg-primary-blue-500'>
          立即訂閱
        </button>
      </div>
      <div
        id='faq'
        className='flex h-fit min-h-[722px] w-full flex-col items-center justify-center bg-grey-900 px-[112px] py-[110px]'
      >
        <h1 className='mb-10 text-[46px] font-bold'>常見問題</h1>
        <div className='flex w-[750px] flex-col gap-5'>
          <FAQ />
          <FAQ />
          <FAQ />
          <FAQ />
        </div>
      </div>
    </div>
  );
}
