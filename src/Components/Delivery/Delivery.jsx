import './Delivery.css'
import imgdeli from '../../assets/delivery.png'
import whatsapp from '../../assets/Whatsapp.png'
import deliveryr from '../../assets/deliveryr.png'

const Delivery = () => {
  return (
    <section id="delivery">
    <div className="delivery-container">
      <div className="delivery" data-aos="fade-up">
      <h2>
          Delivery
          <img src={imgdeli} alt="Delivery" />
      </h2>
      <p>
        Nossa entrega em domicílio foi cuidadosamente projetada para garantir
        que você possa desfrutar dos nossos pratos exclusivos sem sair do
        conforto do seu lar.<br></br><span>* Taxa e área de entrega sob consulta.</span>
      </p>
      <button className="button" data-aos="zoom-in-right">
        <a href="#">FAÇA SEU PEDIDO VIA WHATSAPP <img src={whatsapp} alt="whatsapp button" /></a>
      </button>
      </div>
      <div data-aos="fade-down">
      <img className="deliveryimg" src={deliveryr} alt="Entregador"/>
      </div>
    </div>
    </section>
  )
}

export default Delivery
