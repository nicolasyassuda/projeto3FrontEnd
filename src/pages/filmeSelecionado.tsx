import React, { useState, useEffect } from 'react';
import styles from '../styles/filmesSelecionado.module.css';
import { useRouter } from "next/router"
import Header from '@/components/header';
import Login from '@/components/login';

export default function FilmeSelecionado() {
  const [favorito, setFavorito] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [avaliar, setAvaliar] = useState(false)
  const [filme, setFilme] = useState<any>(undefined)
  const [estrela1, setEstrela1] = useState(0)
  const [estrela2, setEstrela2] = useState(0)
  const [estrela3, setEstrela3] = useState(0)
  const [estrela4, setEstrela4] = useState(0)
  const [estrela5, setEstrela5] = useState(0)
  const [estrelaMostrar1, setEstrelaMostrar1] = useState(0)
  const [estrelaMostrar2, setEstrelaMostrar2] = useState(0)
  const [estrelaMostrar3, setEstrelaMostrar3] = useState(0)
  const [estrelaMostrar4, setEstrelaMostrar4] = useState(0)
  const [estrelaMostrar5, setEstrelaMostrar5] = useState(0)

  const handleFavoritoClick = () => {
    setFavorito(!favorito);
    favoritar()
  };
  const router = useRouter();
  useEffect(() => {
    let auth = localStorage.getItem("autenticado")
    if (auth != undefined) {
      setAutenticado(true)
    }
    if (router.query.codFilme != undefined)
      getFilme()
  }, [router.query])
  const [autenticado, setAutenticado] = useState<boolean>(false);
  const getFilme = async () => {

    const retornoFilme = await fetch('./api/getFilme', {
      method: 'POST',
      body: JSON.stringify({
        codFilme: router.query.codFilme,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (retornoFilme.status == 200) {
      const retorno = await retornoFilme.json();

      setFilme(retorno)
      validaNota(retorno.vote_average)

    }

  }
  const favoritar = async () => {

    const retornoFilme = await fetch('./api/favoritarFilme', {
      method: 'POST',
      body: JSON.stringify({
        UserId: localStorage.getItem("autenticado"),
        codFilme: router.query.codFilme,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (retornoFilme.status == 200) {
      const retorno = await retornoFilme.json();

      setFilme(retorno)
      validaNota(retorno.vote_average)

    }

  }
  const avaliarFilme = async () => {

    const retornoFilme = await fetch('./api/avaliar', {
      method: 'POST',
      body: JSON.stringify({
        nota:avaliacao,
        codFilme: router.query.codFilme,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (retornoFilme.status == 200) {
      const retorno = await retornoFilme.json();

      setFilme(retorno)
      validaNota(retorno.vote_average)

    }

  }
  function validaNota(nota: number) {
    console.log(nota)
    if (nota > 4.5) {
      setEstrela5(2)
      setEstrela4(2)
      setEstrela3(2)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 4.5 && nota > 4) {
      setEstrela5(1)
      setEstrela4(2)
      setEstrela3(2)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 4 && nota > 3.5) {
      setEstrela5(0)
      setEstrela4(2)
      setEstrela3(2)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 3.5 && nota > 3) {
      setEstrela5(0)
      setEstrela4(1)
      setEstrela3(2)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 3 && nota > 2.5) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(2)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 2.5 && nota > 2) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(1)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 2 && nota > 1.5) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(0)
      setEstrela2(2)
      setEstrela1(2)
    } else if (nota <= 1.5 && nota > 1) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(0)
      setEstrela2(1)
      setEstrela1(2)
    } else if (nota <= 1 && nota > 0.5) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(0)
      setEstrela2(0)
      setEstrela1(2)
    } else if (nota <= 0.5 && nota > 0) {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(0)
      setEstrela2(0)
      setEstrela1(1)
    } else {
      setEstrela5(0)
      setEstrela4(0)
      setEstrela3(0)
      setEstrela2(0)
      setEstrela1(0)
    }

  }

  function Autorizar(autorizado: boolean) {
    setAutenticado(autorizado)
    if (autorizado == false) {
      localStorage.clear()
    }
  }
  function mostrar(numero: number) {
    if (numero == 1) {
      setEstrelaMostrar1(2)
      setEstrelaMostrar2(0)
      setEstrelaMostrar3(0)
      setEstrelaMostrar4(0)
      setEstrelaMostrar5(0)
    } else if (numero == 2) {
      setEstrelaMostrar1(2)
      setEstrelaMostrar2(2)
      setEstrelaMostrar3(0)
      setEstrelaMostrar4(0)
      setEstrelaMostrar5(0)
    } else if (numero == 3) {
      setEstrelaMostrar1(2)
      setEstrelaMostrar2(2)
      setEstrelaMostrar3(2)
      setEstrelaMostrar4(0)
      setEstrelaMostrar5(0)
    } else if (numero == 4) {
      setEstrelaMostrar1(2)
      setEstrelaMostrar2(2)
      setEstrelaMostrar3(2)
      setEstrelaMostrar4(2)
      setEstrelaMostrar5(0)
    } else if (numero == 5) {
      setEstrelaMostrar1(2)
      setEstrelaMostrar2(2)
      setEstrelaMostrar3(2)
      setEstrelaMostrar4(2)
      setEstrelaMostrar5(2)
    } else {
      setEstrelaMostrar1(0)
      setEstrelaMostrar2(0)
      setEstrelaMostrar3(0)
      setEstrelaMostrar4(0)
      setEstrelaMostrar5(0)
    }
  }
  function SelecionaNota(numero:number){
    setAvaliacao(numero)
    if (numero == 1) {
      setEstrela1(2)
      setEstrela2(0)
      setEstrela3(0)
      setEstrela4(0)
      setEstrela5(0)
    } else if (numero == 2) {
      setEstrela1(2)
      setEstrela2(2)
      setEstrela3(0)
      setEstrela4(0)
      setEstrela5(0)
    } else if (numero == 3) {
      setEstrela1(2)
      setEstrela2(2)
      setEstrela3(2)
      setEstrela4(0)
      setEstrela5(0)
    } else if (numero == 4) {
      setEstrela1(2)
      setEstrela2(2)
      setEstrela3(2)
      setEstrela4(2)
      setEstrela5(0)
    } else if (numero == 5) {
      setEstrela1(2)
      setEstrela2(2)
      setEstrela3(2)
      setEstrela4(2)
      setEstrela5(2)
    } else {
      setEstrela1(0)
      setEstrela2(0)
      setEstrela3(0)
      setEstrela4(0)
      setEstrela5(0)
    }
  }
  return (
    <>
      {autenticado ? (<>
        <Header autenticado={Autorizar} name="Nome do Site" />
        {filme != undefined && <div className={styles.container}>
          <h1 className={styles.nomeFilme}>{filme.title != undefined ? (filme.title) : (filme.original_title)}</h1>
          <button className={styles.btn} style={{fontSize:"14px",width:"20vw",height:"5vh",borderRadius:"1vh"}} onClick={handleFavoritoClick}>
            {favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
          <img className={styles.poster} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + filme.poster_path} alt="Imagem do filme" />
          <div className={styles['rating-container']} onMouseEnter={() => setAvaliar(true)} onMouseLeave={() => setAvaliar(false)}>

            {!avaliar ? (<>
              <img style={{ cursor: "pointer" }} width={50} src={estrela1 == 2 ? ("imgs/FullStar.svg") : (estrela1 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => setAvaliacao(1)}></img>
              <img style={{ cursor: "pointer" }} width={50} src={estrela2 == 2 ? ("imgs/FullStar.svg") : (estrela2 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => setAvaliacao(2)}></img>
              <img style={{ cursor: "pointer" }} width={50} src={estrela3 == 2 ? ("imgs/FullStar.svg") : (estrela3 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => setAvaliacao(3)}></img>
              <img style={{ cursor: "pointer" }} width={50} src={estrela4 == 2 ? ("imgs/FullStar.svg") : (estrela4 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => setAvaliacao(4)}></img>
              <img style={{ cursor: "pointer" }} width={50} src={estrela5 == 2 ? ("imgs/FullStar.svg") : (estrela5 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => setAvaliacao(5)}></img></>) :
              (<>
                <img style={{ cursor: "pointer" }} width={50} src={estrelaMostrar1 == 2 ? ("imgs/FullStar.svg") : (estrelaMostrar1 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => (SelecionaNota(1))} onMouseEnter={() => mostrar(1)} onMouseLeave={() => mostrar(0)}></img>
                <img style={{ cursor: "pointer" }} width={50} src={estrelaMostrar2 == 2 ? ("imgs/FullStar.svg") : (estrelaMostrar2 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => (SelecionaNota(2))} onMouseEnter={() => mostrar(2)} onMouseLeave={() => mostrar(0)}></img>
                <img style={{ cursor: "pointer" }} width={50} src={estrelaMostrar3 == 2 ? ("imgs/FullStar.svg") : (estrelaMostrar3 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => (SelecionaNota(3))} onMouseEnter={() => mostrar(3)} onMouseLeave={() => mostrar(0)}></img>
                <img style={{ cursor: "pointer" }} width={50} src={estrelaMostrar4 == 2 ? ("imgs/FullStar.svg") : (estrelaMostrar4 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => (SelecionaNota(4))} onMouseEnter={() => mostrar(4)} onMouseLeave={() => mostrar(0)}></img>
                <img style={{ cursor: "pointer" }} width={50} src={estrelaMostrar5 == 2 ? ("imgs/FullStar.svg") : (estrelaMostrar5 == 1 ? ("imgs/HalfStar.svg") : ("imgs/EmptyStar.svg"))} onClick={() => (SelecionaNota(5))} onMouseEnter={() => mostrar(5)} onMouseLeave={() => mostrar(0)}></img>
              </>)}

            

          </div>
          <button className={styles.btn} onClick={()=>avaliarFilme()}>
              Avaliar
            </button>
          <div className={styles.centerInfos}>
            <div className={styles.infos}>
              <h2>Sinopse</h2>
              <div className={`${styles.infoContainer}`}>
                <p className={styles.sinopseText}>
                  {filme.overview}
                </p>
              </div>
            </div>

            {filme.keyYoutube != null && <div className={styles.infos}>
              <h2>Trailer</h2>
              <iframe width="950" height="550" style={{ border: "none" }}
                src={"https://www.youtube.com/embed/" + filme.keyYoutube.key}>
              </iframe>
            </div>}
          </div>
        </div>}
      </>) : (<Login autenticado={Autorizar}></Login>)}
    </>
  );
}
