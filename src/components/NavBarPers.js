import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`${process.env.PUBLIC_URL}/`}>
                <img style={{ height: 40 }} src={Logo} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/`}>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/cart`}>Carrito</NavLink>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;