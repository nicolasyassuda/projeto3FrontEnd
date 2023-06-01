import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Login from '@/components/login'
import Filmes from '@/components/filmes'
export default function Home() {
  const [autenticado, setAutenticado] = useState<boolean>(false);
  const [filmeAdicionado, setFilmeAdicionado] = useState("");
  const [filmes, setFilmes] = useState<any[]>()
  useEffect(() => {
    getFilmes()
    let auth = localStorage.getItem("autenticado")
    if(auth!=undefined){
      setAutenticado(true)
    }
  }, [])

  const AdicionarFilme = async () => {

    const retornoFilmes = await fetch('./api/adicionarFilme', {
      method: 'POST',
      body:JSON.stringify({nomeFilme:filmeAdicionado}),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (retornoFilmes.status == 200) {
      await getFilmes()

    }
    
  }
  const getFilmes = async () => {

    const retornoFilmes = await fetch('./api/getFilmes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (retornoFilmes.status == 200) {
      const retorno = await retornoFilmes.json();
      if (retorno === "Por favor, contacte a Smartbrain.") {
        setFilmes([]);
      }
      else {
        console.log(retorno)
        setFilmes(retorno)

      }


    }

  }
  function renderizarImagens() {
    const listaImagens = [1, 2, 3, 4, 5]
    return filmes?.map((filme) => {
      if (filme.original_title == null || filme.poster_path == null) {
        return(
          <div>

          </div>
        )
      } else {
        return (
          <Filmes title={filme.original_title} poster={filme.poster_path} codFilme={filme.id}></Filmes>
        )
      }
    })
  }
  function Autorizar(autorizado:boolean){
    setAutenticado(autorizado)
    if(autorizado==false){
      localStorage.clear()
    }
  }
  return (
    <>

      {autenticado ? (<>
        <Header autenticado={Autorizar} name={"Catálogo de filmes"} /><div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", paddingTop: "20px" }}>
          <div style={{paddingBottom:"45px",alignItems:"center",display:"flex",flexDirection:"column"}}>
              <p style={{fontSize:"26px" }}>Adicione um Filme</p>
              <input style={{width:"40vw",height:"40px",borderRadius:"10px",boxShadow:"3px 3px #898989" }} type="filmeAdicionado" placeholder="Buscar" onChange={(e) => setFilmeAdicionado(e.target.value)} className={styles["input"]}></input>
              <button onClick={()=>AdicionarFilme()}>Adicionar</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>

            {renderizarImagens()}

          </div>
        </div></>) : <Login autenticado={Autorizar}/>}
    </>
  )
}
