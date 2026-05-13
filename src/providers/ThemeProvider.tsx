import { type ReactNode, useMemo, useState, useEffect } from "react";
import { type Theme, ThemeContext } from "../contexts/theme/themeContext";

type props = {
    children: ReactNode // utilizamos o ReactNode para indicar que a propriedade children pode ser qualquer coisa que o React possa renderizar, como elementos JSX, strings, números, arrays de elementos, etc. Isso é útil para garantir que o componente ThemeProviders seja flexível e possa envolver qualquer tipo de conteúdo dentro dele.
}

export function ThemeProviders({children}:props){
    const [theme, setTheme] = useState<Theme>("light") 

    useEffect(
        ()=> {
            document.body.className = theme;
        }, [theme]
    )

    function toggleTheme(){
        setTheme((prev)=> (prev === "light" ? "dark" : "light"))
    }

    const value = useMemo(()=> {
        return {
            theme,
            toggleTheme
        }
    },[theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}