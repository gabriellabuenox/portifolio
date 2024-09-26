import "../App.css";
import { useLocation } from "react-router-dom";
import minhaImagem from "../components/Group 257.svg"; // Caminho da sua imagem SVG

const Texto = () => {
    const location = useLocation();
    const { texto } = location.state || {}; // Pega o texto da navegação
    console.log(texto);

    return (
        <div style={{ backgroundColor: "black", height: "100vh", textAlign: "center" }}> {/* Fundo preto */}
            <h1 style={{ color: "white", paddingTop: "20px" }}>{texto}</h1> {/* Texto branco */}
            <img 
                src={minhaImagem} 
                alt="Imagem SVG" 
                style={{ 
                    marginTop: "20px",
                    width: "100%", // Ocupar 100% da largura
                    height: "auto", // Manter a proporção da altura
                    display: "block" // Remover possíveis espaçamentos ao redor da imagem
                }} 
            /> {/* Imagem SVG */}
        </div>
    );
};

export default Texto;
