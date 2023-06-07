import Header from "./Header"
import './App.css'
import ItemListContainer from "./ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const clickear = () => console.log("Agregado al carrito")

  return(
    <div>
      <Header /> 
      <hr />
      
      <ItemListContainer/> 
    </div>

  )
}

export default App

