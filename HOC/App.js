import React from "react";
import ReactDOM from 'react-dom/client'
import Counter from "./Counter";
import { useEnhancedCounter } from "./useEnhancedCounter";

/*
    Generate a random variable. If you get 1 display enchanced counter else display normal counter
    Here enchanced counter is counter with an emoji
*/

const App = () => {

    let value = Math.round(Math.random());

    const EnhancedCounter = useEnhancedCounter(Counter);

    return (
        <div>
           {value ? <EnhancedCounter startCount = {30}/> : <Counter startCount = {10}/>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);