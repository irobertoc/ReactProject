import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import SelectColor from "../SelectColor/SelectColor"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    const { agregarAlcarrito, isInCart } = useContext(CartContext)
    console.log(isInCart(id))

    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState("color")
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad, 
            color
        }
        agregarAlcarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt="{nombre}" />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />
            <small>categoría: {category}</small>
            <br />

            <SelectColor setColor={setColor} />

            {
                isInCart(id)
                    ? <Link className="btn btn-success" to="/cart">Terminar compra</Link>
                    : <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
            <hr/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail