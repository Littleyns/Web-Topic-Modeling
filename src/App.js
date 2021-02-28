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
      <div className="header">
        <p>Logo</p>
      </div>
      <div className="under-header">
        <div id="converted" className="stats"><span className="var">xxxx</span>Fichiers pdf convertis</div>
        <div id="gigabyte" className="stats"><span className="var">xxxx</span>envoyées au serveur</div>
        <div id="tm" className="stats"><span className="var">xxxx</span>Fichiers texte étudiées</div>
      </div>
      <div className="main">
        <BrowserRouter>
        <div>
          <nav className="navbar">
          <Link to="/" >Convert pdf to txt</Link>
          <Link to="/modeling">Topic modeling</Link>
          </nav>
          <div className="main-route-place">
            <Route exact path="/" component={() => <Dropzone download={true} path={"/process"} type={"pdf"} /> }/>
            <Route path="/modeling" component={Process} />
           
            
          </div>
        </div>
      </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

  


export default App;
