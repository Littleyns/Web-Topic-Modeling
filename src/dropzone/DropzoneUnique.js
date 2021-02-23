import React, { useRef, useState, useEffect } from 'react';
import axios from './axios'

function DropzoneUnique() {
    const [showResult, setShowResult]=useState([]);
    const uploadRef = useRef(false);
    const validateFile = (file) => {
        const validTypes = ['text/plain'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }

        return true;
    }
    const handleFiles =(e)=>{
        if(validateFile(e.target.files[0])){
            uploadRef.current.innerText=''
            const formData = new FormData();
            formData.append('compareto', e.target.files[0]);
            axios.post('/train/uploadunique/',formData)
            setShowResult(true);
            document.getElementsByClassName('Similarity__result')[0].style.display='block';

        }else{
            uploadRef.current.style.color='red'
            uploadRef.current.innerText='Veuillez inserer un texte unique'
            
        }
    }
    return (
        <div className="dropzoneuniquecontainer">
            <input type="file" id="input" onChange={handleFiles}></input>
            <p ref={uploadRef}></p>
        </div>
    )
}

export default DropzoneUnique
