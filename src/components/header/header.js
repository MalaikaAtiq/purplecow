/**
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import React from "react";
import logo from '../../assets/images/xgrid-logo-menu.83dfe4a4 (1).svg'
import './header.css'

const Header = () => {
  return(
    <div>
      <div className="header">

        <div className="col1"> 
        <img src={logo} alt=""/>
        </div>

        <div className="col2"> 
        <ul>
            <li> <a href="/"> Cloud & Devops </a></li>
            <li> <a href="/"> Web & Mobile Apps </a></li>
            <li> <a href="/"> Digital Marketing </a> </li>
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