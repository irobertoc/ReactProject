import Header from "./Header"
import './App.css'
import ItemListContainer from "./ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap"

function App() {

  const clickear = () => console.log("Agregado al carrito")

  return(
    <div>
      <Header /> 
      <ItemListContainer mensaje="Bienvenido!"/> 

      <Button onClick={clickear} size="lg" variant="success">Click me</Button>
      
    </div>

  )
}

export default App

