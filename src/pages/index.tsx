import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
export default function Home() {
  const [autenticado, setAutenticado] = useState<boolean>(false);
  function renderizarImagens() {
    const listaImagens = [1, 2, 3, 4, 5]
    return listaImagens.map((imagem) => {
      return (
        <div style={{ flexWrap: "wrap", width: "20vw", cursor: "pointer", marginBottom:'4vh' }}>

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
  function header(){
    return(
      <div className="bg-cyan-400 h-20">
      </div>
    )
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "1vw", width: "100vw",marginLeft:"2vw", justifyContent: "center", alignItems: "center" }}>
      <div>
        {header()}
      </div>
      <div style={{ display: 'grid', marginTop: '2vh', gridTemplateColumns: "20vw 20vw 20vw 20vw 20vw" }}>

          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}
          {renderizarImagens()}

      </div>
    </div>

  )
}
