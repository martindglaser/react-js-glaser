import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../App/api";
import { Productos, Categorias } from "../components/Productos.json";
import ItemCount from "./ItemCount";


let counter = 0;

const ItemDetail = () => {
    const { idItem } = useParams();
    const [item, setItem] = useState([]);
    const [estado, setEstado] = useState('');


    const { cart, addItem } = useContext(CartContext)

    console.log(cart)

    useEffect(() => {
        setEstado('loading')
        getProductoById(idItem).then(result => {
            setEstado('fetched')
            result.id = idItem;
            setItem(result)
        })

    }, [idItem])



    if (estado === 'loading') {
        return (
            <p>Loading...</p>
        )

    } else if (estado === 'fetched') {

        const Categoria = Categorias.filter(obj => {
            return obj.id == item.categoriaId
        })
        let categoriaShow;
        if (Categoria.length > 0) {
            categoriaShow = Categoria.categoria;
        } else {
            categoriaShow = '';
        }


        const getCount = (data) => {
            counter = data;
            //console.log(counter)
        }



        const agregar = () => {
            addItem(item, counter)
        }


        return (
            <div>
                <div>
                    <label>Articulo:</label> {item.descripcion}
                </div>
                <div>
                    <label>Precio:</label> ${item.precio}
                </div>
                <div>
                    <label>Precio:</label> {item.descripcion}
                </div>
                <div>
                    <label>Categoria:</label> {categoriaShow}
                </div>
                <div>
                    <label>Stock:</label> {item.stock}
                </div>
                <ItemCount onClick={getCount} stock={item.stock} />

                <button onClick={agregar} className="btn btn-outline-success">Agregar al Carrito</button>

            </div >
        )
    }


}

export default ItemDetail;