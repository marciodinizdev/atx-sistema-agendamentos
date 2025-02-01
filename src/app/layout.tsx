import Footer from "./components/Footer";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import "./styles/globals.css"

export const metadata = {
    title: "ATX Tech | Faça seu agendamento",
    description: "Serviços especializados em suporte técnico",
    icons: {
        icon: "/favicon.png",
    },
}
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <body>
                <Header />
                <main className="container">
                    {children}
                </main>
                <Subscribe />
                <Footer />
            </body>
        </html>
    );
}
