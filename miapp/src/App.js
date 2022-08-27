import './estilos.css';
import NavbarBurguer from './assets/NavbarBurguer';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Footer from './assets/Footer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <NavBar/>
      <NavbarBurguer />
      <hr />
      <Destacados/>
      <Cupones/>
      <PromosApp/>
      <Footer/>
    </div>
  );
}

export default App;


//COMPONENTS --- CONTAINERS

