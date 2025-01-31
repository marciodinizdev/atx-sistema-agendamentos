import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <body>
                <Header />
                <main className="container">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
