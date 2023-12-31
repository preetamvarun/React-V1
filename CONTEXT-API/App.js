import React from "react";
import ReactDOM from 'react-dom/client';
import Card1 from "./Card1";
import { ThemeContextProvider } from "./ThemeContextProvider";

const App = () => {
    return (
        <>
            <ThemeContextProvider>
                <Card1/>
            </ThemeContextProvider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)



