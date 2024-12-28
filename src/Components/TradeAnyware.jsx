import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../assets/arrow.png";

gsap.registerPlugin(ScrollTrigger);

const TradeAnyware = () => {
    const bgImageRef = useRef(null);

    useEffect(() => {
        // GSAP animation for scaling the background image
        gsap.to(bgImageRef.current, {
            scale: 1.1, // Final scale
            scrollTrigger: {
                trigger: bgImageRef.current, // Monitor the scroll of this element
                start: "top center", // Start animation when top of the element reaches the center of the viewport
                end: "bottom center", // End animation when bottom of the element reaches the top of the viewport
                scrub: true, // Smooth animation as you scroll
            },
            smoothOrigin: true,
        });
    }, []);

    return (
        <div className="relative min-h-screen mt-8 overflow-hidden bg-black">
            {/* Background Image */}
            <div
                ref={bgImageRef}
                className="absolute inset-0 bg-[url('/src/assets/tradebg.png')] bg-cover bg-center bg-no-repeat transform origin-center"
            ></div>

            {/* Content */}
            <div className="relative z-10 p-4">
                <div className="flex justify-between w-full px-4 py-2 text-white bg-black border-t-2 rounded-t-3xl">
                    {/* Left Text */}
                    <h1 className="font-[NekstFont] max-sm:text-xl text-[70px]">
                        Trade anywhere
                    </h1>

                    {/* Right Text */}
                    <span className="mt-4 text-sm text-gray-400">
                        Full functionality at your fingertips
                    </span>
                </div>

                <div className="ml-12 mt-40 text-[32px] text-white font-[NekstFont] flex flex-col ">
                    <span>The platform is fully</span>
                    <span>adapted and</span>
                    <span>optimized to work</span>
                    <span>on your phone and</span>
                    <span>tablet browsers</span>
                </div>

                <div className="flex items-center justify-center mt-12">
                    <button className="flex items-center px-8 py-3 text-white bg-[#5f29b7] rounded-3xl text-[32px] gap-6">
                        Create an account{" "}
                        <img
                            src={arrow}
                            alt=""
                            className="transition-all duration-200 rounded-full hover:scale-110"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TradeAnyware;
