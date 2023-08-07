import './Restaurant.css'
import restaurant from '../../assets/restaurant.png'
import restaurantl from '../../assets/restaurantl.png'

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div data-aos="fade-up">
        <img className="restaurantimg" src={restaurantl} alt="Entregador" />
      </div>
      <div className="restaurant" data-aos="fade-down">
        <h2>
          <img src={restaurant} alt="Delivery" />O Restaurante
        </h2>
        <p>
          Em 1985, em uma pequena cidade que abraçava as tradições culinárias
          com carinho, que nasceu o restaurante Komabem. Fundado por um
          visionário apaixonado pela gastronomia, o estabelecimento rapidamente
          se destacou como uma referência na região quando o assunto era
          qualidade e excelência no atendimento.
        </p>
      </div>
    </div>
  )
}

export default Restaurant
