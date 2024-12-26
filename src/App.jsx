import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-red max-w-screen-2xl '>
    <Navbar/>
      <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default App