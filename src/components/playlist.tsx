import { useState } from "react";
import styles from "../styles/profile.module.css"
interface PropsPlaylist {
    playlist: any

}

export default function playlist(props: PropsPlaylist) {
    const [listaFilmes, setListaFilmes] = useState<any[]>()
    const getListaFilmes = async (playlist: any) => {
        const retornoProfile = await fetch('api/getListaFilmes', {
            method: "POST",
            body: JSON.stringify({ listaCodFilmes: playlist}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const retorno = await retornoProfile.json();
        setListaFilmes(retorno)
    }

    function renderizarFilmes() {
        getListaFilmes(props.playlist)
        return <div  style={{ display: "flex", paddingLeft:"3vw" }}> {listaFilmes?.map(filme => {
            
            return (
                <div className={styles["filme"]}>
                    <img 
                        className={styles["imagem"]}
                        src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + filme.poster_path} />
                    <p>{filme.title}</p>
                </div>)
        })}</div>
    }
    return (
        <>
            <h1>Favoritos</h1>
            {renderizarFilmes()}
        </>
    )
}