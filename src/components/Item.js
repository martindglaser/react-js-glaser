import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useMyContext } from "../context/CartProvider";
import { addItem } from "./CartMethods";
import { useState } from "react";

let counter = 0;

const Item = ({ ItemData }) => {


    return (

        < div className="rounded" style={{ height: 200, textAlign: 'center', border: 'solid red', margin: '5px', flex: "1 0 21%", maxWidth: "24%" }
        }>
            <h3 style={{ paddingBottom: 15 }}>{ItemData.descripcion}</h3>

            <Link to={`${process.env.PUBLIC_URL}/detalle/${ItemData.id}`}>
                <button className="btn btn-outline-primary">Detalle</button>
            </Link>
        </div >
    );
}
export default Item;