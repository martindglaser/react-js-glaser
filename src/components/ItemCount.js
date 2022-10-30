import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

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