import "./Intro.css";
import logos from "../../assets/logo.png";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img src={logos} alt="Logo Komabem" data-aos="zoom-in-right" />
        <h4 data-aos="zoom-in-right">
          O Sabor da Tradição em cada prato! Conheça nossos congelados e a là
          cante que oferecemos diariamente.
        </h4>
        <button className="button" data-aos="zoom-in-right">
          <a
            href="https://wa.me/+55021972770807"
            target="_blank"
            rel="noopener noreferrer"
          >
            Faça seu Pedido
          </a>
        </button>
      </div>
    </div>
  );
};

export default Intro;
