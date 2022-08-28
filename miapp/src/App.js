import './estilos.css';
import NavbarBurguer from './assets/NavbarBurguer';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Footer from './assets/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainers } from './containers/ItemListContainers';

function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <NavBar/>
      <NavbarBurguer />
      <hr />
      <ItemListContainers greeting = 'Bienvenidos a BurguerKing' />
      <Destacados/>
      <Cupones/>
      <PromosApp/>
      <Footer/>
    </div>
  );
}

export default App;


//COMPONENTS --- CONTAINERS

