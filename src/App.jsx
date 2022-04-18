import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Product from './Components/ProductList/Product';
import ProductPage from './Components/ProductList/ProductPage';
import Error404 from './Components/Home/Error404';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Admin" element={<Admin />} exact />
        <Route path="/Product" element={<Product />} exact />
        <Route path="/Product/:id" element={<ProductPage />} exact />

        <Route
          path="*"
          element={<Error404 to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
