import React from 'react'
import './Process.css'
import Select from './Select.js'
import axios from 'axios';
import Dropzone from '../dropzone/Dropzone'
import { BrowserRouter, Route, Link } from "react-router-dom";
const FileDownload = require('js-file-download');

function Process() {  
    return (
        <div >
         <BrowserRouter>
         {/*<Route exact path="/modeling/select" component={Select} />*/}
         <Route exact path="/modeling" component={() => <Dropzone download={false} path={"/train"} type={"txt"} /> }/>
         <Route exact path="/modeling/select" component={() => <Select/> }/>
         </BrowserRouter>
        </div>
    )
}

export default Process
