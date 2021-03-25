import React from 'react'
import './Select.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
function Select() {
   
    return (
        <div>
            <div className="select">
            <Link to="/modeling/similarity"><button>Similarity Topics</button></Link> 
          <button>LDA ( Latent Dirichlet Allocation ) pas encore prêt :)</button>
           </div>
        </div>
    )
}

export default Select
