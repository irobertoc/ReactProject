
import { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Item Detail/ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading ] = useState (true)

    const { itemId } = useParams ()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))

            })
            .catch ((err) => console.log(err))
            .finally(() => setLoading(false) )

    },  [itemId])

    return (
        <div className="list_Products">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer