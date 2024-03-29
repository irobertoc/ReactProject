import './Header.scss'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'
import CartWidget from '../CartWidget/CartWidget'
const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
            <h1 className="header_logo">Tech Case</h1>

                <nav className="header_nav">
                    <Link className="header_link" to="/">Inicio</Link>
                    <Link className="header_link" to="nosotros">Nosotros</Link>
                    <Link className="header_link" to="fundas">Fundas</Link>
                    <Link className="header_link" to="audifonos">Audifonos</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default Header