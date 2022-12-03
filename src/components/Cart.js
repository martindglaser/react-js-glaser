import { useEffect, useState } from "react";
import { getProductoById } from "../App/api";
import ItemCount from "./ItemCount";

import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";


const Cart = () => {
    const [estado, setEstado] = useState('productsFetched')

    const { cart, removeItem } = useContext(CartContext)


    const eliminarItem = (idItem) => {
        removeItem(idItem)
    }




    if (cart.length > 0) {
        return (
            <div>
                <p style={{ color: 'black' }}></p>
                {
                    cart.map((productos, i) => {
                        const descripcion = productos.descripcion
                        const idProducto = productos.id
                        const cantidad = productos.amount
                        return (
                            <div key={i} style={{ height: 200, width: 200, textAlign: 'center' }}>
                                <h3>{`${cantidad} - ${descripcion}`}</h3>
                                <button onClick={() => eliminarItem(idProducto)} className="btn btn-outline-danger">Eliminar Item</button>
                            </div>
                        )
                    })
                }
            </div >

        )
    } else {
        return (
            <div>
                <p>El carrito esta vacio</p>
                <Link to={`${process.env.PUBLIC_URL}/`}>Ver productos</Link>
            </div >
        )
    }

}

export default Cart;