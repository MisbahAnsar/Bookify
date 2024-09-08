import { useState } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Options from './components/Options'
import Choice from './components/Choice'
import Review from './components/Review'
import { CartProvider } from './components/CartContext'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-[#ffffff]'>
      <CartProvider>
        <Navbar />
        <Landing />
        <Options />
        <Choice />
        </CartProvider>
        <Review />
        <Footer />

        {/* <Join /> */}
      </div>
    </>
  )
}

export default App
