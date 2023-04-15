import { useEffect, useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };
  

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  

  const toggle = "☀";

  const [item, setItem] = useState("unknown");

  return (
    <>
      <button onClick={() => setItem("item")}>item</button>
      <button onClick={() => setItem("list")}>list</button>
      <button onClick={() => setItem("icon")}>icon</button>
      <h1>{item}</h1>
      <button className="button" onClick={toggleTheme}>
        {toggle}
      </button>
      <hr />
      <Message />
      <br />
      <br />
      <ListGroup />
    </>
  );

  
};

export default App;
