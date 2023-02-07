import { createContext, useState } from "react";

const initialValue = {
    darkTheme: false,
    toggleDarkTheme: () => { }
}

export const themeContext = createContext(initialValue);

const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = (dark) => {
        if (dark !== undefined) {
            setDarkTheme(dark);
        } else {
            setDarkTheme(prev => !prev);
        }
    }

    const contextValue = {
        darkTheme: darkTheme,
        toggleDarkTheme: toggleDarkTheme
    }

    return (
        <themeContext.Provider value={contextValue}>
            {children}
        </themeContext.Provider>
    );
}

export default ThemeContextProvider;