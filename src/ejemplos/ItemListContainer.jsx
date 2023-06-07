import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    console.log(productos)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch ((error) => {
                console.log(error)
            })

    },  [])

    return (
        <div className="list_Products">
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer

/*const procesoAsync = (bool) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (bool){
                resolve ("Promesa resuelta")
            } else {
                reject ("Promesa rechazada")
            }
            
        }, 2000)

    })
} 

procesoAsync(true)
    .then((res) => {
        console.log(res)
    })
    .catch ((error) => {
    console.log(error)
    })*/