import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Carousel from '@/components/Carrousel';
import Header from '@/components/header';

export default function FilmeSelecionado() {
  // Estado para controlar se o filme é favorito ou não
  const [favorito, setFavorito] = useState(false);

  // Estado para armazenar a avaliação do filme
  const [avaliacao, setAvaliacao] = useState(0);

  // Função para lidar com o clique no botão de favorito
  const handleFavoritoClick = () => {
    setFavorito(!favorito);
  };

  // Função para lidar com a mudança na seleção de avaliação
  const handleAvaliacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setAvaliacao(selectedValue);
  };

  // Array de atores
  const atores = ['Ator 1', 'Ator 2', 'Ator 3'];

  return (
    <div>
      <Header name="Nome do Site">
        Conteúdo adicional aqui...
      </Header>

      <div className={styles['imagem-container']}>
      <h1 className ={styles.Titulo} >Filme Selecionado</h1>
        '<img
            className={styles.imagem}
            src="/imgs/capa.jpg"
            alt="Imagem do filme"
        />
      </div>'


      <div className={styles['infos-container']}>
        {/* Componente Carousel que renderiza os atores */}
        <Carousel items={atores} />
      </div>
      <div className={styles['rating-container']}>
        <p>Avaliação:</p>
        <select value={avaliacao} onChange={handleAvaliacaoChange}>
          <option value={0}>Selecione</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleFavoritoClick}>
        {favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );  
  
}
