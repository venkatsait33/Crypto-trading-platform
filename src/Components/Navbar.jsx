import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'
import { MdArrowRightAlt } from 'react-icons/md'

const list = [{
    name: 'features'
}, {
    name: 'prices'
}, {
    name: 'partners'
}, {
    name: 'knowledge base'
}, {
    name: 'academy'
}]

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
                <div className='flex gap-4 navbar-center'>{
                    list.map((item, index) => {
                        return <p key={index} className='hover:text-[#5F29B7] text-white font-[FontSpring] text-[20px]'>{item.name}</p>
                    })
                }</div>
                <div className=' navbar-end'>
                    <Link to='/signin' className=''><button className='btn bg-[#5F29B7] mt-4 w-[200px] h-[30px] font-[FontSpring] place-items-center  text-white text-[20px] hover:bg-[#884fe4]'>Sign in
                        <span>
                            <MdArrowRightAlt />
                        </span>

                    </button></Link></div>
            </nav>
        </header>
    )
}

export default Navbar