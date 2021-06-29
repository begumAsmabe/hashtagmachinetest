import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  document.body.style="background:black"
  return (
    <div>
       <Router>
         <Route exact path='/'>
           <Home/>
         </Route>
       </Router>
    </div>
    
  );
}

export default App;
