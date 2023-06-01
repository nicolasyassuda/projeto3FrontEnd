import styles from "../styles/Home.module.css"
import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
interface FilmesProps {
    title: string,
    poster: string,
    codFilme: number
}
export default function Filmes(props: FilmesProps) {
    const [estiloTextoFilme, setEstiloTextoFilme] = useState(false)
    const styleTextoFilme = estiloTextoFilme ? ("texto-vazio") : ("texto-filme");
    const { poster, title, codFilme } = props;
    const router = useRouter();

    return (
        <div className={styles["filme"]} onClick={() => router.push("filmeSelecionado?codFilme=" + codFilme)}>
            <img onMouseOver={() => setEstiloTextoFilme(true)} onMouseLeave={() => setEstiloTextoFilme(false)}
                className={styles["imagem"]}
                src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + poster} />
            <h2 className={styles[styleTextoFilme]}>{title}</h2>
        </div>
    )
}   