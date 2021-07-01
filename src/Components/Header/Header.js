import React from 'react'
import './Header.css'
const Header = () => {
    return (
        
        <div className="header col-md-4" style={{alignItems:"center"}}>
            <img className="logo"src="./Fanconvo.png" alt="logo" />
            <div className="links ml-auto">
            <a className="text" href="#">Sign Up</a>
            <a  className="text ml-3" href="#">Login</a>
         
            </div>
            
           </div>
           
    )
}

export default Header
