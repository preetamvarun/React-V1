import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({children}) => {

     let themeContextValue = useContext(ThemeContext);

     let [mode, setMode] = useState(themeContextValue.mode);

     const toggleTheme = () => {
        // setMode(currentMode === 'light' ? 'dark' : 'light')
        setMode((currentMode) => currentMode === 'light' ? "dark" : "light")
     }

     themeContextValue = {
        mode,
        toggleTheme
     }

    return (
        <ThemeContext.Provider value = {themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
