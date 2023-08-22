import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetials from './pages/ProductDetials';
import About from './pages/AboutPage';
import ProductList from "./pages/ProductList"

function App() {
  return (
    <div> 
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/login' element={ <LoginPage />} />
          <Route path='/productDetial' element={ <ProductDetials />} />
          <Route path='/productDetial/:id' element={ <ProductList />} />
          <Route path='/about' element={ <About />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
