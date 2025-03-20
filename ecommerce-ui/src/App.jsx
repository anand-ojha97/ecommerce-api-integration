import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Testimonial from "./pages/Testimonial";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function Layout({ children }) {
  const location = useLocation();

  // Check if the current path is '/login' to exclude Header and Footer
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  return (
    <>
      {/* Conditionally render Header if not on /login */}
      {!isLoginPage && !isRegisterPage && <Header />}
      
      {/* Render the children (the actual route content) */}
      {children}
      
      {/* Conditionally render Footer if not on /login */}
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ShopDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
