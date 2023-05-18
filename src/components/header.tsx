import styles from "../styles/Home.module.css"
import Image from "next/image"
interface HeaderProps {
    children: React.ReactNode,
    name: string
}
export default function Header(props:HeaderProps) {
    return (
        <div className={styles["header"]}>
            {props.name}
        </div>
    )
}