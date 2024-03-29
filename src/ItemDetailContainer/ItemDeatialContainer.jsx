
import { useEffect, useState } from 'react'
//import { pedirDatos } from '../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Item Detail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading ] = useState (true)

    const { itemId } = useParams ()

    useEffect(() => {
        setLoading(true)


        const itemRef = doc(db, "productos", itemId)

        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

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