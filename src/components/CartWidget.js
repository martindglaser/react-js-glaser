import Logo from '../assets/img/logo.png';
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { Link } from 'react-router-dom';

const logoStyle = {
    height: 40,
}


const CartWidget = () => {
    const { getItemsQuantity } = useContext(CartContext)
    const quantity = getItemsQuantity();

    if (quantity > 0) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/cart`}>

                <img style={logoStyle} src={Logo} />
                {quantity}

            </Link>
        );
    }
}

export default CartWidget;