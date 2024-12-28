import arrow from '../assets/arrow.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const TryCapico = () => {
    const bgImageRef = useRef(null);

    useEffect(() => {
        // GSAP animation for scaling the background image
        gsap.to(bgImageRef.current, {
            scale: 1, // Final scale
            scrollTrigger: {
                trigger: bgImageRef.current, // Monitor the scroll of this element
                start: "bottom center", // Start animation when top of the element reaches the center of the viewport
                end: "top center", // End animation when bottom of the element reaches the top of the viewport
                scrub: true, // Smooth animation as you scroll
            },
            smoothOrigin: true,
        });
    }, []);
    return (
        <div className=''>
            <div>
                <div ref={bgImageRef} className="bg-[url('/src/assets/try.png')]  max-sm:h-[300px] md:h-[450px]  flex flex-col items-center justify-center mx-auto bg-cover bg-center bg-no-repeat transform object-scale-down origin-center">
                    <div className='flex flex-col items-center justify-between mx-auto'>
                        <div>
                            <p className='font-[NekstFont]   text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-l bg-white from-purple-300 to-pink-100 text-[80px]'>Try Capico for free</p>

                        </div>
                        <div className='lg:mt-20'>
                            <Link to='/signup'>
                                <button className='flex items-center mt-12 md:px-8 md:py-3 text-white bg-[#5f29b7] rounded-3xl  md:text-[32px] md:gap-6 gap-2'>Create an account
                                    <img src={arrow} alt="" className='transition-all duration-200 rounded-full max-sm:text-[12px] hover:scale-110 object-scale-down ' /></button>
                            </Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TryCapico