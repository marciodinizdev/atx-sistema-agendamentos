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

            <p>&copy; {new Date().getFullYear()} ATX Tech - Todos os direitos reservados.</p>
        </footer>
    );
}
