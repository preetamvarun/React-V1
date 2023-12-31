import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";


const Card1 = () => {

    const themeContext = useContext(ThemeContext);

    const styles = {
        border : '1px solid red',
        display : 'inline-block',
        padding : '1rem',
        backgroundColor : `${themeContext.mode === 'light' ? 'white' : 'black'}`,
        color : `${themeContext.mode === 'light' ? 'black' : 'white'}`
    }

    const handleClick = () => {
        themeContext.toggleTheme()
    }

    return (
        <div style={styles}>
            <p style={{fontSize : '1.25rem'}}>Name : Fruits</p>
            <ul style={{listStyle : 'none'}}>
                <li>Grape</li>
                <li>Mango</li>
                <li>Banana</li>
            </ul>
            <button onClick = {handleClick}>change theme</button>
        </div>
    )
}

export default Card1;