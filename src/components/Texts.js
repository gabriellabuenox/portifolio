import "../App.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Textos = () => {
  const navigate = useNavigate();

  const meusTextos = [
    {
      "titulo": "O autodiagnóstico na era digital: entre informações e riscos",
      "imagem": "/Users/ronaldsantos/Desktop/portifolio/src/components/Group 257.svg", // Caminho da imagem
    },
  ];

  const navigateText = (texto) => {
    navigate("textPage", { state: { texto: texto.titulo, imagem: texto.imagem } }); // Passa o texto e a imagem
  };

  useEffect(() => {
    console.log(meusTextos);
  }, []);

  return (
    <div className="mainTextContainer">
      <h1> ✷ meus textos</h1>

      <div className="textosContainer">
        {meusTextos.map((texto, index) => (
          <div
            key={index}
            className="textDiv"
            onClick={() => navigateText(texto)} // Passa o objeto completo (titulo e imagem)
          >
            <p className="textP">{texto.titulo}</p> {/* Exibe o título */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Textos;
