export default function Header() {
    return (
        <header className="header">
            <a href="/"><img className="logo" src="/logo.png" alt="Logo ATX Tech" /></a>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/suporte">Suporte</a></li>
                    <li><a href="/informacoes/sobre">Sobre</a></li>
                    <li><a href="/informacoes/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
