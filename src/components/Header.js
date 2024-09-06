import "../App.css"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigation = useNavigate()

const navigateContactPage = () => {
    navigation("textPage")    
}    

const navigateHomePage = () => {
    navigation("/")
}

    return (
        <div className="header">
            <p className="menuItem" onClick={navigateHomePage}>home</p>
            <p>|</p>
            <p className="menuItem" onClick={navigateContactPage}>contact</p>

        </div>
    )
}

export default Header