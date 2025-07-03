import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
 const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("vinylCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
   useEffect(() => {
    localStorage.setItem("vinylCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (vinyl) => { 
    setCart((prevCart) => {
    const existingItem = prevCart.find(item => item.id === vinyl.id);
    if (existingItem) {
      return prevCart.map(item =>
        item.id === vinyl.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...vinyl, quantity: 1 }];
    }
  });
  };
  const removeFromCart=(vinyl)=>{
   setCart((prevCart) => {
    const existingItem = prevCart.find(item => item.id === vinyl.id);
    if (!existingItem) return prevCart;

    if (existingItem.quantity > 1) {
      return prevCart.map(item =>
        item.id === vinyl.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      return prevCart.filter(item => item.id !== vinyl.id);
    }
  });
  }
  const removeAllItems=()=>{
    setCart([])
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    removeAllItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}