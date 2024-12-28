import benefitVideo from '../assets/benfits.mp4'
const Benefits = () => {
  return (
      <div className='min-h-screen bg-black'>
          <div className='p-4'>
              <div className="flex items-center justify-between w-full px-8 py-4 text-white bg-black border-t-2 rounded-t-3xl ">
                  {/* Left Text */}
                  <h1 className="text-2xl font-bold">Benefits</h1>

                  {/* Right Text */}
                  <span className="text-sm text-gray-400">Trade efficiently</span>
              </div>
          </div>
          <div className='flex items-center justify-center w-full h-full max-sm:flex-col max-md:flex-col'>
              <div className='w-[55%] ml-4'>
                  <video src={benefitVideo}  loop muted autoPlay className="w-full h-full"></video>
              </div>
              <div className='flex items-start justify-center mr-4 md:flex-col'>
                  <div className=''>
                      <div className=" font-[NekstFont]   text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-500 to-pink-100 text-[80px] flex flex-col">
                          <span>Interface</span>
                          <span>Builder</span>
                      </div>
                     
                  </div>
                  <div >
                      <div className='flex space-x-40 '>
                          <div>
                              <p className='text-[30px]'>Make the UI your own</p>
                          </div>
                          <div className='text-gray-400 text-md'>
                              <p>Bring up what you</p>
                              <p>remove what you don&apos;t.Trade </p>
                              <p>the way you like it.</p>
                          </div>
                      </div>
                  </div>
                 
              </div>
          </div>
    </div>
  )
}

export default Benefits