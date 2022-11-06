import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "./Productos.json";

const ItemDetailContainer = () => {
    const { idItem } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        console.log(idItem)
        setItem(
            Productos.filter(obj => {
                return obj.id == idItem;
            })
        )
        // .map(Productos => {
        //     return (
        //         console.log(Productos.descripcion)
        //     )
        // })


    }, [idItem])

    console.log(item)

    if (item.length > 0) {
        return (
            <p>{item[0].descripcion}</p>
        )
    }

}

export default ItemDetailContainer;