import './Menu.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Cardápio</h2>
      <div className="menu">
        <div>
          <img src={img1} alt="" />
          <h3>Aves</h3>
        </div>
        <div>
          <img src={img2} alt="" />
          <h3>Carnes</h3>
        </div>
        <div>
          <img src={img3} alt="" />
          <h3>Peixes</h3>
        </div>
      </div>
      <button className="button">
        <a href="#">VEJA O CARDÁPIO COMPLETO</a>
      </button>
    </div>
  )
}

export default Menu
