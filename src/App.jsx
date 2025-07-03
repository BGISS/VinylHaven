import './App.css'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import NavigationBar from './components/Navbar'
import MainPage from './components/MainPage'
import ItemSummaryPage from './components/ItemSummaryPage'
import { CartProvider } from "./components/CartProvider";
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import CheckoutStepper from './components/CheckoutStepper'
import Footer from './components/Footer'

function App() {
  
 return (
    <Router>
      <div id="main-content" style={{ overflowY: 'auto', height: '100vh'}}>
      
        <CartProvider>
            <NavigationBar/>
          <Routes>
            <Route path="/" element={
              <>
                <LandingPage/>
                <AboutUs/>
                <MainPage/>
              </>
            } />
            <Route path="/cart" element={<CheckoutStepper />} />
          </Routes>
          <Footer/>
        </CartProvider>
      </div>
    </Router>
  )
}
export default App
