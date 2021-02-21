import React from 'react'
import './Process.css'
import axios from 'axios';

const FileDownload = require('js-file-download');

function Process() {
    const clicevent=()=>{
        
          axios({
              url:'http://127.0.0.1:8000/process/download',
              method:'GET',
              responseType:'blob',
              
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.zip');
            document.body.appendChild(link);
            link.click();
          });

        
    }
        
    
    return (
        <div>
            <h1>Processing the conversion to txt</h1>
            
            <button className="button" onClick={clicevent} >process</button>
            
        </div>
    )
}

export default Process
