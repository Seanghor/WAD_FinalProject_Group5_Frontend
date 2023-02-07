import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import ProductDetail from "./components/shop/ProductDetail";
import Signin from "./pages/sign in/signin";
import Signup from "./pages/sign up/signup";
import PlaceOrder from "./pages/placeOrder/placeOrder";
import Cart from "./pages/cart/cart"
import Contact from "./pages/contact/contact";
import Sothea from "./pages/about/sothea";
import Seanghor from "./pages/about/seanghor";
import Kimsoure from "./pages/about/kimsoure";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="/cart" elemetn={<Cart/>} />
            <Route path="/contact" element= {<Contact/>} />
            <Route path="/sothea" element={<Sothea/>} />
            <Route path="/seanghor" element={<Seanghor/>} />
            <Route path="/kimsoure" element={<Kimsoure/>} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
