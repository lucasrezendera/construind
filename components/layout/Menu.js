import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/evento">Evento</Link>
                </li>

                <li>
                    <Link href="/tour-360">Tour Virtual</Link>
                </li>

                <li>
                    <Link href="/expositores">Expositores</Link>
                </li>


                <li>
                    <Link href="/contato">Contato</Link>
                </li>
            </ul>
        </>
    )
}
