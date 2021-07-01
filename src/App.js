import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Website from './Components/Website/Website';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'
function App() {
  document.body.style="background:black"
  return (
    <div>
       <Router>
         <Route exact path='/'>
           <Website/>
         </Route>
       </Router>
    </div>
    
  );
}

export default App;
