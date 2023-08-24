import React from "react"
import './careers.css'
import growth1 from '../../assets/images/careers/careers-culture.png'
import growth2 from '../../assets/images/careers/careers-culture-2.png'
import honesty from '../../assets/images/careers/Group 979.png'
import goal from '../../assets/images/careers/Group 978.png'
import clock from '../../assets/images/careers/clock.svg'
import vector from '../../assets/images/careers/Vector.svg'
import Group970 from '../../assets/images/careers/Group 970.png'
import Group974 from '../../assets/images/careers/Group 974.png'
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

function Careers() {
  return (
    <div>

      <div className="openings">
        <div className="openingstext">
          <h2> Let's make a dent in the universe together! </h2>
          <p> At Xgrid, you are guaranteed a chance to transform your career, your team, and your community. </p>
          <button> View Openings <span className="buttonvector"> <img src={vector} alt="" /> </span></button>
        </div>

        <div className="openingsimage">
          <img src={Group974} alt="careers" />
        </div>
      </div>

      <div className="lifeatxgrid">
        <h2>
          Life at <span style={{ "color": "#6F63DE" }}> Xgrid </span>
        </h2>
        <iframe title="lifeatxgrid" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/OYoFIHxDMcE"></iframe>
      </div>

      <div className="reasons">
        <h2> 6 reasons why you'd love <span style={{ "color": "#6F63DE" }}> this place </span> </h2>
        <div className="reasonscontainer">

          <div className="reasonitem1">
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

          <div className="reasonitem2">
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


          <div className="reasonsimage">
            <img src={Group970} alt="" />
          </div>


        </div>
      </div>

      <div className="growth">
        <h2> Culture that is conducive to your <span style={{ "color": "#6F63DE" }}> growth </span> </h2>

        <div className="growthcontainer">


          <div className="growthitem1">
            <img src={growth1} alt="" className="growth1" />

            <p className="bestplace"> best place.. </p>
          </div>


          <div className="growthitem2">
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

          <div className="growthitem3">
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
        <h2 className="footprinthead1"> Global Footprint </h2>
        <p> Top tiered performance is expected, delivered, and maintained at Xgrid. Anything less is simply unacceptable </p>
        <img src={Group973} alt="" />
        <h2 className="footprinthead2"> Do you have what it takes to be a part of Xgrid? </h2>
        <button> View Openings</button>
      </div>

      <div className="formcontainer">
        <div className="heading">
          <h2> Ready to get Started? </h2>
          <p> Describe your project and leave us your contact info, we'll get back to you within 24 hours. </p>
        </div>

        <div className="form">
          <form>
            <input type="text" placeholder="What's Your Name?" />
            <input type="text" placeholder="What's Your Email?" />
            <textarea type="text" placeholder="Tell us about your project." />
            <div className="formbutton">
              <button> Submit </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Careers