import React, { useRef, useState, useEffect } from 'react';
import './SimilarityResult.css'
import axios from './axios'
function SimilarityResult() {
    const resultdiv = useRef();
    return (
        <div className="Similarity__result" ref={resultdiv}>
            <div className="Similarity__container">
            
            </div>
        </div>
    )
}

export default SimilarityResult
