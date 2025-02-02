"use client";  

import Image from "next/image"
import { useState } from "react"

export default function Cards() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <div className="cards">
            <div 
                onMouseEnter={() => setHoveredCard("card1")}
                onMouseLeave={() => setHoveredCard(null)}
                className="card" id="card1">
                <Image 
                    src={hoveredCard === "card1" ? "/card1hovered.png" : "/card1.png"} 
                    alt="Banner" 
                    width={70} 
                    height={70} 
                />
                <h3>Suporte Online</h3> 
                <p>Receba ajuda personalizada para suas necessidades técnicas.</p>
            </div>

            <div
                onMouseEnter={() => setHoveredCard("card2")}
                onMouseLeave={() => setHoveredCard(null)}
                className="card" id="card2">
                <Image 
                    src={hoveredCard === "card2" ? "/card2hovered.png" : "/card2.png"} 
                    alt="Banner" 
                    width={70} 
                    height={70} 
                />
                <h3>Atendimento 24/7</h3>
                <p>Estamos disponíveis a qualquer hora para te ajudar sempre.</p>
            </div>

            <div
                onMouseEnter={() => setHoveredCard("card3")}
                onMouseLeave={() => setHoveredCard(null)}
                className="card" id="card3">
                <Image 
                    src={hoveredCard === "card3" ? "/card3hovered.png" : "/card3.png"} 
                    alt="Banner" 
                    width={70} 
                    height={70} 
                />
                <h3>Gestão de Problemas</h3>
                <p>Cuidamos de todas as suas questões com rapidez e eficiência.</p>
            </div>
        </div>
    );
}