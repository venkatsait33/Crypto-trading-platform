import arrow from '../assets/arrow.png'

const TradeAnyware = () => {
    return (
        <div className='min-h-screen mt-8 bg-black'>
            <div className="bg-[url('/src/assets/tradebg.png')] bg-cover bg-center bg-no-repeat  ">
                <div className='p-4 '>
                    <div className="flex justify-between w-full px-4 py-2 text-white bg-black border-t-2 rounded-t-3xl ">
                        {/* Left Text */}
                        <h1 className="font-[FontSpring]   max-sm:text-xl  text-[70px]">Trade anywhere</h1>

                        {/* Right Text */}
                        <span className="mt-4 text-sm text-gray-400">Full functionality at your fingertips</span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col ml-12 mt-40  text-[32px] text-white font-[FontSpring]'>
                        <span>The platform is fully</span>
                        <span>adapted and</span>
                        <span>optimized to work</span>
                        <span>on your phone and</span>
                        <span>tablet browsers</span>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <button className='flex items-center mt-12 px-8 py-3 text-white bg-[#5f29b7] rounded-3xl text-[32px] gap-6'>Create an account <img src={arrow} alt="" className='transition-all duration-200 rounded-full hover:scale-110' /></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TradeAnyware