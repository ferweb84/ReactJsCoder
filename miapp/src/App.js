import './estilos.css';
import React from 'react';
import ContadorBoton from './components/ContadorBoton/ContadorBoton';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Footer from './assets/Footer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainers from './containers/ItemListContainers';
import Lista from './components/Lista/Lista';
import Boton  from './components/Boton/Boton';
import ItemListContainers2 from './components/ItemListContainers/ItemListContainers2';

const onAdd= (quantity)=>{
  console.log(`Compraste ${quantity} unidades`);
}


function App() {

  const Burguers = ["Bigmacho","DobleCuarto", "Tasty"];
  const objetos ={};


  return (
    <div className='container-fluid fondo_amarillo'>
      <NavBar/>
      <hr />
      <ContadorBoton initial={1} stock={10} onAdd= {onAdd}/>
      <ItemListContainers greeting = 'Bienvenidos a BurguerKingdom' />
      <ItemListContainers2 greeting = 'Holaaaaaaaa'/>
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

