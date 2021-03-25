import React, {useState,useEffect} from 'react';
import './App.css';
import Dropzone from "./dropzone/Dropzone";
import Process from "./process/Process";
import ReactDOM from 'react-dom';
import {ButtonGroup,Button} from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import run from "./getStats"
import MongoClient from 'mongodb';
import axios from './dropzone/axios';

function App() {
 /*Drivin me crazy*/  
  const url = "http://localhost:3000/";
  const [studied,setStudied]=useState(0);
  const [sended,setSended]=useState(0);
  const [gigabyte,setGigabyte]=useState(0);
  let current = (document.location.href).includes('modeling')?['1','2']:['2','1']
const [currentTab, setCurrentTab] = useState(current)
useEffect(()=>{
  console.log(current)
  axios({
    url:'/infos/stats',
    method:'GET',
    responseType:'json',
    
}).then((resp)=>{
  setStudied(resp.data.studied);
  setSended(resp.data.sended)
  setGigabyte((resp.data.gigabyte).toString().slice(0,5))
})
},[])
useEffect(()=>{
  document.getElementById(currentTab[0]).style.color="rgba(19, 13, 13, 0.8)";
  document.getElementById(currentTab[0]).style.backgroundColor="#D9C5B2"
  document.getElementById(currentTab[1]).style.color="lightgray";
  document.getElementById(currentTab[1]).style.backgroundColor="#34312D";
 
},[currentTab])

const changeTab =(e)=>{
 setCurrentTab([currentTab[1],e.target.id])
}
const droite = (e)=>{
  if((parseInt(currentTab[1])+1)<=2){
  setCurrentTab([currentTab[1],parseInt(currentTab[1])+1])
  window.location.href=document.getElementById(parseInt(currentTab[1])+1).href;
  }
}
const gauche = (e)=>{
  if((parseInt(currentTab[1])-1)>0){
  setCurrentTab([currentTab[1],parseInt(currentTab[1])-1])
  window.location.href=document.getElementById(parseInt(currentTab[1])-1).href
  }
}
  return (
      <div className="content">
      <div className="header">
        <p>Logo</p>
      </div>
      <div className="under-header">
        <div id="converted" className="stats"><span className="var">{studied} <span id="stat">Fichiers</span> </span>pdf convertis</div>
        <div id="gigabyte" className="stats"><span className="var">{sended} <span id="stat">Fichiers</span> </span>envoyées au serveur</div>
        <div id="tm" className="stats"><span className="var">{gigabyte} <span id="stat">GB</span></span>de texte étudiées</div>
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
            <div className="controllers" onClick={gauche}><FontAwesomeIcon  icon={ faChevronLeft } size="2x" /></div>
          
            <Route exact path="/" component={() => <Dropzone download={true} path={"/process"} type={"pdf"} /> }/>
            <Route path="/modeling" component={Process} />
            <div className="controllers" onClick={droite}><FontAwesomeIcon   icon={ faChevronRight } size="2x" /></div>
            </div>
      </BrowserRouter>
    
      </div>
      </div>
   
  );
}

  


export default App;
