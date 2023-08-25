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

 //importing react library
import React from "react";

//importing styles
import './footer.css'

//importing images
import logo from '../../assets/images/careers/download.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="col1">
          <img src={logo} alt="" className="logo" />
          <p>Established in 2012, Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, user interface and user experience solutions. Our strength lies in our team and its ability to deliver end-to-end solutions using cutting edge technologies. </p>
        </div>

        <div className="col2">
          <div>
            <h4> NAVIGATE </h4>
            <ul>
              <li> <a href="/"> Cloud & DevOps </a></li>
              <li> <a href="/"> Web & Mobile Apps </a></li>
              <li> <a href="/"> Digital Markteing </a></li>
              <li> <a href="/"> Company </a></li>
              <li> <a href="/"> Careers </a></li>
              <li> <a href="/"> Resources </a></li>
            </ul>
          </div>

        </div>

        <div className="col3">
          <h4> OFFICE ADDRESS </h4>

          <h5> US Address </h5>
          <p> Plug and Play Tech Center, 440 N Wolfe Rd, Sunnyvale, CA 94085 </p>

          <h5> Pakistan Address </h5>
          <p> Xgrid Solutions (Private) Limited, Bldg 96, GCC-11, Civic Center, Gulberg Greens, Islamabad </p>
          <p> Xgrid Solutions (Private) Limited, 10th floor, Haly Tower, Sector R, DHA, Phase 2, Lahore </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social">
          <p>  <a href="/"> Privacy Policy </a> | <a href="/"> Terms And Conditions </a> | <a href="/"> Security </a></p>
        </div>

        <div className="copyright">
          <p> Xgrid © 2023. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer