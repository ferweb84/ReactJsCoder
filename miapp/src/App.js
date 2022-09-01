import './estilos.css';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Footer from './assets/Footer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainers from './containers/ItemListContainers';
import Lista from './components/Lista/Lista';
import Boton  from './components/Boton/Boton';



function App() {

  const Burguers = ["Bigmacho","DobleCuarto", "Tasty"];
  const objetos ={};

  return (
    <div className='container-fluid fondo_amarillo'>
      <NavBar/>
      <hr />
      <ItemListContainers greeting = 'Bienvenidos a BurguerKingdom' />
      <Lista items ={Burguers} titulo={"Mi Lista"}/>
      <Boton/>
      <Destacados/>
      <Cupones/>
      <PromosApp/>
      <Footer/>
    </div>
  );
}

export default App;


//COMPONENTS --- CONTAINERS

