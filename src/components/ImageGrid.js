import React from 'react';
import useFirestore from '../hooks/useFirestore'; 
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';

const ImageGrid = ({ setSelectedPhoto }) => {
    const { docs } = useFirestore('photos');


    const deleteImage = (id) => {
       let doc = id;
       projectFirestore.collection('photos').doc(doc).delete();
    }

    
    return (
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
    )
}

export default ImageGrid;