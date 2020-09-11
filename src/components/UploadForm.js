import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
        <form>
            <label>
                <input type="file" onChange={fileUpload} />
                <span>⏍</span>
            </label>
        <div className="photosBoard">
            { error && <div className="errorMessage"> { error } </div>} 
            { file && <div> { file.name } </div>}
            { file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        </form>
    )
}

export default UploadForm;