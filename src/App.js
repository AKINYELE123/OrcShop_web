import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/cart" element={<Cart/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/product" element={<Products />} exact />
        <Route path="/products/:id" element={<Product />} exact />
      </Routes>
    </>
  );
}

export default App;
