import './App.css'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import NavigationBar from './components/Navbar'
import MainPage from './components/MainPage'
import { CartProvider } from "./components/CartProvider";

function Application() {
  
  return (
    <>
    <div id="main-content" style={{ overflowY: 'auto', height: '100vh'}}>
     <NavigationBar/>
     <LandingPage/>
     <AboutUs/>
       <CartProvider>
     <MainPage/>
     </CartProvider>
     </div>
    </>
  )
}

export default Application
