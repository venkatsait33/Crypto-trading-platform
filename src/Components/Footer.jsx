import {  FaXTwitter, FaYoutube } from 'react-icons/fa6'
import logo from '../assets/logo (2).png'
import { BsTelegram } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className='bg-[#171022] rounded-[40px] lg:h-[200px] '>
            <div className='flex items-center justify-center gap-4 mx-auto max-sm:flex-col max-md:flex-col max-md:gap-8 max-sm:gap-8 max-sm:px-4 max-md:px-4 '>
                <div className='flex flex-col items-center justify-center flex-1 gap-4 lg:space-y-6 lg:ml-20 max-md:mt-4'>
                    <img src={logo} alt="" />

                    <p className='font-[NekstFont]'>© 2022 Capico </p>
                </div>
                <div className='flex flex-col items-center justify-center flex-1 gap-4'>
                    <div>
                        <p>Follow is on social media</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaXTwitter />
                        <FaYoutube />
                        <BsTelegram />
                        <BsTelegram />
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-xl font-[NekstFont] font-bold'>Documents</h1>
                    <div>
                        <h2 className=' text-md font-[NekstFont]'>User agreement</h2>
                        <h2 className=' text-md font-[NekstFont]'>Privacy policy</h2>
                        <h2 className='text-md font-[NekstFont] '>
                            Referral agreement
                        </h2>
                        <h2 className='text-md font-[NekstFont] '>Refund policy</h2>
                    </div>
                </div>
                <div className='flex-1 space-y-2'>
                    <h1 className='text-xl font-bold font-[NekstFont]'>Platform</h1>
                    <div>
                        <a href='#features'  className='text-md font-[NekstFont]'>Features</a>
                        <h2  className='text-md font-[NekstFont]'>Prices</h2>
                        <a href="#partners"  className='text-md font-[NekstFont]'>Partners</a>
                        <h2  className='text-md font-[NekstFont]'>Knowledge base</h2>
                        <h2  className='text-md font-[NekstFont]'>FAQ</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center flex-1 gap-4 space-y-8'>
                    <div className='text-xl font-bold font-[NekstFont] hover:text-[#762ceb]'>
                        Sign in
                    </div>
                    <div className='text-xl font-bold font-[NekstFont] hover:text-[#762ceb]'>
                        Create an account
                    </div>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer