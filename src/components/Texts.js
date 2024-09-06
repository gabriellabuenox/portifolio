import "../App.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Textos = () => {
    const navigate = useNavigate();

    const meusTextos = [
        "O autodiagnóstico na era digital: entre informações e riscos",
        "b",
        "c"
    ];

    const navigateText = (texto) => {
        navigate("textPage", { state: { texto: texto } }); // Envia o texto clicado
    };

    useEffect(() => {
        console.log(meusTextos);
    }, []);

    return (
        <div className="textosContainer">
            {meusTextos.map((texto, index) => (
                <div 
                    key={index} 
                    className="textDiv" 
                    onClick={() => navigateText(texto)} // Passa o texto para a função
                >
                    <p className="textP">{texto}</p>
                </div>
            ))}
        </div>
    );
};

export default Textos;
