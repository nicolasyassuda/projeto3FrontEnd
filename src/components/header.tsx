import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import Image from "next/image"


interface HeaderProps {
    name: string
    autenticado: (autorizado:boolean) => any
}
export default function Header(props:HeaderProps) {
    const router = useRouter()
    return (
        <div className={styles["header"]}>
            <p style={{fontSize:"29px", fontWeight:"bold" ,cursor:"pointer"}} onClick={()=> router.push("/")}>KNBS-Movies</p>
            <p style={{fontSize:"29px", fontWeight:"bold" ,cursor:"pointer"}} onClick={()=> router.push("/profile")}>Perfil</p>
            <p style={{fontSize:"29px", cursor:"pointer"}} onClick={()=>props.autenticado(false)}>Sair</p>
        </div>
    )
}