import icon1 from '../assets/icon/icon01.svg'
import icon2 from '../assets/icon/icon02.svg'
import icon3 from '../assets/icon/icon03.svg'
import icon4 from '../assets/icon/icon04.svg'
import icon5 from '../assets/icon/icon05.svg'
import icon6 from '../assets/icon/icon06.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const cards = [{
    icon: icon1,
    title: 'Speed',
    text: 'Your assets on all connected exchanges are collected in one place'
}, {
    icon: icon2,
    title: 'Hotkeys',
    text: 'Make your trading efficient with hotkeys'
},
{
    icon: icon3,
    title: 'Notifications',
    text: 'Get all the important updates to your Email or Telegram'
}, {
    icon: icon4,
    title: 'Demo Account',
    text: 'Practice. Learn. Put features and strategies to the test. Risk and charge free '
}, {
    icon: icon5,
    title: 'cloud service',
    text: "Silent updates causing no interference with trading. Access from any device"
}, {
    icon: icon6,
    title: 'Dark theme',
    text: 'Trade anytime. Even at night'
}]
const Everything_work = () => {
    return (
        <div className='bg-black '>
            <div className='p-4'>
                <div className="flex  w-full px-4 py-2 text-white  border-t-2 rounded-t-[40px] ">
                    {/* Left Text */}
                    <div className="text-[70px] font-[NekstFont]  flex flex-col  text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white ml-4 from-purple-300 to-pink-100 leading-none">
                        <span> Everything for your need</span>
                        <span>
                            for comfortable work
                        </span>
                    </div>
                </div>
                <div>

                    <div className='relative w-full overflow-hidden'>
                        <div>
                            <button className="absolute z-30 px-4 py-2 text-white transform -translate-y-2 rounded-full swiper-button-prev top-1/2 left-4">
                            </button>
                            <button className="absolute z-30 px-4 py-2 text-white transform -translate-y-2 rounded-full swiper-button-next top-1/2 right-4">
                            </button></div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={{ el: ".swiper-pagination", clickable: true }}
                            spaceBetween={40}
                            breakpoints={{
                                // Default: 1 slide
                                0: {
                                    slidesPerView: 1,
                                },
                                // Small screens: 2 slides
                                640: {
                                    slidesPerView: 2,
                                },
                                // Medium screens: 3 slides
                                768: {
                                    slidesPerView: 3,
                                },
                                // Large screens: 4 slides
                                1024: {
                                    slidesPerView: 4
                                }
                            }}
                            className="relative z-20 h-full cursor-pointer"
                        >
                            {cards.map((item, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center ">
                                    <div className='flex flex-col items-center justify-between border-2 border-white rounded-[20px]
                                    h-[400px] w-[300px]  p-4 m-4'>
                                        <div className='flex flex-col items-center justify-between w-full space-y-8'>
                                            <h1 className='text-xl font-bold text-white'>{item.title}</h1>
                                            <img src={item.icon} alt="" className='' />
                                        </div>
                                        <p className='text-base'>{item.text}</p>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}


                        {/* Pagination Bar */}
                        <div className="absolute z-30 transform -translate-x-1/2 swiper-pagination bottom-4 left-1/2"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Everything_work