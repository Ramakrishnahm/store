import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Homecontent";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";

import About from "./components/about/About";
import Product from "./components/products/Product";

import Cart from "./components/cart/Cart";
import "./App.css";
 import ProductDetails from "./components/products/ProductDetails";

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
    
         <Route exact path="/products" element={<Product />}/>
         <Route exact path= "/product/:id" element = {<ProductDetails/>}/> 

          <Route exact path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
     
    </div>
   
  );
}

export default App;
