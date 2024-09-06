import "../App.css";
import { useLocation } from "react-router-dom";

const Texto = () => {
    const location = useLocation();
    const { texto } = location.state || {}; // Pega o texto da navegação
    console.log(texto);

    return (
        <div style={{ backgroundColor: "black", height: "100vh" }}> {/* Fundo preto */}
            <h1 style={{ color: "white" }}>{texto}</h1> {/* Texto branco */}
        </div>
    );
};

export default Texto;
