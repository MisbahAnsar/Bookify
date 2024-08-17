import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Options from './components/Options'
import Choice from './components/Choice'
import Join from './components/Join'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-[#ffffff]'>
        <Navbar />
        <Landing />
        <Options />
        <Choice />
        <Review />
        {/* <Join /> */}
      </div>
    </>
  )
}

export default App
