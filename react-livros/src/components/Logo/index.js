import logo from '../../image/logo.jpg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10px;
  width: 120px;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImage src={logo} alt='logo'/>
          <p>Meus<strong>Livros</strong></p>
        </LogoContainer>
    )
}

export default Logo