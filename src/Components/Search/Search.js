import React from 'react'
import './Search.css'
import { BiSearch } from "react-icons/bi";
const Search = () => {
    return (
        <div className="text col-md-4  " >
            <p>A market place for conversations,menterships and performances</p> 
            <div className="row "  >
              <div className="col-lg" style={{display:'flex' ,alignItems:"center"}}>
                <label className="username col-md-3">Search New Talent</label>
                
                
                
                <div className="searchdiv row" >
                <div className="col-10">
                <input style={{backgroundColor:"black" }}
                 className="form-styling1 " type="text" name="username" placeholder=" "/>

                </div>
                <div style={{float:"right",textAlign:"center"}}className=" icon">
                <BiSearch/>
                </div>
                                
                
              
                
                
                
               
                
                 </div>
                
   
            </div>
            </div>
            
    


          </div>
        
        
        
    )
}

export default Search
