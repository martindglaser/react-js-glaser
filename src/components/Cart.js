import { useEffect, useState } from "react";
import { getProductoById } from "../App/api";
import { useMyContext } from "../context/MyProvider";
import { removeItem, setItemCart } from "./CartMethods";
import ItemCount from "./ItemCount";
import { Productos } from "./Productos.json";


const Cart = () => {
    const [context, setContext] = useMyContext();
    const [state, setState] = useState(true);
    const [estado, setEstado] = useState('loading')
    const [cart, setCart] = useState()
    console.log(context)

    const reload = () => {
        if (state === true) {
            setState(false)
        } else {
            setState(true)
        }
    }

    const getCount = (cantidad, id, stock) => {
        const newContext = setItemCart(context, id, cantidad, stock)
        setContext(newContext);
    }


    const eliminarItem = (idItem) => {
        console.log(idItem)
        const newContext = removeItem(context, idItem);
        setContext(newContext);
        reload()
    }



    useEffect(() => {
        const cartProducts = []
        for (let i = 0; i < context.length; i++) {
            getProductoById(context[i].id).then(result => {
                cartProducts.push({
                    id: context[i].id,
                    quantity: context[i].quantity,
                    precio: result.precio,
                    stock: result.stock,
                    descripcion: result.descripcion
                })
                if (i === context.length - 1) {
                    setCart(cartProducts);
                    setEstado('productsFetched')
                }
            })
        }

    }, [state])



    if (estado === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    if (estado === 'productsFetched') {

        return (
            <div>
                <p style={{ color: 'black' }}></p>
                {
                    cart.map((productos, i) => {
                        const stock = productos.stock
                        const descripcion = productos.descripcion
                        const idProducto = productos.id
                        return (
                            <div key={i} style={{ height: 200, width: 200, textAlign: 'center' }}>
                                <h3>{descripcion}</h3>

                                <ItemCount value={productos.quantity} stock={stock} id={idProducto} onClick={(a, b, c) => getCount(a, b, c)} />
                                <button onClick={() => eliminarItem(idProducto)} className="btn btn-outline-danger">Eliminar Item</button>
                            </div>
                        )
                    })
                }
            </div >

        )
    }

}

export default Cart;
/*
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
*/