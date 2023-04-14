import { useEffect, useState } from "react"
import './App.css'
import ListGroup from './components/ListGroup'
import Message from './Message'


const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

    const toggleTheme = () => {
      if(theme === "light"){
        setTheme("dark")
      }
      if(theme === "dark"){
        setTheme("light")
      }
    }

    useEffect(()=>{
      localStorage.setItem("theme", theme)
      document.body.className = theme
    }, [theme])

    const toggle = "☀"

    return (
      <>
        <button className="button" onClick={toggleTheme} >{toggle}</button>
        <hr />

        <br />
        <br />
        <Message />
      </>
    )
}

export default App