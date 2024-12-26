import logo from '../assets/logo (2).png'
import { MdArrowRightAlt } from "react-icons/md";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Signin = () => {
    return (
        <div className='flex flex-col  w-screen h-full bg-[#000000]'>
            <div className='m-2'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='w-[245px] h-[53px]' />
                </Link>
               
            </div>
            <div className='  bg-[url("/src/assets/bg-2.png")] bg-no-repeat flex max-md:flex-col max-lg:flex justify-center items-center '>
                <div className='lg:w-[49%] h-screen max-md:h-full max-sm:text-md max-sm:mx-auto max-sm:mt-5'>
                    <div className='mt-[180px] max-md:mt-5'>
                        <h1 className='font-[FontSpring]  text-[#FFFFFF] text-[62px] max-sm:text-xl'>Crypto Trading</h1>
                        <h2 className=' font-[FontSpring-medium]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-300 to-pink-900 text-[62px]'>With bots <span className='text-white'>and</span></h2>
                        <h2 className=' font-[FontSpring-medium] max-sm:text-xl text-transparent bg-clip-text bg-gradient-to-r bg-white from-purple-300 to-pink-900 text-[62px]' >smart seals</h2>
                    </div>
                </div>
                <div className='flex h-[500px] max-sm:w-[80%] max-sm:mx-auto max-sm:h-full max-sm:flex max-sm:justify-center w-[539px] bg-opacity-60 bg-black rounded-xl justify-end'>
                    <div className='flex flex-col h-full'>
                        <div className='flex items-center justify-between'>

                            <h1 className=' font-[FontSpring] font-thin  text-[#FFFFFF]
                             max-sm:text-xl text-[62px]'>Signin</h1>
                            <button className='text-[52px] font-thin text-[#A97CFE] hover:text-white'>x</button>
                        </div>
                        <div className='w-[500px] max-sm:w-full max-sm:h-full h-[216px] '>
                            <form action="
                      " className='flex flex-col items-center justify-center w-full gap-2'>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <label htmlFor="email">Login or email</label>
                                        <input type="email" className='w-full max-w-xs input ' placeholder='email' />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <div className="flex items-center justify-between input input-bordered text-[#8A4BF0]">
                                            <input

                                                placeholder="password"
                                                name="password"

                                                required
                                            />
                                            <span className='text-[#8A4BF0] gap-3 flex items-center justify-center' >
                                                <IoEye />
                                                <IoEyeOffOutline />
                                            </span>
                                        </div>

                                    </div>
                                    <h2 className='mt-2 flex justify-end text-sm text-[#8A4BF0]'>Forget password?</h2>
                                </div>




                                <button className='btn bg-[#5F29B7] mt-4 w-[200px] h-[30px] font-[FontSpring] place-items-center  text-white text-[20px] hover:bg-[#884fe4]'>Sign in
                                    <span>
                                        <MdArrowRightAlt />
                                    </span>

                                </button>
                            </form>
                        </div>
                        <div className='flex items-start justify-start gap-2 mt-20'>
                            <p className='text-md font-[FontSpring-medium]  '>Still not have account?</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 mt-2'>

                            <button className='btn-outline btn lg:w-[300px] max-sm:w-full items-center text-[#8A4BF0]  hover:bg-[#884fe4] hover:text-white'>Create an account </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Signin