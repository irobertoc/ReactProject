import { useState } from "react"

export const Clicker = ({init = 0}) => {
    const[counter, setCounter] = useState(init)

    const now = new Date()

 //let counter = 10 
    const sumar = () => {

        setCounter(counter + 1)
        //console.log(counter)
    }
    const Comprar = () => {
        
        console.log(counter)
    }

    return(
        <div>
            <h2>Producto</h2>
            <hr />

            <p>El componente se genero:{now.toLocalString()}</p>

            <button onClick={sumar}>Agregar</button>
            <button onClick={Comprar}>Comprar</button>
            <p>{counter}</p>
        </div>
    )
}