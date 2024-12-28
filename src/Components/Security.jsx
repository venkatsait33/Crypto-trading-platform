import lock from '../assets/security/lock.png'
import lock1 from '../assets/security/security1.png'
import lock2 from '../assets/security/security2.png'
import lock3 from '../assets/security/security3.png'

const securityData = [{
    title: 'Api keys',
    icon: lock1,
    text:"Secure key storage. No option to withdraw your funds from the exchange"
}, {
    title: "Encryption",
    icon: lock2,
    text:"User data is encrypted and stored on an isolated servers"
    }, {
    title: "2FA",
    icon: lock3,
    text:"New device or IP security checks along with 2-factor authentication keep your account safe from unsanctioned access"
}]
const Security = () => {
  return (
      <div className='min-h-screen bg-black'>
          <div>
              <div>
                    <div className='p-4 '>
                    <div className="flex justify-between w-full px-4 py-2 text-white bg-black border-t-2 rounded-t-3xl ">
                        {/* Left Text */}
                          <div className="font-[NekstFont]    max-sm:text-xl  text-[70px] flex flex-col ml-8 leading-none "><span>High -</span> <span className="">Security</span>
                              <span className="">platform</span></div>

                          <span className="mt-4 text-sm text-gray-400">Your account carefully protected</span>

                        {/* Right Text */}
                        
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-4 max-sm:flex-col max-md:flex-col'>
                      <div className='w-[40%] max-sm:w-full max-md:w-full'>
                          <img src={lock} alt="" className='object-cover mx-auto' />
                      </div>
                      <div>
                          <div className='grid grid-cols-2 gap-6 p-4 max-md:grid-cols-1 max-sm:grid-cols-1'>
                              {securityData.map((item, index) => (
                                  <div key={index} className="flex items-center flex-col justify-between p-4 w-[300px] h-[300px]  border-2 rounded-3xl">
                                      <div className='flex flex-col items-center gap-4 justify-evenly '> <h1 className='text-2xl font-bold text-white'>{item.title}</h1>
                                          <img src={item.icon} alt="" /></div>
                                      <p className='text-gray-400 '>{ item.text}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Security