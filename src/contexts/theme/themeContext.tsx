import { createContext } from 'react'; // é responsável por criar um "espaço de armazenamento global" (o Contexto). Ele permite que você guarde informações que precisam ser acessadas por vários componentes em diferentes níveis da sua aplicação (como o tema atual), sem precisar ficar passando essas propriedades manualmente de "pai para filho" (o famoso prop drilling).

export type Theme = 'light' | 'dark'; // Aqui está definindo um tipo estrito no TypeScript chamado Theme. Usando o operador | (Union Type), você garante que qualquer variável tipada como Theme só poderá receber exatamente a string "light" ou a string "dark". O export no início permite que você use esse tipo em outros arquivos.

/* 

Neste bloco, você está definindo o formato (a "assinatura") dos dados que o seu contexto vai guardar. Você está dizendo que o contexto precisa fornecer duas coisas:

    * theme: O valor do tema atual (usando o tipo restrito que você acabou de criar).

    * toggleTheme: Uma função que não recebe nenhum argumento e não tem retorno (void). O objetivo dessa função será alternar o tema quando chamada por um botão, por exemplo.

*/
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
