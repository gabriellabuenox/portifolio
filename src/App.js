import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home"
import Texto from "./pages/Texto"
import Header from "./components/Header";



const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="textPage" element={<Texto />} />
      </Routes>
    </Router>

  )
}

export default App