import './Header.css'

const Header = () => {

  return (
    <header className="container-header">
      <div className="menu-header" data-aos="fade-down">
        <a href="#menu">Pratos</a>
        <a href="#delivery">Sobre</a>
        <a href="#menulist">Pedidos</a>
        <a href="#contact">Contato</a>
      </div>
    </header>
  )
}

export default Header
