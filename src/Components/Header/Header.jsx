import './Header.css'

const Header = () => {

  const links = document.querySelectorAll('.menu-header a')
  
  console.log(links)
  function ativarLink(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
      link.classList.add('ativo')
    }
  }

  links.forEach(ativarLink)

  return (
    <header className="container-header">
      <div className="menu-header">
        <a href="#menu">Pratos</a>
        <a href="#delivery">Sobre</a>
        <a href="#menulist">Pedidos</a>
        <a href="#contact">Contato</a>
      </div>
    </header>
  )
}

export default Header
