import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [selected, setSelected] = useState(""); // Estado para item selecionado
    const navigation = useNavigate();

    const navigateContactPage = () => {
        setSelected("contact"); // Define 'contact' como selecionado
        navigation("textPage");
    };

    const navigateHomePage = () => {
        setSelected("home"); // Define 'home' como selecionado
        navigation("/");
    };

    return (
        <div className="header">
            <p 
                className={`menuItem ${selected === "home" ? "selected" : ""}`} 
                onClick={navigateHomePage}
            >
                home
            </p>
            <p>|</p>
            <p 
                className={`menuItem ${selected === "contact" ? "selected" : ""}`} 
                onClick={navigateContactPage}
            >
                contact
            </p>
        </div>
    );
};

export default Header;
