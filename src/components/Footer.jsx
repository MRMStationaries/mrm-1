import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import "./CSS/Footer.css"

const Footer = () => {
    return (
        <div className="footer1" id='footer'>
          <div className="topcontainer">
              <div classname="contentcontainer">
                 <h2 className="title">
                   Contact Us :
                 </h2>
                  <p className="address">
                  hanuman nagar,<br/>
                  akurli road,<br/>
                  kandivali East - 400101,<br/>
                  Mumbai,<br/>
                  Maharashtra
                  </p>
              </div>
              <div className="contentcontainer">
                 <h2 className="title">
                   udyam resigtration number : 
                 </h2>
                 <p className="address"  style={{textTransform:"uppercase"}}>udyam-mh-18-0100605</p>
              </div>
              <div className="contentcontainer">
                 <h2 className="title">
                   Email For Sharing Detail :
                 </h2>
                 <p className="address" style={{textTransform:"none"}}>mrmstationaries@gmail.com</p>
              </div>
              <div className="contentcontainer">
                 <h2 className="title">
                    Access :
                 </h2>
                 <a className="flink" href='#about'>About Our Company</a>
                 <a className="flink" href='#services'>Services We Provide</a>
                 <a className="flink" href='#brandpartner'>Our Major Partners</a>
              </div>
          </div>
          <div className="bottomcontianer">
             <div className="leftbottomcontainer">
                <h2 className="brand">MRM</h2>
                <p className="reserved">&copy; All Right Reserved by MRM | Designed by CreaterFirst</p>
             </div>
             <div className="rightbottomcontainer">
                 <div className="social">
                  <a className="flink1"  href="https://www.facebook.com/profile.php?id=100073717384046"  rel="noreferrer" target="_blank">
                 <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                 </div>
                 <div className="social">
                  <a className="flink1" href="https://www.linkedin.com/in/mrm-stationaries-supplies-a542a0214"  rel="noreferrer" target="__blank">
                 <FontAwesomeIcon icon={faLinkedin}/> 
                  </a>
                 </div>
                 <div className="social">
                  <a className="flink1" href="https://www.instagram.com/mrm_stationaries?r=nametag"  rel="noreferrer" target="_blank">
                 <FontAwesomeIcon icon={faInstagram}/> 
                  </a>
                 </div>
             </div>
          </div>  
        </div>
    )
}

export default Footer
