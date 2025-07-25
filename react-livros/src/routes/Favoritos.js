import { useEffect, useState } from 'react';
import styled from 'styled-components'; //ajuda a criar containers (encapsulam conteudos, guardado seus elementos)
import { deleteFavoritos, getFavoritos } from '../services/favoritos';
import livroImg from '../image/livro.png'

const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavoritos(id) {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert(`Livro de id: ${id} deletado`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
   <AppContainer>
     <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
        { favoritos.map( favorito => {
          <Resultado onClick={() => deletarFavoritos(favorito.id)}>
            <img src={livroImg}/>
            <p>{favorito.nome}</p>
          </Resultado> })
        }
       </ResultadoContainer>
     </div>
   </AppContainer>
  );
}

export default Favoritos;