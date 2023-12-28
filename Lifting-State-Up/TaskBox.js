const TaskBox = ({tasks, deletetaskfn}) => {

    return (
        <div>
            <ul>
                {tasks.map((eachTask) => 
                    (
                        <div style={{margin : "1rem 0rem"}} key={eachTask}>
                            <li style={{marginRight : "1rem"}}>{eachTask}</li>
                            <button onClick={() => {
                                deletetaskfn(eachTask)
                            }}>Delete</button> 
                        </div>
                    )
                )}
            </ul>
        </div>
    )
}

export default TaskBox;