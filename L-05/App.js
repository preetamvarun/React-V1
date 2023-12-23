import React from "react";
import ReactDOM from 'react-dom/client'
import UserCard from "./UserCard";

class App extends React.Component {
    render(){
        return (
            <div>
                <UserCard name = {"preetam"}/>
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)