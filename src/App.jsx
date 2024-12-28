import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  return (
    <div className='container min-h-screen bg-black max-w-screen-2xl scroll-smooth '>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App