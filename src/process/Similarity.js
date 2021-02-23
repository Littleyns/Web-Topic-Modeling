import DropzoneUnique from '../dropzone/DropzoneUnique.js'
import SimilarityResult from './SimilarityResult.js'
import React, { useRef, useState, useEffect } from 'react';
import './Similarity.css'
import showResult from '../dropzone/DropzoneUnique.js'
function Similiarity() {

    return (
        <div>
             <SimilarityResult/>
            <DropzoneUnique/>
            
            
            
            
            
        </div>
    )
}

export default Similiarity
