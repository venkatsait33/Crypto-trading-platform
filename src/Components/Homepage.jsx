
import Benefits from "./Benfits"
import Home from "./Home"
import Numbers from "./Numbers"
import VideoSection from "./VideoSection"
import MultiChart from "./MultiChart"
import Portfolio_statistics from "./Portfolio_statistics"
import Everything_work from "./Everything_work"
import Features from "./Features"
import TradeAnyware from "./TradeAnyware"
import Security from "./Security"
import Partners from "./Partners"
import TryCapico from "./TryCapico"
import { useEffect, useState } from "react"

import { MdOutlineKeyboardArrowUp } from "react-icons/md"


const Homepage = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="bg-black scroll-smooth">
      <Home />
      <VideoSection />
      <Numbers />
      <Benefits />
      <MultiChart />
      <Portfolio_statistics />
      <Everything_work />
      <Features />
      <TradeAnyware />
      <Security />
      <Partners />
      <TryCapico />
      
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className=" sctoll-to-top-btn showed animate-bounce hover:bg-[#8453d1] hover:text-white rounded-full p-2 fixed bottom-10 right-10 text-white"
          type="button"
        >
          <i className="">
            <img src="/src/assets/arrow-bottom-long.svg" alt="" className="" />
          </i>
          
        </button>
      )}
    </div>

  )
}

export default Homepage