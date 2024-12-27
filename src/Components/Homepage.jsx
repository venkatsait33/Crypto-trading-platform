
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


const Homepage = () => {
  return (
    <div className="bg-black">
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
      <Partners/>
    </div>

  )
}

export default Homepage