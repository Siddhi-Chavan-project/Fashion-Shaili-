import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import SaleOver from "./pages/SaleOver"; 

import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import Banner from "./pages/Banner";
import AdminOrders from "./pages/Admin/AdminOrders";
import Sustainability from "./pages/Sustainability";
import { useState, useEffect } from "react";
import SplashScreen from "./components/Splashscreen"; // Ensure this file exists

import Terms from "./pages/Terms";
import LimitedEdition from "./pages/LimitedEdition";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds duration
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="min-h-screen bg-white"> <Toaster
        position="top-center" // Optional: Set toast position
        toastOptions={{
          duration: 3000, // Global default duration for all toasts (3 seconds)
          style: {
            backgroundColor: '#333', // Optional: Set background color for all toasts
            color: '#fff', // Optional: Set text color for all toasts
          },
        }}
      />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="banner" element={<Banner />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:slug" element={<CategoryProduct />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/limitedEdition" element={<LimitedEdition />} />
            <Route path="/saleover" element={<SaleOver />} />
           

            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="user" element={<Dashboard />} />
              <Route path="user/orders" element={<Orders />} />
              <Route path="user/profile" element={<Profile />} />
            </Route>
            
            <Route path="/dashboard" element={<AdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/create-category" element={<CreateCategory />} />
              <Route path="admin/create-product" element={<CreateProduct />} />
              <Route path="admin/product/:slug" element={<UpdateProduct />} />
              <Route path="admin/products" element={<Products />} />
           
              <Route path="admin/orders" element={<AdminOrders />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPasssword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            
            
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Pagenotfound />} />

          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
