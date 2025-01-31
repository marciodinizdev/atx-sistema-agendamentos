export default function Header() {
    return (
        <header className="header">
            <a href="/"><img className="logo" src="logo.png" alt="" /></a>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/suporte">Suporte</a></li>
                </ul>
            </nav>
        </header>
    );
}
