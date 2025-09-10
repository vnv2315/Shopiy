import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(()=>{
    const savedCart=localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems]);


    useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addItems = (product, size, quantity = 1) => {
    const existingItem = cartItems.find(
      (item) => item._id === product._id && item.size === size
    );
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { 
        ...product, 
        size, 
        quantity,
        image: product.image && product.image.length > 0 ? product.image[0] : '/placeholder.svg'
      }]);
    }
  };


  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id, size);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item._id === id && item.size === size ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id, size) => {
    setCartItems(cartItems.filter((item) => item._id !== id || item.size !== size));
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/list`);  
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  },[]);


  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        setCartItems, 
        totalItems,
        addItems,
        updateQuantity, 
        removeItem,
        products,
        setProducts,
        getProducts,
        backendUrl,
        token,
        setToken
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
