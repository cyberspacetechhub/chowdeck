import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Store from './components/Store'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Restaurant from './components/Restaurant'
import Article from './components/Article'
import Content from './components/Content'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
        <Route index element={<Content />} />
        </Route>
        <Route path='/store' element={<Article />} >
          <Route index element={<Store />} />
          <Route path='/store/product_details/' element={<ProductDetails />} />
          <Route path='/store/restaurant' element={<Restaurant />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
