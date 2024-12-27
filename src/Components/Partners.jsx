import arrow from "../assets/arrow.png"
import binance from '../assets/icons/binance.png'
import bybit from '../assets/icons/bybit.png'
import exmo from '../assets/icons/exmo.png'
import ftx from '../assets/icons/ftx.png'
import huboi from '../assets/icons/huboi.png'
import ohk from '../assets/icons/ohk.png'

const cards = [{ TITLE: "BINANCE 1", ICON: binance },
{ TITLE: "FTX ", ICON: ftx },
{ TITLE: "Huobi ", ICON: huboi },
{ TITLE: "EXMO ", ICON: exmo },
{ TITLE: "OHK", ICON: ohk },
]
const Partners = () => {
    return (
        <div className="bg-[#5F29B7] h-80 rounded-[40px]">
            <div>
                <div>
                    <div className='p-4 '>
                        <div className="flex justify-between w-full p-6 text-white border-t-2 rounded-t-3xl ">
                            {/* Left Text */}
                            <div className="font-[FontSpring]   max-sm:text-xl  text-[70px] flex flex-col ml-8 leading-none ">Partners</div>

                            <div className="font-[FontSpring]   max-sm:text-xl  text-[32px] flex flex-col ml-8 leading-8 ">
                                <span className="text-white">The capico platform is an official</span>
                                <div><span className="text-white">Broker </span><span className="text-[#c2abef]">for leading cryptocurrency</span></div>
                                <span className="text-[#c2abef]">exchanges</span>
                            </div>

                            {/* Right Text */}

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-full mx-auto mt-5 space-x-10 max-md:grid-cols-2 max-md:grid max-md:gap-2 max-md:space-x-0">
                            {
                                cards.map((item, index) => {
                                    return (
                                        <div
                                            key={index} className=" btn btn-ghost  border border-white  w-[200px] h-[100px]">
                                            <img src={item.ICON} alt="" className="" />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Partners