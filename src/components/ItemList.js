import { useEffect, useState } from "react";
import Item from "./Item";
import { Productos, Categorias } from "./Productos.json.js";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "bootstrap";

const ItemList = () => {

    const { id } = useParams();

    const [state, setState] = useState('')
    const [products, setProducts] = useState('');


    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setState('loading')
            const ArrayItems = Productos;
            setTimeout(() => resolve(ArrayItems), 2000);
        });
        getItems.then(result => {
            if (id !== undefined && id !== null) {
                setProducts(
                    result.filter(obj => {
                        return obj.categoriaId == id;
                    })
                )
            } else {
                setProducts(result);
            }

            setState('productsFetched');
        });
    }, [id])



    if (state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if (state === 'productsFetched') {
        return (
            <div>
                <div>
                    <h3>Filtrar</h3>
                    <div>
                        {
                            Categorias.map((Categorias, i) => {
                                return (
                                    <NavLink key={i} to={`${process.env.PUBLIC_URL}/category/${Categorias.id}`}>
                                        <button className="btn btn-outline-primary" >{Categorias.categoria}</button>
                                    </NavLink>
                                )
                            })
                        }
                        <button className="btn btn-primary" > test</button>
                    </div>
                </div>
                < div style={{ display: 'flex', flexWrap: "wrap" }}>
                    {
                        products.map((products, i) => {
                            return <Item ItemData={products} key={i} />
                        })
                    }
                </div >
            </div>
        );
    }
}

export default ItemList;