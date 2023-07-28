import Header from "./Header"
import './App.css'
import ItemListContainer from "./ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./Nosotros"
import Fundas from "./Fundas"
import Audifonos from "./Audifonos"
import ItemDetailContainer from "../ItemDetailContainer/ItemDeatialContainer"
import { CartProvider } from "../context/CartContext"
import Cart from "../Cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css'
import Checkout from "../Checkout/Checkout"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <hr />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/fundas" element={<Fundas />} />
          <Route path="/audifonos" element={<Audifonos />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

