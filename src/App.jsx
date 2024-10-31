/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import History from './components/history'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Etik from './components/Etik'
import Policy from './components/Policy'
import TermsOfServis from './components/TermsOfServis'
import ShippingReturns from './components/ShippingReturns'
import Career from './components/Career'


const App = () => {
  return (
    <div className=''>

      <header className='px-4 sm:px-[5vw] md:px-|7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
      </header>

      <main className='px-4 sm:px-[5vw] md:px-|7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='orders' element={<Orders />} />
          <Route path='place-order' element={<PlaceOrder />} />
          <Route path='product/:productId' element={<Product />} />
          <Route path='/history' element={<History />} />
          <Route path='/etik' element={<Etik />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/termsofservice' element={<TermsOfServis />} />
          <Route path='/shippingreturns' element={<ShippingReturns />} />
          <Route path='/career' element={<Career />} />


        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App