import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AllProducts from "./pages/AllProducts";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";


export const backendUrl = import.meta.env.VITE_BACKEND_URL;


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(()=>{
    localStorage.setItem("token", token);
  },[token])

  return (
    <BrowserRouter>
      {token === "" ? (
        <AdminLogin setToken={setToken} />
      ) : (
        <Routes>
          <Route path="/" element={<AdminLayout setToken={setToken} token={token} />}>
            <Route index element={<AllProducts />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="add" element={<AddProduct token={token} />} />
            <Route path="orders" element={<Orders token={token} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route> 
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
