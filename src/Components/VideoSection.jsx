import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ipad from '../assets/video/video-ipad.png';
import mobile from '../assets/video/video-mobie.png';

function VideoSection() {
    const sectionRef = useRef(null);

    // Animation Variants
    const variants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 }, // Final state (visible)
    };

    return (
        <div ref={sectionRef} className="min-h-screen">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                variants={variants}
                className="relative max-sm:h-[80vh] h-[100vh] w-full overflow-hidden bg-[url('/src/assets/video/video-cover.jpg')] bg-no-repeat bg-cover bg-center rounded-t-2xl"
            >
                {/* Text Section */}
                <div className="flex flex-col items-center justify-center mt-20">
                    <motion.h2
                        variants={variants}
                        transition={{ delay: 0.2 }}
                        className="font-[FontSpring-medium] text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]"
                    >
                        Manage positions on
                    </motion.h2>
                    <motion.h2
                        variants={variants}
                        transition={{ delay: 0.4 }}
                        className="font-[FontSpring-medium] text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]"
                    >
                        different exchanges from one
                    </motion.h2>
                    <motion.h2
                        variants={variants}
                        transition={{ delay: 0.6 }}
                        className="font-[FontSpring-medium] text-transparent max-sm:text-xl bg-clip-text bg-gradient-to-r bg-white from-purple-400 to-pink-200 text-[32px]"
                    >
                        window
                    </motion.h2>
                </div>

                {/* Image Section */}
                <motion.div
                    className="relative flex items-center justify-center max-sm:mt-20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img
                        src={ipad}
                        alt="iPad"
                        className="absolute top-0 transform scale-110 -translate-x-1/2 bg-center bg-cover shadow-xl left-1/2"
                    />
                    <img
                        src={mobile}
                        alt="Mobile"
                        className="relative z-10 mx-auto bg-center bg-cover shadow-xl"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default VideoSection;
