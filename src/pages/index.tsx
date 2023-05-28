import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Header from '@/components/header'
import Login from '@/components/login'
export default function Home() {
  const [autenticado, setAutenticado] = useState<boolean>(true);
  function renderizarImagens() {
    const listaImagens = [1, 2, 3, 4, 5]
    return listaImagens.map((imagem) => {
      return (
        <div style={{ display: "flex", flexWrap: "wrap", cursor: "pointer", width: '25%', justifyContent: "center", marginBottom: "10vh" }}>

          <img
            className={styles["imagem"]}
            src="/imgs/capa.jpg"
            height={300} // Desired size with correct aspect ratio
            width={250} // Desired size with correct aspect ratio
          />
        </div>
      )
    })
  }

  return (
    <>

      {autenticado ? (<>
        <Header name={"Catálogo de filmes"} /><div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", paddingTop: "10vh" }}>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>

            {renderizarImagens()}
            {renderizarImagens()}
            {renderizarImagens()}
            {renderizarImagens()}
            {renderizarImagens()}

          </div>
        </div></>) : <Login />}
    </>
  )
}
