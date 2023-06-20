import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading ] = useState (true)

    const { categoryId } = useParams ()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId){
                    setProductos(res)
                }else{
                    setProductos( res.filter((item) => item.category === categoryId ))
                }

            })
            .catch ((err) => console.log(err))
            .finally(() => setLoading(false) )

    },  [categoryId])

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