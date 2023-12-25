import { useState } from "react"
import React from "react"

const Counter = () => {
    let [count, setCount] = useState(0)

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