import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({})

export function useDarkMode() {
    return useContext(DarkModeContext)
}

export function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const [theme, setTheme] = useState(() => getTheme());

    function getTheme() {
        if (isDark) return 'dark'
        return 'light'
    }

    useEffect(() => {
        setTheme(() => getTheme());
    }, [isDark])

    const toggleDarkMode = () => {
        console.log(isDark);
        setIsDark(!isDark)
    }

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode, theme }}>
            {children}
        </DarkModeContext.Provider>
    )
}