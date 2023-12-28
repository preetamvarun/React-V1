import React from "react";
import ReactDOM from 'react-dom/client';
import InputBox from "./InputBox";
import {useState} from 'react';
import TaskBox from "./TaskBox";
import ParentBox from "./ParentBox";

const App = () => {
    const [tasks, Settasks] = useState(['Do Meditation', 'Learn Recursion', 'Read Atomic Habits']);

    const AddTasks = (taskName) => Settasks([...tasks, taskName]);

    const DeleteTasks = (taskName) => {
        const newTasks = [...tasks];
        const idx = newTasks.indexOf(taskName);
        newTasks.splice(idx,1);
        Settasks(newTasks)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ParentBox>
                <InputBox addtaskfn = {AddTasks}/>
                <TaskBox tasks = {tasks} deletetaskfn = {DeleteTasks}/>
            </ParentBox>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>);