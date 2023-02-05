import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contacts/Contact";
import About from "./pages/about/About";
import Product from "./components/shop/Product";
import Signin from "./pages/sign in/signin";
import Signup from "./pages/sign up/signup";
import PlaceOrder from "./pages/placeOrder/placeOrder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
