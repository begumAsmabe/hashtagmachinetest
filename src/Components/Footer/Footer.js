import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer col-xs-12 col-md-5 text-center" >
            <div className="" style={{width:"40%"}}>
            <img className="footerimg"src="./Fanconvo.png" alt="logo" />
            </div>
            
            {/* <p className="ml-5">How Focononovo Works?</p>
            <p className="ml-5">Terms of uses</p>
            <p className="ml-5">Contact us</p> */}
            <div className="row row-no-gutters">
                <div className="col-xs-12 col-md-5 text-center">

                    <p style={{fontSize:".8rem"}}>How Fancovo Works?</p>
                </div>
                <div className="col-xs-12 col-md-5 text-center">

                    <p style={{fontSize:".8rem"}}>Terms of use</p>
                </div>
                <div className="col-xs-12 col-md-5 text-center">

                    <p style={{fontSize:".8rem"}}>Contact us</p>
                </div>
                <div className="col-xs-12 col-md-2 text-center">

                    <p>@2021</p>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
