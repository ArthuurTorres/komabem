import './Menu.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Menu = () => {
  return (
    <section id="menu">
      <div className="menu-container">
        <h2 data-aos="fade-up">Cardápio</h2>
        <div className="menu">
          <div data-aos="fade-up" data-aos-delay="100">
            <img src={img1} alt="" />
            <h3>Aves</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <img src={img2} alt="" />
            <h3>Carnes</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <img src={img3} alt="" />
            <h3>Peixes</h3>
          </div>
        </div>
        <button className="button" data-aos="zoom-in-right">
          <a href="#menulist">VEJA O CARDÁPIO COMPLETO</a>
        </button>
      </div>
    </section>
  )
}

export default Menu
