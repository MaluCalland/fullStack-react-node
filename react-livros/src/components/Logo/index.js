import logo from '../../image/logo.jpg'
import '../Logo/estilo.css'

function Logo(){
    return (
        <div className="logo">
          <img src={logo} alt='logo' className="logo-img"></img>
          <p>Meus<strong>Livros</strong></p>
        </div>
    )
}

export default Logo