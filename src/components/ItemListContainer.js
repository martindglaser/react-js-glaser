import ItemList from "./ItemList";

const ItemListContainer = ({ value }) => {
    const cantidadProductos = parseInt(value);
    let color = '';
    if (cantidadProductos > 0) {
        color = 'ivory';
    } else {
        color = 'blue';
    }


    return (
        <div style={{ background: color, height: 500 }}>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;