import React, { useRef, useState, useEffect } from 'react';
import './SimilarityResult.css'
import axios from './axios'
import CloseIcon from '@material-ui/icons/Close';
function SimilarityResult() {
    const resultdiv = useRef();
    return (
        <div className="Similarity__result" ref={resultdiv}>
            <div className="Similarity__container">
            <CloseIcon style={{ color: "black",fontSize: 40 }} onClick={()=>window.location.href="/"}/>
            </div>
        </div>
    )
}

export default SimilarityResult
