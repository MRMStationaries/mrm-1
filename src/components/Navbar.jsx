import React,{Component} from 'react'
import Logo from './images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import "./CSS/Navbar.css";
import {MenuItems} from "./MenuItems";


class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }

   render(){
      return(
          <nav className="NavbarItems">
             <h1 className="navbar-logo"><a href="#hero"><img src={Logo} alt="logo" /></a></h1>
             <div className="menu-icon" onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars}/> 
             </div>
             <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>      
                 {MenuItems.map((item,index) => {
                     return(
                      <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                      </li>
                     )
                 })}

              
             </ul>
          </nav>

      )
    
   }

}


export default Navbar