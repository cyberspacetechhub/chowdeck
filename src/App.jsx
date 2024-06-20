import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Store from './components/Store'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Restaurant from './components/Restaurant'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Store />} />
          <Route path='/product_details/' element={<ProductDetails />} />
          <Route path='/restaurant' element={<Restaurant />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
