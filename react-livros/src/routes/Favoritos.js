import Pesquisa from '../components/Pesquisa';
import styled from 'styled-components'; //ajuda a criar containers (encapsulam conteudos, guardado seus elementos)

const AppConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Favoritos() {
  return (
    <AppConteiner>
      <Pesquisa/>
    </AppConteiner>
  );
}

export default Favoritos;