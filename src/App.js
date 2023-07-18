import "./App.css";
import Main from "./Component/Main";
import ThemeContext from "./Context/ThemeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <Main handleMode={handleMode} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
