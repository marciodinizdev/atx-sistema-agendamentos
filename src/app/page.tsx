import Banner from "./components/Banner"
import Button from "./components/Button"
import Cards from "./components/Cards"

export default function HomePage() {
    return (
        
        <div className="home-page">
            <div className="banner-container">
                <Banner />
                <div className="text-button">
                    <div className="text-content">
                        <h1>Bem-vindo ao ATX Tech</h1>
                        <p>Faça o seu agendamento hoje mesmo e iremos resolver o seu problema!</p>
                    </div>
                    <Button />
                </div>
                
            </div>
            <Cards />

        </div>
    )
}