import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }} className="btn btn-outline-primary">-</button>
            <span>{count}</span>
            <button onClick={() => {
                if (count < stock) {
                    setCount(count + 1)
                }
            }} className="btn btn-outline-primary">+</button>
        </div >
    );
}
export default ItemCount;