import './Contact.css'
import localization from '../../assets/localization.png'
import tel from '../../assets/telephone.png'

const Contact = () => {
  return (
    <section id="contact">
    <div className="footer-container">
      <div>
        <h2 data-aos="fade-up">
        <img src={localization} alt="Localização"/>
        Localização
        </h2>
        <ul data-aos="fade-up">
        <li data-aos="fade-up" data-aos-delay="150">Rua Alvares Cabral, 580</li>
        <li data-aos="fade-up" data-aos-delay="250">Cachambi - Rio de Janeiro - Brasil</li>
        <li data-aos="fade-up" data-aos-delay="350">CEP 20780-320</li>
        <li><br></br></li>
        </ul>
      </div>
      <div>
        <h2 data-aos="fade-up">
        <img src={tel} alt="Localização"/>
        Telefones
        </h2>
        <ul data-aos="fade-up">
        <li data-aos="fade-up" data-aos-delay="150">(21) 3297-0807</li>
        <li data-aos="fade-up" data-aos-delay="250">(21) 2501-2206</li>
        <li data-aos="fade-up" data-aos-delay="350">(21) 2137-0807</li>
        <li data-aos="fade-up" data-aos-delay="450">(21) 97277-0807</li>
        </ul>
      </div>
    </div>
    </section>
  )
}

export default Contact