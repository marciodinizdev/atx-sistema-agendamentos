"use client";

import { useState } from "react";
import Image from "next/image";

export default function AgendamentoPage() {
    const [agendado, setAgendado] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAgendado(true);
    };

    return (
        <div>
            <h1>Página de Agendamento</h1>
            <p>Agende a sua reunião remota ou visita técnica preenchendo o formulário abaixo.</p>
            <hr /> <br />

            <section className="agendamento-form">
                <h2>Formulário de Agendamento</h2>

                {agendado ? (
                    <div>
                        <p>Seu agendamento foi realizado com sucesso! Entraremos em contato para confirmar os detalhes.</p>
                        <Image src="/agendamento-sucesso.png" alt="Agendamento realizado" width={200} height={200} />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Nome:</span>
                            <input type="text" name="nome" required />
                        </label>
                        <br />
                        <label>
                            <span>Email:</span>
                            <input type="email" name="email" required />
                        </label>
                        <br />
                        <label>
                            <span>Telefone:</span>
                            <input type="tel" name="telefone" required />
                        </label>
                        <br />
                        <label>
                            <span>Tipo de Agendamento:</span>
                            <select name="tipo" required>
                                <option value="">Selecione</option>
                                <option value="remoto">Reunião Remota</option>
                                <option value="presencial">Visita Técnica</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            <span>Data e Hora:</span>
                            <input type="datetime-local" name="dataHora" required />
                        </label>
                        <br />
                        <button type="submit">Agendar</button>
                    </form>
                )}
            </section>
        </div>
    );
}
