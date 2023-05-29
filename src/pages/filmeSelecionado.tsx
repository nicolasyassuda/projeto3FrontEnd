import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';

import Header from '@/components/header';

export default function FilmeSelecionado() {
  const [favorito, setFavorito] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  

  const handleFavoritoClick = () => {
    setFavorito(!favorito);
  };

  const handleAvaliacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setAvaliacao(selectedValue);
  };

  return (
    <div className={styles.container}>
      <Header name="Nome do Site" />
      <h1 className={styles.nomeFilme}>Filme Selecionado</h1>
      <img className={styles.poster} src="/imgs/capa.jpg" alt="Imagem do filme" />

      <div className={styles.infos}>
        {"/* Primeiro container de informações */"}
        <div className={`${styles.infoContainer} ${styles.firstInfoContainer}`}>
          {"/* Conteúdo do primeiro container */"}
        </div>
      </div>

      <div className={styles.infos}>
        {"/* Segundo container de informações */"}
        <div className={`${styles.infoContainer} ${styles.secondInfoContainer}`}>
          {"/* Conteúdo do segundo container */"}
        </div>
      </div>

      <div className={styles['rating-container']}>
        <select value={avaliacao} onChange={handleAvaliacaoChange}>
          <option value={0}>Avaliação</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button onClick={handleFavoritoClick}>
          {favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
}
