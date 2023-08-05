import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import Intro from './Components/Intro/Intro'
import Delivery from './Components/Delivery/Delivery'
import Restaurant from './Components/Restaurant/Restaurant'
import Contact from './Components/Contact/Contact'
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <div>
        <Header />
        <Intro />
        <Menu />
        <Delivery />
        <Restaurant />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

