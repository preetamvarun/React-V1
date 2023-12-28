import { useState } from "react";

const InputBox = ({addtaskfn}) => {
    const [inputValue, SetinputValue] = useState('');

    const handleInput = (evt) => {
        evt.preventDefault();
        SetinputValue(evt.target.value);
    }

    const handleAddTask = () => {
        addtaskfn(inputValue);
    }

    return (
        <div className="input-box">
            <input type="text" placeholder="enter a todo" value={inputValue} onInput={handleInput}/>
            <button type="button" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default InputBox;