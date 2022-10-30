import ItemCount from "./ItemCount";

const Item = ({ ItemData }) => {
    return (

        < div className="rounded" style={{ flexGrow: '1', height: 200, textAlign: 'center', border: 'solid red', margin: '20px 20px' }
        }>
            <h3 style={{ paddingBottom: 15 }}>{ItemData.descripcion}</h3>
            <ItemCount stock={ItemData.stock} />
            <button style={{ marginTop: 15 }} className="btn btn-outline-success">Agregar al carrito</button>
        </div >
    );
}
export default Item;