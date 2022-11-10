import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos, Categorias } from "../components/Productos.json";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
    const { idItem } = useParams();
    const [item, setItem] = useState([]);


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
                <ItemCount stock={item[0].stock} />
            </div>
        )
    }


}

export default ItemDetail;