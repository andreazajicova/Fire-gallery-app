import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedPhoto, setSelectedPhoto }) => {

    const closeModal = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={closeModal}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
        >
            <motion.img src={selectedPhoto} alt="Fullview uploaded file" 
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal; 