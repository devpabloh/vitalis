# ContextAPI vs Redux - Guia para Agentes IA

Projeto de aprendizado comparando Context API e Redux. Foco atual: implementação de sistema de temas com sincronização CSS.

## Arquitetura do Projeto

### Stack Tecnológico
- **React 19** + **TypeScript** com Vite
- **Tailwind CSS 4** para estilos utilitários
- **Context API** para gerenciamento de estado (temas)

### Estrutura Chave
```
src/
├── contexts/theme/
│   └── themeContext.tsx      # Define ThemeContextType e ThemeContext
├── hook/
│   └── useTheme.ts           # Hook customizado para acessar tema
├── providers/
│   └── ThemeProvider.tsx      # Provider que gerencia estado do tema
└── index.css                 # Variáveis CSS e seletores de tema
```

## ⚠️ Problema Crítico: Sincronização de Tema CSS

**Situação:** Colors definidas em `index.css` não funcionam ao trocar o tema.

**Causa Raiz:**
- O `ThemeProvider` mantém o estado do tema em React
- **MAS** nunca atualiza a classe `body` do HTML para `light` ou `dark`
- CSS com seletores `body.light { }` e `body.dark { }` não é acionado
- Variáveis CSS do `:root` não refletem a mudança de tema

**Como o CSS está estruturado:**
```css
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
```

## ✅ Solução: Sincronizar Estado React com DOM

No `ThemeProvider.tsx`, adicione um `useEffect` que atualize a classe `body` quando o tema mudar:

```typescript
import { type ReactNode, useMemo, useState, useEffect } from "react";
import { type Theme, ThemeContext } from "../contexts/theme/themeContext";

type props = {
    children: ReactNode
}

export function ThemeProviders({ children }: props) {
    const [theme, setTheme] = useState<Theme>("light")

    // ✅ ADICIONE ISTO:
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const value = useMemo(() => {
        return {
            theme,
            toggleTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
```

**O que o `useEffect` faz:**
1. **Observa** mudanças no estado `theme`
2. **Atualiza** `document.body.className = theme` para `"light"` ou `"dark"`
3. **Dispara** as regras CSS correspondentes (`body.light { }` ou `body.dark { }`)
4. **Variáveis CSS** são aplicadas e suas cores funcionam

## Convenções do Projeto

### Nomenclatura de Variáveis CSS
- Format: `--color-{uso}-{tema}` (ex: `--color-background-light`, `--color-text-dark`)
- Sempre defineir pares correspondentes para light/dark

### Organização do Tema
- `contexts/theme/` → Lógica de contexto (tipos, criação)
- `hook/useTheme.ts` → Interface para componentes consumirem o tema
- `providers/ThemeProvider.tsx` → Gerenciador de estado (com sincronização DOM)
- `index.css` → Variáveis e seletores CSS

### Usando o Tema em Componentes
```typescript
import { useTheme } from "./hook/useTheme";

function MeuComponente() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div>
            <p>Tema atual: {theme}</p>
            <button onClick={toggleTheme}>Alternar</button>
        </div>
    );
}
```

## Checklist: Por que as cores não estão aparecendo?

Se o tema muda (você vê o texto mudar) **MAS as cores CSS não aparecem**, siga este checklist:

### 1️⃣ Verificar Sincronização com DOM
```bash
# DevTools → F12 → Elements
# Procure por: <body class="light"> ou <body class="dark">
# Clique no botão "Trocar Tema" e veja se a classe muda para "dark"
```
❌ Se NÃO muda → Falta `useEffect` no ThemeProvider  
✅ Se muda → Vá para próximo passo

### 2️⃣ Verificar Variáveis CSS Definidas
```css
/* DevTools → Elements → Styles → :root */
/* Procure por: --color-background-light, --color-background-dark, etc. */
```
❌ Se NÃO existem → Adicione em `index.css`  
✅ Se existem → Vá para próximo passo

### 3️⃣ Verificar Seletores CSS
```css
/* DevTools → Elements → Styles → body.light ou body.dark */
/* Procure pelas regras CSS de background-color e color */
```
❌ Se aparecem "striked through" (riscados) → Há conflito de especificidade  
❌ Se NÃO aparecem → Seletores não existem em `index.css`  
✅ Se aparecem normalmente → Vá para próximo passo

### 4️⃣ Verificar Especificidade CSS (Problema Comum!)

**Problema:** Tailwind pode estar sobrescrevendo seus estilos

**Solução:** Use `!important` ou elevar especificidade:

```css
/* index.css */
body.light {
    background-color: var(--color-background-light) !important;
    color: var(--color-text-light) !important;
}

body.dark {
    background-color: var(--color-background-dark) !important;
    color: var(--color-text-dark) !important;
}
```

### 5️⃣ Verificar Aplicação do Provider

```bash
# DevTools → Console
# Execute: document.body.className
# Deveria retornar: "light" ou "dark"

# Se retornar vazio ("") → Provider não está sincronizando
```

### 6️⃣ Verificar Se o HTML tem classe inicial

```html
<!-- index.html -->
<body class="light">  <!-- ← Certifique que tem isso -->
  <div id="root"></div>
</body>
```

---

## Fluxo Correto Completo

```
1. HTML carrega com <body class="light">
                             ↓
2. React renderiza → ThemeProvider monta
                             ↓
3. useState("light") inicializa
                             ↓
4. useEffect roda → document.body.className = "light"
                             ↓
5. CSS body.light { ... } é acionado ✅
                             ↓
6. Clica botão → toggleTheme()
                             ↓
7. setState("dark")
                             ↓
8. useEffect roda → document.body.className = "dark"
                             ↓
9. CSS body.dark { ... } é acionado ✅
```

---

## Próximos Passos para Agentes IA

Ao trabalhar neste projeto:

1. **Antes de implementar estilos com tema:**
   - Verifique se `useEffect` no `ThemeProvider` sincroniza `body.className`
   - Teste com DevTools: verificar se `<body class="light">` ou `<body class="dark">` mudam

2. **Ao adicionar novas cores temáticas:**
   - Adicione pares em `index.css` (`--color-{uso}-light` e `--color-{uso}-dark`)
   - Use `var(--color-{uso}-{tema})` no CSS
   - Use `!important` se Tailwind sobrescrever

3. **Ao debugar cores não funcionando:**
   - ✅ DevTools: Inspecione `<body>` e veja se classe está mudando
   - ✅ DevTools: Verifique se variáveis CSS existem em `:root`
   - ✅ DevTools: Verifique se seletores `body.light` / `body.dark` estão sendo aplicados
   - ✅ Considere usar `!important` para evitar conflito com Tailwind

## Links de Referência

- React Context: https://react.dev/reference/react/useContext
- React useEffect: https://react.dev/reference/react/useEffect
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- Tailwind CSS: https://tailwindcss.com/
