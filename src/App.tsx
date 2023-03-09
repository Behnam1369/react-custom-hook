import useTheme from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <h1>{`The app theme is ${theme}`}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default App;
