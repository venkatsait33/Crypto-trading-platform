import ipad from '../assets/video/video-ipad.png'
import mobile from '../assets/video/video-mobie.png'
function VideoSection() {
    return (
        <div className='h-screen '>

            <div className="relative mt-20 max-sm:h-[80vh] h-[100vh] w-full overflow-hidden   bg-[url('/src/assets/video/video-cover.jpg')] bg-no-repeat bg-cover bg-center rounded-t-2xl   ">
                <div className='flex flex-col items-center justify-center mt-20'>
                    <h2 className=' font-[FontSpring-medium]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]'>Manage positions on</h2>
                    <h2 className=' font-[FontSpring-medium]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]'>different exchanges from one </h2>
                    <h2 className=' font-[FontSpring-medium]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]'>window</h2>
                </div>
                <div className='relative flex items-center justify-center max-sm:mt-20'>
                    <img src={ipad} alt="" className="absolute top-0 transform scale-110 -translate-x-1/2 shadow-xl left-1/2" />
                    <img src={mobile} alt="" className="relative z-10 mx-auto shadow-xl" />
            </div></div>
        </div>
    )
}

export default VideoSection