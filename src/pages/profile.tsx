import React, { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css';
import { useRouter } from "next/router"
import Header from '@/components/header';
import Login from '@/components/login';
import Playlist from '@/components/playlist';

export default function FilmeSelecionado() {
  const [favorito, setFavorito] = useState(false);
  const [profile, setProfile] = useState<any>();
  const [playlists, setPlaylists] = useState<any[]>()

  const router = useRouter();
  useEffect(() => {
    let auth = localStorage.getItem("autenticado")
    if (auth != undefined) {
      setAutenticado(true)
      getProfile(auth)
    }

  }, [])
  const [autenticado, setAutenticado] = useState<boolean>(false);
  const [idProfile, setIdProfile] = useState("0")
  const getProfile = async (idProfile: any) => {
    const retornoProfile = await fetch('api/getProfile', {
      method: "POST",
      body: JSON.stringify({ idProfile: idProfile }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (retornoProfile.status == 200) {

      const retorno = await retornoProfile.json();
      setProfile(retorno)
    }
  }

  function Autorizar(autorizado: boolean) {
    setAutenticado(autorizado)
    if (autorizado == false) {
      localStorage.clear()
    }
  }

  function renderizarPlaylists() {
    let playlist = "";
    profile.playlists?.forEach((codFilme:any) => {
      playlist+= codFilme + ";";
    });
    return (<>
      <div style={{ width: "80%" }}>
        <Playlist playlist={playlist}></Playlist>
      </div>
    </>
    )
  }
  return (
    <>
      {autenticado ? (<>
        <Header autenticado={Autorizar} name="Nome do Site" />
        {profile != undefined && <div className={styles.container}>
          <div style={{ display: 'flex', flexDirection: "column", width: "20%", justifyContent: "center", alignItems: "center" }}>
            <img src={profile.img == null ? ("imgs/profile.svg") : (profile.img)} width={250} style={{ border: "5px solid black", borderRadius: "50%" }}></img>
            <h2>{profile.name}</h2>
          </div>
          <div className={styles["playlists"]}>
            {renderizarPlaylists()}
          </div>
        </div>}
      </>) : (<Login autenticado={Autorizar}></Login>)}
    </>
  );
}
