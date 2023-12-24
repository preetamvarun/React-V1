import React from "react";
import ReactDOM from 'react-dom/client'
import UserCard from "./UserCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./Error";
import { ProfileCard } from "./ProfileCard";

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path = {"/"} element = {<UserCard name = {"Varun"}/>}/>
                    <Route path = {"/about"} element = {<ProfileCard/>}/>
                    <Route path = {"*"} element = {<Error/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)