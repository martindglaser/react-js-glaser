import { useEffect, useState } from "react";
import Item from "./Item";
import { Productos, Categorias } from "./Productos.json.js";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "bootstrap";
import { clear } from "./CartMethods";
import { useMyContext } from "../context/MyProvider";

const ItemList = () => {

    const { id } = useParams();

    const [estado, setEstado] = useState('')
    const [products, setProducts] = useState('');
    const [context, setContext] = useMyContext()

    const clearCarrito = () => {
        const newContext = clear();
        setContext(newContext);
        console.log(context)
    }


    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setEstado('loading')
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

            setEstado('productsFetched');
        });
    }, [id])



    if (estado === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if (estado === 'productsFetched') {
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
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-danger" onClick={clearCarrito}>Vaciar Carrito</button>
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