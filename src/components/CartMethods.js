import context from "react-bootstrap/esm/AccordionContext";

export const addItem = (context, idItem, quantity, stock) => {

    const item = context.filter(obj => {
        return obj.id === idItem;
    })
    const itemIndex = context.findIndex(obj => {
        return obj.id === idItem;
    })


    if (item.length === 0 && quantity <= stock) {
        context.push({ quantity: quantity, id: idItem })
        return (context);
    }

    if (item.length === 1 && item[0].quantity + quantity <= stock) {

        context[itemIndex].quantity += quantity;
        return (context);
    }
    return (context)
}

export const removeItem = (context, idItem) => {
    const itemIndex = context.findIndex(obj => {
        return obj.id === idItem;
    })
    context.splice(itemIndex, 1);
    return (context)
}

export const setItemCart = (context, idItem, quantity, stock) => {

    if (quantity > stock) {
        return (context)
    }

    const itemIndex = context.findIndex(obj => {
        return obj.id === idItem;
    })


    context[itemIndex].quantity = quantity;
    console.log(context)
    return (context)

}

export const clear = () => {
    return ([]);
}

export const isInCart = (idItem) => {

}