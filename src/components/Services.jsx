import React from 'react'
import Delivery from './images/delivery-icon-7978.png'
import BestOffer from './images/Offer.png'
import Warranty from './images/warranty.png'
import Quality from './images/BestQuality.png'
import "./CSS/Services.css";



const Services = () => { 
    return (
        <>
        <div className="services" id="services">
          <h1 style={{marginLeft:"7px"}}>Services We Provide</h1>
            <div className="container">
                <div className="circle">
                   <img src={Delivery} width="200px" height="220px" alt="delivery" />
                </div>
                <div className="circle">
                <img style={{marginTop:"-1px"}} src={BestOffer} width="200px" height="210px" alt="delivery" />
                </div>
                <div className="circle">
                   <img style={{marginTop:"-18px" , marginLeft:"-7px"}}  src={Warranty} width="250px" height="280px" alt="delivery" />
                </div>
                <div className="circle">
                   <img style={{marginTop:"-18px" , marginLeft:"-9px"}} src={Quality} width="250px" height="250px" alt="delivery" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Services
