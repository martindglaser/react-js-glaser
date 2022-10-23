
const ItemListContainer = ({ value }) => {
    const cantidadProductos = parseInt(value);
    let color = '';
    if (cantidadProductos > 0) {
        color = 'red';
    } else {
        color = 'blue';
    }


    return (
        <div style={{ background: color, height: 500 }}></div>
    );
}

export default ItemListContainer;