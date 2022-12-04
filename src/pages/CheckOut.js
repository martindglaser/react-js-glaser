import { useState } from "react";
import { useContext } from "react"
import { createCompra } from "../App/api";
import { CartContext } from "../context/CartProvider"

const CheckOut = () => {
    const { cart } = useContext(CartContext);
    const [name, setNombre] = useState('');
    const [phone, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [idCompra, setIdCompra] = useState('');


    const finalizarCompra = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].precio * cart[i].amount;
        }

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const compra = {
            buyer: {
                name, phone, email
            },
            items: cart, date, total
        }
        createCompra(compra).then(result => {
            setIdCompra(result)
        })
    }

    let mensajePostCompra = '';
    let compraFinalizada = false;
    if (idCompra !== '') {
        mensajePostCompra = `Su compra se registro con exito, el id es: ${idCompra}`;
        compraFinalizada = true;
    }
    if (cart.length === 0) {
        return (
            <div>El carrito esta vacio</div>
        )
    }
    return (
        <div>
            <div>
                <label>Nombre</label>
                <input onChange={(e) => setNombre(e.target.value)} type="text" />
            </div>
            <div>
                <label>Telefono</label>
                <input onChange={(e) => setTelefono(e.target.value)} type="text" />
            </div>
            <div>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            {
                compraFinalizada ?
                    (mensajePostCompra)
                    : (
                        <button onClick={() => finalizarCompra()} className="btn btn-success">Finalizar Compra</button>
                    )}

        </div>
    )
}

export default CheckOut