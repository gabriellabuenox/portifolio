import "../App.css"
import React, { useEffect } from "react"


const Textos = () => {
    const meusTextos = [
        "O autodiagnóstico na era digital: entre informações e riscos",
        "b",
        "c"
        ]
    useEffect(() => {
        console.log(meusTextos)

    })
    return (
        <div className="textosContainer">
            {meusTextos.map((texto, index) => (
                <div key={index} className="textDiv">
                    <p className="textP">{texto}</p>
                </div>
            ))}
        </div>
    );
};

export default Textos
