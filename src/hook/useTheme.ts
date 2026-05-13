import { useContext } from "react";
import { ThemeContext } from "../contexts/theme/themeContext";

export function useTheme(){
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error ("UseTheme deve ser usado dentro de um ThemeProvider")
    }

    return context
}

// porque nós criamos um hook personalizado após criar um contexto e um provider ? para que possamos acessar o contexto de forma mais fácil e limpa em nossos componentes. Ao invés de importar o useContext e o ThemeContext toda vez que quisermos acessar o tema, podemos simplesmente usar o hook useTheme, que já encapsula essa lógica para nós. Isso torna nosso código mais legível e reduz a chance de erros, como esquecer de verificar se o contexto está definido antes de usá-lo.  

// para utilizar esse hook em um componente, basta importá-lo e chamá-lo dentro do corpo do componente. Por exemplo:

/*
import { useTheme } from "./hook/useTheme";

function MeuComponente() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>O tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    );
}

e as cores do thema eu posso configurar da seguinte forma no meu arquivo css:

:root {
    --color-background-light: #ffffff;
    --color-text-light: #000000;
    --color-background-dark: #000000;
    --color-text-dark: #ffffff;
}

body.light {
    background-color: var(--color-background-light);
    color: var(--color-text-light);
}

body.dark {
    background-color: var(--color-background-dark);
    color: var(--color-text-dark);
}
*/