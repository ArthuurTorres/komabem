import './Whatsapp.css'
import whatsapp from '../../assets/whatsappmove.png'


const Whatsapp = () => {

  window.addEventListener('scroll', function() {
    var whatsappButton = document.getElementById('whatsapp-button');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
      whatsappButton.style.display = 'block';
    } else {
      // whatsappButton.style.display = 'none';
    }
  });

  return (
    <div id="whatsapp-button">
      <div className="teste">
      <span className="whatsapp-text">💬 Fale conosco!</span>
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default Whatsapp