import React from "react";
import logo from '../../assets/images/xgrid-logo-menu.83dfe4a4 (1).svg'
import './header.css'
function Header(){
  return(
    <div>
      <div className="header">

        <div className="col1"> 
        <img src={logo} alt=""/>
        </div>

        <div className="col2"> 
        <ul>
            <li> <a href="/"> Cloud & Devops </a></li>
            <li> <a href="/"> Web And Mobile Apps </a></li>
            <li> <a href="/"> Digital Marketing </a></li>
        </ul>
        </div>

        <div className="col3">
          <div>
          <hr className="top"></hr>
          <hr className="bottom"></hr>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Header