import { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])


    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado} />
            }
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

            /*pedirDatos()
            .then((res) => {
                if (!categoryId){
                    setProductos(res)
                }else{
                    setProductos( res.filter((item) => item.category === categoryId ))
                }

            })
            .catch ((err) => console.log(err))
            .finally(() => setLoading(false) )*/

                /* const listado = search
        /? productos.filter(prod => prod.nombre.includes(search))
        : productos*/
