
import Benefits from "./Benfits"
import Home from "./Home"
import Numbers from "./Numbers"
import VideoSection from "./VideoSection"
import MultiChart from "./MultiChart"


const Homepage = () => {
  return (
    <div>
      <Home />
      <VideoSection />
      <Numbers />
      <Benefits/>
      <MultiChart/>
    </div>

  )
}

export default Homepage