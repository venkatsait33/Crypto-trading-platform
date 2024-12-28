import { Link } from "react-router-dom"
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

const Home = () => {
  return (
      <div className="min-h-screen bg-black max-sm:mt-0">
          <div className=" flex items-center  bg-[url('/src/assets/bg-2.png')] bg-no-repeat bg-cover bg-center  max-md:mt-10 ">
              <div className='mb-10 ml-16'>
                  <div className='max-md:h-full max-sm:text-md max-sm:mx-auto max-sm:mt-5'>
                      <div className='mt-[200px]  max-md:mt-2 max-sm:mt-10'>
                          <h1 className='font-[NekstFont]   text-[#FFFFFF] text-[62px] max-sm:text-xl'>Crypto Trading</h1>
                          <h2 className=' font-[NekstFont]  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-300 to-pink-900 text-[62px]'>With bots <span className='text-white'>and</span></h2>
                          <h2 className=' font-[NekstFont] max-sm:text-xl text-transparent bg-clip-text bg-gradient-to-r bg-white from-purple-300 to-pink-900 text-[62px]' >smart seals</h2>
                          <Link to='/signup'>
                              <button className='btn bg-[#5F29B7] mt-4 w-[200px] font-[NekstFont]  place-items-center  text-white text-[20px] hover:bg-[#884fe4]'>Sign Up
                                  <span>
                                      <img src={arrow} alt="" className="w-10 h-8" />
                                  </span>

                              </button>
                          </Link>
                        
                          <div className="mt-10">
                              <p className="font-[NekstFont]   text-[#FFFFFF] text-[22px] max-sm:text-md">
                                  Trade for free on your
                              </p>
                              <p className="font-[NekstFont]   text-[#FFFFFF] text-[22px] max-sm:text-md">favorite exchanges</p>
                          </div>
                          <div className="flex items-center justify-center w-full mx-auto mt-5 space-x-10 max-md:grid-cols-2 max-md:grid max-md:gap-2 max-md:space-x-0 max-sm:grid-cols-1 ">
                              {
                                  cards.map((item, index) => {
                                      return (
                                          <div
                                              key={index} className=" btn bg-[#0E0915] w-[200px] h-[100px]">
                                              <img src={item.ICON} alt="" className="" />
                                          </div>
                                      )
                                  })
                              }
                              <div className="btn w-[200px] indicator bg-[#0E0915] h-[100px]">
                                  <img src={bybit} alt="" />
                                  <span className="badge text-white h-6 text-center  indicator-item  bg-[#5F29B7]">soon</span>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>
          </div>
      </div>
  )
}

export default Home