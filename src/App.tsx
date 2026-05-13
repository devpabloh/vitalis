import { useTheme } from "./hook/useTheme"

function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <>
     <h1 className="text-red-500">Aqui está funcionando, eu não sei se está funcionando ai {theme}</h1>
     <button onClick={toggleTheme}>Trocar Tema</button>
    </>
  )
}

export default App
