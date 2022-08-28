import React from 'react'
import {CartWidget} from './CartWidget'
// import styled from 'styled-components'
import './NavBar.css'
import carrito from "../../assets/img/carrito.png"
import logoBK from "../../assets/img/logoBK.png"


const NavBar = () => {
  return (
    <div className='contenedor-Navbar'>
      
      <ul className="nav d-flex aling-items-center">
        <li className="nav-item">
          <a className="nav- link_header " aria-current="page" href="#"><img src={logoBK} width="48" alt="Burguer King"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Pedi tu combo favorito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Promociones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Cupones</a>      
        </li>
        {/* <li className="nav-item">
          <a className="nav-link link_header" href="#"><img src={carrito} alt="carrito" /></a>      
        </li> */}
        <li className="nav-item">
          <a className="nav-link link_header" href="#"><CartWidget /></a>      
        </li>     
      </ul>
    </div>

  )
}

export default NavBar;



// const Nav = styled.ul `
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: space-around;
//     align-items: center; 
//     background-color :black ;
// ` 

// const Items = styled.li `
//     text-decoration: none;
//     list-style: none;
//     color: whitesmoke;
//     font-size: 1.5rem;
// `
