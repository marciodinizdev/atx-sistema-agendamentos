import Card from "./components/Card"

export default function HomePage() {
    return (
        
        <div className="homepage">
            <Card />
            <div className="text-content">
                <h1>Bem-vindo ao ATX Tech</h1>
                <p>Faça o seu agendamento hoje mesmo e iremos resolver o seu problema!</p>
            </div>
        </div>
    )
}