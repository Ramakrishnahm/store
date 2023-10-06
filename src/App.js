

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Homecontent';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Products from './components/home/FeatureProducts';
import About from './components/about/About';
import Product from "./components/products/Product";
import FilterForm from './components/products/FilterForm';




import Cart from "./components/cart/Cart";
import './App.css';
// import  ProductDetails  from "./components/products/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product" element={<Product />} />
        
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;



// https://codesandbox.io/s/userreducer-usecontext-lv4md6?file=/src/CartContext.js