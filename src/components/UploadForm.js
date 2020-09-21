import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import { app } from '../firebase/config';
import ImageGrid from './ImageGrid';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedFileTypes = ['image/png', 'image/jpeg'];
    
    const fileUpload = (event) => {
        let chosenFile = event.target.files[0];
        if(chosenFile && allowedFileTypes.includes(chosenFile.type)) {
            setFile(chosenFile);
            setError('');
        } else {
            setFile(null);
            setError('Please, upload an image file, that is .png or .jpeg');
        }
    }

    return (
        <div>
        <form className="uploadForm">
            <label className="uploadFormLabel">
                <input type="file" onChange={fileUpload} />
                <span>⏍</span>
            </label>
            {/* <button onClick={() => app.auth().signOut()}>Sign Out</button> */}
        <div className="photosBoard">
            { error && <div className="errorMessage"> { error } </div>} 
            { file && <div> { file.name } </div>}
            { file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        </form>
        <ImageGrid />
        </div>
    )
}

export default UploadForm;