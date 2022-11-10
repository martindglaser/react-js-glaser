
import { Productos, Categorias } from "../components/Productos.json.js";

export const getProducts = (id) => {
    const getItems = new Promise((resolve, reject) => {
        const ArrayItems = Productos;
        setTimeout(() => resolve(ArrayItems), 2000);
    });
    getItems.then(result => {
        let respuesta;
        if (id !== undefined && id !== null) {
            result.filter(obj => {
                respuesta = obj.categoriaId == id;
            }
            )
        } else {
            respuesta = result;
        }
        return respuesta;
    });
}