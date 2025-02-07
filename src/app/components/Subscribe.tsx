"use client";

import { useState } from "react";
import Image from "next/image";

export default function Subscribe() {
    const [inscrito, setInscrito] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setInscrito(true);
    };

    return (
        <div className="subscribe-container">
            <h3>Inscreva-se para receber nossas novidades!</h3>

            {inscrito ? (
                <div>
                    <p>Obrigado por se inscrever! Você receberá nossas atualizações em breve. ✅</p>
                  
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Seu melhor email" required />
                    <button type="submit">Inscrever-se</button>
                </form>
            )}
        </div>
    );
}
