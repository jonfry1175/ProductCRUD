import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  MenuBar,
  MainContent,
} from './components'

import {
  Product,
  CreateProduct,
  UpdateProduct
} from './pages/product'

function App() {
  return (
    <div className='main-page container-fluid'>
      {/* <MenuBar />
      // <Banner />
      <MainContent /> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MenuBar />}>
              <Route index element={<MainContent />}/>
              <Route path='products' element={<Product/>}/>
              <Route path="products/create" element={<CreateProduct />}/>
              <Route path="products/update/:id" element={<UpdateProduct />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
