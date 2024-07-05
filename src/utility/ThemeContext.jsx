import React from "react";
import { createContext, useState } from "react";
export let ThemeStore = createContext(null);
let ThemeContext = ({children})=>{
    let [theme, setTheme] = useState(localStorage.getItem('Theme'))
    return(
        <ThemeStore.Provider value={{theme, setTheme}}>
            {children}
        </ThemeStore.Provider>
    )
}
export default ThemeContext;