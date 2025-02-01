import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="header">
            <nav>
                <div className="nav-container">
                    <Link href="/">
                    <Image className="logo" src="/logo.png" alt="Logo ATX Tech" width={0} height={0} sizes="140px" style={{ width: "auto", height: "auto" }}/>
                    </Link>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/suporte">Suporte</a></li>
                        <li><a href="/informacoes/sobre">Sobre</a></li>
                        <li><a href="/informacoes/contato">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
