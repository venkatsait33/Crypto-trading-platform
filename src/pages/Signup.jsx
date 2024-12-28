import logo from '../assets/logo (2).png'
import { MdArrowRightAlt } from "react-icons/md";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className='flex bg-[url("/src/assets/bgloginjpg.jpg")] bg-no-repeat  flex-col w-screen h-screen '>
            <div className='flex items-center justify-center m-2'>
                <div to='/'>
                    <img src={logo} alt="logo" className='w-[245px] text-center h-[53px]' />
                </div>

            </div>
            <div className='flex flex-col items-center justify-center h-full mx-auto max-md:flex-col'>

                <div className='flex  max-sm:w-[80%] max-sm:mx-auto max-sm:h-full w-[400px] max-sm:flex max-sm:justify-center bg-opacity-60 bg-[#39317e] rounded-xl justify-end mx-auto'>
                    <div className='flex flex-col h-full gap-2 mx-auto'>
                        <div className='flex items-center justify-between'>

                            <h1 className=' font-[NekstFont]  text-[#FFFFFF]
                             max-sm:text-xl text-[32px] uppercase'>Signing up</h1>

                        </div>
                        <div className=' max-sm:w-full max-sm:h-full'>
                            <form action="
                      " className='flex flex-col items-center justify-center w-full gap-2'>
                                <div className='flex flex-col gap-4'>
                                    <div>

                                        <input type="email" className='w-full max-w-xs input ' placeholder='email' />
                                    </div>
                                    <div>

                                        <div className="flex items-center justify-between input input-bordered text-[#8A4BF0]">
                                            <input

                                                placeholder="password"
                                                name="password"

                                                required
                                            />

                                        </div>

                                    </div>
                                    <div>

                                        <div className="flex items-center justify-between input input-bordered text-[#8A4BF0]">
                                            <input

                                                placeholder="password confirmation"
                                                name="password"

                                                required
                                            />

                                        </div>

                                    </div>

                                </div>




                                <button className='btn bg-[#5F29B7] mt-4 w-[200px] h-[30px] font-[FontSpring] place-items-center  text-white text-[20px] hover:bg-[#884fe4]'>Sign up
                                    <span>
                                        <MdArrowRightAlt />
                                    </span>

                                </button>
                            </form>
                        </div>
                        <div className='flex items-start justify-start gap-2 '>

                        </div>
                        <Link to='/signin' className=''>

                            <p className='text-[#8A4BF0] hover:text-white'>Already have an account </p>
                        </Link>
                    </div>
                </div>
                    <h1 className='mt-2 text-sm'>By signing up, you agree to User Agreement and Privacy Policy</h1>


            </div>
        </div>
    )
}

export default Signup