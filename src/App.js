import React from 'react';
import './App.css';
import Dropzone from "./dropzone/Dropzone";
import Process from "./process/Process";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {

  return (
    <div>
      <p className="title">Topic modeling with textmining approach</p>
      <div className="content">
        
       
        <BrowserRouter>
        <div>
          <div className="main-route-place">
            <Route exact path="/" component={Dropzone} />
            <Route exact path="/process" component={Process} />
            
          </div>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

  


export default App;
