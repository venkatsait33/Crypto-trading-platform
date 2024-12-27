import mutlicart from '../assets/multichart.mp4'
const MultiChart = () => {
  return (
      <div className='bg-black'>
          <div className='flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='w-[55%] max-sm:w-full md:ml-10'>
                  <div>
                      <div className="flex items-center justify-center w-full px-4 py-2 text-white bg-black border-t-2 rounded-t-[40px] ">
                          {/* Left Text */}
                          <h1 className="text-[50px] font-[FontSpring]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-300 to-pink-100">MultiChart</h1>

                          {/* Right Text */}
                          
                      </div>
                      <div className="flex flex-col mt-20 ">
                          <div className='flex flex-col items-start justify-center'> 
                              <p className=" font-[FontSpring]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-200 to-purple-200 text-[42px] ">Add any trading pairs <span className='text-[##7b708d]'>from</span></p>
                              <p className='text-[##7b708d] text-[20px]'>different exchanges, and analyze </p>
                              <p className='text-[##7b708d] text-[20px]'>them on one screen</p>
                          </div>
                      </div>
                      </div>
              </div>
              <div>
                  <div>
                      <video src={mutlicart} loop muted autoPlay  className="w-full h-full"></video>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MultiChart