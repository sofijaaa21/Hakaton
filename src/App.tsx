import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandningPage/LandingPage';
import { NavBar } from './components/NavBar/NavBar';
import Shop from './components/pages/Shop/Shop';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import LoginSignUp from './components/pages/LoginSignUp';

import navLinksData from './components/NavBar/MenuItemsData.json';
import { Footer } from './components/Footer/Footer';
import MainPage from './components/pages/MainPage';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import { MakePost } from './components/pages/MakePost/MakePost';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={< MainPage/>} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signUp" element={<LandingPage />} />
        <Route path="/ProductDisplay/:productId" element={<ProductDisplay />} />
        <Route path="/MakePost" element={<MakePost  categories={navLinksData} />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<MainPage />} />
        <Route path="/women" element={<MainPage />} />
        <Route path="/kid" element={<MainPage />} />
        <Route path="/shop/:categoryName" element={<Shop categories={navLinksData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
