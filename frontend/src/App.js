import React from 'react'
import { Cart } from './components/cartPage/Cart'
import { ProductDetails } from './components/productDetails/ProductDetails'
import { HomePage } from './pages/HomePage'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
    <Login></Login>
 <Cart></Cart>
   </div>
  )
}

export default App