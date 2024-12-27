import { useState, useEffect } from "react";
import icon1 from '../assets/features/stoplose.png'
import icon2 from '../assets/features/trailing.png'
import icon3 from '../assets/features/sl.png'
import icon4 from '../assets/features/conditional.png'
import icon5 from '../assets/features/chanel.png'
import icon6 from '../assets/features/chart.png'
import icon7 from '../assets/features/tp.png'
import icon8 from '../assets/features/automatic.png'
import icon9 from '../assets/features/booster.png'
import icon10 from '../assets/features/panic.png'


// Data for features and cards
const featuresData = [
    {
        title: "Stop Loss and Take Profit",
        icon: icon1, // Example icon (use emojis or image URLs)
        text: "Automate your stop loss and take profit strategies effectively.",
    },
    {
        title: "Trailing",
        icon: icon2,
        text: "Manage your positions dynamically with trailing stop loss.",
    },
    {
        title: "SL Timeout and Candlestick Close",
        icon: icon3,
        text: "Close positions based on SL timeout or candlestick patterns.",
    },
    {
        title: "Conditional orders",
        icon: icon4,
        text: "Execute trades automatically when specific conditions are met.",
    },
    {
        title: "Channel bot",
        icon: icon5,
        text: "Trade efficiently using our channel bot with predefined settings.",
    },
    {
        title: "Chart trading",
        icon: icon6,
        text: "Trade directly on the charts for a seamless experience.",
    },
    {
        title: "TP Ladder and averaging",
        icon: icon7,
        text: "Split your targets into multiple levels for better profit-taking.",
    },
    {
        title: "Automatic Breakeven",
        icon: icon8,
        text: "Set automatic breakeven points to reduce risk.",
    },
    {
        title: "Booster",
        icon: icon9,
        text: "Quickly flip between long and short positions with a single click.",
    },
    {
        title: "Panic Sell",
        icon: icon10,
        text: "Exit all positions immediately in market downturns.",
    },
];

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Handle navigation
    const handleNavigate = (direction) => {
        if (direction === "up") {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? featuresData.length - 1 : prevIndex - 1
            );
        } else if (direction === "down") {
            setActiveIndex((prevIndex) =>
                prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    return (
        <div className="bg-black">
            <div className="min-h-screen p-6 rounded-[40px] text-white bg-gradient-to-br from-purple-900 to-purple-700 ">
                {/* Header */}
                <div className="w-full px-4 py-2 ">
                    <div className="flex items-center justify-between mb-8 text-center">
                        <h1 className="text-4xl font-bold font-[FontSpring]">Features</h1>
                        <p className="text-sm text-purple-300">Master the market</p>
                    </div></div>



                {/* Features List */}


                <div className="flex items-center justify-evenly">
                    <div className="flex max-md:hidden lg:block md:flex-col md:items-center md:space-y-4">
                        <ul className="space-y-4 text-left">
                            {featuresData.map((feature, index) => (

                                <li
                                    key={index}
                                    className={`${index === activeIndex ? "font-bold text-white" : "text-purple-300"
                                        }`}
                                >
                                    <div>
                                        {index === activeIndex ? "-" : ""} {feature.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sliding Card */}
                    <div className="flex flex-col justify-between max-w-md p-6 mt-8 text-center ease-in-out scroll-smooth transition-transform duration-500 bg-purple-600 rounded-lg shadow-lg h-[350px]">
                        <div className="flex items-center justify-between mb-4 text-5xl">
                            <h2 className="mb-4 text-2xl font-semibold">
                                {featuresData[activeIndex].title}
                            </h2>
                            <img src={featuresData[activeIndex].icon} alt="" />
                        </div>

                        <p className="mb-4 text-purple-200">{featuresData[activeIndex].text}</p>
                        <button className="px-4 py-2 text-white transition border border-white rounded hover:bg-white hover:text-purple-600">
                            Learn more →
                        </button>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col space-y-4 right-8 bottom-8">
                        <button
                            onClick={() => handleNavigate("up")}
                            className="flex items-center justify-center w-10 text-white border border-white h-28 rounded-xl hover:bg-white hover:text-purple-600"
                        >
                            <p className="text-4xl"> ↑</p>
                        </button>
                        <button
                            onClick={() => handleNavigate("down")}
                            className="flex items-center justify-center w-10 text-white border border-white h-28 rounded-xl hover:bg-white hover:text-purple-600"
                        >
                            <p className="text-4xl"> ↓</p>
                        </button>
                    </div></div>
            </div>
       </div>
    );
};

export default Features;
