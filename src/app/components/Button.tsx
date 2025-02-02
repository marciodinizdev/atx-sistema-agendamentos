import Link from "next/link";

export default function Button() {
    return (
        <Link href={"/agendamento"}>
            <button className="btn">Realizar Agendamento</button>
        </Link>
    )
}