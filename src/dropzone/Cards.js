import React from 'react'
import {fileSize} from './Dropzone'
import { Card } from '@material-ui/core';
import './Cards.css'
function Cards({data,i,fileSize,openImageModal,removeFile,errorMessage}) {
    return (
        <div>
       <Card className="file-status-bar" key={i}>
                            
                                    <div className="file-type-logo"></div>
                                    <div className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</div>
                                    <div className="file-size">({fileSize(data.size)})</div> {data.invalid && <div className='file-error-message'>({errorMessage})</div>}
                                
                               
                            </Card>
        </div>
    )
}

export default Cards
