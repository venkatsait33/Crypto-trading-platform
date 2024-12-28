import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import img1 from "../assets/benefit-slider01.jpg"
import img2 from "../assets/benefit-slider02.jpg"
import slider from '../assets/benefit-slider-overlay.png'

const Portfolio_statistics = () => {
    const swiperRef = useRef(null);

    const slides = [
        {
            img: img1,
            img2x: img2,
            alt: "Benefit Slide 1",
        },
        {
            img:img2,
            img2x: img1,
            alt: "Benefit Slide 2",
        },
    ];

    const overlay = {
        img: slider,
        img2x: slider,
        alt: "Overlay",
    };
    return (
        <div className='bg-black '>
            <div className='flex p-4 max-sm:flex-col max-md:flex-col'>
                <div className="lg:w-[50%] ">
                    <div className="relative w-full h-screen overflow-hidden">
                        {/* Overlay */}
                        <picture className="absolute inset-0 z-10">
                            <source media="(min-width: 768px)" srcSet={overlay.img2x} />
                            <img
                                className="object-cover w-full h-full"
                                src={overlay.img}
                                alt={overlay.alt}
                            />
                        </picture>

                        {/* Swiper Slider */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={{ el: ".swiper-pagination", clickable: true }}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            spaceBetween={30}
                            slidesPerView={1}
                            className="relative z-20 h-full"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center ">
                                    <picture>
                                        <source media="()" srcSet={slide.img2x} />
                                        <img
                                            className=" rotate-[22deg]   object-contain   mt-36  "
                                            src={slide.img}
                                            alt={slide.alt}
                                        />
                                    </picture>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <button className="absolute z-30 px-4 py-2 text-white transform -translate-y-1/2 rounded-full swiper-button-prev top-1/2 left-4">

                        </button>
                        <button className="absolute z-30 px-4 py-2 text-white transform -translate-y-1/2 rounded-full swiper-button-next top-1/2 right-4">

                        </button>

                        {/* Pagination Bar */}
                        <div className="absolute z-30 transform -translate-x-1/2 swiper-pagination bottom-4 left-1/2"></div>
                    </div>
                </div>
                <div className='w-[50%] bg-black'>
                    <div className="flex flex-col items-center justify-center w-full px-4 py-2 text-white  border-t-2 rounded-t-[40px] ">
                        {/* Left Text */}
                        <h1 className="text-[100px] font-[NekstFont]   text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-300 to-pink-100">Portfolio &</h1>
                        <h1 className="text-[100px] font-[NekstFont]   text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-300 to-pink-100">Statistics </h1>





                    </div>
                    <div className='flex justify-evenly'>
                        <div className=''>
                            <div className=' text-[32px] text-white font-[NekstFont]  flex flex-col '><span>
                                Your assets on all
                            </span>
                                <span>connected exchanges in</span>
                                <span>
                                    one place
                                </span></div>


                        </div>
                        <div>
                            <div className='flex flex-col text-[18px]text-[#b7b1c3] font-[NekstFont] '><span>
                                Easy-to-read trading stats
                            </span>
                                <span>
                                    Downloadable reports
                                </span></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio_statistics