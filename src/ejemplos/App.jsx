import Header from "./Header"
import './App.css'
import ItemListContainer from "./ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "./Nosotros"
import Fundas from "./Fundas"
import Audifonos from "./Audifonos"
import ItemDetailContainer from "../ItemDetailContainer/ItemDeatialContainer"

function App() {

  return (

    <BrowserRouter>
        <Header />
        <hr />
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/fundas" element={<Fundas/>} />
        <Route path="/audifonos" element={<Audifonos/>} />
        <Route path="*" element={<Navigate to={"/"}/>} />
        </Routes>

        {/*Footer*/}
    </BrowserRouter>

  )
}

export default App

