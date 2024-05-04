import { useState } from "react";
import "./useState.css";

const UseState = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>
                Click to increment
            </button>
            <p></p>
        </div>
    )
}

export default UseState;