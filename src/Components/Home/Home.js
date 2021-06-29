import React from 'react'
import '../Home/Home.css'
import  {Grid} from '@material-ui/core'
import { useState } from 'react'
const Home = () => {
    const [togglebtn, setTogglebtn] = useState(false)
   const clikked=(e)=>{
        console.log(e);
        setTogglebtn(!togglebtn)
    }
    return (
        <div className="home">
                 <div className="form">
                 <div className="section">
                 <div className="buttons " style={{display:"flex",marginLeft:"30%"}}>
                     
                 <button onClick={clikked} style={{backgroundColor:togglebtn===false?'green':'',borderColor:togglebtn===false?'':'green',color:togglebtn===false?'white':'black'}} className="signbtn fan-btn">FAN SIGNUP</button>
                 <button onClick={clikked} style={{backgroundColor:togglebtn===true?'green':'',borderColor:togglebtn===true?'':'green',color:togglebtn===true?'white':'black'}}className="signbtn1 fan-btn">TALENT SIGNUP</button>
                 </div> 
                 <h1 className="textacnt">Create Your Fan Account</h1>
                
                 <form className="form-signin" action="" method="post" name="form">
                 <label for="username">Username</label>
                <input className="form-styling" type="text" name="username" placeholder=""/>
                       
                </form>
                </div>
                 
                


                    </div>
        </div>
    )
}

export default Home
