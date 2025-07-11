import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import styled from 'styled-components'; //ajuda a criar containers (encapsulam conteudos, guardado seus elementos)
import UltimosLancamentos from './components/UltimosLancamentos';

const AppConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #bee3ff 35%, #326589);
`

function App() {
  return (
    <AppConteiner>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppConteiner>
  );
}

export default App;