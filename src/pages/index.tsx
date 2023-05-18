import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'

export default function Home() {

  function renderizarImagens() {
    const listaImagens = [1, 2, 3, 4, 5]
    return listaImagens.map((imagem) => {
      return (
        <div style={{ flexWrap: "wrap", width: "20vw", cursor: "pointer", marginBottom: '4vh' }}>

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
      <Header name={"pao"}>
      
      </Header>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "1vw", width: "100vw", marginLeft: "2vw", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: 'grid', marginTop: '2vh', gridTemplateColumns: "20vw 20vw 20vw 20vw 20vw" }}>

          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}

        </div>
      </div>
    </>
  )
}
