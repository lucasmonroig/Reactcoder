import { CartWidgetComponent } from "../CardWidget/index"

export const NavbarComponent = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Titulo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <CartWidgetComponent />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
