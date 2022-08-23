import './estilos.css';

function App() {
  let img= "kqXt7Sq2.png";
  let titulo="Doble Cuarto de Libra con Queso";
  let calorias= "771 kcal";
  let descripcion= "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.";
  const productos = {id:1, img:img, titulo:titulo, calorias:calorias, descripcion:descripcion };



  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-4 offset-md-2'>
        <img src={productos.img} alt={productos.titulo}className="img-fluid" /></div>
      <div className='col-md-4'>
        <h1>{productos.titulo}</h1>
        <p>{productos.calorias}</p>
        <p>{productos.descripcion}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
