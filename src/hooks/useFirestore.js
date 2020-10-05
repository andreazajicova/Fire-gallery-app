import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from '../firebase/config';
// import { AuthContext } from '../components/Auth';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    // const { currentUser } = useContext(AuthContext);
    
    useEffect(() => {
        // const collection = projectFirestore.collection('users').doc(currentUser.id).collection('photos');
        const unsubscribeFromCollection = 
        projectFirestore.collection(collection)
        // projectFirestore.collection('users').doc(currentUser.id).collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach( doc => {
                    documents.push({ ...doc.data(), id: doc.id})
                    console.log(doc.data());
                    // documents.push({ ...doc.data(), id: app.auth().currentUser.uid})
                }, err => {
                    console.log(err.message);
                });
                setDocs(documents);
            });
        
            return () => unsubscribeFromCollection();

    }, [collection]);
    return { docs };
}

export default useFirestore;