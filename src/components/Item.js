import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ ItemData }) => {
    return (

        < div className="rounded" style={{ height: 200, textAlign: 'center', border: 'solid red', margin: '5px', flex: "1 0 21%" }
        }>
            <h3 style={{ paddingBottom: 15 }}>{ItemData.descripcion}</h3>

            <Link to={`${process.env.PUBLIC_URL}/detalle/${ItemData.id}`}>
                <button className="btn btn-outline-primary">Detalle</button>
            </Link>
            <ItemCount stock={ItemData.stock} />
            <button style={{ marginTop: 15 }} className="btn btn-outline-success">Agregar al carrito</button>
        </div >
    );
}
export default Item;