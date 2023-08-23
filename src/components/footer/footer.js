import React from "react";
import './footer.css'
import logo from '../../assets/careers/download.png'
function Footer() {
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