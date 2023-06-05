import './Header.scss'
const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
            <h1 className="header_logo">Tech Case</h1>
            <img src="./img/vite.svg" alt="Logo" />

                <nav className="header_nav">
                    <a className="header_link" href="">Nosotros</a>
                    <a className="header_link"href="">Fundas</a>
                    <a className="header_link" href="">Audifonos</a>
                </nav>
            </div>

        </header>
    )
}

export default Header