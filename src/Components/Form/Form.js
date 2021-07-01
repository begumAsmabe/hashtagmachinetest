import React from 'react'
import useForm from '../Useform/UseForm'
import validate from '../Useform/ValidationRules'
import './Form.css'
const Form = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(login, validate);
      function login() {
        console.log('No errors, submit callback called!');
      }
     
    return (
        <div>
             <form className="form-signin  " action="" method="post" name="form" onSubmit={handleSubmit} noValidate>
                 <label className="username">First name *</label>
              
                {/* <input className="form-styling " type="text" name="username" placeholder="First name"/> */}
                <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            
          />
          {errors.username && <p style={{color:"white"}}>{errors.username}</p>}
                <label className="username">Last name *</label>
                <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            
          />
          {errors.username1 && <p style={{color:"white"}}>{errors.username1}</p>}
                <label className="username ">Username *</label>
                <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            
          />
          {errors.username2 && <p style={{color:"white"}}>{errors.username2}</p>}
                <label className="username">Email *</label>
                <input
                 className={`input ${errors.email && 'is-danger'}`}
                 type="email"
                 name="email"
                 onChange={handleChange}
    value={values.email || ''}
    required
  />
  {errors.email && (
    <p style={{color:"white"}}className="help is-danger" style={{color:"white"}}>{errors.email}</p>
  )}
                
                <label className="username">Time Zone *</label>
                <select name="timezone" className="form-styling">
                <option style={{color:"black"}} value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
	              <option style={{color:"black"}}  value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                <option style={{color:"black"}}  value="-10:00">(GMT -10:00) Hawaii</option>
                <option style={{color:"black"}}  value="-09:50">(GMT -9:30) Taiohae</option>
                <option style={{color:"black"}}  value="-09:00">(GMT -9:00) Alaska</option>
                    </select>
                <label className="username">Password *</label>
                <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                {errors.password && (
                  <p style={{color:"white"}}className="help is-danger"style={{color:"white"}}>{errors.password}</p>
                )}
                <div className="checkbox">
                {/* <input type="checkbox"  className="checkbox" /> */}
                <label for="checkbox" style={{color:'black'}}> I agree to these 
                <a href="#" style={{color:"green"}}>Terms and Conditions</a>.</label>
                
                </div>
                
                <div className="btn-animate">
            {/* <a className="btn-signin">Sign in</a> */}
            <button type="submit" className="btn-signin " style={{backgroundColor:"rgb(16, 255, 143)"}}>Sign in</button>
          </div>   
            
          <label style={{color:"white",marginLeft:"20%"}}>Already have an account?</label><a href="#" style={{color:"green",textDecoration:'none'}}>Login</a>
                </form>
        </div>
    )
}

export default Form
