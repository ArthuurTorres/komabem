import './Contact.css'
import localization from '../../assets/localization.png'
import tel from '../../assets/telephone.png'

const Contact = () => {
  return (
    <div className="footer-container">
      <div>
        <h2>
        <img src={localization} alt="Localização"/>
        Localização
        </h2>
        <ul>
        <li>Rua Alvares Cabral, 580</li>
        <li>Cachambi - Rio de Janeiro - Brasil</li>
        <li>CEP 20780-320</li>
        <li><br></br></li>
        </ul>
      </div>
      <div>
        <h2>
        <img src={tel} alt="Localização"/>
        Telefones
        </h2>
        <ul>
        <li>(21) 3297-0807</li>
        <li>(21) 2501-2206</li>
        <li>(21) 2137-0807</li>
        <li>(21) 97277-0807</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact