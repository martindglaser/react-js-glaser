import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos, Categorias } from "../components/Productos.json";
import { useMyContext } from "../context/MyProvider";
import { addItem, removeItem } from "./CartMethods";
import ItemCount from "./ItemCount";


let counter = 0;

const ItemDetail = () => {
    const { idItem } = useParams();
    const [item, setItem] = useState([]);
    const [context, setContext] = useMyContext();


    useEffect(() => {
        setItem(
            Productos.filter(obj => {
                return obj.id == idItem;
            })
        )

    }, [idItem])




    if (item.length > 0) {

        const Categoria = Categorias.filter(obj => {
            return obj.id == item[0].categoriaId
        })
        let categoriaShow;
        if (Categoria.length > 0) {
            categoriaShow = Categoria[0].categoria;
        } else {
            categoriaShow = '';
        }


        const getCount = (data) => {
            counter = data;
            //console.log(counter)
        }



        const agregar = () => {
            const newContext = addItem(context, item[0].id, counter, item[0].stock)
            setContext(newContext);
            console.log(context)
        }

        const eliminarDelCarrito = (idItem) => {
            const newContext = removeItem(context, idItem)
            setContext(newContext);
            console.log(context)
        }

        return (
            <div>
                <div>
                    <label>Articulo:</label> {item[0].descripcion}
                </div>
                <div>
                    <label>Precio:</label> ${item[0].precio}
                </div>
                <div>
                    <label>Precio:</label> {item[0].descripcion}
                </div>
                <div>
                    <label>Categoria:</label> {categoriaShow}
                </div>
                <div>
                    <label>Stock:</label> {item[0].stock}
                </div>
                <ItemCount onClick={getCount} stock={item[0].stock} />

                <button onClick={agregar} className="btn btn-outline-success">Agregar al Carrito</button>
                <button className="btn btn-outline-danger" onClick={eliminarDelCarrito}>Eliminar del carrito</button>

            </div >
        )
    }


}

export default ItemDetail;