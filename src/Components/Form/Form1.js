import React,{useState} from 'react';
import useForm from '../Useform/UseForm'
import validate from '../Useform/ValidationRules'
import Forma from '../Form/Form1'
import FormSuccess from '../Form/FormSucess';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger" style={{color:"white"}}>{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger" style={{color:"white"}}>{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;