import React from 'react'
import anupam from './images/anupam.png'
import camlin from './images/camlin.png'
import jkpaper from './images/JKPaper.png'
import apsara from './images/apsara.png'
import kangaro from './images/kangaro.png'
import "./CSS/Partner.css"

 



const Partner = () => {
    return (
        <div className="frame" id="brandpartner">
             <h2 className="title">Our Partner Brand</h2>
            <div className="frame1">
               <div className="frame2">
                   <img src={camlin} alt="camlin" />
               </div>
               <div className="frame2">
                   <img src={anupam} alt="anupam" />
               </div>
               <div className="frame2">
                   <img src={apsara} alt="apsara" />
               </div>
               <div className="frame2">
                   <img src={jkpaper} alt="jkpaper" />
               </div>
               <div className="frame2">
                   <img src={kangaro} alt="kangaro" />
               </div>
            </div>
        </div>
    )
}

export default Partner
