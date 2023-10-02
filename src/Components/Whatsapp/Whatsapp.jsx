import "./Whatsapp.css";
import whatsapp from "../../assets/whatsappmove.png";

const Whatsapp = () => {
  window.addEventListener("scroll", function () {
    var whatsappButton = document.getElementById("whatsapp-button");
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      whatsappButton.style.display = "block";
    } else {
      // whatsappButton.style.display = 'none';
    }
  });

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-11284618922/ZZgVCJvg3-cYEKq99oQq',
        'event_callback': callback
    });
    return false;
  }


  return (
    <div id="whatsapp-button">
      <div className="teste">
        <span className="whatsapp-text">💬 Fale conosco!</span>
      </div>
      <a
        href="https://wa.me/+55021972770807"
        target="_blank"
        rel="noopener noreferrer"
        onClick={()=>{gtag_report_conversion}}
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Whatsapp;
