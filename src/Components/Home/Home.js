import React from 'react'
import '../Home/Home.css'
import Form from '../Form/Form'
import { useState } from 'react'
const Home = () => {
    const [togglebtn, setTogglebtn] = useState(false)
    

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
                
                 <Form/>
               
    
                
                
                </div>
                
                </div>
         


                    
        
    )
}

export default Home
