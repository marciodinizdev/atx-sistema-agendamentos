import Image from "next/image"

export default function Card() {
    return (
        <div className="card" >
            <Image 
            src="/card1.png" alt="card" width={0} height={0} sizes="1920px" style={{ width: "auto", height: "auto" }} 
            />
        </div>
    )
}