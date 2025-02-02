import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <Link href="/">
                <Image
                    className="logo"
                    src="/favicon.png"
                    alt="Logo ATX Tech"
                    width={0}
                    height={0}
                    sizes="50px"
                    style={{ width: "auto", height: "auto" }}
                />
            </Link>

            <p>&copy; 2024 ATX Tech. Todos os direitos reservados | Site desenvolvido por <a href="https://github.com/marciodinizdev" target="_blank">marciodinizdev™</a></p>

        </footer>
    );
}
