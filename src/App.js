import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedPhoto={setSelectedPhoto} />
      { selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/> }

      {/* if (e.target.classList.contains('delete-button')) {
        if when you click on the img and it is the delete button, do not open the modal, only delete the img
            closeModal;
        } */}
    </div>
  );
}

export default App;