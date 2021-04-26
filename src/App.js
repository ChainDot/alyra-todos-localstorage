import { useEffect, useState } from "react";
import Todos from "./components/Todos";

const App = () => {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem("myMode"))
  );
  const onChange = darkMode ? "bg-dark text-white" : "bg-light";

  useEffect(() => {
    localStorage.setItem("myMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-vh-100 ${onChange}`}>
      <div className="py-4 container">
        <h1 className="text-center">ToDos App</h1>
        <Todos darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default App;
