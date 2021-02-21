import React from 'react';
import './App.css';
import Dropzone from "./dropzone/Dropzone";
import Process from "./process/Process";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {

  return (
    <div>
      <div className="content">
        
       
        <BrowserRouter>
        <div>
          <nav className="navbar">
          <Link to="/" >Convert pdf to txt</Link>
          <Link to="/modeling">Topic modeling</Link>
          </nav>
          <div className="main-route-place">
            <Route exact path="/" component={Dropzone} />
            <Route exact path="/modeling" component={Process} />
            
          </div>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

  


export default App;
