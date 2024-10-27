import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Product from "@/pages/Product/Product";
import Layout from "@/components/Layout";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import Products from "@/components/Products/Products";
import GiftCard from "@/pages/GiftCard/GiftCard";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Profile from "@/pages/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gift-cards" element={<GiftCard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default Routers;
