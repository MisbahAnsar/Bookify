import './index.css';
import Landing from './components/Landing';
import Options from './components/Options';
import Choice from './components/Choice';
import Review from './components/Review';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';

function App() {

  return (
    <div className='w-full h-screen bg-[#ffffff]'>
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
