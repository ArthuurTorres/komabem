import "./Contact.css";
import localization from "../../assets/localization.png";
import tel from "../../assets/telephone.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="footer-container">
        <iframe
          data-aos="zoom-in-right"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1061.64513872081!2d-43.27149265326431!3d-22.892311656050676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c3563a816a7%3A0x99dad71c91bdb089!2sR.%20%C3%81lvares%20Cabral%2C%20580%20-%20Cachambi%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020780-320!5e0!3m2!1spt-BR!2sbr!4v1692047210737!5m2!1spt-BR!2sbr"
          width="600"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div>
          <h2 data-aos="fade-up">
            <img src={localization} alt="Localização" />
            Localização
          </h2>
          <ul data-aos="fade-up">
            <li>Rua Alvares Cabral, 580</li>
            <li>Cachambi - Rio de Janeiro - Brasil</li>
            <li>CEP 20780-320</li>
            <li>
              <br></br>
            </li>
          </ul>
        </div>
        <div>
          <h2 data-aos="fade-up">
            <img src={tel} alt="Localização" />
            Telefones
          </h2>
          <ul data-aos="fade-up">
            <li>(21) 3297-0807</li>
            <li>(21) 2501-2206</li>
            <li>(21) 2137-0807</li>
            <li>(21) 97277-0807</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
