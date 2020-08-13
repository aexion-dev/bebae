import React, { Component, createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [showBackground, setShowBackground] = useState(false);

    const toggleBackground = (bool) => {
        setShowBackground(bool);
    }
    const { children } = props;
    return (
        <ThemeContext.Provider value={{ showBackground, toggleBackground }}>
             {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
