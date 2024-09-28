import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

import Landing from './components/Landing';
import Options from './components/Options';
import Choice from './components/Choice';
import Review from './components/Review';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    // Set up the smooth scroll effect
    let scrollTween = gsap.to(appRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: appRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Clean up on component unmount
    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div className='w-full h-screen bg-[#ffffff]' ref={appRef}>
      <CartProvider>
        <Landing />
        <Options />
        <Choice />
      </CartProvider>
      <Review />
      <Footer />
    </div>
  );
}

export default App;
