import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import Intro from './Components/Intro/Intro'
import Delivery from './Components/Delivery/Delivery'
import Restaurant from './Components/Restaurant/Restaurant'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MenuList from './Components/MenuList/MenuList'
import Whatsapp from "./Components/Whatsapp/Whatsapp"
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  AOS.init();

  return (
    <>
      <div>
        <Header />
        <Intro />
        <Menu />
        <Delivery />
        <Restaurant />
        <MenuList />
        <Contact />
        <Footer />
        <Whatsapp />
      </div>
    </>
  )
}

export default App

