import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [showBackground, setShowBackground] = useState(false);
    const [currentPageTheme, setCurrentPageTheme] = useState("default");

    const toggleBackground = (bool) => {
        setShowBackground(bool);
    }

    const changePageTheme = (type) => {
      setCurrentPageTheme(type);
    }

    const { children } = props;
    return (
        <ThemeContext.Provider value={{ showBackground, toggleBackground, currentPageTheme, changePageTheme }}>
             {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
