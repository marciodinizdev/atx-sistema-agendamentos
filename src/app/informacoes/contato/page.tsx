export default function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco preenchendo o formulário abaixo ou utilizando um dos nossos canais de atendimento.</p>
            
            <h2>Informações de Contato</h2>
            <p><strong>Email:</strong> suporte@atxtech.com</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Endereço:</strong> Rua Prefeito João Inácio, S/N - Barra de Santa Rosa, PB</p>
            
            <section className="contato-form">
                <h2 >Formulário de Contato</h2>
                <form>
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
                        <span>Mensagem:</span>
                        <textarea name="mensagem" required></textarea>
                    </label>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
}
