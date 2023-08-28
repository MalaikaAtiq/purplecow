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
import React from "react"

//importing styles
import './careers.css'

//image imports
import growth1 from '../../assets/images/careers/careers-culture.png'
import growth2 from '../../assets/images/careers/careers-culture-2.png'
import honesty from '../../assets/images/careers/Group 979.png'
import goal from '../../assets/images/careers/Group 978.png'
import clock from '../../assets/images/careers/clock.svg'
import headernew from '../../assets/images/careers/careers-header-new.72b60932.png'
import Group970 from '../../assets/images/careers/Group 970.png'
import vector from '../../assets/images/careers/Vector.svg';
//import Group974 from '../../assets/images/careers/Group 974.png'
import Group981 from '../../assets/images/careers/Group 981.png'
import Group982 from '../../assets/images/careers/Group 982.png'
import Group985 from '../../assets/images/careers/Group 985.png'
import Group983 from '../../assets/images/careers/Group 983.png'
import Group984 from '../../assets/images/careers/Group 984.png'
import Group948 from '../../assets/images/careers/Group 948.png'
import Group975 from '../../assets/images/careers/Group 975.png'
import Group976 from '../../assets/images/careers/Group 976.png'
import Group977 from '../../assets/images/careers/Group 977.png'
import Group973 from '../../assets/images/careers/Group 973.png'

const Careers = () => {
  return (
    <div>

      <div className="openings">
        <div className="openings-text">
          <h2> Let's make a dent in the universe together! </h2>
          <p> At Xgrid, you are guaranteed a chance to transform your career, your team, and your community. </p>
            <button> View Openings <span className="button-vector"> <img src={vector} alt="" /> </span> </button>
        </div>

        <div className="openings-image">
          <img src={headernew} alt="careers" />
        </div>
      </div>

      <div className="life-at-xgrid">
        <h2>
          Life at <span style={{ "color": "#6F63DE" }}> Xgrid </span>
        </h2>
        <iframe title="lifeatxgrid" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/OYoFIHxDMcE"></iframe>
      </div>

      <div className="reasons">
        <h2> 6 reasons why you'd love <span style={{ "color": "#6F63DE" }}> this place </span> </h2>
        <div className="reasons-container">

          <div className="reason-item1">
            <div>
              <img src={Group981} alt="" />
              <p> Align your key skills with your long term goals </p>
            </div>

            <div>
              <img src={Group982} alt="" />
              <p> Work from anywhere across the globe </p>
            </div>

            <div>
              <img src={Group985} alt="" />
              <p> Enjoy daily meals, entertainment rooms, and care packages </p>
            </div>

          </div>

          <div className="reason-item2">
            <div>
              <img src={clock} alt="" />
              <p> No clock ins clock outs because we trust you </p>
            </div>

            <div>
              <img src={Group983} alt="" />
              <p> Grow in an easy going yet disciplined culture </p>
            </div>

            <div>
              <img src={Group984} alt="" />
              <p> Communicate and collaborate to accomplish a shared goal </p>
            </div>
          </div> 


          <div className="reasons-image">
            <img src={Group970} alt="" />
          </div>


        </div>
      </div>

      <div className="growth">
        <h2> Culture that is conducive to <span style={{ "color": "#6F63DE" }}> your growth </span> </h2>

        <div className="growth-container">


          <div className="growth-item1">
            <img src={growth1} alt="" className="growth1" />

            <p className="best-place"> best place.. </p>
          </div>


          <div className="growth-item2">
            <img src={growth2} alt="" className="growth2" />

          <div className="iconbox">
              <img src={honesty} alt="" />
              <p> Honesty & excellence go hand in hand </p>
            </div>
            <div className="iconbox">
              <img src={goal} alt="" />
              <p> Goal is to encourage bold decisions </p>
            </div>

            
          </div>

          <div className="growth-item3">
            <div className="iconbox">
              <img src={Group948} alt="" />
              <p> Work on things you love </p>
            </div>
            <div className="iconbox">
              <img src={Group975} alt="" />
              <p> No red tape, no long appointment </p>
            </div>
            <div className="iconbox">
              <img src={Group976} alt="" />
              <p> Nothing like going forward as a team </p>
            </div>
            <div className="iconbox">
              <img src={Group977} alt="" />
              <p> Do what you love, Love what you do </p>
            </div>
          </div>

        </div>

      </div>

      <div className="footprint">
        <h2 className="footprint-head1"> Global Footprint </h2>
        <p> Top tiered performance is expected, delivered, and maintained at Xgrid. Anything less is simply unacceptable </p>
        <img src={Group973} alt="" />
        <h2 className="footprint-head2"> Do you have what it takes to be a part of Xgrid? </h2>
        <button> View Openings <span className="button-vector"> <img src={vector} alt="" /> </span> </button>
      </div>

      <div className="form-container">
        <div className="heading">
          <h2> Ready to get Started? </h2>
          <p> Describe your project and leave us your contact info, we'll get back to you within 24 hours. </p>
        </div>

        <div className="form">
          <form>
            <input type="text" placeholder="What's Your Name?" />
            <input type="text" placeholder="What's Your Email?" />
            <textarea type="text" placeholder="Tell us about your project." />
            <div className="form-button">
              <button> Submit </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Careers