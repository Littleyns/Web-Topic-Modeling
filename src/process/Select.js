import React from 'react'
import './Select.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
function Select() {
   
    return (
        <div>
            <div className="select">
            <Link to="/modeling/similarity"><button>Similarity Topics</button></Link> 
          <button>LDA ( Latent Dirichlet Allocation ) not available for now..</button>
           </div>
        </div>
    )
}

export default Select
