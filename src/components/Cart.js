import { useEffect, useState } from "react";
import { useMyContext } from "../context/MyProvider";
import { removeItem, setItemCart } from "./CartMethods";
import ItemCount from "./ItemCount";
import { Productos } from "./Productos.json";


const Cart = () => {
    const [context, setContext] = useMyContext();
    const [state, setState] = useState(true);


    const reload = () => {
        if (state === true) {
            setState(false)
        } else {
            setState(true)
        }
    }


    const getCount = (cantidad, id, stock) => {
        console.log(cantidad, id, stock)
        const newContext = setItemCart(context, id, cantidad, stock)
        console.log(newContext)
        setContext(newContext);
    }


    const eliminarItem = (idItem) => {
        const newContext = removeItem(context, idItem);
        setContext(newContext);
        reload()
    }


    const test = 11;
    return (
        <div>
            <p style={{ color: 'black' }}>{state}</p>
            {
                context.map((products, i) => {
                    const productoDB = Productos.filter(obj => {
                        return obj.id == products.id
                    })
                    const stock = productoDB[0].stock;
                    const descripcion = productoDB[0].descripcion;
                    const idProducto = productoDB[0].id;
                    return (
                        <div key={i} style={{ height: 200, width: 200, textAlign: 'center' }}>
                            <h3>{descripcion}</h3>

                            <ItemCount value={products.quantity} stock={stock} id={idProducto} onClick={(a, b, c) => getCount(a, b, c)} />
                            <button onClick={() => eliminarItem(products.id)} className="btn btn-outline-danger">Eliminar Item</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Cart;