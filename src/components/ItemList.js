import { useEffect, useState } from "react";
import Item from "./Item";
import { Productos } from "./Productos.json.js";

const ItemList = () => {

    const [state, setState] = useState('')
    const [products, setProducts] = useState('');


    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setState('loading')
            const ArrayItems = Productos;
            setTimeout(() => resolve(ArrayItems), 2000);
        });
        getItems.then(result => {
            setProducts(result);
            setState('productsFetched');
        });
    }, [])

    // useEffect(() => {
    //     fetch(`/components/productos.json`)
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data)
    //             setState('loading')
    //             setTimeout(() => {
    //                 setProducts(data);
    //                 setState('productsFetched');
    //             }, 2000);
    //         });
    // }, [])

    if (state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if (state === 'productsFetched') {
        return (
            < div style={{ display: 'flex', flexWrap: "wrap" }}>
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