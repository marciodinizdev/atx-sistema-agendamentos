import Image from "next/image"

export default function Card() {
    return (
        <div className="banner" >
            <Image 
            src="/banner.png" alt="banner" width={0} height={0} sizes="1920px" style={{ width: "auto", height: "auto" }} 
            />
        </div>
    )
}