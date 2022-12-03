import { useState } from "react";

const ItemCount = ({ value, stock, id, onClick }) => {
    let valueCounter;
    if (value === undefined || value === null) {
        valueCounter = 0;
    } else {
        valueCounter = value
    }

    const [count, setCount] = useState(valueCounter);


    onClick(count, id, stock)

    return (
        <div>
            <button style={{ marginRight: 10 }} className="btn btn-outline-primary" onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>-</button>
            <span>{count}</span>
            <button style={{ marginLeft: 10 }} className="btn btn-outline-primary" onClick={() => {
                if (count < stock) {
                    setCount(count + 1)
                }
            }}>+</button>
        </div >
    );
}
export default ItemCount;