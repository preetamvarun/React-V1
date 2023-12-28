import InputBox from "./InputBox";
import React from "react";


const ParentBox = ({children}) => (
    <React.Fragment>
        <h1>This is Parent Box</h1>
        {children}
    </React.Fragment>
)

export default ParentBox;