import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
// import ImageGrid from './components/ImageGrid';
// import Modal from './components/Modal';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { AuthProvider } from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
      <AuthProvider>
      <Router>
      <div className="App">
      <Title/>
      <ProtectedRoute exact path='/' component={UploadForm} />
      {/* <ProtectedRoute exact path='/' 
        render={(props) => (
        <ImageGrid {...props} setSelectedPhoto={setSelectedPhoto} />
      )} /> */}
      {/* <ImageGrid setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto}/> */}
      {/* <ProtectedRoute exact path='enlarged' 
        render={(props) => (
        selectedPhoto &&
        <Modal {...props} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
      )} /> */}

    {/* {selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>} */}

    {/* {selectedPhoto && 
    <ProtectedRoute exact path='/enlarged' 
    render={(props) => (
      <Modal {...props} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
    )} /> } */}
      
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;