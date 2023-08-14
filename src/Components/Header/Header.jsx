import { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`container-header ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-header" data-aos="fade-down">
        {/* Ícone de hambúrguer para telas menores */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Renderização do menu */}
        {isMenuOpen ? (
          <div className="mobile-menu">
            <a href="#menu">Pratos</a>
            <a href="#delivery">Sobre</a>
            <a href="#menulist">Pedidos</a>
            <a href="#contact">Contato</a>
          </div>
        ) : (
          <div className="desktop-menu">
            <a href="#menu">Pratos</a>
            <a href="#delivery">Sobre</a>
            <a href="#menulist">Pedidos</a>
            <a href="#contact">Contato</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
