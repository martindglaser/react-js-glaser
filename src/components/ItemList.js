import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {

    const [state, setState] = useState('')
    const [products, setProducts] = useState('');






    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setState('loading')
            const ArrayItems = [
                { descripcion: "Pantalon", stock: 5 },
                { descripcion: "Zapatillas", stock: 7 },
                { descripcion: "Remera", stock: 3 }
            ];
            setTimeout(() => resolve(ArrayItems), 2000);
        });
        getItems.then(result => {
            setProducts(result);
            setState('productsFetched');
        });
    }, [])

    if (state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if (state === 'productsFetched') {
        return (
            < div style={{ display: 'flex' }}>
                {
                    products.map((products, i) => {
                        return <Item ItemData={products} key={i} />
                    })
                }
            </div >
        );
    }
}

export default ItemList;