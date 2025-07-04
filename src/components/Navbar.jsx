import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { useCart } from "./CartProvider"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shoppingCart from "../assets/shoppingCart.png"
import vinyl from "../assets/vinyl-icon.png"
import './Navbar.css'

function NavigationBar(){
    const [showNavbar, setShowNavbar] = useState(false);
    const {cart}= useCart();
    const numItems= cart.length;
    const location = useLocation();
    const isHomePage = location.pathname === '/'

    useEffect(() => {
       if (!isHomePage) {
      setShowNavbar(true); 
      return;
    }
    const scrollContainer = document.getElementById('main-content');

    const onScroll = () => {
    const scrollY = scrollContainer.scrollTop;
    setShowNavbar(scrollY > 0);
  };

  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', onScroll);
  }

  return () => {
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', onScroll);
    }
  };
}, [isHomePage]);

    return (
        <>
            {!showNavbar && (
                <div className="navbar-brand-placeholder">
                    <span className="brand-text">
                        Nylhaven 
                    </span>
                </div>
            )}

            <Navbar
                expand="lg"
                bg="dark"
                data-bs-theme="dark"
                fixed="top"
                className={`custom-navbar ${showNavbar ? 'visible' : 'hidden'}`}
            >
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center navbar-link-animate brand">
                        <div>Nylhaven <Image src={vinyl} width={30} height={30} /></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
                        <Nav className="w-100 d-flex justify-content-around align-items-center">
                            <Nav.Link as={HashLink} smooth to="/#start-cont" className="navbar-link-animate">About Us</Nav.Link>
                            <Nav.Link as={HashLink} smooth to="/#start-desc" className="navbar-link-animate">Buy Vinyls</Nav.Link>
                            <Nav.Item className='d-flex align-items-center navbar-link-animate'>
                                  <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
                                     <Image src={shoppingCart} width={40} height={40} />
                                  </Link>
                                  <div
                                    id="num-items"
                                    style={{
                                        color: numItems > 0 ? '#E49052' : 'white',
                                    }}
                                  >
                                    {numItems}
                                  </div>
                            </Nav.Item>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavigationBar