import { Routes, Route, BrowserRouter } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import "./App.css";
import "./theme.scss";
import style from "./App.module.scss";
import Logs from "./pages/Logs";
import Nav from "./components/Nav";
import Modal from "./pages/Modal";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`app ${theme} ${style.app}`}
      style={{ backgroundColor: "red" }}
    >
      <header>
        <h1> Pioneering Programmers Test App </h1>
      </header>
      <main>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Logs theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route path="/modal" element={<Modal theme={theme} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
