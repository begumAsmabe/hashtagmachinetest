import React from 'react'
import '../Home/Home.css'

import { useState } from 'react'
const Home = () => {
    const [togglebtn, setTogglebtn] = useState(false)
    const [selectedTimezone, setSelectedTimezone] = useState({})

   const clikked=(e)=>{
        console.log(e);
        setTogglebtn(!togglebtn)
    }
    
    return (
        
        <div style={{alignItems:"center"}}className="section ">
            
               <div className="form  col-md-4 " >
                 
                 <div className="buttons " style={{display:"flex",justifyContent:"center"}}>
                     
                 <button onClick={clikked} style={{backgroundColor:togglebtn===false?'rgb(16, 255, 143)':'',borderColor:togglebtn===false?'none':'rgb(16, 255, 143)',color:togglebtn===false?'black':'white'}} className="signbtn fan-btn">FAN SIGNUP</button>
                 <button onClick={clikked} style={{backgroundColor:togglebtn===true?'rgb(16, 255, 143)':'',borderColor:togglebtn===true?'rgb(16, 255, 143)':'none',color:togglebtn===true?'black':'white'}}className="signbtn1 fan-btn">TALENT SIGNUP</button>
                 </div> 
                 
                 <h1 className="textacnt">{togglebtn===false?"Create Your Fan Account":"Create Your Talent account"}</h1>
                
                 <form className="form-signin  " action="" method="post" name="form">
                 <label className="username">First name *</label>
                <input className="form-styling " type="text" name="username" placeholder="First name"/>
                <label className="username">Last name *</label>
                <input className="form-styling " type="text" name="username" placeholder="Last name"/>
                <label className="username ">Username *</label>
                <input className="form-styling " type="text" name="username" placeholder="Username"/>
                <label className="username">Email *</label>
                <input className="form-styling " type="email" name="username" placeholder="Email"/>
                <label className="username">Time Zone *</label>
                <select name="timezone" className="form-styling">
                <option style={{color:"black"}} value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
	              <option style={{color:"black"}}  value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                <option style={{color:"black"}}  value="-10:00">(GMT -10:00) Hawaii</option>
                <option style={{color:"black"}}  value="-09:50">(GMT -9:30) Taiohae</option>
                <option style={{color:"black"}}  value="-09:00">(GMT -9:00) Alaska</option>
                    </select>
                <label className="username">Password *</label>
                <input className="form-styling " type="password" name="username" placeholder="Password"/>
                
                <div className="checkbox">
                <input type="checkbox"  className="checkbox" />
                <label for="checkbox" style={{color:'black'}}> I agree to these 
                <a href="#" style={{color:"green"}}>Terms and Conditions</a>.</label>
                
                </div>
                
                <div className="btn-animate">
            <a className="btn-signin">Sign in</a>
          </div>   
            
          <label style={{color:"white",marginLeft:"20%"}}>Already have an account?</label><a href="#" style={{color:"green",textDecoration:'none'}}>Login</a>
                </form>
               
    
                
                
                </div>
                
                </div>
         


                    
        
    )
}

export default Home
