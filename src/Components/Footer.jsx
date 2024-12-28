import {  FaXTwitter, FaYoutube } from 'react-icons/fa6'
import logo from '../assets/logo (2).png'
import { BsTelegram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='bg-[#171022] rounded-[40px] lg:h-[200px] '>
            <div className='flex items-center justify-center gap-4 mx-auto max-sm:flex-col max-md:flex-col max-md:gap-8 max-sm:gap-8 max-sm:px-4 max-md:px-4 '>
                <div className='flex flex-col items-center justify-center flex-1 gap-4 lg:space-y-6 lg:ml-20 max-md:mt-4'>
                    <img src={logo} alt="" />

                    <p className='font-[NekstFont] hover:text-[#762ceb]'>© 2022 Capico </p>
                </div>
                <div className='flex flex-col items-center justify-center flex-1 gap-4'>
                    <div>
                        <p>Follow is on social media</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaXTwitter className='text-3xl text-black bg-white p-1 rounded-full hover:bg-[#762ceb] hover:text-white' />
                        <FaYoutube className='text-3xl text-black bg-white p-1 rounded-full hover:bg-[#762ceb] hover:text-white' />
                        <h1> <BsTelegram className='text-3xl text-black bg-white p-1 rounded-full hover:bg-[#762ceb] hover:text-white' /> chat</h1>
                        <h1 className='flex flex-col items-center'><BsTelegram className='text-3xl text-black bg-white p-1 rounded-full hover:bg-[#762ceb] hover:text-white' /> Telegram</h1>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-xl font-[NekstFont] hover:text-[#762ceb] font-bold'>Documents</h1>
                    <div>
                        <h2 className=' text-md font-[NekstFont] hover:text-[#762ceb]'>User agreement</h2>
                        <h2 className=' text-md font-[NekstFont] hover:text-[#762ceb]'>Privacy policy</h2>
                        <h2 className='text-md font-[NekstFont] hover:text-[#762ceb] '>
                            Referral agreement
                        </h2>
                        <h2 className='text-md font-[NekstFont] hover:text-[#762ceb] '>Refund policy</h2>
                    </div>
                </div>
                <div className='flex-1 space-y-2'>
                    <h1 className='text-xl font-bold font-[NekstFont] hover:text-[#762ceb]'>Platform</h1>
                    <div>
                        <a href='#features'  className='text-md font-[NekstFont] hover:text-[#762ceb]'>Features</a>
                        <h2  className='text-md font-[NekstFont] hover:text-[#762ceb]'>Prices</h2>
                        <a href="#partners"  className='text-md font-[NekstFont] hover:text-[#762ceb]'>Partners</a>
                        <h2  className='text-md font-[NekstFont] hover:text-[#762ceb]'>Knowledge base</h2>
                        <h2  className='text-md font-[NekstFont] hover:text-[#762ceb]'>FAQ</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center flex-1 gap-4 space-y-8'>
                    <Link to='/signin' className='text-xl font-bold font-[NekstFont] hover:text-[#762ceb]'>
                        Sign in
                    </Link>
                    <Link to='/signup' className='text-xl font-bold font-[NekstFont] hover:text-[#762ceb]'>
                        Create an account
                    </Link>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer