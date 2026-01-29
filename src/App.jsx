import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Product from './views/Product/Product'
import Checkout from './views/Checkout/Checkout'
import Cart from './views/Cart/Cart'
import Thankyou from './views/Cart/Thankyou'

function App() {

  // useEffect(() => {
  //   console.log('process.env', import.meta.env)
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:restaurant_slug/:scanner_slug" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
