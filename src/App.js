import React, {useState,useEffect} from 'react';
import './App.css';
import Dropzone from "./dropzone/Dropzone";
import Process from "./process/Process";
import ReactDOM from 'react-dom';
import {ButtonGroup,Button} from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
const [currentTab, setCurrentTab] = useState(["2","1"])
useEffect(()=>{
  document.getElementById(currentTab[0]).style.color="rgba(19, 13, 13, 0.8)";
  document.getElementById(currentTab[0]).style.backgroundColor="#D9C5B2"
  document.getElementById(currentTab[1]).style.color="lightgray";
  document.getElementById(currentTab[1]).style.backgroundColor="#34312D";
 
},[currentTab])
const changeTab =(e)=>{
 setCurrentTab([currentTab[1],e.target.id])
}
  return (
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
      
          <nav className="navbar">
           
          <ButtonGroup  disableElevation variant="contained" color="black" id="boutons__nav">
         <Link id="1" to="/" onClick={changeTab}> Convert pdf to txt</Link> 
         <Link id="2" to="/modeling"   onClick={changeTab}>Topic modeling</Link>
          </ButtonGroup>
          
          
          </nav>
          
          <div className="main-route-place">
            <Route exact path="/" component={() => <Dropzone download={true} path={"/process"} type={"pdf"} /> }/>
            <Route path="/modeling" component={Process} />
            </div>
      </BrowserRouter>
      </div>
      </div>
   
  );
}

  


export default App;
