import './Intro.css'
import logos from '../../assets/logo.png'

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img src={logos} alt="Logo Komabem" />
        <h4>
          O Sabor da Tradição em cada prato! Conheça nossos congelados e a là
          cante que oferecemos diariamente.
        </h4>
        <button className="button">
        <a href="#">Faça seu Pedido</a>
        </button>
      </div>
    </div>
  )
}

export default Intro
