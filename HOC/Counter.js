import { useState } from "react"
import React from "react"

const Counter = ({startCount}) => {
    let [count, setCount] = useState(startCount)

    const incrementCount = () => {
        setCount(++count);
    }

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter;