import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
       
    useEffect(() => {
        
        const unsubscribeFromCollection = 
        projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach( doc => {
                    documents.push({ ...doc.data(), id: doc.id})
                    console.log(doc.data());
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