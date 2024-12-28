import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'
import { MdArrowRightAlt } from 'react-icons/md'


const Navbar = () => {
    return (
        <header className=''>
            <nav className=" flex gap-2 transition-shadow duration-100 rounded-b h-[100px] bg-black navbar max-sm:h-14 sm:w-full w-[390px] md:w-full max-md:w-full   
       ">
                <div className='navbar-start'>
                    <Link to='/'>

                        <img src={logo} alt="logo" className='w-[245px] h-[53px]' />
                    </Link>
                </div>
                <div className='flex gap-4 navbar-center'>
                 
                    <a href='#features' className='hover:text-[#8453d1] text-white font-[NekstFont] text-[20px]'>features</a>
                    <p className='hover:text-[#8453d1] text-white font-[NekstFont] text-[20px]'>prices</p>
                    <a href='#partners' className='hover:text-[#8453d1] text-white font-[NekstFont] text-[20px]'>partners</a>
                    <p className='hover:text-[#8453d1] text-white font-[NekstFont] text-[20px]'>knowledge base</p>
                </div>
                <div className=' navbar-end'>
                    <Link to='/signin' className=''><button className='btn bg-[#5F29B7] mt-4 w-[200px] h-[30px] font-[NekstFont] place-items-center  text-white text-[20px] hover:bg-[#884fe4]'>Sign in
                        <span>
                            <MdArrowRightAlt />
                        </span>

                    </button></Link></div>
            </nav>
        </header>
    )
}

export default Navbar