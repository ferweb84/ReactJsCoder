import React from "react";
import logo from "./img/Burger-King-Logo-CMS.png";

const Header =()=>{
    return(
        <div className="container">
            <ul className="nav d-flex aling-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Burguer King"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Pedi tu combo favorito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Cupones</a>      
        </li>
      </ul>
      </div>
    )
}

export default Header;