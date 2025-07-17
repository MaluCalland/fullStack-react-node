import { useEffect, useState } from 'react';
import styled from 'styled-components'; //ajuda a criar containers (encapsulam conteudos, guardado seus elementos)
import { getFavoritos } from '../services/favoritos';

const AppConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppConteiner>
      {favoritos.map( favorito => (
        <p>{favorito.nome}</p>
      ))}
    </AppConteiner>
  );
}

export default Favoritos;