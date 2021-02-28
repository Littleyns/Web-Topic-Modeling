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
    const handleFiles = async (e)=>{
        if(validateFile(e.target.files[0])){
            uploadRef.current.innerText=''
            const formData = new FormData();
            formData.append('compareto', e.target.files[0]);
            await axios.post('/train/uploadunique/',formData)
            setShowResult(true);
            document.getElementsByClassName('Similarity__result')[0].style.display='block';
            await axios({
                url:'http://127.0.0.1:8000/train/uploadunique/getresult',
                method:'GET',
            }).then((resp)=>{
                    
                    
                    
                   console.log(resp.data)
                   resp.data.map(m=>{
                    let p = document.createElement('p')
                    let key = Object.keys(m)[0]
                    p.innerText=key+"   ==>  "+m[key]
                    document.getElementsByClassName('Similarity__container')[0].appendChild(p)
                   });
                
                
            });

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
