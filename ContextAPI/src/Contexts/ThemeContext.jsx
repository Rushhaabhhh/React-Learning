import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    // Function to set light theme
    const lightTheme = () => {
        setThemeMode('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    };

    // Function to set dark theme
    const darkTheme = () => {
        setThemeMode('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    };

    // Apply theme on initial load
    useEffect(() => {
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };
export default ThemeContext;
