import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandningPage/LandingPage';
import { NavBar } from './components/NavBar/NavBar';
import {Shop} from "./components/pages/shop"
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import LoginSignUp from './components/pages/LoginSignUp';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/login" element={<LoginSignUp />}/>
        <Route path="/signUp" element={<LandingPage />}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>  
        </Route>  
        <Route path="/cart" element={<Cart />}/>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
