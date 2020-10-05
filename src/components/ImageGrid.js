import React, { useState, useContext } from 'react';
import useFirestore from '../hooks/useFirestore'; 
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';
import * as firebase from 'firebase';
import Modal from './Modal';
import { AuthContext } from './Auth';

const ImageGrid = () => {

    const { currentUser } = useContext(AuthContext);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    // const collectionRef = projectFirestore.collection('users').doc(currentUser.uid).collection('photos');
    const { docs } = useFirestore('users/' + currentUser.uid + '/photos');
    
    const deleteImage = (id) => {
       let doc = id;
       projectFirestore.collection('users/' + currentUser.uid + '/photos').doc(doc).delete();
    }

    
    return (
        <div>
            <p style={{ fontSize: 25 }}>Add some photos to your gallery.</p>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <div className="img-grid">
                { docs && docs.map(doc => (
                    <motion.div className="img-wrap" key={doc.id} onClick={() => setSelectedPhoto(doc.url)} layout whileHover={{ opacity: 1}}>
                        <motion.img src={doc.url} alt="uploaded file"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                        />
                        <button className="delete-button" onClick={() => deleteImage(doc.id)}>✘</button>
                    </motion.div>
                
                ))}
            </div>
            { selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/> }
        </div>
    )
}

export default ImageGrid;