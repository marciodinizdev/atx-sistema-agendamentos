"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const pathName = usePathname();

    return (
        <header className="header">
            <nav>
                <div className="nav-container">
                    <Link href="/">
                        <Image 
                            className="logo" 
                            src="/logo.png" 
                            alt="Logo ATX Tech" 
                            width={0} 
                            height={0} 
                            sizes="140px" 
                            style={{ width: "auto", height: "auto" }} 
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link 
                                href="/" 
                                className={pathName === "/" ? "active" : ""}>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/suporte" 
                                className={pathName === "/suporte" ? "active" : ""}>
                                Suporte
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/informacoes/sobre" 
                                className={pathName === "/informacoes/sobre" ? "active" : ""}>
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/informacoes/contato" 
                                className={pathName === "/informacoes/contato" ? "active" : ""}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
