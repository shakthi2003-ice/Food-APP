
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Signup from './screen/Signup.js';
import { CartProvider } from './Components/ContextReducer.js';
import MyOrder from './screen/MyOrder.js';

function App() {
  return (
    <CartProvider>

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/loginuser" element = {<Login/>}/>
          <Route exact path="/createuser" element = {<Signup/>}/>
          <Route exact path="/myorderdata" element = {<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
